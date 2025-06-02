import '@testing-library/jest-dom';
import 'jest-styled-components';
import { afterEach, vi } from 'vitest';

vi.mock('react-toastify', () => ({
	toast: {
		success: vi.fn(),
		error: vi.fn(),
	},
	ToastContainer: () => null,
}));

afterEach(() => {
	vi.clearAllMocks();
});
