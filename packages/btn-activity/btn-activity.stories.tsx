import type { Meta, StoryObj } from '@storybook/vue3';
import * as Indicators from '@vue-interface/activity-indicator';
import { defineComponent, ref, onMounted, computed, markRaw } from 'vue';
import './index.css';
import BtnActivity from './src/BtnActivity.vue';
 
const meta = {
    title: 'Example/Buttons/Button Activity',
    tags: ['autodocs'],
    component: BtnActivity,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>

const handleActivityClick = (_event: MouseEvent, { toggle }: { toggle: () => void }) => {
  toggle();
  setTimeout(() => toggle(), 2000);
};

export const ButtonActivityControl = {
    args: {
        activity: false,
        indicator: Indicators.Dots,
        indicatorSize: 'xs',
        label: 'Dots',
        orientation: 'right',
        variant: 'btn-primary',
        size: 'btn-md',
        block: false,
        disabled: false,
    },
    argTypes: {
        activity: { control: 'boolean' },
        indicator: { 
            control: 'select', 
            options: [
                'Dots',
                'Chase',
                'Spinner',
                'Square',
                'SquareOrbit',
                'SquareFold',
                'CircleFade',
                'CircleOrbit',
                'CircleTrail',
                'Pulse',
                'DoublePulse',
                'Grid',
                'Facebook',
                'Spotify',
            ],
            mapping: {
                'Dots': markRaw(Indicators.Dots),
                'Chase': markRaw(Indicators.Chase),
                'Spinner': markRaw(Indicators.Spinner),
                'Square': markRaw(Indicators.Square),
                'SquareOrbit': markRaw(Indicators.SquareOrbit),
                'SquareFold': markRaw(Indicators.SquareFold),
                'CircleFade': markRaw(Indicators.CircleFade),
                'CircleOrbit': markRaw(Indicators.CircleOrbit),
                'CircleTrail': markRaw(Indicators.CircleTrail),
                'Pulse': markRaw(Indicators.Pulse),
                'DoublePulse': markRaw(Indicators.DoublePulse),
                'Grid': markRaw(Indicators.Grid),
                'Facebook': markRaw(Indicators.Facebook),
                'Spotify': markRaw(Indicators.Spotify),
            },
        },
        indicatorSize: {
            control: 'select',
            options: ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
        },
        label: { control: 'text' },
        orientation: { 
            control: 'radio', 
            options: ['top', 'bottom', 'left', 'right'] 
        },
        variant: { control: 'text' },
        size: { control: 'text' },
        block: { control: 'boolean' },
        disabled: { control: 'boolean' },
    },
    render: (args) => {
        return () => (
            <div class="mb-5 flex gap-2">
                <BtnActivity {...args} onClick={handleActivityClick}></BtnActivity>
            </div>
        );
    }
} satisfies Story;


export const ActivityTypes = {
    name: 'Activity Types',
    render: () => (
        <div class="mb-5 flex gap-2">
            <BtnActivity indicator={Indicators.Dots} onClick={handleActivityClick}>Dots</BtnActivity>
            <BtnActivity indicator={Indicators.Spinner} onClick={handleActivityClick}>Spinner</BtnActivity>
            <BtnActivity indicator={Indicators.Pulse} onClick={handleActivityClick}>Pulse</BtnActivity>
        </div>
    ),
};

export const DotsSizes = {
    name: 'Dots Sizes',
    render: () => (
        <div class="mb-5 flex gap-2">
            <div><BtnActivity indicator={Indicators.Dots} size="btn-sm" onClick={handleActivityClick}>Click Me!</BtnActivity></div>
            <div><BtnActivity indicator={Indicators.Dots} size="btn-md" onClick={handleActivityClick}>Click Me!</BtnActivity></div>
            <div><BtnActivity indicator={Indicators.Dots} size="btn-lg" onClick={handleActivityClick}>Click Me!</BtnActivity></div>
        </div>
    ),
};

export const SpinnerSizes = {
    name: 'Spinner Sizes',
    render: () => (
        <div class="mb-5 flex gap-2">
            <div><BtnActivity indicator={Indicators.Spinner} size="btn-sm" onClick={handleActivityClick}>Click Me!</BtnActivity></div>
            <div><BtnActivity indicator={Indicators.Spinner} size="btn-md" onClick={handleActivityClick}>Click Me!</BtnActivity></div>
            <div><BtnActivity indicator={Indicators.Spinner} size="btn-lg" onClick={handleActivityClick}>Click Me!</BtnActivity></div>
        </div>
    ),
};
export const PulseSizes = {
    name: 'Pulse Sizes',
    render: () => (
        <div class="mb-5 flex gap-2">
            <div><BtnActivity indicator={Indicators.Pulse} size="btn-sm" onClick={handleActivityClick}>Click Me!</BtnActivity></div>
            <div><BtnActivity indicator={Indicators.Pulse} size="btn-md" onClick={handleActivityClick}>Click Me!</BtnActivity></div>
            <div><BtnActivity indicator={Indicators.Pulse} size="btn-lg" onClick={handleActivityClick}>Click Me!</BtnActivity></div>
        </div>
    ),
};

export const Orientation = {
    name: 'Orientation',
    render: () => (
        <div class="mb-5 flex gap-2">
            <BtnActivity indicator={Indicators.Spinner} orientation='top' onClick={handleActivityClick}>Orientation Top</BtnActivity>
            <BtnActivity indicator={Indicators.Spinner} orientation='bottom' onClick={handleActivityClick}>Orientation Bottom</BtnActivity>
            <BtnActivity indicator={Indicators.Spinner} orientation='left' onClick={handleActivityClick}>Orientation Left</BtnActivity>
            <BtnActivity indicator={Indicators.Spinner} orientation='right' onClick={handleActivityClick}>Orientation Right</BtnActivity>
        </div>
    ),
};

export const BlockOrientation = {
    name: 'Block Orientation',
    render: () => (
        <div class="mb-5 flex-col gap-2">
            <BtnActivity indicator={Indicators.Spinner} block orientation='top' onClick={handleActivityClick}>Spinner Top</BtnActivity>
            <BtnActivity indicator={Indicators.Spinner} block orientation='bottom' onClick={handleActivityClick}>Spinner Bottom</BtnActivity>
            <BtnActivity indicator={Indicators.Spinner} block orientation='left' onClick={handleActivityClick}>Spinner Left</BtnActivity>
            <BtnActivity indicator={Indicators.Spinner} block orientation='right' onClick={handleActivityClick}>Spinner Right</BtnActivity>
        </div>
    ),
};

export const Variants = {
    name: 'Variants',
    render: () => (
        <div class="mb-5 flex gap-2">
            <BtnActivity indicator={Indicators.Spinner} variant="btn-secondary" onClick={handleActivityClick}>btn-secondary</BtnActivity>
            <BtnActivity indicator={Indicators.Spinner} variant="btn-warning" onClick={handleActivityClick}>btn-warning</BtnActivity>
            <BtnActivity indicator={Indicators.Spinner} variant="btn-danger" onClick={handleActivityClick}>btn-danger</BtnActivity>
            <BtnActivity indicator={Indicators.Spinner} variant="btn-success" onClick={handleActivityClick}>btn-success</BtnActivity>
        </div>
    ),
};

export const ActivityAttribute = {
    name: 'Activity Attribute',
    render: () => {
        return defineComponent({
            setup() {
                const activity = ref(false);
                const text = computed(() => (activity.value ? 'On' : 'Off'));
                
                onMounted(() => {
                    setInterval(() => {
                        activity.value = !activity.value;
                    }, 1000);
                });
              
                return () => (
                    <div class="flex gap-2">
                        <BtnActivity indicator={Indicators.Spinner} activity={activity.value}>
                            {text.value}
                        </BtnActivity>
                        <BtnActivity indicator={Indicators.Spinner} activity={activity.value} disabled>
                            {text.value}
                        </BtnActivity>
                    </div>
                );
            }
        });
    }
};

export const Disabled = {
    name: 'Disabled',
    render: () => (
        <BtnActivity indicator={Indicators.Spinner} disabled onClick={handleActivityClick}>Spinner Top</BtnActivity>
    ),
};

export const LabelAttribute = {
    name: 'Label Attribute',
    render: () => (
        <BtnActivity indicator={Indicators.Spinner} label="Some Text Here" onClick={handleActivityClick}></BtnActivity>
    ),
};

export const CustomElement = {
    name: 'Custom Element',
    render: () => (
        <div class="flex gap-2">    
            <BtnActivity indicator={Indicators.Spinner} onClick={handleActivityClick}>Label</BtnActivity>
            <BtnActivity indicator={Indicators.Spinner} label="Some Text Here" disabled onClick={handleActivityClick}></BtnActivity>
        </div>
    ),
};

export const ClickEvents = {
    name: 'Click Events',
    render: () => (    
        <div>    
            <BtnActivity indicator={Indicators.Spinner} class="btn-primary mr-1" onClick={handleActivityClick}>Enabled</BtnActivity>
            <BtnActivity indicator={Indicators.Spinner} disabled onClick={handleActivityClick}>Disabled</BtnActivity>
        </div>
    ),
};