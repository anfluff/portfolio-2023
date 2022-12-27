import { sveltekit } from '@sveltejs/kit/vite'

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  server: {
    host: '0.0.0.0',
    port: '8080',
    open: false
  }
}

export default config
