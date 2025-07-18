import type { Meta, StoryObj } from '@storybook/vue3';
/* import { ref, onMounted, computed } from 'vue'; */
import './demo.css';
import './src/useFormControl';
 
const meta = {
    title: 'Example/Form Fields/Form Control',
    tags: ['autodocs'],

    decorators: [
        (Story, context) => {
            const background = context.globals.backgrounds?.value?.toLowerCase?.() || '';
            const root = document.documentElement;
            const isDark = ['#000', '#000', 'dark'].includes(background);
            
            root.classList.toggle('dark', isDark);

            return Story();
        },
    ],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>

export const FormControl = {
    name: 'Form Control',
    render: () => (
        <div class="flex flex-col gap-4">
            <div>
                <label class="form-label">Color</label>
                <input type="color" id="control" class="form-control form-control-color" />
            </div>
            <div>
                <label for="control" class="form-label">Some Label</label>
                <input type="text" id="control" class="form-control" />
            </div>
            <div>
                <label class="form-label">Placeholder</label>
                <input type="text" id="control" class="form-control" placeholder="Placeholder" />
            </div>
            <div>
                <label class="form-label">Disabled</label>
                <input type="text" id="control" class="form-control" value="Disabled" disabled />
            </div>
            
            <div>
                <label class="form-label">Disabled (Placeholder)</label>
                <input type="text" id="control" class="form-control" placeholder="Disabled" disabled />
            </div>
            <div>
                <label class="form-label">Readonly</label>
                <input type="text" id="control" class="form-control" placeholder="Readonly" readonly />
            </div>
        </div>
    ),
} satisfies Story;

export const FormControlPlaintext = {
    name: 'Form Control Plaintext',
    render: () => ( 
        <div class="flex flex-col gap-4">           
            <div>
                <label class="form-label">Plaintext</label>
                <input type="text" id="control" class="form-control-plaintext" value="Readonly" readonly />
                <input type="text" id="control" class="form-control-plaintext" placeholder="Readonly Placeholder" readonly />
                <input type="text" id="control" class="form-control-plaintext" value="Readonly & Disabled" readonly disabled />
                <input type="text" id="control" class="form-control-plaintext" value="Readonly & Disabled Placeholder" readonly disabled />
            </div>
        </div>
    ),
}

export const FormControlSizes = {
  name: 'Form Control Sizes',
  render: () => (
        <div class="flex flex-col gap-2">
            <h1>Predined Sizes</h1>

            <input type="text" class="form-control form-control-xs" placeholder="form-control-xs" />
            <input type="text" class="form-control form-control-sm" placeholder="form-control-sm" />
            <input type="text" class="form-control form-control-md" placeholder="form-control-md" />
            <input type="text" class="form-control form-control-lg" placeholder="form-control-lg" />
            <input type="text" class="form-control form-control-xl" placeholder="form-control-xl" />
            <input type="text" class="form-control form-control-2xl" placeholder="form-control-2xl" />
            <input type="text" class="form-control form-control-3xl" placeholder="form-control-3xl" />
            <input type="text" class="form-control form-control-4xl" placeholder="form-control-4xl" />

            <h1>Tailwind Sizes</h1>

            <input type="text" class="form-control form-control-4" placeholder="form-control-4" />
            <input type="text" class="form-control form-control-5" placeholder="form-control-5" />
            <input type="text" class="form-control form-control-6" placeholder="form-control-6" />
            <input type="text" class="form-control form-control-7" placeholder="form-control-7" />
            <input type="text" class="form-control form-control-8" placeholder="form-control-8" />

            <h1>Arbitrary Sizes</h1>

            <input type="text" class="form-control form-control-[16px]" placeholder="form-control-[16px]" />
            <input type="text" class="form-control form-control-[21px]" placeholder="form-control-[21px]" />
        </div>
    ),
}

export const FormControlValidation = {
    name: 'Form Control Validation',
    render: () => ( 
        <div class="flex flex-col gap-4">
            <div>
                <label class="invalid-feedback">Invalid Field</label>
                <input type="text" class="form-control is-invalid" value="This field is invalid" />
                <div class="invalid-feedback">This is an inline error.</div>
                <div class="invalid-feedback">This is an inline error.</div>
            </div>
            <div>
                <label class="valid-feedback">Valid Field</label>
                <input type="text" class="form-control  is-valid" value="This field is invalid" />
                <div class="valid-feedback">This is an inline success message.</div>
                <div class="valid-feedback">This is an inline success message.</div>
            </div>

           
        </div>
    ),
}

export const FormControlCustomColors = {
    name: 'Form Control Custom Colors',
    render: () => (
        <div class="flex flex-col gap-4">
            <input type="text" placeholder="form-control-amber-500" class="form-control form-control-amber-500" />
            <input type="text" placeholder="form-control-green-500" class="form-control form-control-green-500" />
            <input type="text" placeholder="form-control-purple-500" class="form-control form-control-purple-500" />
            <input type="text" placeholder="form-control-neutral-500" class="form-control form-control-neutral-500" />
        </div>
    ),
}

export const FormSelect = {
    name: 'Form Select',
    render: () => ( 
        <div class="flex flex-col gap-4">
            <div>
                <label class="form-label">Select Field</label>
                <select class="form-select">
                    <option>Option A</option>
                    <option>Option B</option>
                    <option>Option C</option>
                </select>
            </div>
            <div>
                <label class="form-label">Disabled</label>
                <select class="form-select" disabled>
                    <option>Option A</option>
                    <option selected>Option B</option>
                    <option>Option C</option>
                </select>
            </div>
            <div>
                <label class="form-label">Readonly</label>
                <select class="form-select" aria-readonly>
                    <option disabled>Option A</option>
                    <option disabled selected>Option B</option>
                    <option disabled>Option C</option>
                </select>
            </div>
            <div>
                <label class="form-label">Readonly (Disabled)</label>
                <select class="form-select" is-readonly disabled>
                    <option disabled>Option A</option>
                    <option selected>Option B</option>
                    <option disabled>Option C</option>
                </select>
            </div>
            <div>
                <label class="form-label">Plaintext</label>
                <select class="form-select form-select-plaintext">
                    <option>Option A</option>
                    <option selected>Option B</option>
                    <option>Option C</option>
                </select>
            </div>
            <div>
                <label class="form-label">Plaintext (Readonly)</label>
                <select class="form-select form-select-plaintext" is-readonly>
                    <option disabled>Option A</option>
                    <option disabled selected>Option B</option>
                    <option disabled>Option C</option>
                </select>
            </div>
            <div>
                <label class="form-label">Plaintext (Disabled & Readonly)</label>
                <select class="form-select form-select-plaintext" disabled is-readonly>
                    <option disabled>Option A</option>
                    <option disabled selected>Option B</option>
                    <option disabled>Option C</option>
                </select>
            </div>
        </div>
    ),
}

export const FormSelectSizes = {
    name: 'Form Select Sizes',
    render: () => {
        const predefinedSizes = ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'];
        const tailwindSizes = ['5', '6', '7', '8'];
        
        return (
            <div class="flex flex-col gap-4">
                <h1>Predined Sizes</h1>

                <select class="form-select form-select-xs">
                    <option selected>form-select-md</option>
                </select>
                
                {predefinedSizes.map(size => (
                    <select class={`form-select form-select-${size}`}>
                        <option selected>{`form-select-${size}`}</option>
                    </select>
                ))}

                <h1>Tailwind Sizes</h1>

                <select class="form-select form-select-4">
                    <option selected>form-select-4</option>
                </select>

                {tailwindSizes.map(size => (
                    <select class={`form-select form-select-${size}`}>
                        <option selected>{`form-select-${size}`}</option>
                    </select>
                ))}

                <h1>Arbitrary Sizes</h1>

                <select class="form-select form-select-[16px]">
                    <option selected>form-select-[16px]</option>
                </select>

                <select class="form-select form-select-[21px]">
                    <option selected>form-select-[21px]</option>
                </select>
            </div>
        )
    },
};

export const FormSelectValidation = {
  name: 'Form Select Validation',
  render: () => (
        <div class="flex flex-col gap-4">
            <div>
                <label class="flex-shrink-0 invalid-feedback">Invalid Field</label>
                <div>
                    <select class="form-select is-invalid">
                        <option>Option A</option>
                        <option selected>Option B</option>
                        <option>Option C</option>
                    </select>
                    <div class="invalid-feedback">This is an inline error.</div>
                </div>
                <div class="invalid-feedback">This is an inline error.</div>
                <div>
                    <div class="invalid-feedback">This is an inline error.</div>
                </div>
            </div>

            <div>
                <label class="flex-shrink-0 valid-feedback">Valid Field</label>
                <div>
                    <select class="form-select  is-valid">
                        <option>Option A</option>
                        <option selected>Option B</option>
                        <option>Option C</option>
                    </select>
                    <div class="valid-feedback">This is an inline success message.</div>
                </div>
                <div class="valid-feedback">This is an inline success message.</div>
                <div>
                    <div class="valid-feedback">This is an inline success message.</div>
                </div>
            </div>
        </div>
    ),
};

export const FormSelectCustomColors = {
    name: 'Form Select Custom Colors',
    render: () => (
        <div class="flex flex-col gap-4">
            <select placeholder="form-control-amber-500" class="form-select form-select-amber-500">
                <option value=""></option>
                <option>1</option>
            </select>
            <select placeholder="form-control-green-500" class="form-select form-select-green-500">
                <option value=""></option>
                <option>1</option>
            </select>
            <select placeholder="form-control-purple-500" class="form-select form-select-purple-500">
                <option value=""></option>
                <option>1</option>
            </select>
            <select placeholder="form-control-neutral-500" class="form-select form-select-neutral-500">
                <option value=""></option>
                <option>1</option>
            </select>
        </div>
    ),
}

export const CheckboxesAndRadios = {
    name: 'Checkboxes and Radios',
    render: () => ( 
        <div class="flex flex-col gap-4">
            <div>
                <label class="flex gap-2"><input type="checkbox" class="form-check"/> Unchecked</label>
                <label class="flex gap-2"><input type="checkbox" class="form-check" checked/> Checked</label>
                <label class="flex gap-2"><input type="checkbox" class="form-check" disabled/> Unchecked (Disabled)</label>
                <label class="flex gap-2"><input type="checkbox" class="form-check" checked disabled/> Checked (Disabled)</label>
            </div>

            <div>
                <label class="flex gap-2"><input type="radio" name="radio" class="form-check"/> Unchecked</label>
                <label class="flex gap-2"><input type="radio" name="radio" class="form-check" checked/> Checked</label>
                <label class="flex gap-2"><input type="radio" name="radio2" class="form-check" disabled/> Unchecked (Disabled)</label>
                <label class="flex gap-2"><input type="radio" name="radio2" class="form-check" checked disabled/> Checked (Disabled)</label>
            </div>
        </div>
    ),
}

export const CheckAndRadioSizes = {
    name: 'Checkbox and Radio Sizes',
    render: () => {
        const predefinedSizes = ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'];
        const tailwindSizes = ['5', '6', '7', '8'];
        const arbitrarySizes = ['21px'];
        
        const renderCheckboxRow = (size: string, isArbitrary = false) => {
            const classBase = isArbitrary
                ? `form-check form-check-[${size}]`
                : `form-check form-check-${size}`;
            
            return (

                <div class="flex gap-1">
                    <input type="checkbox" class={classBase} />
                    <input type="checkbox" class={classBase} checked />
                    <input type="checkbox" class={`${classBase} is-invalid`} />
                    <input type="checkbox" class={`${classBase} is-invalid`} checked />
                    <input type="checkbox" class={`${classBase} is-valid`} />
                    <input type="checkbox" class={`${classBase} is-valid`} checked />
                </div>
            );
        };
        
        return (
            <div class="flex flex-col gap-4">
                <h1>Predined Sizes</h1>
                        <div class="flex gap-1">
                            <input type="checkbox" class="form-check form-check-xs"/>
                            <input type="checkbox" class="form-check form-check-xs" checked/>
                            <input type="checkbox" class="form-check form-check-xs is-invalid"/>
                            <input type="checkbox" class="form-check form-check-xs is-invalid"checked/>
                            <input type="checkbox" class="form-check form-check-xs is-valid"/>
                            <input type="checkbox" class="form-check form-check-xs is-valid" checked/>
                        </div>
                {predefinedSizes.map(size => renderCheckboxRow(size))}

                <h1>Tailwind Sizes</h1>
                        <div class="flex gap-1">
                            <input type="checkbox" class="form-check form-check-4"/>
                            <input type="checkbox" class="form-check form-check-4" checked/>
                            <input type="checkbox" class="form-check form-check-4 is-invalid"/>
                            <input type="checkbox" class="form-check form-check-4 is-invalid"checked/>
                            <input type="checkbox" class="form-check form-check-4 is-valid"/>
                            <input type="checkbox" class="form-check form-check-4 is-valid" checked/>
                        </div>
                {tailwindSizes.map(size => renderCheckboxRow(size))}

                <h1>Arbitrary Sizes</h1>
                        <div class="flex gap-1">
                            <input type="checkbox" class="form-check form-check-[16px]"/>
                            <input type="checkbox" class="form-check form-check-[16px]" checked/>
                            <input type="checkbox" class="form-check form-check-[16px] is-invalid"/>
                            <input type="checkbox" class="form-check form-check-[16px] is-invalid"checked/>
                            <input type="checkbox" class="form-check form-check-[16px] is-valid"/>
                            <input type="checkbox" class="form-check form-check-[16px] is-valid" checked/>
                        </div>
                {arbitrarySizes.map(size => renderCheckboxRow(size, true))}
            </div>
        );
    },
};

export const CheckAndRadioValidation = {
    name: 'Checkbox and Radio Validation',
    render: () => (
        <div class="flex flex-col gap-4">
            <div>
                <div>
                    <label class="flex gap-2 invalid-feedback"><input type="checkbox" class="form-check is-invalid"/> Invalid</label>
                    <label class="flex gap-2 invalid-feedback"><input type="checkbox" class="form-check is-invalid" checked/> Invalid</label>
                    <label class="flex gap-2 invalid-feedback"><input type="radio" name="radio7" class="form-check is-invalid"/> Invalid</label>
                    <label class="flex gap-2 invalid-feedback"><input type="radio" name="radio7" class="form-check is-invalid" checked/> Invalid</label>
                    <div class="invalid-feedback">This is an inline error.</div>
                </div>
                <div class="invalid-feedback">This is an inline error.</div>
                <div>
                    <div class="invalid-feedback">This is an inline error.</div>
                </div>
            </div>
            <div>
                <div>
                    <label class="flex gap-2 valid-feedback"><input type="checkbox" class="form-check  is-valid"/> Valid</label>
                    <label class="flex gap-2 valid-feedback"><input type="checkbox" class="form-check  is-valid" checked/> Valid</label>
                    <label class="flex gap-2 valid-feedback"><input type="radio" name="radio8" class="form-check  is-valid"/> Valid</label>
                    <label class="flex gap-2 valid-feedback"><input type="radio" name="radio8" class="form-check  is-valid" checked/> Valid</label>
                    <div class="valid-feedback">This is an inline sucess message.</div>
                </div>
                <div class="valid-feedback">This is an inline sucess message.</div>
                <div>
                    <div class="valid-feedback">This is an inline success message.</div>
                </div>
            </div>
        </div>
    ),
}

export const CheckboxCustomColors = {
    name: 'Checkbox Custom Colors',
    render: () => (
        <div class="flex flex-col gap-4">                    
            <div class="flex gap-1">
                <input type="checkbox" class="form-check form-check-amber-500"/>
                <input type="checkbox" class="form-check form-check-amber-500" checked/>
                <input type="checkbox" class="form-check form-check-green-500"/>
                <input type="checkbox" class="form-check form-check-green-500" checked/>
                <input type="checkbox" class="form-check form-check-purple-500"/>
                <input type="checkbox" class="form-check form-check-purple-500" checked/>
                <input type="checkbox" class="form-check form-check-neutral-500"/>
                <input type="checkbox" class="form-check form-check-neutral-500" checked/>
            </div>
        </div>
    ),
}

export const Switches = {
    name: 'Switches',
    render: () => ( 
        <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
                <label class="flex gap-2 items-center">
                    <input type="checkbox" class="form-switch"/>
                    Default
                </label>
                <label class="flex gap-2 items-center">
                    <input type="checkbox" class="form-switch" disabled/>
                    Disabled
                </label>
                <label class="flex gap-2 items-center">
                    <input type="checkbox" class="form-switch" disabled checked/>
                    Disabled (Checked)
                </label>
                <label class="flex gap-2 items-center">
                    <input type="checkbox" class="form-switch" readonly onClick={(e) => e.preventDefault()}/>
                    Readonly
                </label>
                <label class="flex gap-2 items-center">
                    <input type="checkbox" class="form-switch" checked readonly onClick={(e) => e.preventDefault()}/>
                    Readonly (Checked)
                </label>
            </div>
        </div>
    ),
}

export const SwitchSizes = {
    name: 'Switch Sizes',
    render: () => (
        <div class="flex flex-col gap-2">
            <h1>Predefined Sizes</h1>
            <input type="checkbox" class="form-switch form-switch-xs"/>
            <input type="checkbox" class="form-switch form-switch-sm"/>
            <input type="checkbox" class="form-switch form-switch-md"/>
            <input type="checkbox" class="form-switch form-switch-lg"/>
            <input type="checkbox" class="form-switch form-switch-xl"/>
            <input type="checkbox" class="form-switch form-switch-2xl"/>
            <input type="checkbox" class="form-switch form-switch-3xl"/>
            <input type="checkbox" class="form-switch form-switch-4xl"/>

            <h1>Tailwind Sizes</h1>
            <input type="checkbox" class="form-switch form-switch-4"/>
            <input type="checkbox" class="form-switch form-switch-5"/>
            <input type="checkbox" class="form-switch form-switch-6"/>
            <input type="checkbox" class="form-switch form-switch-7"/>
            <input type="checkbox" class="form-switch form-switch-8"/>

            <h1>Arbitrary Sizes</h1>
            <input type="checkbox" class="form-switch form-switch-[16px]"/>
            <input type="checkbox" class="form-switch form-switch-[27px]"/>
        </div>
    ),
};

export const SwitchValidation = {
    name: 'Switch Validation',
    render: () => ( 
        <div class="flex flex-col gap-4">
            <div>
                <div>
                    <label class="flex gap-2 invalid-feedback"><input type="checkbox" class="form-switch is-invalid"/> Invalid</label>
                    <label class="flex gap-2 invalid-feedback"><input type="checkbox" class="form-switch is-invalid" checked/> Invalid</label>
                    <div class="invalid-feedback">This is an inline error.</div>
                </div>
                <div class="invalid-feedback">This is an inline error.</div>
                <div>
                    <div class="invalid-feedback">This is an inline error.</div>
                </div>
            </div>
            <div>
                <div>
                    <label class="flex gap-2 valid-feedback"><input type="checkbox" class="form-switch  is-valid"/> Valid</label>
                    <label class="flex gap-2 valid-feedback"><input type="checkbox" class="form-switch  is-valid" checked/> Valid</label>
                    <div class="valid-feedback">This is an inline sucess message.</div>
                </div>
                <div class="valid-feedback">This is an inline sucess message.</div>
                <div>
                    <div class="valid-feedback">This is an inline success message.</div>
                </div>
            </div>
        </div>
    ),
}

export const SwitchCustomColors = {
    name: 'Switch Custom Colors',
    render: () => (        
        <div class="flex flex-col gap-2">
            <input type="checkbox" class="form-switch form-switch-amber-500"/>
            <input type="checkbox" class="form-switch form-switch-purple-500"/>
            <input type="checkbox" class="form-switch form-switch-green-500"/>
            <input type="checkbox" class="form-switch form-switch-neutral-500"/>
        </div>
    ),
}

export const FormControlAnimatedLabels = {
    name: 'Animated Labels - Form Control',
    render: () => (
        <div class="flex flex-col gap-4">
            <div class="form-control-animated">
                <label for="form-control-animated" class="form-label">form-control</label>
                <input type="text" id="form-control-animated" class="form-control is-dirty" placeholder="form-control"/>
            </div>
            <div class="form-control-animated-xs">
                <label for="form-control-animated-xs" class="form-label">form-control-xs</label>
                <input type="text" id="form-control-animated-xs" class="form-control form-control-xs" placeholder="form-control-xs"/>
            </div>
            <div class="form-control-animated-sm">
                <label for="form-control-animated-sm" class="form-label">form-control-sm</label>
                <input type="text" id="form-control-animated-sm" class="form-control form-control-sm" placeholder="form-control-sm"/>
            </div>
            <div class="form-control-animated-md">
                <label for="form-control-animated-md" class="form-label">form-control-md</label>
                <input type="text" id="form-control-animated-md" class="form-control form-control-md" placeholder="form-control-md"/>
            </div>
            <div class="form-control-animated-lg">
                <label for="form-control-animated-lg" class="form-label">form-control-lg</label>
                <input type="text" id="form-control-animated-lg" class="form-control form-control-lg" placeholder="form-control-lg"/>
            </div>
            <div class="form-control-animated-xl">
                <label for="form-control-animated-xl" class="form-label">form-control-xl</label>
                <input type="text" id="form-control-animated-xl" class="form-control form-control-xl" placeholder="form-control-xl"/>
            </div>
            <div class="form-control-animated-2xl">
                <label for="form-control-animated-2xl" class="form-label">form-control-2xl</label>
                <input type="text" id="form-control-animated-2xl" class="form-control form-control-2xl" placeholder="form-control-2xl"/>
            </div>
            <div class="form-control-animated-3xl">
                <label for="form-control-animated-3xl" class="form-label">form-control-3xl</label>
                <input type="text" id="form-control-animated-3xl" class="form-control form-control-3xl" placeholder="form-control-3xl"/>
            </div>
            <div class="form-control-animated-4xl">
                <label for="form-control-animated-4xl" class="form-label">form-control-4xl</label>
                <input type="text" id="form-control-animated-4xl" class="form-control form-control-4xl" placeholder="form-control-4xl"/>
            </div>

        </div>
    ),
}

export const FormSelectAnimatedLabels = {
    name: 'Animated Labels - Form Select',
    render: () => (
        <div class="flex flex-col gap-4 min-h-[750px]">
            <div class="form-control-animated">
                <label for="form-select-animated" class="form-label">form-select</label>
                <select id="form-select-animated" class="form-select">
                    <option value=""></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
            <div class="form-control-animated-xs">
                <label for="form-select-animated-xs" class="form-label">form-select-xs</label>
                <select id="form-select-animated-xs" class="form-select form-select-xs">
                    <option value=""></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
            <div class="form-control-animated-sm">
                <label for="form-select-animated-sm" class="form-label">form-select-sm</label>
                <select id="form-select-animated-sm" class="form-select form-select-sm">
                    <option value=""></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
            <div class="form-control-animated-md">
                <label for="form-select-animated-md" class="form-label">form-select-md</label>
                <select id="form-select-animated-md" class="form-select form-select-md">
                    <option value=""></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
            <div class="form-control-animated-lg">
                <label for="form-select-animated-lg" class="form-label">form-select-lg</label>
                <select id="form-select-animated-lg" class="form-select form-select-lg">
                    <option value=""></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
            <div class="form-control-animated-xl">
                <label for="form-select-animated-xl" class="form-label">form-select-xl</label>
                <select id="form-select-animated-xl" class="form-select form-select-xl">
                    <option value=""></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
            <div class="form-control-animated-2xl">
                <label for="form-select-animated-2xl" class="form-label">form-select-2xl</label>
                <select id="form-select-animated-2xl" class="form-select form-select-2xl">
                    <option value=""></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
            <div class="form-control-animated-3xl">
                <label for="form-select-animated-3xl" class="form-label">form-select-3xl</label>
                <select id="form-select-animated-3xl" class="form-select form-select-3xl">
                    <option value=""></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
            <div class="form-control-animated-4xl">
                <label for="form-select-animated-4xl" class="form-label">form-select-4xl</label>
                <select id="form-select-animated-4xl" class="form-select form-select-4xl">
                    <option value=""></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>

        </div>
    ),
}