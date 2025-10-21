import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
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
    	  	{ text: 'Home', link: '/' },
    	  	{ text: 'Examples', link: '/markdown-examples', activeMatch: 'markdown-examples' },
			{ text: 'Components', link: '/components', activeMatch: '/components/' },
    	],

    	sidebar: {
    	  	'markdown-examples': {
				base: '/markdown-examples/',
    	  	  	items: [
					{
						text: 'Markdown Examples',
						collapsed: false,
						items: [
							{ text: 'Markdown Examples', link: '/markdown-examples' },
    	  	  	  			{ text: 'Runtime API Examples', link: '/api-examples' }
						]
					}
    	  	  	]
    	  	},
			'components': {
				items: [
					{
						text: 'Buttons',
						collapsed: false,
						items: [
							{ text: 'Button', link: '../../packages/btn' }
						]
					}
				]
			}
		},

    	socialLinks: [
    	  	{ icon: 'github', link: 'https://github.com/vue-interface/vue-interface-new' }
    	],

		editLink: {
            pattern: 'https://github.com/vue-interface/vue-interface/edit/jsx/docs/:path'
        }
  	}
})
