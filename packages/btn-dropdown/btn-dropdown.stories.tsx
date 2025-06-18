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
    name: 'Basic Usage',
    render: () => (
        <div class="min-h-36">
            <BtnDropdown label="test">
                <a href="#/test">Action</a>
                <a href="#">Another Action</a>
                <hr/>
                <a href="#">Something else here</a>
            </BtnDropdown>
        </div>
    ),
} satisfies Story;
