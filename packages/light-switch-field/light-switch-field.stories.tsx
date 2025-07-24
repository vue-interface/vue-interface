import type { Meta, StoryObj } from '@storybook/vue3';
import './index.css';
import LightSwitchField from './src/LightSwitchField.vue';
/* import { ref } from 'vue'; */
 
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

export const LightSwitchFieldSizes = {
    name: 'Sizes',
    render: () => (
        <LightSwitchField label="Extra Small"/>
    ),
} satisfies Story;

/* export const LightSwitchFieldAltOnOffValues= {
  name: 'Alternative On/Off Values',
  render: () => {
    const value2 = ref('true');
    const value3 = ref('1');

    return () => (
        <>
            <LightSwitchField
              modelValue={value2.value}
              onUpdate:modelValue={(val) => (value2.value = val)}
              label="Using True/False String"
              on-value="true"
              off-value="false"
              help-text={`Current Value: ${value2.value}`}
              class="mb-3"
            />

            <LightSwitchField
              modelValue={value3.value}
              onUpdate:modelValue={(val) => (value3.value = val)}
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
} satisfies Story; */