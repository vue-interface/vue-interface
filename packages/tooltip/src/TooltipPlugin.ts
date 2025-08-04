import { h, render, type App } from 'vue';
import Tooltip, { type TooltipProps } from './Tooltip.vue';

type TooltipPluginOptions = {
    delay?: number,
    triggers: {
        open: string[],
        close: string[],
    }
}


export default function (app: App<Element>, opts: Partial<TooltipPluginOptions> = {}) {
    const prefix = 'data-tooltip';
    const prefixRegExp = new RegExp(`^${prefix}\-`);

    function getAttributes(el: Element): Record<string,string> {
        return Array.from(el.attributes)
            .map(a => [a.name, a.value])
            .filter(([key]) => key === 'title' || key.match(prefixRegExp))
            .map(([key, value]) => [key.replace(new RegExp(prefixRegExp), ''), value])
            .reduce((carry, attr) => Object.assign(carry, { [attr[0]]: attr[1] }), {});
    }

    function createTooltip(target: Element, props?: TooltipProps) {
        const container = document.createElement('template');
        
        const vnode = h(Tooltip, Object.assign({
            target
        }, getAttributes(target), props));
    
        render(vnode, container);
        
        return () => {
            vnode.component.exposed.tooltipEl.value?.remove();
        };
    }

    function destroyTooltip(target: Element) {
        const tooltips = document.querySelectorAll(
            `[${prefix}-id="${target.getAttribute(`${prefix}-id`)}"]`
        );

        for(const tooltip of tooltips) {
            tooltip.remove();
        }

        target.removeAttribute(`${prefix}-id`);
    }

    function shouldCreateTooltip(target: Node): target is Element {
        if(!(target instanceof Element)) {
            return false;
        }

        const attrs = getAttributes(target);

        return !attrs.id && !!attrs.title;
    }

    function shouldRemoveTooltip(target: Node): target is Element {
        if(!(target instanceof Element)) {
            return false;
        }

        return target.hasAttribute(`${prefix}-id`);
    }

    app.mixin({
        mounted() {
            let el = this.$el;

            if(this.$el instanceof Text) {
                el = this.$el.parentNode;
            }

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

            while(walker.nextNode()) {
                if(shouldCreateTooltip(walker.currentNode)) {
                    createTooltip(walker.currentNode);
                }
            }
        }
    });

    const observer = new MutationObserver((mutations) => {
        for(const { addedNodes, removedNodes } of mutations) {
            addedNodes.forEach((node) => {
                if(shouldCreateTooltip(node)) {
                    createTooltip(node);
                }
            })

            removedNodes.forEach((node) => {
                if(shouldRemoveTooltip(node)) {
                    destroyTooltip(node);
                }
            })
        }
    });
      
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    app.directive<Element, string|TooltipProps>('tooltip', {
        beforeMount(target, binding) {
            createTooltip(target, typeof binding.value === 'string' ? {
                title: binding.value
            }: binding.value);
        },
        beforeUnmount(target) {
            destroyTooltip(target);
        }
    });
}