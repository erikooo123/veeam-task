import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['./src/setupTests.tsx'],
		coverage: {
			reporter: ['text', 'json', 'html'],
			exclude: ['node_modules/', '**/*.test.ts', '**/*.test.tsx'],
		},
		css: true,
	},
});
