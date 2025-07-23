import type { Meta, StoryObj } from '@storybook/vue3';
import './index';

const meta = {
  title: 'Example/Form Fields/Autogrow',
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicUsage = {
    name: 'Basic Usage',
    render: () => (
        <textarea v-autogrow rows="6" class="form-control"></textarea>
    ),
} satisfies Story;
