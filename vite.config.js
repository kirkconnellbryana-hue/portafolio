import { defineConfig } from 'vite'
export default defineConfig({
  base: './',
  css: { preprocessorOptions: { less: {} } },
  build: { cssMinify: true, minify: 'oxc' }
})
