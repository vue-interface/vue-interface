---
title: Slide Deck
---

<script setup>
import '../demo.css'
import { ref } from 'vue';
/* #region script */
import SlideDeck from '../src/SlideDeck.vue';

const deck = ref(null)

function firstSlide() {
    deck.value.first();
}

function lastSlide() {
    deck.value.last();
}

function onEnter(current, previous) {
    console.log('enter', current, previous);
}

function onLeave(current, previous) {
    console.log('leave', current, previous);
}

function onBeforeEnter(current, previous) {
    console.log('before enter', current, previous);
}

function onBeforeLeave(current, previous) {
    console.log('before leave', current, previous);
}

function onAfterEnter(current, previous) {
    console.log('after enter', current, previous);
}

function onAfterLeave(current, previous) {
    console.log('after leave', current, previous);
}
/* #endregion script */
</script>

# Slide Deck

A slide deck is an abstract component that adds a slide effect between components. The height of the slide deck will automatically grow to the next slide. Since each element must be different, or a key must be defined for Vue transitions, the component will automatically add the slide index as a key if a key isn't define. The component handles the differing animations for going backwards and forwards.

## Basic Usage

The `slide deck` component extends the [button](/packages/btn/docs/btn) classes, allowing for the buttons to be customized with the various colors, variants, sizes, and states. Customize the slide deck headers and background colors with the appropriate [Tailwind](https://tailwindcss.com/) classes and [color palette](https://tailwindcss.com/docs/colors). 

<ClientOnly>
<!-- #region basicUsage -->
<div class="my-6">
    <div class="flex justify-between mb-3">
        <button class="btn btn-primary" @click="firstSlide">First</button>
        <button class="btn btn-primary" @click="lastSlide">Last</button>
    </div>
    <slide-deck ref="deck" @enter="onEnter" @leave="onLeave" :active="0">
        <template #default="{ next, prev }">
            <div key="Slide 1" class="p-3 bg-red-100">
                <h2 class="text-3xl mb-3">Slide 1</h2>
                <button class="btn btn-primary" @click="next">Next &rarr;</button>
            </div>
            <div key="Slide 2" class="p-3 bg-red-600">
                <h2 class="text-3xl mb-3">Slide 2</h2>
                <p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis nunc, gravida vitae euismod ut, bibendum facilisis justo. In hac habitasse platea dictumst. Curabitur elit ligula, euismod a suscipit sed, sodales non diam. Duis pellentesque blandit ligula, pellentesque condimentum dolor egestas quis. Aenean eget mollis odio. Praesent in posuere ligula, a viverra nisi. Nam diam ipsum, iaculis at tortor id, iaculis sollicitudin diam. Etiam vestibulum lacus quis vulputate rhoncus. Morbi tincidunt eros ipsum, sed sagittis sem blandit nec.</p>
                <div class="flex justify-between">
                    <button class="btn btn-primary" @click="prev">&larr; Prev</button>
                    <button class="btn btn-primary" @click="next">Next &rarr;</button>
                </div>
            </div>
            <div key="Slide 3" class="p-3 bg-green-600 min-h-[200px]">
                <h2 class="text-3xl mb-3">Slide 3</h2>
                <p class="mb-3">Ut mi urna, egestas ut congue eget, accumsan eget turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum egestas semper rutrum. Donec quis auctor orci. In venenatis odio nec luctus sodales.</p>
                <div class="flex justify-between">
                    <button class="btn btn-primary" @click="prev">&larr; Prev</button>
                    <button class="btn btn-primary" @click="next">Next &rarr;</button>
                </div>
            </div>
            <div key="Slide 4" class="p-3">
                <h2 class="text-3xl mb-3">Slide 4</h2>
                    <button class="btn btn-primary" @click="prev">&larr; Prev</button>
            </div>
        </template>
    </slide-deck>
</div>
<!-- #endregion basicUsage -->
</ClientOnly>

<<< @/packages/slide-deck/docs/slide-deck.md#basicUsage{html}
<<< @/packages/slide-deck/docs/slide-deck.md#script{js}