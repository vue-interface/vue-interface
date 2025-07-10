import type { Meta, StoryObj } from '@storybook/vue3';
/* import { ref, onMounted, computed } from 'vue'; */
import './index.css';
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
  render: () => {
    const inputs = [
      { label: 'Some Label', props: {} },
      { label: 'Placeholder', props: { placeholder: 'Placeholder' } },
      { label: 'Disabled', props: { value: 'Disabled', disabled: true } },
      { label: 'Disabled (Placeholder)', props: { placeholder: 'Disabled', disabled: true } },
      { label: 'Readonly', props: { placeholder: 'Readonly', readonly: true } },
    ];

    return (
      <div class="flex flex-col gap-4">
        {inputs.map(({ label, props }, index) => (
          <div key={index}>
            <label class="form-label">{label}</label>
            <input type="text" class="form-control" {...props} />
          </div>
        ))}
      </div>
    );
  },
} satisfies Story;

export const FormControlPlaintext = {
    name: 'Form Control Plaintext',
    render: () => ( 
        <div class="flex flex-col gap-4">           
            <div>
                <label class="form-label">Plaintext</label>
                {[
                    { value: 'Readonly', readonly: true },
                    { placeholder: 'Readonly Placeholder', readonly: true },
                    { value: 'Readonly & Disabled', readonly: true, disabled: true },
                    { value: 'Readonly & Disabled Placeholder', readonly: true, disabled: true },
                ].map((props, index) => (
                    <input
                        key={index}
                        type="text"
                        class="form-control-plaintext"
                        {...props}
                    />
                ))}
            </div>
        </div>
    ),
}

export const FormControlSizes = {
  name: 'Form Control Sizes',
  render: () => (
        <div class="flex flex-col gap-4">
            {[
                { label: 'Small', size: 'sm', placeholder: 'form-control-sm' },
                { label: 'Medium', size: 'md', placeholder: 'form-control' },
                { label: 'Large', size: 'lg', placeholder: 'form-control-lg' },
            ].map(({ label, size, placeholder }) => (
                <div>
                    <label class="form-label">{label}</label>
                    <input type="text" class={`form-control form-control-${size}`} placeholder={placeholder} />
                </div>
            ))}
        </div>
    ),
}

export const FormControlValidation = {
    name: 'Form Control Validation',
    render: () => ( 
        <div class="flex flex-col gap-4">
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
        const options = (
            <>
                <option>Option A</option>
                <option selected>Option B</option>
                <option>Option C</option>
            </>
        );

        const sizes = [
            { label: 'Small', class: 'form-select-sm' },
            { label: 'Medium', class: 'form-select-md' },
            { label: 'Large', class: 'form-select-lg' },
        ];

        return (
            <div class="flex flex-col gap-4">
                {sizes.map(({ label, class: sizeClass }) => (
                    <div>
                        <label class="form-label">{label}</label>
                        <select class={`form-select ${sizeClass}`}>{options}</select>
                    </div>
                ))}
            </div>
        );
    },
};

export const FormSelectValidation = {
  name: 'Form Select Validation',
  render: () => {
        const options = (
            <>
                <option>Option A</option>
                <option selected>Option B</option>
                <option>Option C</option>
            </>
        );

        const renderField = (type: 'valid' | 'invalid') => {
            const className = `form-select is-${type}`;
            const feedbackClass = `${type}-feedback`;
            const message =
              type === 'valid'
                ? 'This is an inline success message.'
                : 'This is an inline error.';

            return (
                <div>
                    <label class={`flex-shrink-0 ${feedbackClass}`}>
                      {type === 'valid' ? 'Valid Field' : 'Invalid Field'}
                    </label>
                    <div>
                      <select class={className}>{options}</select>
                      <div class={feedbackClass}>{message}</div>
                    </div>
                    <div class={feedbackClass}>{message}</div>
                    <div>
                      <div class={feedbackClass}>{message}</div>
                    </div>
                </div>
            );
        };

        return (
            <div class="flex flex-col gap-4">
                {renderField('invalid')}
                {renderField('valid')}
            </div>
        );
  },
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
            {['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'].map(size => (
              <div class="flex gap-1" key={size}>
                {['', 'checked', 'is-invalid', 'is-invalid checked', 'is-valid', 'is-valid checked'].map(state => {
                  const className = `form-check form-check-${size} ${state}`.trim();
                  const isChecked = state.includes('checked');
                  return (
                    <input
                      type="checkbox"
                      class={className}
                      checked={isChecked ? true : undefined}
                    />
                  );
                })}
              </div>
            ))}
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
                    <label class="flex gap-2 valid-feedback"><input type="checkbox" class="form-check is-valid"/> Valid</label>
                    <label class="flex gap-2 valid-feedback"><input type="checkbox" class="form-check is-valid" checked/> Valid</label>
                    <label class="flex gap-2 valid-feedback"><input type="radio" name="radio8" class="form-check is-valid"/> Valid</label>
                    <label class="flex gap-2 valid-feedback"><input type="radio" name="radio8" class="form-check is-valid" checked/> Valid</label>
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
  render: () => {
        const sizes = ['sm', 'md', 'lg'];

        return (
            <div class="flex flex-col gap-4">
                {sizes.map((size) => {
                    const id = `customFile-${size}`;
                    return (
                        <div class={`form-file form-file-${size}`} key={size}>
                            <input type="file" class="form-file-input" id={id} />
                            <label class="form-file-label" for={id}>
                                <span class="form-file-text">Choose file...</span>
                                <span class="form-file-button">Browse</span>
                            </label>
                        </div>
                    );
                })}
            </div>
        );
    },
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
  render: () => {
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'];

    return (
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          {sizes.map(size => (
            <input type="checkbox" class={`form-switch form-switch-${size}`} key={size} />
          ))}
        </div>
      </div>
    );
  },
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
                    <label class="flex gap-2 valid-feedback"><input type="checkbox" class="form-switch is-valid"/> Valid</label>
                    <label class="flex gap-2 valid-feedback"><input type="checkbox" class="form-switch is-valid" checked/> Valid</label>
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