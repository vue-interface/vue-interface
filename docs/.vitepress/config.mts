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
			{ text: 'Components', link: '/components', activeMatch: 'components' },
    	],

		sidebar: {
		  	'/': [
				{
		  	    	text: 'Introduction',
		  	    	collapsed: false,
		  	    	items: [
		  	    	  	{ text: 'What is Vue Interface?', link: '/about' },
		  	    	  	{ text: 'Getting Started', link: '/getting-started' }
		  	    	]
		  	  	},
				{
					text: 'Components',
		  	    	collapsed: false,
		  	    	items: [
						{ text: 'Index of Components', link: '/components' },
		  	    	  	{ text: 'Directives', link: '/directives' },
		  	    	  	{ text: 'Buttons', link: '/buttons' },
		  	    	  	{ text: 'Form Fields', link: '/form-fields' },
						{ text: 'Miscellaneous', link: '/misc' }
		  	    	]
				}
		  	],
		},

    	socialLinks: [
    	  	{ icon: 'github', link: 'https://github.com/vue-interface/vue-interface-new' }
    	],

		editLink: {
            pattern: 'https://github.com/vue-interface/vue-interface-new/edit/jsx/docs/:path'
        }
  	}
})
