<template>
    <div class="m-3">
        <div class="d-flex">
            <div class="w-50">
                <input-field custom label="test" placeholder="test" size="sm" error="test" />
            </div>
            <div class="w-50">
                <select-field custom label="test" placeholder="test" size="sm" error="test">
                    <option value="a">
                        A
                    </option>
                    <option value="b">
                        B
                    </option>
                    <option value="c">
                        C
                    </option>
                </select-field>
            </div>
        </div>
        <div class="d-flex">
            <div class="w-50">
                <input-field custom label="test" placeholder="test" size="md" error="test" />
            </div>
            <div class="w-50">
                <select-field custom label="test" placeholder="test" size="md" error="test">
                    <option value="a">
                        A
                    </option>
                    <option value="b">
                        B
                    </option>
                    <option value="c">
                        C
                    </option>
                </select-field>
            </div>
        </div>
        <div class="d-flex">
            <div class="w-50">
                <input-field
                    v-model="value"
                    custom
                    label="test"
                    placeholder="test"
                    size="lg"
                    error="test" />
            </div>
            <div class="w-50">
                <select-field
                    v-model="value"
                    custom
                    label="test"
                    placeholder="test"
                    size="lg"
                    error="test">
                    <option value="a">
                        A
                    </option>
                    <option value="b">
                        B
                    </option>
                    <option value="c">
                        C
                    </option>
                </select-field>
            </div>
        </div>
    </div>
</template>

<script>
// import './css/FormControl.css';
import InputField from './examples/InputField';
import SelectField from './examples/SelectField';

export default {
    
    components: {
        InputField,
        SelectField
    },

    data() {
        return {
            value: null
        };
    }

};
</script>

<style lang="scss">
// @tailwind base;
// @tailwind utilities;

@import 'bootstrap/scss/bootstrap';
@import './scss/CustomFields.scss';
</style>