import { Ref, ref, watch } from 'vue';

export type SlidePanelRegistry = {
    elements: Ref<HTMLElement[]>;
    index: Ref<number>;
    panels: Ref<Record<string,SlidePanel>>;
    topSlide: Ref<HTMLElement|undefined>;
};

export type SlidePanel = {
    open: Function;
    close: Function;
    isOpen: Ref<boolean>;
    isTopSlide: Ref<boolean>;
    el: Ref<HTMLDivElement>;
}

export const containers: Record<string, SlidePanelRegistry> = {};

export const defaultContainerName = 'slide-panel';

export function createRegistry(): SlidePanelRegistry {
    const index = ref(0);
    
    const panels = ref<Record<string,SlidePanel>>({});

    const elements = ref<any[]>([]);

    const topSlide = ref<any>();
    
    watch(elements, () => {
        topSlide.value = elements.value[elements.value.length - 1];
    }, {
        deep: true
    });

    return { elements, index, panels, topSlide };
}

export function useSlidePanels(name: string = defaultContainerName) {
    const registry = containers[name];

    if(!registry) {
        throw new Error(`There is no container registered to "${name}".`);
    }

    function open(name: string) {
        if(!registry.panels.value[name]) {
            throw new Error(`There is no panel with the name "${name}".`);
        }

        return registry.panels.value[name].open();
    }

    function close(name: string) {
        if(!registry.panels.value[name]) {
            throw new Error(`There is no panel with the name "${name}".`);
        }

        return registry.panels.value[name].close();
    }

    return { registry, open, close };
}