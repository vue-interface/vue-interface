import type { Meta, StoryObj } from '@storybook/vue3';
import { ref} from 'vue';
import { CalendarDaysIcon } from '@heroicons/vue/24/outline';
import { Dots, Pulse, Spinner } from '@vue-interface/activity-indicator';
import './demo.css';
import TextareaField from './src/TextareaField.vue';
 
const meta = {
    title: 'Example/Form Fields/Textarea Field',
    tags: ['autodocs'],
    /* component: SelectField, */
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

export const TextareaFieldVariations = {
    name: 'Textarea Field',
    render: () => (
        <div class="flex flex-col">
            <TextareaField label="Text Field" placeholder="Some placeholder" class="mb-3"/>
            <TextareaField label="Inner Text" class="mb-3" value="Some Inner Text Here"/>
            <TextareaField label="Descriptive Text Field" help-text="Some helpful text goes here." class="mb-3"/>
            <TextareaField label="Plain Text" placeholder="Type something here..." class="mb-3" plaintext/>
            <TextareaField label="Readonly" placeholder="Type something here..." class="mb-3" readonly/>
            <TextareaField label="Readonly (Disabled)" placeholder="Type something here..." class="mb-3" readonly disabled/>
            <TextareaField label="Disabled" placeholder="Type something here..." class="mb-3" disabled/>
        </div>
    ),
} satisfies Story;

export const TextareaFieldSizes = {
    name: 'Sizes',
    render: () => (
        <div class="flex flex-col">
            <TextareaField label="Small" size="form-control-sm" class="mb-3"/>
            <TextareaField label="Medium" size="form-control-md" class="mb-3"/>
            <TextareaField label="Large" size="form-control-lg" class="mb-3"/>
        </div>
    ),
} satisfies Story;

export const TextareaFieldWithIcons = {
    name: 'Icons',
    render: () => (
        <div class="flex flex-col">
            <TextareaField label="Extra Small Icon" size="form-control-xs" class="form-control-xs mb-3">
                {{ icon: () => <CalendarDaysIcon/> }}
            </TextareaField>
            <TextareaField label="Small Icon" size="form-control-sm" class="form-control-sm mb-3">
                {{ icon: () => <CalendarDaysIcon/> }}
            </TextareaField>
            <TextareaField label="Medium Icon" size="form-control-md" class="form-control-md mb-3">
                {{ icon: () => <CalendarDaysIcon/> }}
            </TextareaField>
            <TextareaField label="Large Icon" size="form-control-lg" class="form-control-lg mb-3">
                {{ icon: () => <CalendarDaysIcon/> }}
            </TextareaField>
            <TextareaField label="XL Icon" size="form-control-xl" class="form-control-xl mb-3">
                {{ icon: () => <CalendarDaysIcon/> }}
            </TextareaField>
            <TextareaField label="2xl Icon" size="form-control-2xl" class="form-control-2xl mb-3">
                {{ icon: () => <CalendarDaysIcon/> }}
            </TextareaField>
            <TextareaField label="3xl Icon" size="form-control-3xl" class="form-control-3xl mb-3">
                {{ icon: () => <CalendarDaysIcon/> }}
            </TextareaField>
            <TextareaField label="4xl Icon" size="form-control-4xl" class="form-control-4xl mb-3">
                {{ icon: () => <CalendarDaysIcon/> }}
            </TextareaField>
            <TextareaField label="5xl Icon" size="form-control-5xl" class="form-control-5xl mb-3">
                {{ icon: () => <CalendarDaysIcon/> }}
            </TextareaField>
            <TextareaField label="Icon-4" size="form-control-4" class="form-control-4 mb-3">
                {{ icon: () => <CalendarDaysIcon/> }}
            </TextareaField>
            <TextareaField label="Icon-5" size="form-control-5" class="form-control-5 mb-3">
                {{ icon: () => <CalendarDaysIcon/> }}
            </TextareaField>
            <TextareaField label="Icon-6" size="form-control-6" class="form-control-6 mb-3">
                {{ icon: () => <CalendarDaysIcon/> }}
            </TextareaField>
            <TextareaField label="Icon-7" size="form-control-7" class="form-control-7 mb-3">
                {{ icon: () => <CalendarDaysIcon/> }}
            </TextareaField>
            <TextareaField label="Icon-[16px]" size="form-control-[16px]" class="form-control-[16px] mb-3">
                {{ icon: () => <CalendarDaysIcon/> }}
            </TextareaField>
            <TextareaField label="Icon-[21px]" size="form-control-[21px]" class="form-control-[21px] mb-3">
                {{ icon: () => <CalendarDaysIcon/> }}
            </TextareaField>
        </div>
    ),
} satisfies Story;

export const TextareaFieldWithIndicators = {
    name: 'Activity Indicators',
    render: () => {
        const showActivity = ref(false);

        return () => (
            <div class="flex flex-col gap-2">
                <TextareaField label="Small" size="form-control-sm" indicator={Dots} indicator-size="xs" activity={showActivity.value} class="mb-3" />
                <TextareaField label="Medium" size="form-control-md" indicator={Pulse} indicator-size="md" activity={showActivity.value} class="mb-3" />
                <TextareaField label="Large" size="form-control-lg" indicator={Spinner} indicator-size="lg" activity={showActivity.value} class="mb-3" />

                <button type="button" class="self-start underline text-blue-600" 
                    onClick={() => (showActivity.value = !showActivity.value)}
                >
                    {showActivity.value ? 'Hide' : 'Show'} Activity
                </button>
            </div>
        );
    },
} satisfies Story;

export const TextareaFieldAutogrow = {
    name: 'Autogrow',
    render: () => (
        <div class="flex flex-col">
            <TextareaField label="Small" size="form-control-sm" class="mb-3"></TextareaField>
            <TextareaField label="Medium" size="form-control-md" class="mb-3"></TextareaField>
            <TextareaField label="Large" size="form-control-lg" class="mb-3"></TextareaField>
        </div>
    ),
} satisfies Story;

export const TextareaFieldvalidation = {
    name: 'Validation',
    render: () => (
        <div class="flex flex-col">
            <TextareaField label="Empty Array of Errors" errors={[]} class="mb-3"/>
            <TextareaField label="Single Inline Error" error="This is an inline error." class="mb-3 invalid-feedback"/>
            <TextareaField label="Array of Errors" errors={['First Error', 'Second Error']} class="mb-3 invalid-feedback"/>
            <TextareaField name="test" label="Multiple Errors From Object" errors={{ test : ['This is an inline error #1.', 'This is an inline error #2.']}} class="mb-3 invalid-feedback"/>
    
            <TextareaField label="Valid Field" valid class="mb-3 valid-feedback"></TextareaField>
            <TextareaField label="Valid Field with Feedback" valid feedback="This is some success message." class="mb-3 valid-feedback"/>
            <TextareaField label="Valid Field with Array of Feedback" valid feedback={['This is some success message.', 'This is some success message.']} class="mb-3 valid-feedback"/>
        </div>
    ),
} satisfies Story;

export const TextareaFieldAnimated = {
    name: 'Animated',
    render: () => (
        <div class="flex flex-col">
            <TextareaField label="Text Field" placeholder="Some placeholder" size="form-control-sm" class="mb-3 form-control-animated-sm"/>
            <TextareaField label="Text Field" placeholder="Some placeholder" size="form-control-md" class="mb-3 form-control-animated-md"/>
            <TextareaField label="Text Field" placeholder="Some placeholder" size="form-control-lg" class="mb-3 form-control-animated-lg"/>
        </div>
    ),
} satisfies Story;

export const TextareaFieldAnimatedWithIcons = {
    name: 'Animated with Icons',
    render: () => (
        <div class="flex flex-col">
            <TextareaField label="xs Icon" placeholder="Some placeholder" size="form-control-xs" class="mb-3 form-control-animated-xs">
                {{ icon: () => <CalendarDaysIcon/> }}
            </TextareaField>
            <TextareaField label="Small Icon" placeholder="Some placeholder" size="form-control-sm" class="mb-3 form-control-animated-sm">
                {{ icon: () => <CalendarDaysIcon/> }}
            </TextareaField>
            <TextareaField label="Medium Icon" placeholder="Some placeholder" size="form-control-md" class="mb-3 form-control-animated-md">
                {{ icon: () => <CalendarDaysIcon/> }}
            </TextareaField>
            <TextareaField label="Large Icon" placeholder="Some placeholder" size="form-control-lg" class="mb-3 form-control-animated-lg">
                {{ icon: () => <CalendarDaysIcon/> }}
            </TextareaField>
            <TextareaField label="XL Icon" placeholder="Some placeholder" size="form-control-xl" class="mb-3 form-control-animated-xl">
                {{ icon: () => <CalendarDaysIcon/> }}
            </TextareaField>
            <TextareaField label="2xl Icon" placeholder="Some placeholder" size="form-control-2xl" class="mb-3 form-control-animated-2xl">
                {{ icon: () => <CalendarDaysIcon/> }}
            </TextareaField>
            <TextareaField label="Icon-4" placeholder="Some placeholder" size="form-control-4" class="mb-3 form-control-animated-4">
                {{ icon: () => <CalendarDaysIcon/> }}
            </TextareaField>
            <TextareaField label="Icon-5" placeholder="Some placeholder" size="form-control-5" class="mb-3 form-control-animated-5">
                {{ icon: () => <CalendarDaysIcon/> }}
            </TextareaField>
            <TextareaField label="Icon-6" placeholder="Some placeholder" size="form-control-6" class="mb-3 form-control-animated-6">
                {{ icon: () => <CalendarDaysIcon/> }}
            </TextareaField>
            <TextareaField label="Icon-[16px]" placeholder="Some placeholder" size="form-control-[16px]" class="mb-3 form-control-animated-[16px]">
                {{ icon: () => <CalendarDaysIcon/> }}
            </TextareaField>
            <TextareaField label="Icon-[21px]" placeholder="Some placeholder" size="form-control-[21px]" class="mb-3 form-control-animated-[21px]">
                {{ icon: () => <CalendarDaysIcon/> }}
            </TextareaField>
        </div>
    ),
} satisfies Story;