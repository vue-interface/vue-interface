import type { Meta, StoryObj } from '@storybook/vue3';
import { ref} from 'vue';
import { CalendarDaysIcon } from '@heroicons/vue/24/outline';
import { Dots, Pulse, Spinner } from '@vue-interface/activity-indicator';
import './demo.css';
import SelectField from './src/SelectField.vue';
 
const meta = {
    title: 'Example/Form Fields/Select Field',
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

export const SelectFieldVariations = {
    name: 'Select Field',
    render: () => (
        <div class="flex flex-col gap-2">
            <SelectField label="Regular Field" tabindex="1">
                <option value="1">Option 1</option>
                <option value="2" selected>Option 2</option>
                <option value="3">Option 3</option>
            </SelectField>
            <SelectField label="Some Label Here" help-text="This field uses an empty option for a label...">
                <option value="">This field shows the empty option by default.</option>
                <option value="1">Option 1</option>
                <option value="2" selected>Option 2</option>
                <option value="3">Option 3</option>
            </SelectField>
            <SelectField label="Some Label Here" help-text="Some helpful text goes here.">
                <option value="1">Option 1</option>
                <option value="2" selected>Option 2</option>
                <option value="3">Option 3</option>
            </SelectField>
            <SelectField label="Readonly Field" value="1" readonly>
                <option value="1">Option 1</option>
                <option value="2" selected>Option 2</option>
                <option value="3">Option 3</option>
            </SelectField>
            <SelectField label="Disabled Field" value="2" disabled>
                <option value="1">Option 1</option>
                <option value="2" selected>Option 2</option>
                <option value="3">Option 3</option>
            </SelectField>
        </div>
    ),
} satisfies Story;

export const SelectFieldSizes = {
    name: 'Sizes',
    render: () => (
        <div class="flex flex-col gap-2 min-h-[1125px]">
            <SelectField label="form-select-xs" size="form-select-xs">
                <option value="1">Option 1</option>
                <option value="2" selected>Option 2</option>
                <option value="3">Option 3</option>
            </SelectField>
            <SelectField label="form-select-sm" size="form-select-sm">
                <option value="1">Option 1</option>
                <option value="2" selected>Option 2</option>
                <option value="3">Option 3</option>
            </SelectField>
            <SelectField label="form-select-md" size="form-select-md">
                <option value="1">Option 1</option>
                <option value="2" selected>Option 2</option>
                <option value="3">Option 3</option>
            </SelectField>
            <SelectField label="form-select-lg" size="form-select-lg">
                <option value="1">Option 1</option>
                <option value="2" selected>Option 2</option>
                <option value="3">Option 3</option>
            </SelectField>
            <SelectField label="form-select-xl" size="form-select-xl">
                <option value="1">Option 1</option>
                <option value="2" selected>Option 2</option>
                <option value="3">Option 3</option>
            </SelectField>
            <SelectField label="form-select-2xl" size="form-select-2xl">
                <option value="1">Option 1</option>
                <option value="2" selected>Option 2</option>
                <option value="3">Option 3</option>
            </SelectField>
            <SelectField label="form-select-3xl" size="form-select-3xl">
                <option value="1">Option 1</option>
                <option value="2" selected>Option 2</option>
                <option value="3">Option 3</option>
            </SelectField>
            <SelectField label="form-select-4xl" size="form-select-4xl">
                <option value="1">Option 1</option>
                <option value="2" selected>Option 2</option>
                <option value="3">Option 3</option>
            </SelectField>
            <SelectField label="form-select-4" size="form-select-4">
                <option value="1">Option 1</option>
                <option value="2" selected>Option 2</option>
                <option value="3">Option 3</option>
            </SelectField>
            <SelectField label="form-select-5" size="form-select-5">
                <option value="1">Option 1</option>
                <option value="2" selected>Option 2</option>
                <option value="3">Option 3</option>
            </SelectField>
            <SelectField label="form-select-[16px]" size="form-select-[16px]">
                <option value="1">Option 1</option>
                <option value="2" selected>Option 2</option>
                <option value="3">Option 3</option>
            </SelectField>
            <SelectField label="form-select-[21px]" size="form-select-[21px]">
                <option value="1">Option 1</option>
                <option value="2" selected>Option 2</option>
                <option value="3">Option 3</option>
            </SelectField>
        </div>
    ),
} satisfies Story;

export const SelectFieldColors = {
    name: 'Custom Colors',
    render: () => (
        <div class="flex flex-col gap-2 min-h-[450px]">
            <SelectField label="red-500" value="2" color="form-select-red-500">
                <option value="1">Option 1</option>
                <option value="2" selected>Option 2</option>
                <option value="3">Option 3</option>
            </SelectField>
            <SelectField label="blue-500" value="2" color="form-select-blue-500">
                <option value="1">Option 1</option>
                <option value="2" selected>Option 2</option>
                <option value="3">Option 3</option>
            </SelectField>
            <SelectField label="green-500" value="2" color="form-select-green-500">
                <option value="1">Option 1</option>
                <option value="2" selected>Option 2</option>
                <option value="3">Option 3</option>
            </SelectField>
            <SelectField label="amber-500" value="2" color="form-select-amber-500">
                <option value="1">Option 1</option>
                <option value="2" selected>Option 2</option>
                <option value="3">Option 3</option>
            </SelectField>
        </div>
    ),
} satisfies Story;

export const SelectFieldWithIcons = {
    name: 'Icons',
    render: () => {
        return () => (
            <div class="flex flex-col gap-2 min-h-[1400px]">
                <SelectField label="xs Icon" size="form-select-xs" class="form-select-xs">
                    {{
                        default: () => (
                          <>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                          </>
                        ),
                        icon: () => <CalendarDaysIcon/>
                    }}
                </SelectField>
                <SelectField label="Small Icon" size="form-select-sm" class="form-select-sm">
                    {{
                        default: () => (
                          <>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                          </>
                        ),
                        icon: () => <CalendarDaysIcon/>
                    }}
                </SelectField>
                <SelectField label="Medium Icon" size="form-select-md" class="form-select-md">
                    {{
                        default: () => (
                          <>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                          </>
                        ),
                        icon: () => <CalendarDaysIcon/>
                    }}
                </SelectField>
                <SelectField label="Large Icon" size="form-select-lg" class="form-select-lg">
                    {{
                        default: () => (
                          <>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                          </>
                        ),
                        icon: () => <CalendarDaysIcon/>
                    }}
                </SelectField>
                <SelectField label="Extra Large Icon" size="form-select-xl" class="form-select-xl">
                    {{
                        default: () => (
                          <>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                          </>
                        ),
                        icon: () => <CalendarDaysIcon/>
                    }}
                </SelectField>
                <SelectField label="2xl Icon" size="form-select-2xl" class="form-select-2xl">
                    {{
                        default: () => (
                          <>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                          </>
                        ),
                        icon: () => <CalendarDaysIcon/>
                    }}
                </SelectField>
                <SelectField label="3xl Icon" size="form-select-3xl" class="form-select-3xl">
                    {{
                        default: () => (
                          <>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                          </>
                        ),
                        icon: () => <CalendarDaysIcon/>
                    }}
                </SelectField>
                <SelectField label="4xl Icon" size="form-select-4xl" class="form-select-4xl">
                    {{
                        default: () => (
                          <>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                          </>
                        ),
                        icon: () => <CalendarDaysIcon/>
                    }}
                </SelectField>
                <SelectField label="5xl Icon" size="form-select-5xl" class="form-select-5xl">
                    {{
                        default: () => (
                          <>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                          </>
                        ),
                        icon: () => <CalendarDaysIcon/>
                    }}
                </SelectField>
                <SelectField label="Icon-4" size="form-select-4" class="form-select-4">
                    {{
                        default: () => (
                          <>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                          </>
                        ),
                        icon: () => <CalendarDaysIcon/>
                    }}
                </SelectField>
                <SelectField label="Icon-5" size="form-select-5" class="form-select-5">
                    {{
                        default: () => (
                          <>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                          </>
                        ),
                        icon: () => <CalendarDaysIcon/>
                    }}
                </SelectField>
                <SelectField label="Icon-[16px]" size="form-select-[16px]" class="form-select-[16px]">
                    {{
                        default: () => (
                          <>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                          </>
                        ),
                        icon: () => <CalendarDaysIcon/>
                    }}
                </SelectField>
                <SelectField label="Icon-[21px]" size="form-select-[21px]" class="form-select-[21px]">
                    {{
                        default: () => (
                          <>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                          </>
                        ),
                        icon: () => <CalendarDaysIcon/>
                    }}
                </SelectField>
            </div>
        );
    }
} satisfies Story;

export const SelectFieldWithIndicators = {
    name: 'Activity Indicators',
    render: () => {
        const showActivity = ref(false);

        return () => (
            <div class="flex flex-col gap-2 min-h-[700px]">
                <SelectField label="Small" size="form-select-sm" indicator={Dots} indicator-size="xs" activity={showActivity.value}>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </SelectField>

                <SelectField label="Medium" size="form-select-md" indicator={Pulse} indicator-size="md" activity={showActivity.value}>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </SelectField>

                <SelectField label="Large" size="form-select-lg" indicator={Spinner} indicator-size="md" activity={showActivity.value}>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </SelectField>

                <button type="button" class="self-start underline text-blue-600" 
                    onClick={() => (showActivity.value = !showActivity.value)}
                >
                    {showActivity.value ? 'Hide' : 'Show'} Activity
                </button>
            </div>
        );
    }
} satisfies Story;

export const SelectFieldValidation = {
    name: 'Validation',
    render: () => (
        <div class="flex flex-col gap-2 min-h-[800px]">
            <SelectField label="Empty Array of Errors" errors={[]} class="mb-3">
                <option value=""></option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
            </SelectField>
            <SelectField label="Single Inline Error" error="This is an inline error." class="mb-3 invalid-feedback">
                <option value=""></option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
            </SelectField>
            <SelectField label="Array of Errors" errors={['First Error', 'Second Error']} class="mb-3 invalid-feedback">
                <option value=""></option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
            </SelectField>
            <SelectField name="test" label="Multiple Errors From Object" errors={{ test: ['This is an inline error #1.', 'This is an inline error #2.'] }} class="mb-3 invalid-feedback">
                <option value=""></option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
            </SelectField>

            <SelectField label="Valid Field" valid class="mb-3 valid-feedback">
                <option value=""></option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
            </SelectField>
            <SelectField label="Valid Field with Feedback" valid feedback="This is some success message." class="mb-3 valid-feedback">
                <option value=""></option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
            </SelectField>
            <SelectField label="Valid Field with Array of Feedback" valid feedback={['This is some success message.', 'Another success message.']} class="mb-3 valid-feedback">
                <option value=""></option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
            </SelectField>
        </div>
    ),
} satisfies Story;

export const SelectFieldAnimated = {
    name: 'Animated Labels',
    render: () => {
        return () => (
            <div class="flex flex-col gap-2 min-h-[825px]">
                <SelectField label="form-select-sm" size="form-select-sm" class="form-control-animated-sm">
                    <option value=""></option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </SelectField>
                <SelectField label="form-select-md" size="form-select-md" class="form-control-animated-md">
                    <option value=""></option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </SelectField>
                <SelectField label="form-select-lg" size="form-select-lg" class="form-control-animated-lg">
                    <option value=""></option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </SelectField>
                <SelectField label="form-select-xl" size="form-select-xl" class="form-control-animated-xl">
                    <option value=""></option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </SelectField>
                <SelectField label="form-select-4" size="form-select-4" class="form-control-animated-4">
                    <option value=""></option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </SelectField>
                <SelectField label="form-select-[16px]" size="form-select-[16px]" class="form-control-animated-[16px]">
                    <option value=""></option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </SelectField>
                <SelectField label="Small Icon" size="form-select-sm" class="form-control-animated-sm">
                    {{
                        default: () => (
                            <>
                                <option value=""></option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </>
                        ),
                        icon: () => <CalendarDaysIcon/>
                    }}
                </SelectField>
                <SelectField label="Medium Icon" size="form-select-md" class="form-control-animated-md">
                    {{
                        default: () => (
                            <>
                                <option value=""></option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </>
                        ),
                        icon: () => <CalendarDaysIcon/>
                    }}
                </SelectField>
                <SelectField label="Large Icon" size="form-select-lg" class="form-control-animated-lg">
                        {{
                            default: () => (
                                <>
                                    <option value=""></option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </>
                            ),
                            icon: () => <CalendarDaysIcon/>
                        }}
                </SelectField>
                <SelectField label="Icon-xl" size="form-select-xl" class="form-control-animated-xl">
                        {{
                            default: () => (
                                <>
                                    <option value=""></option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </>
                            ),
                            icon: () => <CalendarDaysIcon/>
                        }}
                </SelectField>
                <SelectField label="Icon-5" size="form-select-5" class="form-control-animated-5">
                        {{
                            default: () => (
                                <>
                                    <option value=""></option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </>
                            ),
                            icon: () => <CalendarDaysIcon/>
                        }}
                </SelectField>
                <SelectField label="Icon-6" size="form-select-6" class="form-control-animated-6">
                        {{
                            default: () => (
                                <>
                                    <option value=""></option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </>
                            ),
                            icon: () => <CalendarDaysIcon/>
                        }}
                </SelectField>
                <SelectField label="Icon-[16px]" size="form-select-[16px]" class="form-control-animated-[16px]">
                        {{
                            default: () => (
                                <>
                                    <option value=""></option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </>
                            ),
                            icon: () => <CalendarDaysIcon/>
                        }}
                </SelectField>
                <SelectField label="Icon-[21px]" size="form-select-[21px]" class="form-control-animated-[21px]">
                        {{
                            default: () => (
                                <>
                                    <option value=""></option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </>
                            ),
                            icon: () => <CalendarDaysIcon/>
                        }}
                </SelectField>
            </div>
        );
    }
} satisfies Story;