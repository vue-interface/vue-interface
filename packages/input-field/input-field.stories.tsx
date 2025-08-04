import { CalendarDaysIcon } from '@heroicons/vue/24/outline';
import type { Meta, StoryObj } from '@storybook/vue3';
import { Dots, Pulse, Spinner } from '@vue-interface/activity-indicator';
import { fn } from 'storybook/test';
import { ref } from 'vue';
import './demo.css';
import InputField from './src/InputField.vue';
 
const meta = {
    title: 'Example/Form Fields/Input Field',
    tags: ['autodocs'],
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

export const InputFieldVariations = {
    name: 'Input Field',
    render: () => (
        <div class="flex flex-col gap-2">
            <InputField label="Text Field" placeholder="Some placeholder"/>
            <InputField type="password" label="Password Field"/>
            <InputField label="Descriptive Text Field" help-text="Some helpful text goes here."/>
            <InputField type="email" label="Email Field" placeholder="you@example.com"/>
            <InputField label="Plain Text" placeholder="Type something here..." plaintext/>
            <InputField label="Readonly" placeholder="Type something here..." readonly/>
            <InputField label="Readonly (Disabled)" placeholder="Type something here..." readonly disabled/>
            <InputField label="Disabled" placeholder="Type something here..." disabled/>
        </div>
    ),
} satisfies Story;

export const InputFieldSizes = {
    name: 'Sizes',
    render: () => (
        <div class="flex flex-col gap-2">
            <InputField label="Small" size="form-control-sm" />
            <InputField label="Medium" size="form-control-md" />
            <InputField label="Large" size="form-control-lg" />
        </div>
    ),
}

export const InputFieldColors = {
    name: 'Custom Colors',
    render: () => (
        <div class="flex flex-col gap-2">
            <InputField placeholder="form-control-red-500" color="form-control-red-500"/>
            <InputField placeholder="form-control-blue-500" color="form-control-blue-500"/>
            <InputField placeholder="form-control-green-500" color="form-control-green-500"/>
            <InputField placeholder="form-control-amber-500" color="form-control-amber-500"/>
        </div>
    ),
} satisfies Story;

export const FormLabelsWithIcons = {
    name: 'Icons',
    render: () => (
        <div class="flex flex-col gap-2">
            <InputField label="Extra Small Icon" size="form-control-xs" class="form-control-xs">
                {{ icon: () => <CalendarDaysIcon/> }}
            </InputField>
            <InputField label="Small Icon" size="form-control-sm" class="form-control-sm">
                {{ icon: () => <CalendarDaysIcon/> }}
            </InputField>
            <InputField label="Medium Icon" size="form-control-md" class="form-control-md">
                {{ icon: () => <CalendarDaysIcon/> }}
            </InputField>
            <InputField label="Large Icon" size="form-control-lg" class="form-control-lg">
                {{ icon: () => <CalendarDaysIcon/> }}
            </InputField>
            <InputField label="Extra Large Icon" size="form-control-xl" class="form-control-xl">
                {{ icon: () => <CalendarDaysIcon/> }}
            </InputField>
            <InputField label="2xl Icon" size="form-control-2xl" class="form-control-2xl">
                {{ icon: () => <CalendarDaysIcon/> }}
            </InputField>
            <InputField label="3xl Icon" size="form-control-3xl" class="form-control-3xl">
                {{ icon: () => <CalendarDaysIcon/> }}
            </InputField>
            <InputField label="4xl Icon" size="form-control-4xl" class="form-control-4xl">
                {{ icon: () => <CalendarDaysIcon/> }}
            </InputField>
            <InputField label="5xl Icon" size="form-control-5xl" class="form-control-5xl">
                {{ icon: () => <CalendarDaysIcon/> }}
            </InputField>
            <InputField label="Icon-4" size="form-control-4" class="form-control-4">
                {{ icon: () => <CalendarDaysIcon/> }}
            </InputField>
            <InputField label="Icon-5" size="form-control-5" class="form-control-5">
                {{ icon: () => <CalendarDaysIcon/> }}
            </InputField>
            <InputField label="Icon-[16px]" size="form-control-[16px]" class="form-control-[16px]">
                {{ icon: () => <CalendarDaysIcon/> }}
            </InputField>
            <InputField label="Icon-[21px]" size="form-control-[21px]" class="form-control-[21px]">
                {{ icon: () => <CalendarDaysIcon/> }}
            </InputField>
        </div>
    ),
} satisfies Story;

export const InputFieldWithIndicators = {
    name: 'Activity Indicators',
    render: () => {
        const showActivity = ref(false);

        return () => (
            <div class="flex flex-col gap-2">
                <InputField label="Small" size="form-control-sm" indicator={Dots} indicator-size="xs" activity={showActivity.value} class="mb-3" />
                <InputField label="Medium" size="form-control-md" indicator={Pulse} indicator-size="md" activity={showActivity.value} class="mb-3" />
                <InputField label="Large" size="form-control-lg" indicator={Spinner} indicator-size="lg" activity={showActivity.value} class="mb-3" />

                <button type="button" class="self-start underline text-blue-600" 
                    onClick={() => (showActivity.value = !showActivity.value)}
                >
                    {showActivity.value ? 'Hide' : 'Show'} Activity
                </button>
            </div>
        );
    },
} satisfies Story;

export const InputFieldValidation = {
    name: 'Validation',
    render: () => (
        <div class="flex flex-col gap-3">
          <InputField label="Empty Array of Errors" errors={[]} class="mb-3" />
          <InputField label="Single Inline Error" error="This is an inline error." class="mb-3 invalid-feedback"/>
          <InputField label="Array of Errors" errors={['First Error', 'Second Error']} class="mb-3 invalid-feedback" />
          <InputField name="test" label="Multiple Errors From Object" errors={{ test: ['This is an inline error #1.', 'This is an inline error #2.'] }} class="mb-3 invalid-feedback"/>
          <InputField label="Valid Field" valid class="mb-3 valid-feedback"/>
          <InputField label="Valid Field with Feedback" valid feedback="This is some success message." class="mb-3 valid-feedback"/>
          <InputField label="Valid Field with Array of Feedback" valid feedback={['This is some success message.', 'Another success message.']} class="mb-3 valid-feedback"/>
        </div>
    )
} satisfies Story;

export const InputFieldEvents = {
    name: 'Events',
    render: () => (
        <div class="flex flex-col gap-3">
          <InputField onFocus={fn()} class="mb-3" />
        </div>
    )
} satisfies Story;

export const AnimatedFormLabels = {
    name: 'Animated',
    render: () => (
        <div class="flex flex-col gap-2">
            <InputField label="Text Field" placeholder="Some placeholder" size="form-control-xs" class="form-control-animated-xs"/>
            <InputField label="Text Field" placeholder="Some placeholder" size="form-control-sm" class="form-control-animated-sm"/>
            <InputField label="Text Field" placeholder="Some placeholder" size="form-control-md" class="form-control-animated-md"/>
            <InputField label="Text Field" placeholder="Some placeholder" size="form-control-lg" class="form-control-animated-lg"/>
            <InputField label="Text Field" placeholder="Some placeholder" size="form-control-xl" class="form-control-animated-xl"/>
            <InputField label="Text Field" placeholder="Some placeholder" size="form-control-2xl" class="form-control-animated-2xl"/>
            <InputField label="Text Field" placeholder="Some placeholder" size="form-control-3xl" class="form-control-animated-3xl"/>
            <InputField label="Text Field" placeholder="Some placeholder" size="form-control-4xl" class="form-control-animated-4xl"/>
            <InputField label="Text Field" placeholder="Some placeholder" size="form-control-5xl" class="form-control-animated-5xl"/>
            <InputField label="Text Field" placeholder="Some placeholder" size="form-control-4" class="form-control-animated-4"/>
            <InputField label="Text Field" placeholder="Some placeholder" size="form-control-5" class="form-control-animated-5"/>
            <InputField label="Text Field" placeholder="Some placeholder" size="form-control-[16px]" class="form-control-animated-[16px]"/>
            <InputField label="Text Field" placeholder="Some placeholder" size="form-control-[21px]" class="form-control-animated-[21px]"/>
        </div>
    ),
} satisfies Story;

export const AnimatedFormLabelsWithIcon = {
    name: 'Animated with Icon',
    render: () => (
        <div class="flex flex-col gap-2">
            <InputField label="Text Field" placeholder="Some placeholder" size="form-control-xs" class="form-control-animated-xs">
                {{ icon: () => <CalendarDaysIcon/> }}
            </InputField>
            <InputField label="Text Field" placeholder="Some placeholder" size="form-control-sm" class="form-control-animated-sm">
                {{ icon: () => <CalendarDaysIcon/> }}
            </InputField>
            <InputField label="Text Field" placeholder="Some placeholder" size="form-control-md" class="form-control-animated-md">
                {{ icon: () => <CalendarDaysIcon/> }}
            </InputField>
            <InputField label="Text Field" placeholder="Some placeholder" size="form-control-lg" class="form-control-animated-lg">
                {{ icon: () => <CalendarDaysIcon/> }}
            </InputField>
            <InputField label="Text Field" placeholder="Some placeholder" size="form-control-xl" class="form-control-animated-xl">
                {{ icon: () => <CalendarDaysIcon/> }}
            </InputField>
            <InputField label="Text Field" placeholder="Some placeholder" size="form-control-2xl" class="form-control-animated-2xl">
                {{ icon: () => <CalendarDaysIcon/> }}
            </InputField>
            <InputField label="Text Field" placeholder="Some placeholder" size="form-control-3xl" class="form-control-animated-3xl">
                {{ icon: () => <CalendarDaysIcon/> }}
            </InputField>
            <InputField label="Text Field" placeholder="Some placeholder" size="form-control-4xl" class="form-control-animated-4xl">
                {{ icon: () => <CalendarDaysIcon /> }}
            </InputField>
            <InputField label="Text Field" placeholder="Some placeholder" size="form-control-5xl" class="form-control-animated-5xl">
                {{ icon: () => <CalendarDaysIcon/> }}
            </InputField>
            <InputField label="Text Field" placeholder="Some placeholder" size="form-control-4" class="form-control-animated-4">
                {{ icon: () => <CalendarDaysIcon/> }}
            </InputField>
            <InputField label="Text Field" placeholder="Some placeholder" size="form-control-5" class="form-control-animated-5">
                {{ icon: () => <CalendarDaysIcon/> }}
            </InputField>
            <InputField label="Text Field" placeholder="Some placeholder" size="form-control-[16px]" class="form-control-animated-[16px]">
                {{ icon: () => <CalendarDaysIcon/> }}
            </InputField>
            <InputField label="Text Field" placeholder="Some placeholder" size="form-control-[21px]" class="form-control-animated-[21px]">
                {{ icon: () => <CalendarDaysIcon/> }}
            </InputField>
        </div>
    ),
} satisfies Story;