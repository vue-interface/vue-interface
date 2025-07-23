import type { Meta, StoryObj } from '@storybook/vue3';
import { defineComponent } from 'vue';
import './demo.css';
import vAutogrow from './src/vAutogrow';
 
const meta = {
    title: 'Example/Form Fields/Autogrow',
    tags: ['autodocs']
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>

export const AutogrowBasicUsage = {
    name: 'Basic Usage',
    render: (() => defineComponent({
        directives:{
            'autogrow': vAutogrow
        },
        render: () => (
            <textarea v-autogrow rows="6" class="form-control"/>
        )
    })) as any
} satisfies Story;