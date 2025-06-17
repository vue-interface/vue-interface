import type { Meta, StoryObj } from '@storybook/vue3';
import './index.css';
import BtnDropdown from './src/BtnDropdown.vue';

const meta = {
    title: 'Example/Button Dropdown',
    tags: ['autodocs'],
    component: BtnDropdown
} satisfies Meta<typeof BtnDropdown>;

export default meta;

type Story = StoryObj<typeof meta>

export const ColorVariants = {
    name: 'Color Variants',
    render: () => (
        <div class="flex gap-2">
            <button class="btn btn-primary">Primary</button>
            <button class="btn btn-secondary">Secondary</button>
            <button class="btn btn-success">Success</button>
            <button class="btn btn-danger">Danger</button>
            <button class="btn btn-warning">Warning</button>
            <button class="btn btn-info">Info</button>
            <button class="btn btn-light">Light</button>
            <button class="btn btn-dark">Dark</button>
        </div>
    ),
} satisfies Story;
