import type { Meta, StoryObj } from '@storybook/vue3';
import './index.css';
// type PagePropsAndCustomArgs = ComponentPropsAndSlots<typeof Page> & { footer?: string };
 
const meta = {
    title: 'Example/Dropdown Menu',
    tags: ['autodocs']
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>

export const DropdownMenu = {
    name: 'Dropdown-Menu',
    parameters: {
        backgrounds: {
            options: {
                light: { name: 'Light', value: '#fff' },
                dark: { name: 'Dark', value: '#333' },
            },
        },
    },
    render: () => (
        <div class="relative">
            <div class="dropdown-menu show relative">
                <h3 class="dropdown-header">Vue Router</h3>
                <h3 class="dropdown-header">Links</h3>
                <a href="#" class="dropdown-item active">Item #2</a>
                <a href="#" class="dropdown-item">Item #3</a>
                <div class="dropdown-item-text">Plain Text</div>
                <hr class="dropdown-divider" />
                <a href="#" class="dropdown-item">Item #4</a>
                <h3 class="dropdown-header">Heading Element</h3>
                <div class="dropdown-item"><i>italic text</i></div>
                <div class="dropdown-item"><b>bold text</b></div>
                <div class="dropdown-item"><em>strong text</em></div>
                <div class="dropdown-item"><sub>subscripted text</sub></div>
                <div class="dropdown-item"><sup>superscripted text</sup></div>
                <div class="dropdown-item"><small>small text</small></div>
                <div class="dropdown-item"><del>deleted text</del></div>
                <div class="dropdown-item"><ins>inserted text</ins></div>
                <div class="dropdown-item"><blockquote>quoted text</blockquote></div>
                <div class="dropdown-item"><q>short quoted text</q></div>
                <div class="dropdown-item"><cite>cited text</cite></div>
                <div class="dropdown-item"><address>address</address></div>
                <div class="dropdown-item"><abbr title="inserted text">inserted text</abbr></div>
                <div class="dropdown-item"><code>code snippet</code></div>
                <div class="dropdown-item"><mark>marked text</mark></div>
                <div class="dropdown-item-plain">Unstyled text</div>
            </div>
        </div>
    ),
} satisfies Story;