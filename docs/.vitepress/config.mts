import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({	
	srcDir: path.resolve(__dirname, '../../'),
  	srcExclude: ['**/node_modules/**', '**/dist/**'],

	rewrites: {
		'docs/index.md': 'index.md'
	},

	vite: {
        plugins: [
			tailwindcss(), 
            {
                name: 'exclude-vitepress-base-css',
                enforce: 'pre',
                load(id) {
                    if (id.endsWith('theme-default/styles/base.css')) {
                        return ''
                    }
                }
            }
		],
  	  	resolve: {
			conditions: [
				'source',
				'import',
				'require',
			],
  	  	  	alias: {
  	  	  	  	'@packages': path.resolve(__dirname, '../../packages')
  	  	  	}
  	  	},
  	},
	
	lang: 'en-US',
    title: "Vue Interface",
    description: "Complete documentation for the Vue Interface component library",
	lastUpdated: true,
  	themeConfig: {
    	// https://vitepress.dev/reference/default-theme-config
		search: {
            provider: 'local'
        },

    	nav: [
    	  	{ text: 'Home', link: '/docs/index' },
    	  	{ text: 'Guide', link: '/docs/getting-started', activeMatch: 'getting-started' },
			{ text: 'Components', link: '/docs/components', activeMatch: 'components' },
    	],

		sidebar: [
			{
	  	    	text: 'Introduction',
	  	    	collapsed: false,
	  	    	items: [
	  	    	  	{ text: 'What is Vue Interface?', link: '/docs/about' },
	  	    	  	{ text: 'Getting Started', link: '/docs/getting-started' }
	  	    	]
	  	  	},
			{
				text: 'Components',
				link: '/docs/components',
	  	    	collapsed: false,
	  	    	items: [
	  	    	  	{ text: 'Directives', collapsed: true,
						items: [
              				{ text: 'Autogrow', link: 'autogrow' }
            			] 
					 },
	  	    	  	{ text: 'Buttons', collapsed: false,
						items: [
              				{ text: 'Button', link: '/packages/btn/btn' },
              				{ text: 'Button Group', link: '/btn/btn-group' },
              				{ text: 'Button Dropdown', link: '/btn-dropdown' },
              				{ text: 'Button Activity', link: '/btn-activity' },
            			] 
					},
	  	    	  	{ text: 'Form Fields', collapsed: true,
						items: [
              				{ text: 'Form Control', link: 'form-control' },
              				{ text: 'Checkbox Field', link: 'checkbox-field' },
              				{ text: 'Input Field', link: 'input-field' },
              				{ text: 'Light Switch Field', link: 'light-switch-field' },
              				{ text: 'Radio Field', link: 'radio-field' },
              				{ text: 'Select Field', link: 'select-field' },
              				{ text: 'Textarea Field', link: 'textarea-field' }
            			]
					},
					{ text: 'Miscellaneous', collapsed: true,
						items: [
							{ text: 'Activity Indicator', link: 'activity-indicator' },
							{ text: 'Dropdown Menu', link: 'dropdown-menu' },
							{ text: 'Modal', link: 'modal' },
							{ text: 'Tooltip', link: 'tooltip' },
						]
					}
	  	    	]
			}
		],

    	socialLinks: [
    	  	{ icon: 'github', link: 'https://github.com/vue-interface/vue-interface-new' }
    	],

		editLink: {
            pattern: 'https://github.com/vue-interface/vue-interface-new/edit/jsx/docs/:path'
        }
  	}
})