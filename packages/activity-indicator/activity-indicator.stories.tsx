import type { Meta, StoryObj} from '@storybook/vue3';
import './index.css';
import ActivityIndicator from './src/ActivityIndicator.vue';
import * as Indicators from './index';

const meta = {
    title: 'Example/Activity Indicator',
    tags: ['autodocs'],
    component: ActivityIndicator,
} satisfies Meta<typeof ActivityIndicator>;

export default meta;

type Story = StoryObj<typeof meta>;

// Create a mapping object for the controls
const indicatorComponents = {
    Dots: Indicators.Dots,
    Chase: Indicators.Chase,
    Spinner: Indicators.Spinner,
    Square: Indicators.Square,
    SquareOrbit: Indicators.SquareOrbit,
    SquareFold: Indicators.SquareFold,
    CircleFade: Indicators.CircleFade,
    CircleOrbit: Indicators.CircleOrbit,
    CircleTrail: Indicators.CircleTrail,
    Pulse: Indicators.Pulse,
    DoublePulse: Indicators.DoublePulse,
    Grid: Indicators.Grid,
    Facebook: Indicators.Facebook,
    Spotify: Indicators.Spotify,
};

export const IndicatorControl = {
    args: {
        size: 'md',
        type: Indicators.Dots,
    },
    argTypes: {
        size: {
            control: 'select',
            options: ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
        },
        type: {
            control: 'select',
            options: indicatorComponents,
        },
    },
    render: (args) => {
        
        return () => (
            <div class="flex py-5">
                <ActivityIndicator {...args} type={args.type} size={args.size} />
            </div>
        );
    }
} satisfies Story;


export const DotsStory = {
    name: 'Dots',
    render: () => (
        <div class="flex py-5 gap-4">
            <ActivityIndicator type={Indicators.Dots} size="2xs" />
            <ActivityIndicator type={Indicators.Dots} size="xs"  />
            <ActivityIndicator type={Indicators.Dots} size="sm"  />
            <ActivityIndicator type={Indicators.Dots} size="md"  />
            <ActivityIndicator type={Indicators.Dots} size="lg"  />
            <ActivityIndicator type={Indicators.Dots} size="xl"  />
            <ActivityIndicator type={Indicators.Dots} size="2xl" />
            <ActivityIndicator type={Indicators.Dots} size="3xl" />
            <ActivityIndicator type={Indicators.Dots} class="activity-indicator-1" />
            <ActivityIndicator type={Indicators.Dots} class="activity-indicator-2" />
            <ActivityIndicator type={Indicators.Dots} class="activity-indicator-3" />
            <ActivityIndicator type={Indicators.Dots} class="activity-indicator-4" />
            <ActivityIndicator type={Indicators.Dots} class="activity-indicator-[27px]" />
        </div>
    ),
};

export const ChaseStory = {
    name: 'Chase',
    render: () => (
        <div class="flex py-5 gap-4">
            <ActivityIndicator type={Indicators.Chase} size="xs"/>
            <ActivityIndicator type={Indicators.Chase} size="sm"/>
            <ActivityIndicator type={Indicators.Chase} size="md"/>
            <ActivityIndicator type={Indicators.Chase} size="lg"/>
            <ActivityIndicator type={Indicators.Chase} size="xl"/>
        </div>
    ),
};

export const SpinnerStory = {
    name: 'Spinner',
    render: () => (
        <div class="flex py-5 gap-4">
            <ActivityIndicator type={Indicators.Spinner} size="xs" />
            <ActivityIndicator type={Indicators.Spinner} size="sm" />
            <ActivityIndicator type={Indicators.Spinner} size="md" />
            <ActivityIndicator type={Indicators.Spinner} size="lg" />
            <ActivityIndicator type={Indicators.Spinner} size="xl" />
        </div>
    ),
};

export const SquareStory = {
    name: 'Square',
    render: () => (
        <div class="flex py-5 gap-4">
            <ActivityIndicator type={Indicators.Square} size="xs" />
            <ActivityIndicator type={Indicators.Square} size="sm" />
            <ActivityIndicator type={Indicators.Square} size="md" />
            <ActivityIndicator type={Indicators.Square} size="lg" />
            <ActivityIndicator type={Indicators.Square} size="xl" />
        </div>
    ),
};

export const SquareOrbitStory = {
    name: 'Square Orbit',
    render: () => (
        <div class="flex py-5 gap-4">
            <ActivityIndicator type={Indicators.SquareOrbit} size="xs" />
            <ActivityIndicator type={Indicators.SquareOrbit} size="sm" />
            <ActivityIndicator type={Indicators.SquareOrbit} size="md" />
            <ActivityIndicator type={Indicators.SquareOrbit} size="lg" />
            <ActivityIndicator type={Indicators.SquareOrbit} size="xl" />
        </div>
    ),
};

export const SquareFoldStory = {
    name: 'Square Fold',
    render: () => (
        <div class="flex py-5 gap-8">
            <ActivityIndicator type={Indicators.SquareFold} size="xs" />
            <ActivityIndicator type={Indicators.SquareFold} size="sm" />
            <ActivityIndicator type={Indicators.SquareFold} size="md" />
            <ActivityIndicator type={Indicators.SquareFold} size="lg" />
            <ActivityIndicator type={Indicators.SquareFold} size="xl" />
        </div>
    ),
};

export const CircleFadeStory = {
    name: 'Circle Fade',
    render: () => (
        <div class="flex py-5 gap-4">
            <ActivityIndicator type={Indicators.CircleFade} size="xs" />
            <ActivityIndicator type={Indicators.CircleFade} size="sm" />
            <ActivityIndicator type={Indicators.CircleFade} size="md" />
            <ActivityIndicator type={Indicators.CircleFade} size="lg" />
            <ActivityIndicator type={Indicators.CircleFade} size="xl" />
        </div>
    ),
};

export const CircleOrbitStory = {
    name: 'Circle Orbit',
    render: () => (
        <div class="flex py-5 gap-4">
            <ActivityIndicator type={Indicators.CircleOrbit} size="xs" />
            <ActivityIndicator type={Indicators.CircleOrbit} size="sm" />
            <ActivityIndicator type={Indicators.CircleOrbit} size="md" />
            <ActivityIndicator type={Indicators.CircleOrbit} size="lg" />
            <ActivityIndicator type={Indicators.CircleOrbit} size="xl" />
        </div>
    ),
};

export const CircleTrailStory = {
    name: 'Circle Trail',
    render: () => (
        <div class="flex py-5 gap-4">
            <ActivityIndicator type={Indicators.CircleTrail} size="xs" />
            <ActivityIndicator type={Indicators.CircleTrail} size="sm" />
            <ActivityIndicator type={Indicators.CircleTrail} size="md" />
            <ActivityIndicator type={Indicators.CircleTrail} size="lg" />
            <ActivityIndicator type={Indicators.CircleTrail} size="xl" />
        </div>
    ),
};

export const PulseStory = {
    name: 'Pulse',
    render: () => (
        <div class="flex py-5 gap-4">
            <ActivityIndicator type={Indicators.Pulse} size="xs" />
            <ActivityIndicator type={Indicators.Pulse} size="sm" />
            <ActivityIndicator type={Indicators.Pulse} size="md" />
            <ActivityIndicator type={Indicators.Pulse} size="lg" />
            <ActivityIndicator type={Indicators.Pulse} size="xl" />
        </div>
    ),
};

export const DoublePulseStory = {
    name: 'Double Pulse',
    render: () => (
        <div class="flex py-5 gap-4">
            <ActivityIndicator type={Indicators.DoublePulse} size="xs" />
            <ActivityIndicator type={Indicators.DoublePulse} size="sm" />
            <ActivityIndicator type={Indicators.DoublePulse} size="md" />
            <ActivityIndicator type={Indicators.DoublePulse} size="lg" />
            <ActivityIndicator type={Indicators.DoublePulse} size="xl" />
        </div>
    ),
};

export const GridStory = {
    name: 'Grid',
    render: () => (
        <div class="flex py-5 gap-4">
            <ActivityIndicator type={Indicators.Grid} size="xs" />
            <ActivityIndicator type={Indicators.Grid} size="sm" />
            <ActivityIndicator type={Indicators.Grid} size="md" />
            <ActivityIndicator type={Indicators.Grid} size="lg" />
            <ActivityIndicator type={Indicators.Grid} size="xl" />
        </div>
    ),
};

export const FacebookStory = {
    name: 'Facebook',
    render: () => (
        <div class="flex py-5 gap-4">
            <ActivityIndicator type={Indicators.Facebook} size="xs" />
            <ActivityIndicator type={Indicators.Facebook} size="sm" />
            <ActivityIndicator type={Indicators.Facebook} size="md" />
            <ActivityIndicator type={Indicators.Facebook} size="lg" />
            <ActivityIndicator type={Indicators.Facebook} size="xl" />
        </div>
    ),
};

export const SpotifyStory = {
    name: 'Spotify',
    render: () => (
        <div class="flex py-5 gap-4">
            <ActivityIndicator type={Indicators.Spotify} size="xs" />
            <ActivityIndicator type={Indicators.Spotify} size="sm" />
            <ActivityIndicator type={Indicators.Spotify} size="md" />
            <ActivityIndicator type={Indicators.Spotify} size="lg" />
            <ActivityIndicator type={Indicators.Spotify} size="xl" />
        </div>
    ),
};

export const CenterIndicator = {
    name: 'Center Indicator',
    render: () => (
        <ActivityIndicator 
            type={Indicators.Dots} 
            class="flex items-center justify-center min-h-[300px]" 
            style="background-color: rgba(0, 0, 0, .1);" 
        />
    )
};

export const AbsolutInsideParent = {
    name: 'Absolute Inside Parent',
    render: () => (
        <div 
            style="min-height: 300px;background-color: rgba(0, 0, 0, .1); position: relative;">
                <ActivityIndicator type={Indicators.Dots} 
                class="absolute inset-0 flex items-center justify-center" 
            />
        </div>
    )
};
