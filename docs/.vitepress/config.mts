import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import fs from 'fs';
import { defineConfig } from 'vitepress';

function generatePackagesSidebar() {
  	const filePath = path.resolve(__dirname, '../../docs/components.md');
  	const content = fs.readFileSync(filePath, 'utf-8');

  	const regex = /\- \[([^\]]+)\]\(([^)]+)\)/g;
  	const items = [];
  	let match;

  	while ((match = regex.exec(content)) !== null) {
  	  	const [, text, link] = match;
  	  	items.push({ text, link });
  	}

  	return items;
}

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
			{ text: 'Pakcages', link: '/docs/packages', activeMatch: 'pacakges' },
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
				text: 'Packages',
				link: '/docs/packages',
	  	    	collapsed: false,
	  	    	items: generatePackagesSidebar()
			},
		],

    	socialLinks: [
    	  	{ icon: 'github', link: 'https://github.com/vue-interface/vue-interface-new' }
    	],

		editLink: {
            pattern: 'https://github.com/vue-interface/vue-interface-new/edit/jsx/docs/:path'
        }
  	}
})