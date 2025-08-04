import type { App } from 'vue';
import { h, render } from 'vue';
import Tooltip from './Tooltip.vue';

type TooltipPluginOptions = {
    delay?: number,
    prefix: string,
    progressiveEnhancement: boolean,
    triggers: {
        open: string[],
        close: string[],
    }
}

export default function (app: App, opts: Partial<TooltipPluginOptions> = {}) {
    const tooltips: Map<string,Function> = new Map;

    const options: TooltipPluginOptions = Object.assign({
        delay: undefined,
        prefix: 'data-tooltip',
        progressiveEnhancement: true,
        triggers: {
            open: ['mouseover:350'],
            close: ['mouseout:100'],
        }
    }, opts);
    
    const prefix = options.prefix.replace(/[-]+$/, '');
    const prefixRegExp = new RegExp(`^${prefix}\-`);

    function getAttributes(el: Element): Record<string,string> {
        return Array.from(el.attributes)
            .map(a => [a.name, a.value])
            .filter(([key]) => key === 'title' || key.match(prefixRegExp))
            .map(([key, value]) => [key.replace(new RegExp(prefixRegExp), ''), value])
            .reduce((carry, attr) => Object.assign(carry, { [attr[0]]: attr[1] }), {});
    }

    function createTooltip(target: Element, props: Record<string,string> = {}, hash: string): Function {
        const container = document.createElement('template');
        
        const vnode = h(Tooltip, Object.assign({
            target,
            show: true
        }, props));
    
        render(vnode, container);
    
        const [el] = [...container.children];
    
        document.body.append(el);
    
        return () => {
            tooltips.delete(hash);

            // vnode.component?.close();
    
            // @todo: Make the animation rate (150) dynamic. Should get value 
            // from the CSS transition duration.
            window.setTimeout(() => el.remove(), 150);
        };
    }

    function destroyTooltip(target: Element) {
        const id = target.getAttribute(`${prefix}-id`);
        if(id) {
            const tooltip = tooltips.get(id);
            tooltip?.();
        }
    }

    function init(target: Element, props = {}) {
        const properties: Record<string,string> = Object.assign({
            title: target.getAttribute(prefix) || target.getAttribute('title')
        }, props, getAttributes(target));

        // If the properties don't have a title, ignore this target.
        if(!properties.title || target.hasAttribute(`${prefix}-id`)) {
            return;
        }

        // Create a unique "hash" to show the node has been initialized.
        // This prevents double initializing on the same element.
        const hash = Math.random().toString(36).slice(2, 7);
        
        // Create the instance vars.
        let tooltip: Function|null, timer: number;

        //target.setAttribute(prefix, properties.title);
        target.setAttribute(`${prefix}-id`, hash);
        target.removeAttribute('title');

        function open(delay = 0) {
            clearTimeout(timer);

            if(!tooltip) {
                timer = window.setTimeout(() => {
                    // Do a check before creating the tooltip to ensure the dom
                    // element still exists. Its possible for the element to
                    // be removed after the timeout delay runs.
                    if(document.contains(target)) {
                        tooltip = createTooltip(target, properties, hash);
                        tooltips.set(hash, tooltip);
                    }
                }, delay);
            }
        }

        function close(delay = 0) {
            clearTimeout(timer);

            if(tooltip) {
                timer = window.setTimeout(() => {
                    tooltip && tooltip();
                    tooltip = null;
                }, delay);
            }
        }

        function addEventListener(trigger: string, fn: Function) {
            const [ event, delayString ] = trigger.split(':');

            target.addEventListener(event, () => fn(Number(delayString || 0)));
        }

        (target.getAttribute(`${prefix}-trigger-open`)?.split(',') || options.triggers.open)
            .map(trigger => addEventListener(trigger, open));
            
        (target.getAttribute(`${prefix}-trigger-close`)?.split(',') || options.triggers.close)
            .map(trigger => addEventListener(trigger, close));
    }
  
    app.mixin({
        mounted() {
            if(!options.progressiveEnhancement) {
                return;
            }
            
            let el = this.$el;

            if(this.$el instanceof Text) {
                el = this.$el.parentNode;
            }

            if(el instanceof HTMLElement) {
                init(el);
            }

            // Create the tree walker.
            const walker = document.createTreeWalker(
                el,
                NodeFilter.SHOW_ALL,
                (node: Node) => {
                    if(!(node instanceof Element)) {
                        return NodeFilter.FILTER_REJECT;
                    }
                    
                    return NodeFilter.FILTER_ACCEPT;
                }
            );

            // Step through and alert all child nodes
            while(walker.nextNode()) {
                if(walker.currentNode instanceof Element) {
                    init(<Element> walker.currentNode);
                }
            }

            const observer = new MutationObserver((changes) => {

                let tooltipFound = false;
                for(const { removedNodes } of changes) {
                    for(const node of removedNodes) {
                        if(!(node instanceof Element)) {
                            continue;
                        }
                        for(const el of node.querySelectorAll(`[${prefix}-id]`)) {
                            const tooltip = tooltips.get(
                                el.getAttribute(`${prefix}-id`) as string
                            );
                            if(tooltip) {
                                tooltipFound = true;
                                tooltip();
                            }
                        }
                    } 
                }

                // @experimental
                // In some cases in Inertia.js, not all tooltips are removed on certain actions.
                // remove all tooltips if no tooltip was found.
                if(!tooltipFound) {
                    for(const tooltip of tooltips.values()) {
                        tooltip();
                    }
                }
            });

            observer.observe(el, { childList: true });
        },
    });

    app.directive('tooltip', {
        beforeMount(target, binding) {
            init(target, Object.assign({}, binding.modifiers, binding.value));
        },
        beforeUnmount(target) {
            destroyTooltip(target);
        }
    });
}