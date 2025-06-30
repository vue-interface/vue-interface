import type { Meta, StoryObj } from '@storybook/vue3';
import { Dots, Spinner, Pulse } from '@vue-interface/activity-indicator';
import './index.css';
import BtnActivity from './src/BtnActivity.vue';
 
const meta = {
    title: 'Example/Buttons/Button Activity',
    tags: ['autodocs'],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>

const handleActivityClick = (_event: MouseEvent, { toggle }: { toggle: () => void }) => {
  toggle();
  setTimeout(() => toggle(), 2000);
};

export const Types = {
    name: 'Types',
    render: () => (
        <div class="mb-5 flex gap-2">
            <BtnActivity indicator={Dots} onClick={handleActivityClick}>Dots</BtnActivity>
            <BtnActivity indicator={Spinner} onClick={handleActivityClick}>Spinner</BtnActivity>
            <BtnActivity indicator={Pulse} onClick={handleActivityClick}>Pulse</BtnActivity>
        </div>
    ),
} satisfies Story;

export const DotsSizes = {
    name: 'Dots Sizes',
    render: () => (
        <div class="mb-5 flex gap-2">
            <div><BtnActivity indicator={Dots} size="btn-sm" onClick={handleActivityClick}>Click Me!</BtnActivity></div>
            <div><BtnActivity indicator={Dots} size="btn-md" onClick={handleActivityClick}>Click Me!</BtnActivity></div>
            <div><BtnActivity indicator={Dots} size="btn-lg" onClick={handleActivityClick}>Click Me!</BtnActivity></div>
        </div>
    ),
};

export const SpinnerSizes = {
    name: 'Spinner Sizes',
    render: () => (
        <div class="mb-5 flex gap-2">
            <div><BtnActivity indicator={Spinner} size="btn-sm" onClick={handleActivityClick}>Click Me!</BtnActivity></div>
            <div><BtnActivity indicator={Spinner} size="btn-md" onClick={handleActivityClick}>Click Me!</BtnActivity></div>
            <div><BtnActivity indicator={Spinner} size="btn-lg" onClick={handleActivityClick}>Click Me!</BtnActivity></div>
        </div>
    ),
};
export const PulseSizes = {
    name: 'Pulse Sizes',
    render: () => (
        <div class="mb-5 flex gap-2">
            <div><BtnActivity indicator={Pulse} size="btn-sm" onClick={handleActivityClick}>Click Me!</BtnActivity></div>
            <div><BtnActivity indicator={Pulse} size="btn-md" onClick={handleActivityClick}>Click Me!</BtnActivity></div>
            <div><BtnActivity indicator={Pulse} size="btn-lg" onClick={handleActivityClick}>Click Me!</BtnActivity></div>
        </div>
    ),
};

export const Orientation = {
    name: 'Orientation',
    render: () => (
        <div class="mb-5 flex gap-2">
            <BtnActivity indicator={Spinner} orientation='top' onClick={handleActivityClick}>Orientation Top</BtnActivity>
            <BtnActivity indicator={Spinner} orientation='bottom' onClick={handleActivityClick}>Orientation Bottom</BtnActivity>
            <BtnActivity indicator={Spinner} orientation='left' onClick={handleActivityClick}>Orientation Left</BtnActivity>
            <BtnActivity indicator={Spinner} orientation='right' onClick={handleActivityClick}>Orientation Right</BtnActivity>
        </div>
    ),
};

export const BlockOrientation = {
    name: 'Block Orientation',
    render: () => (
        <div class="mb-5 flex-col gap-2">
            <BtnActivity indicator={Spinner} block orientation='top' onClick={handleActivityClick}>Spinner Top</BtnActivity>
            <BtnActivity indicator={Spinner} block orientation='bottom' onClick={handleActivityClick}>Spinner Bottom</BtnActivity>
            <BtnActivity indicator={Spinner} block orientation='left' onClick={handleActivityClick}>Spinner Left</BtnActivity>
            <BtnActivity indicator={Spinner} block orientation='right' onClick={handleActivityClick}>Spinner Right</BtnActivity>
        </div>
    ),
};

export const Variants = {
    name: 'Variants',
    render: () => (
        <div class="mb-5 flex gap-2">
            <BtnActivity indicator={Spinner} variant="btn-secondary" onClick={handleActivityClick}>btn-secondary</BtnActivity>
            <BtnActivity indicator={Spinner} variant="btn-warning" onClick={handleActivityClick}>btn-warning</BtnActivity>
            <BtnActivity indicator={Spinner} variant="btn-danger" onClick={handleActivityClick}>btn-danger</BtnActivity>
            <BtnActivity indicator={Spinner} variant="btn-success" onClick={handleActivityClick}>btn-success</BtnActivity>
        </div>
    ),
};

/* export const ActivityAttribute = {
    name: 'ActivityAttribute',
    render: () => (
            <div class="flex gap-2">
                <BtnActivity indicator={Spinner} activity="activity.value">
                    {{ activity ? 'On' : 'Off' }}
                </BtnActivity>

                <btn-activity :indicator="Spinner()" :activity="activity" :disabled="true">
                    {{ activity ? 'On' : 'Off' }}
                </btn-activity>
            </div>
    ),
}; */

export const Disabled = {
    name: 'Disabled',
    render: () => (
        <BtnActivity indicator={Spinner} disabled onClick={handleActivityClick}>Spinner Top</BtnActivity>
    ),
};

export const LabelAttribute = {
    name: 'Label Attribute',
    render: () => (
        <BtnActivity indicator={Spinner} label="Some Text Here" onClick={handleActivityClick}></BtnActivity>
    ),
};

export const CustomElement = {
    name: 'Custom Element',
    render: () => (
        <div class="flex gap-2">    
            <BtnActivity indicator={Spinner} onClick={handleActivityClick}>Label</BtnActivity>
            <BtnActivity indicator={Spinner} label="Some Text Here" disabled onClick={handleActivityClick}></BtnActivity>
        </div>
    ),
};

export const ClickEvents = {
    name: 'Click Events',
    render: () => (    
        <div>    
            <BtnActivity indicator={Spinner} class="btn-primary mr-1" onClick={handleActivityClick}>Enabled</BtnActivity>
            <BtnActivity indicator={Spinner} disabled onClick={handleActivityClick}>Disabled</BtnActivity>
        </div>
    ),
};