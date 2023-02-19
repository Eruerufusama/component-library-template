import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

const removeMatchingFilesFromPackage = (filepath) => {
  const invalidFileEndings = [
    '.story.svelte',
    '.story.md',
    '.test.ts',
    '.types.ts',
  ]

  invalidFileEndings.forEach((ending) => {
    if (filepath.endsWith(ending)) {
      return false
    }
  })
  return true
}

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
  package: {
    source: 'src/lib',
    files: (filepath) => removeMatchingFilesFromPackage(filepath)
  },
}
