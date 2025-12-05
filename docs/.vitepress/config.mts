import tailwindcss from '@tailwindcss/vite';
import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vitepress';

// This function automatically generates sidebar items, including nested children
function generatePackagesSidebar() {
  	const filePath = path.resolve(__dirname, '../../docs/packages.md')
  	const lines = fs.readFileSync(filePath, 'utf-8')
  	  	.split('\n')
  	  	.filter(l => l.trim().startsWith('-'))

  	const tree: any[] = [], stack: any[] = [{ indent: -1, items: tree }]

  	for (const line of lines) {
  	  	const indent = line.match(/^\s*/)?.[0].length ?? 0
  	  	const [, text, link] = line.match(/\[([^\]]+)\]\(([^)]+)\)/) || []
  	  	const item: any = { text: text || line.replace(/^\s*-\s*/, '').trim(), ...(link && { link }) }

  	  	while (indent <= stack[stack.length - 1].indent) stack.pop()
  	  	stack[stack.length - 1].items.push(item)
  	  	stack.push({ indent, items: (item.items = []) })
  	}

  	return tree
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
					if ([
						'theme-default/styles/base.css',
						'theme-default/styles/components/vp-doc.css'
					].some(suffix => id.endsWith(suffix))) {
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
			{ text: 'Packages', link: '/docs/packages', activeMatch: 'packages' },
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
    	  	{ icon: 'github', link: 'https://github.com/vue-interface/vue-interface-new/tree/jsx' }
    	],

		editLink: {
            pattern: 'https://github.com/vue-interface/vue-interface/edit/main/:path'
        }
  	},
	/* head: [
        [
            'script',
            {async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-L1GWWG8KPL'}
        ],
        [
            'script',
            {},
            `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L1GWWG8KPL');`
        ]
    ], */
    sitemap: {
        hostname: 'https://vue-interface.com'
    }
})