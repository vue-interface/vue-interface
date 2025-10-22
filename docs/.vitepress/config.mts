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
    	  	{ text: 'Guide', link: 'getting-started', activeMatch: 'getting-started' },
			{ text: 'Components', link: '/components', activeMatch: '/components/' },
    	],

    	sidebar: {
    	  	'/': {
				base: '/',
    	  	  	items: [
					{
						text: 'Introduction',
						collapsed: false,
						items: [
							{ text: 'What is Vue Interface?', link: 'about' },
							{ text: 'Getting Started', link: 'getting-started' },
    	  	  	  			{ text: 'Runtime API Examples', link: 'api-examples' }
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
            pattern: 'https://github.com/vue-interface/vue-interface-new/edit/jsx/docs/:path'
        }
  	}
})
