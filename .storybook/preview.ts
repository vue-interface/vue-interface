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
    }
  },
};

export default preview;
