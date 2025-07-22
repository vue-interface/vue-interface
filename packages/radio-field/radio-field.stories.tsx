import type { Meta, StoryObj } from '@storybook/vue3';
import './index.css';
import RadioField from './src/RadioField.vue';
 
const meta = {
    title: 'Example/Form Fields/Radio Field',
    tags: ['autodocs'],
    /* component: Radio Field, */
    decorators: [
        (Story, context) => {
            const background = context.globals.backgrounds?.value?.toLowerCase?.() || '';
            const root = document.documentElement;
            const isDark = ['#000', '#000', 'dark'].includes(background);
            
            root.classList.toggle('dark', isDark);

            return Story();
        },
    ],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>

export const RadioFieldVariations = {
    name: 'Radio Field',
    render: () => (
        <div class="mb-4">
            <RadioField label="Unchecked" value="unchecked"/>
            <RadioField label="Checked" value="checked" checked/>
            <RadioField label="Disabled" value="disabled" disabled/>
            <RadioField label="Disabled (checked)" value="disabled_checked" checked disabled/>
            <RadioField label="Readonly" value="readonly" readonly/>
            <RadioField label="Readonly (checked)" value="readonly_checked" checked readonly/>
            <RadioField label="Readonly & Disabled" value="readonly_disabled" readonly disabled/>
            <RadioField label="Readonly & Disabled (checked)" value="readonly_disabled_checked" readonly disabled checked/>
        </div>
    ),
} satisfies Story;

export const RadioFieldColors = {
    name: 'Custom Colors',
    render: () => (
        <div class="mb-4">
            <RadioField name="color" label="Red" value="red" color="form-check-red-500"/>
            <RadioField name="color" label="Green" value="green" color="form-check-green-500"/>
            <RadioField name="color" label="Blue" value="blue" color="form-check-blue-500"/>
            <RadioField name="color" label="Yellow" value="yellow" color="form-check-yellow-500"/>
        </div>
    ),
} satisfies Story;

export const RadioFieldSizes = {
    name: 'Sizes',
    render: () => (
        <div class="mb-4">
            <h3 class="text-2xl mb-3 mt-3">Predetermined Sizes</h3>
            <RadioField name="size" value="xs" class="form-check-xs">xs</RadioField>
            <RadioField name="size" value="sm" class="form-check-sm">Small</RadioField>
            <RadioField name="size" value="md" class="form-check-md">Medium</RadioField>
            <RadioField name="size" value="lg" class="form-check-lg">Large</RadioField>
            <RadioField name="size" value="xl" class="form-check-xl">xl</RadioField>
            <RadioField name="size" value="2xl" class="form-check-2xl">2xl</RadioField>
            <RadioField name="size" value="3xl" class="form-check-3xl">3xl</RadioField>
            <RadioField name="size" value="4xl" class="form-check-4xl">4xl</RadioField>
            <RadioField name="size" value="5xl" class="form-check-5xl">5xl</RadioField>

            <hr class="my-6"></hr>

            <h3 class="text-3xl mb-3 mt-3">Tailwind Sizes</h3>
            <RadioField name="size" value="4" class="form-check-4">form-check-4</RadioField>
            <RadioField name="size" value="5" class="form-check-5">form-check-5</RadioField>
            <RadioField name="size" value="6" class="form-check-6">form-check-6</RadioField>
            <RadioField name="size" value="7" class="form-check-7">form-check-7</RadioField>
            
            <hr class="my-6"></hr>

            <h3 class="text-3xl mb-3 mt-3">Arbitrary Sizes</h3>
            <RadioField name="size" value="[16px]" class="form-check-[16px]">form-check-[16px]</RadioField>
            <RadioField name="size" value="[21px]" class="form-check-[21px]">form-check-[21px]</RadioField>
        </div>
    ),
} satisfies Story;

export const RadioFieldValidation = {
    name: 'Validation',
    render: () => (
        <div>
            <RadioField label="Empty Array of Errors" value="true" errors={[]} class="mb-3"/>
            <RadioField label="Single Inline Error" value="true" class="mb-3 invalid-feedback" error="This is an inline error."/>
            <RadioField name="multiple" value="true" class="mb-3 invalid-feedback" label="Multiple Errors From Object" errors={{ multiple : ['This is an inline error #1.', 'This is an inline error #2.']}}/>

            <RadioField label="Valid Field" value="true" valid class="mb-3 valid-feedback"></RadioField>
            <RadioField label="Valid Field with Feedback" value="true" valid feedback="This is some success message." class="mb-3 valid-feedback"></RadioField>
            <RadioField label="Valid Field with Array of Feedback" value="true" valid feedback={['This is some success message.', 'This is some success message.']} class="mb-3 valid-feedback"></RadioField>
        </div>
    ),
} satisfies Story;