import type { Meta, StoryObj } from '@storybook/vue3';
import { Dots, Pulse, Spinner} from '@vue-interface/activity-indicator';
/* import { ref} from 'vue'; */
import './demo.css';
 
const meta = {
    title: 'Example/Buttons/Button Activity',
    tags: ['autodocs'],
    /* component: InputField, */
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>

export const InputFieldVariations = {
    name: 'Input Field',
    render: () => (
        <div>
            <InputField v-model="value" label="Text Field" placeholder="Some placeholder" class="mb-3"></InputField>
            <InputField type="password" label="Password Field" class="mb-3"></InputField>
            <InputField label="Descriptive Text Field" help-text="Some helpful text goes here." class="mb-3"></InputField>
            <InputField type="email" label="Email Field" placeholder="you@example.com" class="mb-3"></InputField>
            <InputField label="Plain Text" placeholder="Type something here..." class="mb-3" plaintext></InputField>
            <InputField label="Readonly" placeholder="Type something here..." class="mb-3" readonly></InputField>
            <InputField label="Readonly (Disabled)" placeholder="Type something here..." class="mb-3" readonly disabled></InputField>
            <InputField label="Disabled" placeholder="Type something here..." class="mb-3" disabled></InputField>
        </div>
    ),
} satisfies Story;