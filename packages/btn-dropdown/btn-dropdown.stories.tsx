import type { Meta, StoryObj } from '@storybook/vue3';
import { ref, withModifiers } from 'vue';
import './index.css';
import BtnDropdown from './src/BtnDropdown.vue';

const meta = {
    title: 'Example/Button Dropdown',
    tags: ['autodocs']
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>

export const BasicUsage = {
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
                            label="test"
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
