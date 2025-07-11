import type { Preview } from '@storybook/vue3-vite';

import { MINIMAL_VIEWPORTS } from 'storybook/viewport';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: {
            default: 'light',
            values: [
                { name: 'light', value: '#ffffff' },
                { name: 'dark', value: '#1e1e1e' },
            ],
        },
        viewport: {
            MINIMAL_VIEWPORTS
        },

        docs: {
            source: {
                type: 'code',
                transform: (src, storyContext) => {
                // Extract just the JSX from render function
                    const renderMatch = src.match(/render:\s*\(\)\s*=>\s*(.+)(?=,|\s*})/s);
                    if(renderMatch) {
                        return renderMatch[1].trim();
                    }
                    return src;
                }
            }
        }
    },
};

export default preview;
