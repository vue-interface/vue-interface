import type { Meta, StoryObj } from '@storybook/vue3';
/* import { ref} from 'vue'; */
import { CalendarDaysIcon } from '@heroicons/vue/24/outline';
import './demo.css';
import InputField from './src/InputField.vue';
 
const meta = {
    title: 'Example/InputField',
    tags: ['autodocs'],
    /* component: InputField, */
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

export const InputFieldColors = {
    name: 'Input Field Colors',
    render: () => (
        <div class="flex flex-col gap-2">
            <InputField placeholder="form-control-red-500" color="form-control-red-500"/>
            <InputField placeholder="form-control-blue-500" color="form-control-blue-500"/>
            <InputField placeholder="form-control-green-500" color="form-control-green-500"/>
            <InputField placeholder="form-control-amber-500" color="form-control-amber-500"/>
        </div>
    ),
} satisfies Story;

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

export const AnimatedFormLabels = {
    name: 'Animated Form Labels',
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
    name: 'Animated Form Labels with Icon',
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