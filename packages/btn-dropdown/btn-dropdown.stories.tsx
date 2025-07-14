import { Alignment, flip, offset } from '@floating-ui/dom';
import type { Meta, StoryObj } from '@storybook/vue3';
import { ref, Ref, withModifiers } from 'vue';
import './index.css';
import BtnDropdown from './src/BtnDropdown.vue';

const meta = {
    title: 'Example/Buttons/Button Dropdown',
    tags: ['autodocs'],
    component: BtnDropdown,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>

//Dropdown Control
export const DropdownControl = {
    args: {
        align: 'start',
        block: false,
        buttonClass: 'flex rounded',
        caret: true,
        dropup: false,
        dropright: false,
        dropleft: false,
        label: 'Dropdown',
        offset: undefined,
        middleware: [
            flip(),
            offset(5)
        ],
        side: 'bottom',
        size: '',
        split: false,
        variant: 'btn-primary',
    },
    argTypes: {
        align: {
            control: 'select',
            options: ['start', 'center', 'end'], // adjust to match your Alignment type
        },
        block: { control: 'boolean' },
        buttonClass: { control: 'text' },
        caret: { control: 'boolean' },
        dropup: { control: 'boolean' },
        dropright: { control: 'boolean' },
        dropleft: { control: 'boolean' },
        label: { control: 'text' },
        offset: { control: 'object' },
        middleware: { control: 'object' },
        side: {
            control: 'select',
            options: ['top', 'right', 'bottom', 'left'],
        },
        size: { control: 'text' },
        split: { control: 'boolean' },
        variant: { control: 'text' },

        // Actions
        onClickToggle: { action: 'toggle clicked' },
        onShow: { action: 'dropdown shown' },
        onHide: { action: 'dropdown hidden' }
    },
    render: (args) => {
        const clicked = ref(0);
        const visible = ref(false);

        return () => (
            <div class="min-h-38 flex flex-col gap-2">
                <div class="flex gap-2">
                    <div>
                        Counter:
                        <span class="text-xs rounded px-2 py-1 bg-blue-600 text-white">{clicked.value}</span>
                    </div>
                    <div
                        class={[
                            'text-white rounded p-1 text-xs',
                            visible.value ? 'bg-emerald-500' : 'bg-red-500',
                        ]}
                    >
                        {visible.value ? 'Showing' : 'Hidden'}
                    </div>
                </div>

                <BtnDropdown
                    {...args}
                    onShow={() => {
                        visible.value = true;
                        args.onShow?.(); // calls onShow action handler
                    }}
                    onHide={() => {
                        visible.value = false;
                        args.onHide?.(); // calls onHide action handler
                    }}
                >
                    <button onClick={withModifiers(() => clicked.value++, ['prevent'])}>Increment Counter</button>
                    <button>Another Action</button>
                    <hr/>
                    <button>Something else here</button>
                </BtnDropdown>
            </div>
        );
    }
} satisfies Story;

//Basic Usage
export const BasicUsage = {
    name: 'Basic Usage',
    render: () => (
        <BtnDropdown label="Dropdown" >
            <a href="#/test">Action</a>
            <a href="#">Another Action</a>
            <hr/>
            <a href="#">Something else here</a>
        </BtnDropdown>
    ),
} satisfies Story;

//Split Button
export const SplitButton = {
    name: 'Split Button',
    render: () => (
        <div class="flex items-center gap-2">
            <BtnDropdown 
                label="Dropdown" 
                split
            >
                <a href="#/test">Action</a>
                <a href="#">Another Action</a>
                <hr/>
                <a href="#">Something else here</a>
            </BtnDropdown>
        </div>
    ),
} satisfies Story;

type ButtonSlotProps = {
  target: Ref<HTMLElement | null>;
  onClickToggle: (e: MouseEvent) => void;
  onBlur: (e: FocusEvent) => void;
  expanded: boolean;
};

//Custom Buttons
export const CustomButtons = {
    name: 'Custom Buttons',
    render: () => ({
        setup() {
            return () => (
                <div class="flex items-center gap-4">
                    <BtnDropdown
                        label="+"
                        caret={false}
                        button-class="btn-primary rounded-full p-0 w-9 h-9 text-sm flex items-center justify-center"
                    >
                        <a href="#/test">Action</a>
                        <a href="#">Another Action</a>
                        <a href="#">Something else here</a>
                    </BtnDropdown>

                    <BtnDropdown>
                        {{
                            button: ({ target, onClickToggle, onBlur, expanded }: ButtonSlotProps) => (
                                <button
                                    ref={target}
                                    onClick={onClickToggle}
                                    onBlur={onBlur}
                                    aria-expanded={expanded}
                                    class={[
                                        'bg-gray-100 w-9 h-9 flex items-center justify-center rounded-full outline-none transition-transform',
                                        'active:ring-4 focus:ring-4 ring-blue-500/50',
                                        expanded ? 'rotate-90' : ''
                                    ]}
                                >
                                    <svg
                                        class="w-4 h-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        fill="currentColor"
                                    >
                                        <g transform="translate(0,512) scale(0.1,-0.1)" stroke="none">
                                            <path d="M570 3243 c-71 -12 -189 -60 -255 -104 -194 -130 -315 -353 -315 
                                            -580 0 -288 202 -567 473 -655 110 -36 263 -44 372 -19 341 76 582 414 536 
                                            754 -48 358 -338 615 -690 610 -53 -1 -107 -4 -121 -6z" />
                                            <path d="M2395 3234 c-243 -59 -452 -270 -509 -514 -20 -83 -20 -237 0 -320 
                                            45 -195 188 -372 369 -460 104 -51 187 -70 305 -70 118 0 201 19 305 70 137 
                                            66 249 178 315 315 51 104 70 187 70 305 0 118 -19 201 -70 305 -87 180 -253 
                                            316 -446 365 -93 24 -249 26 -339 4z" />
                                            <path d="M4254 3231 c-198 -54 -360 -186 -448 -366 -51 -104 -69 -183 -69 
                                            -305 0 -122 18 -201 69 -306 68 -139 186 -253 334 -323 204 -97 472 -77 
                                            664 49 190 124 316 355 316 580 0 290 -200 567 -474 656 -111 37 -287 43 
                                            -392 15z" />
                                        </g>
                                    </svg>
                                </button>
                            ),
                            default: () => (
                                <>
                                    <a href="#/test" onClick={(e) => e.stopPropagation()}>Action</a>
                                    <a href="#">Another Action</a>
                                    <a href="#">Something else here</a>
                                </>
                            ),
                        }}
                    </BtnDropdown>
                </div>
            );
        },
    }),
} satisfies Story;

//Variations
export const Variants = {
    name: 'Variants',
    render: () => (
        <div class="flex gap-2">
            <BtnDropdown label="Primary" variant="btn-primary">
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>

            <BtnDropdown label="Secondary" variant="btn-secondary">
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>

            <BtnDropdown label="Success" variant="btn-success">
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>

            <BtnDropdown label="Info" variant="btn-info">
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>

            <BtnDropdown label="Warning" variant="btn-warning">
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>

            <BtnDropdown label="Danger" variant="btn-danger">
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>

            <BtnDropdown label="Dark" variant="btn-dark">
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>

            <BtnDropdown label="Light" variant="btn-light">
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>

            <BtnDropdown label="Muted" variant="btn-muted">
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>
        </div>
    )
} satisfies Story;

//Outline Variants
export const OutlineVariants = {
    name: 'Outline Variants',
    render: () => (
        <div class="flex gap-2">
            <BtnDropdown label="Primary" variant="btn-outline-primary">
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>

            <BtnDropdown label="Secondary" variant="btn-outline-secondary">
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>

            <BtnDropdown label="Success" variant="btn-outline-success">
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>

            <BtnDropdown label="Info" variant="btn-outline-info">
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>

            <BtnDropdown label="Warning" variant="btn-outline-warning">
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>

            <BtnDropdown label="Danger" variant="btn-outline-danger">
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>

            <BtnDropdown label="Dark" variant="btn-outline-dark">
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>

            <BtnDropdown label="Light" variant="btn-outline-light">
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>

            <BtnDropdown label="Muted" variant="btn-outline-muted">
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>
        </div>
    )
} satisfies Story;

//Split Button Variants
export const SplitButtonVariants = {
    name: 'Split Button Variants',
    render: () => (
        <div class="flex gap-2">
            <BtnDropdown label="Primary" variant="btn-primary" split>
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>

            <BtnDropdown label="Secondary" variant="btn-secondary" split>
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>

            <BtnDropdown label="Success" variant="btn-success" split>
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>

            <BtnDropdown label="Info" variant="btn-info" split>
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>

            <BtnDropdown label="Warning" variant="btn-warning" split>
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>

            <BtnDropdown label="Danger" variant="btn-danger" split>
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>

            <BtnDropdown label="Dark" variant="btn-dark" split>
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>

            <BtnDropdown label="Light" variant="btn-light" split>
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>

            <BtnDropdown label="Muted" variant="btn-muted" split>
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>
        </div>
    )
} satisfies Story;

//Split Outline Button
export const SplitOutlineButton = {
    name: 'Split Outline Button',
    render: () => (
        <div class="flex gap-2">
            <BtnDropdown label="Primary" variant="btn-outline-primary" split>
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>

            <BtnDropdown label="Secondary" variant="btn-outline-secondary" split>
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>

            <BtnDropdown label="Success" variant="btn-outline-success" split>
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>

            <BtnDropdown label="Info" variant="btn-outline-info" split>
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>

            <BtnDropdown label="Warning" variant="btn-outline-warning" split>
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>

            <BtnDropdown label="Danger" variant="btn-outline-danger" split>
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>

            <BtnDropdown label="Dark" variant="btn-outline-dark" split>
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>

            <BtnDropdown label="Light" variant="btn-outline-light" split>
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>
        </div>
    )
} satisfies Story;

//Button Sizes
export const ButtonSizes = {
    name: 'Button Sizes',
    render: () => (
        <div class="flex gap-2">
            <div>
                <BtnDropdown label="2xs" size="btn-2xs" variant="btn-secondary">
                    <a href="#">Action</a>
                    <a href="#">Another Action</a>
                    <a href="#">Something else here</a>
                </BtnDropdown>
            </div>

            <div>
                <BtnDropdown label="xs" size="btn-xs" variant="btn-secondary">
                    <a href="#">Action</a>
                    <a href="#">Another Action</a>
                    <a href="#">Something else here</a>
                </BtnDropdown>
            </div>

            <div>
                <BtnDropdown label="sm" size="btn-sm" variant="btn-secondary">
                    <a href="#">Action</a>
                    <a href="#">Another Action</a>
                    <a href="#">Something else here</a>
                </BtnDropdown>
            </div>

            <div>
                <BtnDropdown label="md" size="btn-md" variant="btn-secondary">
                    <a href="#">Action</a>
                    <a href="#">Another Action</a>
                    <a href="#">Something else here</a>
                </BtnDropdown>
            </div>

            <div>
                <BtnDropdown label="lg" size="btn-lg" variant="btn-secondary">
                    <a href="#">Action</a>
                    <a href="#">Another Action</a>
                    <a href="#">Something else here</a>
                </BtnDropdown>
            </div>

            <div>
                <BtnDropdown label="xl" size="btn-xl" variant="btn-secondary">
                    <a href="#">Action</a>
                    <a href="#">Another Action</a>
                    <a href="#">Something else here</a>
                </BtnDropdown>
            </div>

            <div>
                <BtnDropdown label="2xl" size="btn-2xl" variant="btn-secondary">
                    <a href="#">Action</a>
                    <a href="#">Another Action</a>
                    <a href="#">Something else here</a>
                </BtnDropdown>
            </div>

            <div>
                <BtnDropdown label="3xl" size="btn-3xl" variant="btn-secondary">
                    <a href="#">Action</a>
                    <a href="#">Another Action</a>
                    <a href="#">Something else here</a>
                </BtnDropdown>
            </div>

            <div>
                <BtnDropdown label="4xl" size="btn-4xl" variant="btn-secondary">
                    <a href="#">Action</a>
                    <a href="#">Another Action</a>
                    <a href="#">Something else here</a>
                </BtnDropdown>
            </div>

            <div>
                <BtnDropdown label="5xl" size="btn-5xl" variant="btn-secondary">
                    <a href="#">Action</a>
                    <a href="#">Another Action</a>
                    <a href="#">Something else here</a>
                </BtnDropdown>
            </div>

            <div>
                <BtnDropdown label="btn-4" size="btn-4" variant="btn-secondary">
                    <a href="#">Action</a>
                    <a href="#">Another Action</a>
                    <a href="#">Something else here</a>
                </BtnDropdown>
            </div>

            <div>
                <BtnDropdown label="btn-[27px]" size="btn-[27px]" variant="btn-secondary">
                    <a href="#">Action</a>
                    <a href="#">Another Action</a>
                    <a href="#">Something else here</a>
                </BtnDropdown>
            </div>
        </div>
    )
} satisfies Story;

//Split Button Sizes
export const SplitButtonSizes = {
    name: 'Split Button Sizes',
    render: () => (
        <div class="flex gap-2">
            <div>
                <BtnDropdown label="2xs" size="btn-2xs" variant="btn-secondary" split>
                    <a href="#">Action</a>
                    <a href="#">Another Action</a>
                    <a href="#">Something else here</a>
                </BtnDropdown>
            </div>

            <div>
                <BtnDropdown label="xs" size="btn-xs" variant="btn-secondary" split>
                    <a href="#">Action</a>
                    <a href="#">Another Action</a>
                    <a href="#">Something else here</a>
                </BtnDropdown>
            </div>

            <div>
                <BtnDropdown label="sm" size="btn-sm" variant="btn-secondary" split>
                    <a href="#">Action</a>
                    <a href="#">Another Action</a>
                    <a href="#">Something else here</a>
                </BtnDropdown>
            </div>
            
            <div>
                <BtnDropdown label="md" size="btn-md" variant="btn-secondary" split>
                    <a href="#">Action</a>
                    <a href="#">Another Action</a>
                    <a href="#">Something else here</a>
                </BtnDropdown>
            </div>
            
            <div>
                <BtnDropdown label="lg" size="btn-lg" variant="btn-secondary" split>
                    <a href="#">Action</a>
                    <a href="#">Another Action</a>
                    <a href="#">Something else here</a>
                </BtnDropdown>
            </div>
            
            <div>
                <BtnDropdown label="xl" size="btn-xl" variant="btn-secondary" split>
                    <a href="#">Action</a>
                    <a href="#">Another Action</a>
                    <a href="#">Something else here</a>
                </BtnDropdown>
            </div>
            
            <div>
                <BtnDropdown label="2xl" size="btn-2xl" variant="btn-secondary" split>
                    <a href="#">Action</a>
                    <a href="#">Another Action</a>
                    <a href="#">Something else here</a>
                </BtnDropdown>
            </div>
            
            <div>
                <BtnDropdown label="3xl" size="btn-3xl" variant="btn-secondary" split>
                    <a href="#">Action</a>
                    <a href="#">Another Action</a>
                    <a href="#">Something else here</a>
                </BtnDropdown>
            </div>
            
            <div>
                <BtnDropdown label="4xl" size="btn-4xl" variant="btn-secondary" split>
                    <a href="#">Action</a>
                    <a href="#">Another Action</a>
                    <a href="#">Something else here</a>
                </BtnDropdown>
            </div>

            <div>
                <BtnDropdown label="btn-4" size="btn-4" variant="btn-secondary" split>
                    <a href="#">Action</a>
                    <a href="#">Another Action</a>
                    <a href="#">Something else here</a>
                </BtnDropdown>
            </div>

            <div>
                <BtnDropdown label="btn-[27px]" size="btn-[27px]" variant="btn-secondary" split>
                    <a href="#">Action</a>
                    <a href="#">Another Action</a>
                    <a href="#">Something else here</a>
                </BtnDropdown>
            </div>
        </div>
    )
} satisfies Story;

type MenuAlignment = {
    label: string
    align: Alignment
    split: boolean
}

//Menu Alignment
export const MenuAlignment = {
    name: 'Menu Alignment',
    render: () => (
        <div class="flex gap-2">
            <BtnDropdown align="start" label="Align Left" variant="btn-secondary">
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>

            <BtnDropdown align="start" label="Align Left (Split)" variant="btn-secondary" split>
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>

            <BtnDropdown align="end" label="Align Right" variant="btn-secondary">
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>

            <BtnDropdown align="end" label="Align Right (Split)" variant="btn-secondary" split>
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>
        </div>
    ),
} satisfies Story;

//Dropup Variation
export const DropupVariation = {
    name: 'Dropup Variation',
    render: () => (
        <div class="flex justify-center items-end gap-2 min-h-[150px]">
            <BtnDropdown label="Dropup" variant="btn-secondary" dropup>
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>
            <BtnDropdown label="Dropup (Split)" variant="btn-secondary" dropup split>
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>
        </div>
    ),
} satisfies Story;

//Dropright Variation
export const DroprightVariation = {
    name: 'Dropright Variation',
    render: () => (
        <div class="flex gap-2 items-end min-h-[150px]">
            <BtnDropdown label="Dropright" variant="btn-secondary" dropright>
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>

            <BtnDropdown label="Dropright (Split)" variant="btn-secondary" dropright split>
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>
        </div>
    ),
} satisfies Story;

//Dropleft Variation
export const DropleftVariation = {
    name: 'Dropleft Variation',
    render: () => (
        <div class="flex gap-2 justify-center">
            <BtnDropdown label="Dropleft" variant="btn-secondary" dropleft>
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>
            
            <BtnDropdown label="Dropleft (Split)" variant="btn-secondary" dropleft split>
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>
        </div>
    ),
} satisfies Story;