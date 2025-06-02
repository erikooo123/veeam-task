import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['./src/utilities/testing/setupTests.tsx'],
		coverage: {
			reporter: ['text', 'json', 'html'],
			exclude: ['node_modules/', '**/*.test.ts', '**/*.test.tsx'],
		},
		css: true,
	},
});
