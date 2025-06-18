/* eslint-disable indent */
import type { Meta, StoryObj } from '@storybook/vue3';
import './index.css';
// type PagePropsAndCustomArgs = ComponentPropsAndSlots<typeof Page> & { footer?: string };
 
const meta = {
    title: 'Example/Button',
    tags: ['autodocs']
} satisfies Meta;

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
export const OutlineButtons = {
    name: 'Outline Buttons',
    render: () =>(
        <div class="flex gap-2">
            <button class="btn btn-outline-primary">Primary</button>
            <button class="btn btn-outline-secondary">Secondary</button>
            <button class="btn btn-outline-success">Success</button>
            <button class="btn btn-outline-danger">Danger</button>
            <button class="btn btn-outline-warning">Warning</button>
            <button class="btn btn-outline-info">Info</button>
            <button class="btn btn-outline-light">Light</button>
            <button class="btn btn-outline-dark">Dark</button>
        </div>
    )
};

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
export const BlockButtons = {
    name: 'Block Buttons',
    render: () => (
        <div class="flex flex-col gap-2">
            <button class="btn btn-primary btn-block">Primary</button>
            <button class="btn btn-secondary btn-block">Secondary</button>
            <button class="btn btn-success btn-block">Success</button>
            <button class="btn btn-danger btn-block">Danger</button>
            <button class="btn btn-warning btn-block">Warning</button>
            <button class="btn btn-info btn-block">Info</button>
            <button class="btn btn-light btn-block">Light</button>
            <button class="btn btn-dark btn-block">Dark</button>
        </div>
    ),
};

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
