import type { Meta, StoryObj } from '@storybook/vue3';
/* import { ref, onMounted, computed } from 'vue'; */
import './index.css';
import './src/useFormControl.ts';
 
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
            <h2 class="text-2xl mt-2">Sizes</h2>
            <div>
                <label class="form-label">Small</label>
                <input type="text" class="form-control form-control-sm" placeholder="form-control-sm" />
            </div>
            
            <div>
                <label class="form-label">Medium</label>
                <input type="text" class="form-control form-control-md" placeholder="form-control" />
            </div>
            
            <div>
                <label class="form-label">Large</label>
                <input type="text" class="form-control form-control-lg" placeholder="form-control-lg" />
            </div>
            <div>
                <label class="form-label">Plaintext</label>
                <input type="text" id="control" class="form-control-plaintext" value="Readonly" readonly />
                <input type="text" id="control" class="form-control-plaintext" placeholder="Readonly Placeholder" readonly />
                <input type="text" id="control" class="form-control-plaintext" value="Readonly & Disabled" readonly disabled />
                <input type="text" id="control" class="form-control-plaintext" value="Readonly & Disabled Placeholder" readonly disabled />
            </div>
            <h2 class="text-2xl mt-2">Validation</h2>
            <div>
                <label class="flex-shrink-0 invalid-feedback">Invalid Field</label>
                <div>
                    <input type="text" class="form-control is-invalid" value="This field is invalid" />
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
                    <input type="text" class="form-control is-valid" value="This field is invalid" />
                    <div class="valid-feedback">This is an inline success message.</div>
                </div>
                <div class="valid-feedback">This is an inline success message.</div>
                <div>
                    <div class="valid-feedback">This is an inline success message.</div>
                </div>
            </div>
        </div>
    ),
} satisfies Story;

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
            <h2 class="text-2xl mt-2">Sizes</h2>
            
            <div>   
                <label class="form-label">Small</label>
                <select class="form-select form-select-sm">
                    <option>Option A</option>
                    <option selected>Option B</option>
                    <option>Option C</option>
                </select>
            </div>
            
            <div>
                <label class="form-label">Medium</label>
                <select class="form-select form-select-md">
                    <option>Option A</option>
                    <option selected>Option B</option>
                    <option>Option C</option>
                </select>
            </div>
            <div>
                <label class="form-label">Large</label>
                <select class="form-select form-select-lg">
                    <option>Option A</option>
                    <option selected>Option B</option>
                    <option>Option C</option>
                </select>
            </div>
            <h2 class="text-2xl mt-2">Validation</h2>
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
                    <select class="form-select is-valid">
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
        </div>
    ),
}