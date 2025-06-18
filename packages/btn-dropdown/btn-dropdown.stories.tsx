import type { Meta, /* StoryObj */ StoryFn } from '@storybook/vue3';
import { ref, withModifiers } from 'vue';
import './index.css';
import BtnDropdown from './src/BtnDropdown.vue';

const meta = {
    title: 'Example/Button Dropdown',
    tags: ['autodocs']
} satisfies Meta;

export default meta;

/* type Story = StoryObj<typeof meta> */

export const DropdownControl: StoryFn<typeof BtnDropdown> = (args) => {
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
};

// Default values for controls
DropdownControl.args = {
    align: 'start',
    block: false,
    buttonClass: 'flex btn-primary rounded',
    caret: true,
    dropup: false,
    dropright: false,
    dropleft: false,
    label: 'Dropdown',
    offset: undefined,
    middleware: [],
    side: 'bottom',
    size: '',
    split: false,
    variant: '',
};

//Full control definition (all props from BtnDropdownProps + actions)
DropdownControl.argTypes = {
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
};

/* export const BasicUsage = {
    name: 'Basic Usage',
    render: () => ({
        setup() {
            const clicked = ref(0);
            const visible = ref(false);
            
            return () => (
                <div class="min-h-38 flex flex-col gap-2">
                    <div class="flex gap-2">
                        <div>Counter: <span class="text-xs rounded px-2 py-1 bg-blue-600 text-white">{clicked.value}</span></div>
                        <div class={{
                            'text-white rounded p-1 text-xs': true,
                            'bg-emerald-500': visible.value,
                            'bg-red-500': !visible.value,
                        }}>{visible.value ? 'Showing' : 'Hidden'}</div>
                    </div>
                    <div>
                        <BtnDropdown
                            label="Dropdown"
                            onClickToggle={() => console.log('clicked toggle!')}
                            onShow={() => visible.value = true}
                            onHide={() => visible.value = false}
                        >
                            <button onClick={withModifiers(() => clicked.value++, ['prevent'])}>Increment Counter</button>
                            <button>Another Action</button>
                            <hr/>
                            <button>Something else here</button>
                        </BtnDropdown>
                    </div>
                </div>
            );
        }
    }),
} satisfies Story;
*/

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
};

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
};

//Custom Buttons
export const CustomButtons = {
    name: 'Custom Buttons',
    render: () => ({
        setup() {
            const expanded = ref(false);
            const buttonRef = ref<HTMLElement | null>(null);

            const toggleDropdown = () => {
                expanded.value = !expanded.value;
            };

            const closeDropdown = () => {
                expanded.value = false;
            };

            return () => (
                <div class="flex items-center gap-2">
                    <BtnDropdown 
                        label="+" 
                        caret={false} 
                        button-class="btn-primary rounded-full p-0 size-8"
                    >
                        <a href="#/test">Action</a>
                        <a href="#">Another Action</a>
                        <a href="#">Something else here</a>
                    </BtnDropdown>

                    <div class="relative">
                        <button
                            ref={buttonRef}
                            onClick={toggleDropdown}
                            onBlur={() => {
                                setTimeout(() => {
                                    if(
                                        buttonRef.value &&
                                        !buttonRef.value.contains(document.activeElement)
                                    ) {
                                        closeDropdown();
                                    }
                                }, 100);
                            }}
                            class={[
                                'bg-gray-100 p-2 rounded-full outline-none active:ring-4 focus:ring-4 ring-blue-500/50 transition-transform',
                                expanded.value ? 'rotate-90' : ''
                            ]}
                        >
                            <svg version="1.0" class="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000" stroke="none">
                                    <path d="M570 3243..."/>
                                    <path d="M2395 3234..."/>
                                    <path d="M4254 3231..."/>
                                </g>
                            </svg>
                        </button>

                        {expanded.value && (
                            <div class="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                                <a href="#/test" class="block px-4 py-2 hover:bg-gray-100">Action</a>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100">Another Action</a>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100">Something else here</a>
                            </div>
                        )}
                    </div>
                </div>
            );
        }
    })
};

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
    ),
};

//Outline Variants
export const OutlineVariants = {
    name: 'Outline Variants',
    render: () => (
        <div class="flex gap-2">
            <BtnDropdown label="Primary" variant="btn-outline-primary" >
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
    ),
};

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
    ),
};

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

            <BtnDropdown label="Info" variant="btn-outline-info"split>
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>

            <BtnDropdown label="Warning" variant="btn-outline-warning"split>
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>

            <BtnDropdown label="Danger" variant="btn-outline-danger"split>
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>

            <BtnDropdown label="Dark" variant="btn-outline-dark"split>
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
    ),
};

//Button Sizes
export const ButtonSizes = {
    name: 'Button Sizes',
    render: () => (
        <div class="flex gap-2">
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
        </div>
    ),
};

//Split Button Sizes
export const SplitButtonSizes = {
    name: 'Split Button Sizes',
    render: () => (
        <div class="flex gap-2">
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
        </div>
    ),
};

//Menu Alignment
export const MenuAlignment = {
    name: 'Menu Alignment',
    render: () => (
        <div class="flex gap-2">
            <BtnDropdown align="end" label="Align Left" variant="btn-secondary">
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>

            <BtnDropdown align="end" label="Align Left (Split)" variant="btn-secondary" split>
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>

            <BtnDropdown align="start" label="Align Right" variant="btn-secondary">
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>

            <BtnDropdown align="start" label="Align Right (Split)" variant="btn-secondary" split>
                <a href="#">Action</a>
                <a href="#">Another Action</a>
                <a href="#">Something else here</a>
            </BtnDropdown>
        </div>
    ),
};

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
};

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
};

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
};