import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
  package: {
    source: 'src/lib',
    files: (filepath) => (
      filepath.endsWith('.story.svelte') || filepath.endsWith('.story.md')
        ? false
        : true
    )
  }
}
