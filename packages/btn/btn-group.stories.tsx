import type { Meta, StoryObj } from '@storybook/vue3';
import './index.css';
 
const meta = {
    title: 'Example/Buttons/Button Group',
    tags: ['autodocs']
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>

export const BasicUsage = {
    name: 'Basic Usage',
    render: () => (
        <div class="btn-group">
            <button class="btn btn-secondary">Left</button>
            <button class="btn btn-secondary">Middle</button>
            <button class="btn btn-secondary">Right</button>
        </div>
    ),
} satisfies Story;

// Story: Split Buttons
export const SplitButtons = {
    name: 'Split Buttons',
    render: () => (
        <div role="group" class="btn-dropdown-split btn-dropdown btn-group">
            <button class="btn btn-secondary">Click Me</button>
            <div role="group" class="btn-group">
                <button type="button" aria-haspopup="true" class="btn btn-secondary dropdown-toggle-split dropdown-toggle"></button>
            </div>
        </div>
    ),
};

// Story: Sizing
export const Sizing = {
    name: 'Sizing',
    render: () => (
        <div class="flex flex-col gap-2">
            <div>
                <div class="btn-group btn-group-2xs">
                    <button class="btn btn-secondary">Left</button>
                    <button class="btn btn-secondary">Middle</button>
                    <button class="btn btn-secondary">Right</button>
                </div>
            </div>
            
            <div>
                <div class="btn-group btn-group-xs">
                    <button class="btn btn-secondary">Left</button>
                    <button class="btn btn-secondary">Middle</button>
                    <button class="btn btn-secondary">Right</button>
                </div>
            </div>

            <div>
                <div class="btn-group btn-group-sm">
                    <button class="btn btn-secondary">Left</button>
                    <button class="btn btn-secondary">Middle</button>
                    <button class="btn btn-secondary">Right</button>
                </div>
            </div>

            <div>
                <div class="btn-group btn-group-md">
                    <button class="btn btn-secondary">Left</button>
                    <button class="btn btn-secondary">Middle</button>
                    <button class="btn btn-secondary">Right</button>
                </div>
            </div>

            <div>
                <div class="btn-group btn-group-lg">
                    <button class="btn btn-secondary">Left</button>
                    <button class="btn btn-secondary">Middle</button>
                    <button class="btn btn-secondary">Right</button>
                </div>
            </div>

            <div>
                <div class="btn-group btn-group-xl">
                    <button class="btn btn-secondary">Left</button>
                    <button class="btn btn-secondary">Middle</button>
                    <button class="btn btn-secondary">Right</button>
                </div>
            </div>

            <div>
                <div class="btn-group btn-group-2xl">
                    <button class="btn btn-secondary">Left</button>
                    <button class="btn btn-secondary">Middle</button>
                    <button class="btn btn-secondary">Right</button>
                </div>
            </div>

            <div>
                <div class="btn-group btn-group-3xl">
                    <button class="btn btn-secondary">Left</button>
                    <button class="btn btn-secondary">Middle</button>
                    <button class="btn btn-secondary">Right</button>
                </div>
            </div>

            <div>
                <div class="btn-group btn-group-4xl">
                    <button class="btn btn-secondary">Left</button>
                    <button class="btn btn-secondary">Middle</button>
                    <button class="btn btn-secondary">Right</button>
                </div>
            </div>

            <div>
                <div class="btn-group btn-group-5xl">
                    <button class="btn btn-secondary">Left</button>
                    <button class="btn btn-secondary">Middle</button>
                    <button class="btn btn-secondary">Right</button>
                </div>
            </div>

            <div>
                <div class="btn-group btn-group-3">
                    <button class="btn btn-secondary">btn-group-3</button>
                    <button class="btn btn-secondary">btn-group-3</button>
                    <button class="btn btn-secondary">btn-group-3</button>
                </div>
            </div>

            <div>
                <div class="btn-group btn-group-4">
                    <button class="btn btn-secondary">btn-group-4</button>
                    <button class="btn btn-secondary">btn-group-4</button>
                    <button class="btn btn-secondary">btn-group-4</button>
                </div>
            </div>

            <div>
                <div class="btn-group btn-group-5">
                    <button class="btn btn-secondary">btn-group-5</button>
                    <button class="btn btn-secondary">btn-group-5</button>
                    <button class="btn btn-secondary">btn-group-5</button>
                </div>
            </div>
            
            <div>
                <div class="btn-group btn-group-[16px]">
                    <button class="btn btn-secondary">btn-group-[16px]</button>
                    <button class="btn btn-secondary">btn-group-[16px]</button>
                    <button class="btn btn-secondary">btn-group-[16px]</button>
                </div>
            </div>
        </div>
    ),
};

// Story: Orientation
export const Orientation = {
    name: 'Orientation',
    render: () => (
        <div class="flex gap-2">
            <div role="group" class="btn-dropdown btn-group dropdown">
                <button class="btn btn-secondary dropdown-toggle">Dropdown</button>
            </div>
            <div role="group" class="btn-dropdown btn-group dropup">
                <button class="btn btn-secondary dropdown-toggle">Dropup</button>
            </div>
            <div role="group" class="btn-dropdown btn-group dropleft">
                <button class="btn btn-secondary dropdown-toggle">Dropleft</button>
            </div>
            <div role="group" class="btn-dropdown btn-group dropright">
                <button class="btn btn-secondary dropdown-toggle">Dropright</button>
            </div>
        </div>
    ),
};

//Story: Split Orientation
export const SplitOrientation = {
    name: 'Split Orientation',
    render: () => (
        <div class="flex gap-2">
            <div role="group" class="btn-dropdown-split btn-dropdown btn-group dropdown">
                <button class="btn btn-secondary">Dropdown</button>
                <div role="group" class="btn-group">
                    <button type="button" aria-haspopup="true" class="btn btn-secondary dropdown-toggle-split dropdown-toggle"></button>
                </div>
            </div>
            <div role="group" class="btn-dropdown-split btn-dropdown btn-group dropup">
                <button class="btn btn-secondary">Dropup</button>
                <div role="group" class="btn-group">
                    <button type="button" aria-haspopup="true" class="btn btn-secondary dropdown-toggle-split dropdown-toggle"></button>
                </div>
            </div>
            <div role="group" class="btn-dropdown-split btn-dropdown btn-group dropleft">
                <div role="group" class="btn-group">
                    <button type="button" aria-haspopup="true" class="btn btn-secondary dropdown-toggle-split dropdown-toggle"></button>
                </div>
                <button class="btn btn-secondary">Dropleft</button>
            </div>
            <div role="group" class="btn-dropdown-split btn-dropdown btn-group dropright">
                <button class="btn btn-secondary">Dropright</button>
                <div role="group" class="btn-group">
                    <button type="button" aria-haspopup="true" class="btn btn-secondary dropdown-toggle-split dropdown-toggle"></button>
                </div>
            </div>
        </div>
    )
};

// Story: Regular Sizing
export const RegularSizing = {
    name: 'Regular Sizing',
    render: () => (
        <div class="flex gap-2">
            <div>
                <div role="group" class="btn-dropdown btn-group btn-group-xs">
                    <button class="btn btn-secondary dropdown-toggle">Click Me</button>
                </div>
            </div>

            <div>
                <div role="group" class="btn-dropdown btn-group btn-group-xs">
                    <button class="btn btn-secondary dropdown-toggle">Click Me</button>
                </div>
            </div>

            <div>
                <div role="group" class="btn-dropdown btn-group btn-group-sm">
                    <button class="btn btn-secondary dropdown-toggle">Click Me</button>
                </div>
            </div>

            <div>
                <div role="group" class="btn-dropdown btn-group btn-group-md">
                    <button class="btn btn-secondary dropdown-toggle">Click Me</button>
                </div>
            </div>

            <div>
                <div role="group" class="btn-dropdown btn-group btn-group-lg">
                    <button class="btn btn-secondary dropdown-toggle">Click Me</button>
                </div>
            </div>

            <div>
                <div role="group" class="btn-dropdown btn-group btn-group-xl">
                    <button class="btn btn-secondary dropdown-toggle">Click Me</button>
                </div>
            </div>

            <div>
                <div role="group" class="btn-dropdown btn-group btn-group-2xl">
                    <button class="btn btn-secondary dropdown-toggle">Click Me</button>
                </div>
            </div>

            <div>
                <div role="group" class="btn-dropdown btn-group btn-group-3xl">
                    <button class="btn btn-secondary dropdown-toggle">Click Me</button>
                </div>
            </div>

            <div>
                <div role="group" class="btn-dropdown btn-group btn-group-4xl">
                    <button class="btn btn-secondary dropdown-toggle">Click Me</button>
                </div>
            </div>

            <div>
                <div role="group" class="btn-dropdown btn-group btn-group-3">
                    <button class="btn btn-secondary dropdown-toggle">(btn-group-3)</button>
                </div>
            </div>
                
            <div>
                <div role="group" class="btn-dropdown btn-group btn-group-[16px]">
                    <button class="btn btn-secondary dropdown-toggle">(btn-group-[16px])</button>
                </div>
            </div>
        </div>
    ),
};

// Story: Split Sizing
export const SplitSizing = {
    name: 'Split Sizing',
    render: () => (
        <div class="flex gap-2">
            <div>
                <div role="group" class="btn-dropdown-split btn-dropdown btn-group btn-group-xs">
                    <button class="btn btn-secondary">Click Me</button>
                    <div role="group" class="btn-group">
                        <button type="button" aria-haspopup="true" class="btn btn-secondary dropdown-toggle-split dropdown-toggle"></button>
                    </div>
                </div>
            </div>

            <div>
                <div role="group" class="btn-dropdown-split btn-dropdown btn-group btn-group-sm">
                    <button class="btn btn-secondary">Click Me</button>
                    <div role="group" class="btn-group">
                        <button type="button" aria-haspopup="true" class="btn btn-secondary dropdown-toggle-split dropdown-toggle"></button>
                    </div>
                </div>
            </div>

            <div>
                <div role="group" class="btn-dropdown-split btn-dropdown btn-group">
                    <button class="btn btn-secondary">Click Me</button>
                    <div role="group" class="btn-group">
                        <button type="button" aria-haspopup="true" class="btn btn-secondary dropdown-toggle-split dropdown-toggle"></button>
                    </div>
                </div>
            </div>

            <div>
                <div role="group" class="btn-dropdown-split btn-dropdown btn-group btn-group-lg">
                    <button class="btn btn-secondary">Click Me</button>
                    <div role="group" class="btn-group">
                        <button type="button" aria-haspopup="true" class="btn btn-secondary dropdown-toggle-split dropdown-toggle"></button>
                    </div>
                </div>
            </div>

            <div>
                <div role="group" class="btn-dropdown-split btn-dropdown btn-group btn-group-xl">
                    <button class="btn btn-secondary">Click Me</button>
                    <div role="group" class="btn-group">
                        <button type="button" aria-haspopup="true" class="btn btn-secondary dropdown-toggle-split dropdown-toggle"></button>
                    </div>
                </div>
            </div>

            <div>
                <div role="group" class="btn-dropdown-split btn-dropdown btn-group btn-group-2xl">
                    <button class="btn btn-secondary">Click Me</button>
                    <div role="group" class="btn-group">
                        <button type="button" aria-haspopup="true" class="btn btn-secondary dropdown-toggle-split dropdown-toggle"></button>
                    </div>
                </div>
            </div>

            <div>
                <div role="group" class="btn-dropdown-split btn-dropdown btn-group btn-group-3xl">
                    <button class="btn btn-secondary">Click Me</button>
                    <div role="group" class="btn-group">
                        <button type="button" aria-haspopup="true" class="btn btn-secondary dropdown-toggle-split dropdown-toggle"></button>
                    </div>
                </div>
            </div>

            <div>
                <div role="group" class="btn-dropdown-split btn-dropdown btn-group btn-group-4xl">
                    <button class="btn btn-secondary">Click Me</button>
                    <div role="group" class="btn-group">
                        <button type="button" aria-haspopup="true" class="btn btn-secondary dropdown-toggle-split dropdown-toggle"></button>
                    </div>
                </div>
            </div>
        </div>
    ),
};

// Story: Vertical Variation
export const VerticalVariation = {
    name: 'Vertical Variation',
    render: () => (
        <div class="btn-group btn-group-vertical">
            <button class="btn btn-secondary">Top</button>
            <button class="btn btn-secondary">Middle</button>
            <button class="btn btn-secondary">Bottom</button>
            <div role="group" class="btn-dropdown-split btn-dropdown btn-group">
                <button class="btn btn-secondary">Click Me</button>
                <div role="group" class="btn-group">
                    <button type="button" aria-haspopup="true" class="btn btn-secondary dropdown-toggle-split dropdown-toggle"></button>
                </div>
            </div>
        </div>
    ),
};