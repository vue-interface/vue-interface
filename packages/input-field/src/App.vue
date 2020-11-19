<template>
    <div class="m-3">
        <input-field custom label="test" placeholder="test" />
    </div>
</template>

<script>
import '@vue-interface/form-control/src/scss/CustomFields.scss';
import InputField from './InputField';

export default {
    components: {
        InputField
    }
    
};
</script>

<style>
@tailwind base;
@tailwind utilities;
</style>