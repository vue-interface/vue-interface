import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import fs from 'fs';
import { defineConfig } from 'vitepress';

function generatePackagesSidebar() {
  	const filePath = path.resolve(__dirname, '../../docs/packages.md');
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
            },
			{
			  	name: 'auto-restart-on-packages-change',
			  	configureServer(server) {
			  	  	const file = path.resolve(__dirname, '../../docs/packages.md')
			  	  	const config = path.resolve(__dirname, 'config.mts')
					
			  	  	server.watcher.add(file)
			  	  	server.watcher.on('change', (changed) => {
			  	  	  	if (changed === file) {
			  	  	  	  	console.log('\n📦 packages.md changed — restarting VitePress...\n')
			  	  	  	  	const now = new Date()
			  	  	  	  	fs.utimesSync(config, now, now)
			  	  	  	}
			  	  	})
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
  	  	  	  	'@': path.resolve(__dirname, '../../packages')
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
			{ text: 'Packages', link: '/docs/packages', activeMatch: 'pacakges' },
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
            pattern: 'https://github.com/vue-interface/vue-interface-new/edit/jsx/:path'
        }
  	}
})