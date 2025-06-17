import type { Meta, StoryObj } from '@storybook/vue3';
import BtnDropdown from './src/BtnDropdown.vue';
import './index.css';

const meta = {
    title: 'Example/Dropdown Button',
    tags: ['autodocs'],
    component: BtnDropdown
} satisfies Meta<typeof BtnDropdown>;

export default meta;
type Story = StoryObj<typeof meta>

