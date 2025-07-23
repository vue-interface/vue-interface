import type { Meta, StoryObj } from '@storybook/vue3';
import './demo.css';
import CheckboxField from './src/CheckboxField.vue';
 
const meta = {
    title: 'Example/Form Fields/Checkbox Field',
    tags: ['autodocs'],
    /* component: Checkbox Field, */
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

export const CheckboxFieldVariations = {
    name: 'Checkbox Field',
    render: () => (
        <div class="mb-4">
            <CheckboxField label="Unchecked"/>
            <CheckboxField label="Disabled" disabled/>
            <CheckboxField label="Disabled (checked)" checked disabled/>
            <CheckboxField label="Readonly" readonly/>
            <CheckboxField label="Readonly (checked)" checked readonly/>
            <CheckboxField label="Readonly & Disabled" readonly disabled/>
            <CheckboxField label="Readonly & Disabled (checked)" readonly disabled checked/>
        </div>
    ),
} satisfies Story;

export const CheckboxFieldColors = {
    name: 'Custom Colors',
    render: () => (
        <div class="mb-4">
            <CheckboxField label="Red" value="red" color="form-check-red-500" checked/>
            <CheckboxField label="Green" value="green" color="form-check-green-500"/>
            <CheckboxField label="Blue" value="blue" color="form-check-blue-500"/>
            <CheckboxField label="Yellow" value="yellow" color="form-check-yellow-500"/>
            <CheckboxField label="Purple" value="purple" color="form-check-purple-500" disabled>Purple (Disabled)</CheckboxField>
            <CheckboxField label="Pink" value="pink" color="form-check-pink-500" readonly>Pink (Readonly)</CheckboxField>
        </div>
    ),
} satisfies Story;

export const CheckboxFieldSizes = {
    name: 'Sizes',
    render: () => (
        <div class="mb-4">
            <h3 class="text-3xl mb-3">Predetermined Sizes</h3>
            <CheckboxField name="size[]" class="form-check-xs" placeholder="xs">xs</CheckboxField>
            <CheckboxField name="size[]" class="form-check-sm" placeholder="Small">Small</CheckboxField>
            <CheckboxField name="size[]" class="form-check-md" placeholder="Medium">Medium</CheckboxField>
            <CheckboxField name="size[]" class="form-check-lg" placeholder="Large">Large</CheckboxField>
            <CheckboxField name="size[]" class="form-check-xl" placeholder="Extra Large">XL</CheckboxField>
            <CheckboxField name="size[]" class="form-check-2xl" placeholder="2xl">2xl</CheckboxField>
            <CheckboxField name="size[]" class="form-check-3xl" placeholder="3xl">3xl</CheckboxField>
            <CheckboxField name="size[]" class="form-check-4xl" placeholder="4xl">4xl</CheckboxField>
            <CheckboxField name="size[]" class="form-check-5xl" placeholder="5xl">5xl</CheckboxField>

            <h3 class="text-3xl mb-3 mt-3">Tailwind Sizes</h3>
            <CheckboxField name="size[]" class="form-check-4" placeholder="form-check-4">form-check-4</CheckboxField>
            <CheckboxField name="size[]" class="form-check-5" placeholder="form-check-5">form-check-5</CheckboxField>
            <CheckboxField name="size[]" class="form-check-6" placeholder="form-check-6">form-check-6</CheckboxField>
            
            <h3 class="text-3xl mb-3 mt-3">Arbitrary Sizes</h3>
            <CheckboxField name="size[]" class="form-check-[16px]" placeholder="form-check-[16px]">form-check-[16px]</CheckboxField>
            <CheckboxField name="size[]" class="form-check-[21px]" placeholder="form-check-[21px]">form-check-[21px]</CheckboxField>
        </div>
    ),
} satisfies Story;

export const CheckboxFieldValidation = {
    name: 'Validation',
    render: () => (
        <div class="mb-4">
            <CheckboxField label="Empty Array of Errors" errors={[]} class="mb-3"></CheckboxField>
            <CheckboxField label="Single Inline Error" class="mb-3 invalid-feedback" error="This is an inline error."></CheckboxField>
            <CheckboxField name="multiple" class="mb-3 invalid-feedback" label="Multiple Errors From Object" errors={{ multiple: ['This is an inline error #1.', 'This is an inline error #2.']}}></CheckboxField>
        
            <CheckboxField label="Valid Field" valid class="mb-3 valid-feedback"></CheckboxField>
            <CheckboxField label="Valid Field with Feedback" valid feedback="This is some success message." class="mb-3 valid-feedback"></CheckboxField>            
            <CheckboxField label="Valid Field with Array of Feedback" valid feedback={['This is some success message.', 'This is some success message.']} class="mb-3 valid-feedback"></CheckboxField>
        </div>
    ),
} satisfies Story;