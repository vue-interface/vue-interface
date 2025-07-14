import type { Meta, StoryObj } from '@storybook/vue3';
/* import { ref, onMounted, computed } from 'vue'; */
import './demo.css';
import './src/useFormControl';
 
const meta = {
    title: 'Example/Form Control',
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
} as Story;

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
 
            <h1 class="text-2xl">Custom Colors</h1>
            <input type="text" class="form-control form-control-amber-500" />
            <input type="text" class="form-control form-control-green-500" />
            <input type="text" class="form-control form-control-purple-500" />
            <input type="text" class="form-control form-control-neutral-500" />
           
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
    render: () => (
        <div class="flex flex-col gap-4">
            <select class="form-select form-select-xs">
                <option selected>form-select-xs</option>
            </select>

            <select class="form-select form-select-sm">
                <option selected>form-select-sm</option>
            </select>

            <select class="form-select form-select-md">
                <option selected>form-select-md</option>
            </select>

            <select class="form-select form-select-lg">
                <option selected>form-select-lg</option>
            </select>

            <select class="form-select form-select-xl">
                <option selected>form-select-xl</option>
            </select>

            <select class="form-select form-select-2xl">
                <option selected>form-select-2xl</option>
            </select>

            <select class="form-select form-select-3xl">
                <option selected>form-select-3xl</option>
            </select>

            <select class="form-select form-select-4xl">
                <option selected>form-select-4xl</option>
            </select>

            <select class="form-select form-select-4">
                <option selected>form-select-4</option>
            </select>

            <select class="form-select form-select-5">
                <option selected>form-select-5</option>
            </select>

            <select class="form-select form-select-6">
                <option selected>form-select-6</option>
            </select>

            <select class="form-select form-select-7">
                <option selected>form-select-7</option>
            </select>

            <select class="form-select form-select-8">
                <option selected>form-select-8</option>
            </select>

            <select class="form-select form-select-[16px]">
                <option selected>form-select-[16px]</option>
            </select>

            <select class="form-select form-select-[21px]">
                <option selected>form-select-[21px]</option>
            </select>
        </div>
    ),
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

            <h2 class="text-2xl mt-2">Custom Colors</h2>

            <select class="form-select form-select-amber-500">
                <option value=""></option>
                <option>1</option>
            </select>
            <select class="form-select form-select-green-500">
                <option value=""></option>
                <option>1</option>
            </select>
            <select class="form-select form-select-purple-500">
                <option value=""></option>
                <option>1</option>
            </select>
            <select class="form-select form-select-neutral-500">
                <option value=""></option>
                <option>1</option>
            </select>
        </div>
    ),
};

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
    render: () => (
        <div class="flex flex-col gap-4">
            <div class="flex gap-1">
                <input type="checkbox" class="form-check form-check-xs"/>
                <input type="checkbox" class="form-check form-check-xs" checked/>
                <input type="checkbox" class="form-check form-check-xs is-invalid"/>
                <input type="checkbox" class="form-check form-check-xs is-invalid" checked/>
                <input type="checkbox" class="form-check form-check-xs is-valid"/>
                <input type="checkbox" class="form-check form-check-xs is-valid" checked/>
            </div>
            
            <div class="flex gap-1">
                <input type="checkbox" class="form-check form-check-sm"/>
                <input type="checkbox" class="form-check form-check-sm" checked/>
                <input type="checkbox" class="form-check form-check-sm is-invalid"/>
                <input type="checkbox" class="form-check form-check-sm is-invalid" checked/>
                <input type="checkbox" class="form-check form-check-sm is-valid"/>
                <input type="checkbox" class="form-check form-check-sm is-valid" checked/>
            </div>
            
            <div class="flex gap-1">
                <input type="checkbox" class="form-check form-check-md"/>
                <input type="checkbox" class="form-check form-check-md" checked/>
                <input type="checkbox" class="form-check form-check-md is-invalid"/>
                <input type="checkbox" class="form-check form-check-md is-invalid" checked/>
                <input type="checkbox" class="form-check form-check-md is-valid"/>
                <input type="checkbox" class="form-check form-check-md is-valid" checked/>
            </div>
            
            <div class="flex gap-1">
                <input type="checkbox" class="form-check form-check-lg"/>
                <input type="checkbox" class="form-check form-check-lg" checked/>
                <input type="checkbox" class="form-check form-check-lg is-invalid"/>
                <input type="checkbox" class="form-check form-check-lg is-invalid" checked/>
                <input type="checkbox" class="form-check form-check-lg is-valid"/>
                <input type="checkbox" class="form-check form-check-lg is-valid" checked/>
            </div>
            
            <div class="flex gap-1">
                <input type="checkbox" class="form-check form-check-xl"/>
                <input type="checkbox" class="form-check form-check-xl" checked/>
                <input type="checkbox" class="form-check form-check-xl is-invalid"/>
                <input type="checkbox" class="form-check form-check-xl is-invalid" checked/>
                <input type="checkbox" class="form-check form-check-xl is-valid"/>
                <input type="checkbox" class="form-check form-check-xl is-valid" checked/>
            </div>
            
            <div class="flex gap-1">
                <input type="checkbox" class="form-check form-check-2xl"/>
                <input type="checkbox" class="form-check form-check-2xl" checked/>
                <input type="checkbox" class="form-check form-check-2xl is-invalid"/>
                <input type="checkbox" class="form-check form-check-2xl is-invalid" checked/>
                <input type="checkbox" class="form-check form-check-2xl is-valid"/>
                <input type="checkbox" class="form-check form-check-2xl is-valid" checked/>
            </div>
            
            <div class="flex gap-1">
                <input type="checkbox" class="form-check form-check-3xl"/>
                <input type="checkbox" class="form-check form-check-3xl" checked/>
                <input type="checkbox" class="form-check form-check-3xl is-invalid"/>
                <input type="checkbox" class="form-check form-check-3xl is-invalid" checked/>
                <input type="checkbox" class="form-check form-check-3xl is-valid"/>
                <input type="checkbox" class="form-check form-check-3xl is-valid" checked/>
            </div>
            
            <div class="flex gap-1">
                <input type="checkbox" class="form-check form-check-4xl"/>
                <input type="checkbox" class="form-check form-check-4xl" checked/>
                <input type="checkbox" class="form-check form-check-4xl is-invalid"/>
                <input type="checkbox" class="form-check form-check-4xl is-invalid" checked/>
                <input type="checkbox" class="form-check form-check-4xl is-valid"/>
                <input type="checkbox" class="form-check form-check-4xl is-valid" checked/>
            </div>
            
            <div class="flex gap-1">
                <input type="checkbox" class="form-check form-check-4"/>
                <input type="checkbox" class="form-check form-check-4" checked/>
                <input type="checkbox" class="form-check form-check-4 is-invalid"/>
                <input type="checkbox" class="form-check form-check-4 is-invalid" checked/>
                <input type="checkbox" class="form-check form-check-4 is-valid"/>
                <input type="checkbox" class="form-check form-check-4 is-valid" checked/>
            </div>
            
            <div class="flex gap-1">
                <input type="checkbox" class="form-check form-check-5"/>
                <input type="checkbox" class="form-check form-check-5" checked/>
                <input type="checkbox" class="form-check form-check-5 is-invalid"/>
                <input type="checkbox" class="form-check form-check-5 is-invalid" checked/>
                <input type="checkbox" class="form-check form-check-5 is-valid"/>
                <input type="checkbox" class="form-check form-check-5 is-valid" checked/>
            </div>
            
            <div class="flex gap-1">
                <input type="checkbox" class="form-check form-check-6"/>
                <input type="checkbox" class="form-check form-check-6" checked/>
                <input type="checkbox" class="form-check form-check-6 is-invalid"/>
                <input type="checkbox" class="form-check form-check-6 is-invalid" checked/>
                <input type="checkbox" class="form-check form-check-6 is-valid"/>
                <input type="checkbox" class="form-check form-check-6 is-valid" checked/>
            </div>
            
            <div class="flex gap-1">
                <input type="checkbox" class="form-check form-check-7"/>
                <input type="checkbox" class="form-check form-check-7" checked/>
                <input type="checkbox" class="form-check form-check-7 is-invalid"/>
                <input type="checkbox" class="form-check form-check-7 is-invalid" checked/>
                <input type="checkbox" class="form-check form-check-7 is-valid"/>
                <input type="checkbox" class="form-check form-check-7 is-valid" checked/>
            </div>
            
            <div class="flex gap-1">
                <input type="checkbox" class="form-check form-check-8"/>
                <input type="checkbox" class="form-check form-check-8" checked/>
                <input type="checkbox" class="form-check form-check-8 is-invalid"/>
                <input type="checkbox" class="form-check form-check-8 is-invalid" checked/>
                <input type="checkbox" class="form-check form-check-8 is-valid"/>
                <input type="checkbox" class="form-check form-check-8 is-valid" checked/>
            </div>
            
            <div class="flex gap-1">
                <input type="checkbox" class="form-check form-check-[16px]"/>
                <input type="checkbox" class="form-check form-check-[16px]" checked/>
                <input type="checkbox" class="form-check form-check-[16px] is-invalid"/>
                <input type="checkbox" class="form-check form-check-[16px] is-invalid" checked/>
                <input type="checkbox" class="form-check form-check-[16px] is-valid"/>
                <input type="checkbox" class="form-check form-check-[16px] is-valid" checked/>
            </div>
            
            <div class="flex gap-1">
                <input type="checkbox" class="form-check form-check-[21px]"/>
                <input type="checkbox" class="form-check form-check-[21px]" checked/>
                <input type="checkbox" class="form-check form-check-[21px] is-invalid"/>
                <input type="checkbox" class="form-check form-check-[21px] is-invalid" checked/>
                <input type="checkbox" class="form-check form-check-[21px] is-valid"/>
                <input type="checkbox" class="form-check form-check-[21px] is-valid" checked/>
            </div>
        </div>
    ),
}

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

export const FileBrowser = {
    name: 'File Browser',
    render: () => ( 
        <div class="flex flex-col gap-4">
            <div class="form-file">
                <input type="file" class="form-file-input" id="customFile"/>
                <label class="form-file-label" for="customFile">
                    <span class="form-file-text">Choose file...</span>
                    <span class="form-file-button">Browse</span>
                </label>
            </div>
            <div class="form-file">
                <input type="file" class="form-file-input" id="customFileDisabled" disabled/>
                <label class="form-file-label" for="customFileDisabled">
                    <span class="form-file-text">Choose file...</span>
                    <span class="form-file-button">Browse</span>
                </label>
            </div>
        </div> 
    ),
}

export const FileBrowserSizes = {
    name: 'File Browser Sizes',
    render: () => (
        <div class="flex flex-col gap-4">
            <div class="form-file form-file-sm">
                <input type="file" class="form-file-input" id="customFile"/>
                <label class="form-file-label" for="customFile">
                    <span class="form-file-text">Choose file...</span>
                    <span class="form-file-button">Browse</span>
                </label>
            </div>

            <div class="form-file form-file-md">
                <input type="file" class="form-file-input" id="customFile"/>
                <label class="form-file-label" for="customFile">
                    <span class="form-file-text">Choose file...</span>
                    <span class="form-file-button">Browse</span>
                </label>
            </div>

            <div class="form-file form-file-lg">
                <input type="file" class="form-file-input" id="customFile"/>
                <label class="form-file-label" for="customFile">
                    <span class="form-file-text">Choose file...</span>
                    <span class="form-file-button">Browse</span>
                </label>
            </div>
        </div>
    ),
};

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
            <input type="checkbox" class="form-switch form-switch-xs"/>
            <input type="checkbox" class="form-switch form-switch-sm"/>
            <input type="checkbox" class="form-switch form-switch-md"/>
            <input type="checkbox" class="form-switch form-switch-lg"/>
            <input type="checkbox" class="form-switch form-switch-xl"/>
            <input type="checkbox" class="form-switch form-switch-2xl"/>
            <input type="checkbox" class="form-switch form-switch-3xl"/>
            <input type="checkbox" class="form-switch form-switch-4xl"/>
            <input type="checkbox" class="form-switch form-switch-4"/>
            <input type="checkbox" class="form-switch form-switch-5"/>
            <input type="checkbox" class="form-switch form-switch-6"/>
            <input type="checkbox" class="form-switch form-switch-7"/>
            <input type="checkbox" class="form-switch form-switch-8"/>
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