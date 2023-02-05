import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	clearScreen: false,
	server: {
		port: 1420,
		strictPort: true,
	},

	envPrefix: ['VITE_'],
	build: {
		outDir: './src-electron/dist',
		target: 'es2015',
	},
	resolve: {
		alias: {
			'@libs': resolve(__dirname, './src/libs'),
		},
	},
})
