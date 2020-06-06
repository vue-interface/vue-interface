<template>
    <component
        :is="element"
        :aria-label="label || name || id"
        :aria-describedby="id || name"
        @input="$emit('input', $event.target.value)">
        <slot />
    </component>
</template>

<script>
import FormControl from './FormControl';

export default {

    name: 'FormElement',

    mixins: [
        FormControl
    ],

    props: {

        element: {
            type: String,
            required: true
        }

    }

};
</script>
