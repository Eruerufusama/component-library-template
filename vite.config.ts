import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import lightningcss from 'vite-plugin-lightningcss'
import Icons from 'unplugin-icons/vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svelte(),
		Icons({ compiler: 'svelte' }),
		lightningcss({ browserslist: ['last 2 versions', '> 0.2% in alt-EU', 'not dead'] }),
	],
})
