/* eslint-disable indent */
import type { Meta, StoryObj } from '@storybook/vue3';
import { Dots } from '@vue-interface/activity-indicator';
import './index.css';
import BtnActivity from './src/BtnActivity.vue';
// type PagePropsAndCustomArgs = ComponentPropsAndSlots<typeof Page> & { footer?: string };
 
const meta = {
    title: 'Example/Buttons/Button Activity',
    tags: ['autodocs'],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>

export const ColorVariants = {
    name: 'Color Variants',
    render: () => (
        <BtnActivity indicator={Dots} activity={true}>
            test
        </BtnActivity>
    ),
} satisfies Story;
