import type { Meta } from '@storybook/vue3';
import { computed, defineComponent } from 'vue';
import './index.css';

 
const meta = {
    title: 'Example/BtnControlsTest',
    tags: ['autodocs']
} satisfies Meta;

export default meta;

/* type Story = StoryObj<typeof meta> */

function createVariantStory({
    name,
    classPrefix,
}: {
  name: string;
  classPrefix: string;
}) {
    return {
        name,
        args: {
            variants: 'primary',
        },
        argTypes: {
            variants: {
                control: { type: 'radio' },
                options: [
                    'primary',
                    'secondary',
                    'success',
                    'danger',
                    'warning',
                    'info',
                    'light',
                    'dark',
                ],
            },
        },
        parameters: {
            backgrounds: { default: 'light' }, // you can centralize background defaults here
        },
        render: (args: { variants: string }) =>
            defineComponent({
                setup() {
                    const label = computed(
                        () => args.variants.charAt(0).toUpperCase() + args.variants.slice(1)
                    );

                    return () => (
                        <div class="flex gap-2">
                            <button class={`btn ${classPrefix}-${args.variants}`}>
                                {label.value}
                            </button>
                        </div>
                    );
                },
            }),
    };
};

export const ColorVariants = createVariantStory({
    name: 'Color Variants',
    classPrefix: 'btn',
});

// Story: Custom Colors
export const CustomColors = {
    name: 'Custom Colors',
    render: () => (
        <div class="flex gap-2">
            <button class="btn btn-[red] text-white">Red</button>
            <button class="btn btn-[blue] text-white">Blue</button>
            <button class="btn btn-[green] text-white">Green</button>
            <button class="btn btn-[#000] text-white">Black</button>
        </div>
    ),
};

// Story: Color Shades
export const ColorShades = {
    name: 'Color Shades',
    render: () => (
        <div class="flex flex-col gap-1">
            {[50,100,200,300,400,500,600,700,800,900].map(value => (
                <button class={`btn btn-red-${value}`}>Red {value}</button>
            ))}
        </div>
    ),
};

// Story: Outline Buttons
export const OutlineButtons = createVariantStory({
    name: 'Outline Buttons',
    classPrefix: 'btn-outline',
});


// Story: Outline Color Shades
export const OutlineColorShades = {
    name: 'Outline Color Shades',
    render: () =>(        
        <div class="flex flex-col gap-2">
            {[50,100,200,300,400,500,600,700,800,900].map(value => (
                <button class={`btn btn-outline-red-${value}`}>Red {value}</button>
            ))}
        </div>
    )
};

// Story: Block Buttons
export const BlockButtons = createVariantStory({
    name: 'Block Buttons',
    classPrefix: 'btn btn-block btn', // We'll handle this carefully below
});

// Story: Sizes
export const Sizes = {
    name: 'Sizes',
    render: () => (
        <div class="flex gap-2">
            <button class="btn btn-primary btn-xs self-center">xs</button>
            <button class="btn btn-primary btn-sm self-center">sm</button>
            <button class="btn btn-primary btn-base self-center">base</button>
            <button class="btn btn-primary btn-lg self-center">lg</button>
            <button class="btn btn-primary btn-xl self-center">xl</button>
            <button class="btn btn-primary btn-2xl self-center">2xl</button>
            <button class="btn btn-primary btn-3xl self-center">3xl</button>
            <button class="btn btn-primary btn-4xl self-center">4xl</button>
        </div>
    )
};

// Story: Block Sizes
export const BlockSizes = {
    name: 'Block Sizes',
    render: () => (
        <div class="flex flex-col gap-2">
            <button class="btn btn-primary btn-xs">xs</button>
            <button class="btn btn-primary btn-sm">sm</button>
            <button class="btn btn-primary btn-base">base</button>
            <button class="btn btn-primary btn-lg">lg</button>
            <button class="btn btn-primary btn-xl">xl</button>
            <button class="btn btn-primary btn-2xl">2xl</button>
            <button class="btn btn-primary btn-3xl">3xl</button>
            <button class="btn btn-primary btn-4xl">4xl</button>
        </div>
    )
};

// Story: Responsive Sizes
export const ResponsiveSizes = {
    name: 'Responsive Sizes',
    render: () =>(
        <button class="btn btn-primary btn-xs btn-block md:btn-inline md:btn-md">
            btn-xs md:btn-base
        </button>
    ),
};

// Story: Active State
export const Active = {
    name: 'Active',
    render: () =>(
        <button class="btn btn-primary active">Active</button>
    )
};

// Story: Disabled State
export const Disabled = {
    name: 'Disabled',
    render: () => (
        <button class="btn btn-primary" disabled>Disabled</button>
    )
};
