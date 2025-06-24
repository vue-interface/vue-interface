import type { Meta, StoryObj } from '@storybook/vue3';
import './index.css';
import ActivityIndicator from './src/ActivityIndicator.vue'

const meta = {
  title: 'Example/Activity Indicator',
  tags: ['autodocs'],
  component: ActivityIndicator,
} satisfies Meta<typeof ActivityIndicator>; 

export default meta;

type Story = StoryObj<typeof meta>;

export const Dots = {
  name: 'Dots',
  args: {
    type: 'dots',
    size: 'md',
  },
  render: (args) => (
    <ActivityIndicator {...args} />
  ),
} satisfies Story;
