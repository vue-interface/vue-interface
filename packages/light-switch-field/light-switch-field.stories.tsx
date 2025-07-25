import type { Meta, StoryObj } from '@storybook/vue3';
import './index.css';
import LightSwitchField from './src/LightSwitchField.vue';
import { ref } from 'vue';
 
const meta = {
    title: 'Example/Form Fields/Light Switch Field',
    tags: ['autodocs'],
    /* component: Light Switch Field, */
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

export const LightSwitchFieldVariations = {
    name: 'Light Switch Field',
    render: () => {
        const value = ref(true); 

        return () => (
            <div class="flex flex-col gap-3">
                <div class="bg-neutral-100 dark:bg-neutral-800 p-3">
                    Value: <span>{String(value.value)}</span>
                </div>

                <LightSwitchField
                    modelValue={value.value}
                    onUpdate:modelValue={(val) => (value.value = val as boolean)}
                    label="Default"
                    id="default"
                    name="default"
                    on-value={true}
                    off-value={false}
                />

                <LightSwitchField label="Off" />
                <LightSwitchField checked label="On" />
                <LightSwitchField disabled label="Disabled" />
                <LightSwitchField disabled checked label="Disabled (Checked)" />
                <LightSwitchField disabled readonly label="Disabled (Readonly)" />
                <LightSwitchField disabled checked readonly label="Disabled (Checked & Readonly)" />
                <LightSwitchField readonly label="Readonly" />
                <LightSwitchField readonly checked label="Readonly (Checked)" />
            </div>
        );
    },
} satisfies Story;


export const LightSwitchFieldAltOnOffValues= {
    name: 'Alternative On/Off Values',
    render: () => {
        const value2 = ref('true');
        const value3 = ref('1');

        return () => (
            <>
                    <LightSwitchField
                        modelValue={value2.value}
                        onUpdate:modelValue={(val) => (value2.value = val as string)}
                        label="Using True/False String"
                        on-value="true"
                        off-value="false"
                        help-text={`Current Value: ${value2.value}`}
                        class="mb-3"
                    />

                    <LightSwitchField
                        modelValue={value3.value}
                        onUpdate:modelValue={(val) => (value3.value = val as string)}
                        label="Using Numerical String"
                        on-value="1"
                        off-value="0"
                        class="mb-3"
                        help-text={`Current Value: ${value3.value}`}
                    />
            </>
        );
    },
} satisfies Story;

export const LightSwitchFieldSizes = {
    name: 'Sizes',
    render: () => (
        <div class="flex flex-col gap-2">
            <LightSwitchField label="Extra Small" size="form-switch-xs"/>
            <LightSwitchField label="Small" size="form-switch-sm"/>
            <LightSwitchField label="Medium" size="form-switch-md"/>
            <LightSwitchField label="Large" size="form-switch-lg"/>
            <LightSwitchField label="xl" size="form-switch-xl"/>
            <LightSwitchField label="2xl" size="form-switch-2xl"/>
            <LightSwitchField label="3xl" size="form-switch-3xl"/>
            <LightSwitchField label="4xl" size="form-switch-4xl"/>
            <LightSwitchField label="form-switch-4" size="form-switch-4"/>
            <LightSwitchField label="form-switch-5" size="form-switch-5"/>
            <LightSwitchField label="form-switch-6" size="form-switch-6"/>
            <LightSwitchField label="form-switch-7" size="form-switch-7"/>
            <LightSwitchField label="form-switch-[16px]" size="form-switch-[16px]"/>
            <LightSwitchField label="form-switch-[21px]" size="form-switch-[21px]"/>
        </div>
    ),
} satisfies Story;

export const LightSwitchFieldColors = {
    name: 'Colors',
    render: () => (
        <>   
            <LightSwitchField label="form-switch-amber-500" color="form-switch-amber-500"/>
            <LightSwitchField label="form-switch-purple-500" color="form-switch-purple-500"/>
            <LightSwitchField label="form-switch-green-500" color="form-switch-green-500"/>
            <LightSwitchField label="form-switch-neutral-500" color="form-switch-neutral-500"/>
        </>
    ), 
} satisfies Story;

export const LightSwitchFieldValidation= {
    name: 'Validation',
    render: () => (
        <>   
            <LightSwitchField label="Empty Array of Errors" errors={[]} class="mb-3"/>
            <LightSwitchField label="Single Inline Error" error="This is an inline error." class="mb-3 invalid-feedback"/>
            <LightSwitchField label="Array of Errors" errors={['First Error', 'Second Error']} class="mb-3 invalid-feedback"/>
            <LightSwitchField name="test" label="Multiple Errors From Object" errors={{ test : ['This is an inline error #1.', 'This is an inline error #2.']}} class="mb-3 invalid-feedback"/>

            <LightSwitchField label="Valid Field" valid class="mb-3 valid-feedback"/>
            <LightSwitchField label="Valid Field with Feedback" valid feedback="This is some success message." class="mb-3 valid-feedback"/>
            <LightSwitchField label="Valid Field with Array of Feedback" valid feedback={['This is some success message.', 'This is some success message.']} class="mb-3 valid-feedback"/>
        </>
    ), 
} satisfies Story;