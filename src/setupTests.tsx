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

// Poprawiony mock dla react-ace
// vi.mock('react-ace', () => ({
//     __esModule: true,
//     default: forwardRef(({ value, onChange }: IAceEditorProps, ref: any) => {
//         useImperativeHandle(ref, () => ({
//             editor: {
//                 getValue: () => value,
//                 setValue: (newValue: string) => onChange?.(newValue),
//             }
//         }));

//         return (
//             <textarea
//                 data-testid="ace-editor"
//                 value={value}
//                 onChange={(e) => onChange?.(e.target.value, e)}
//             />
//         );
//     })
// }));

afterEach(() => {
	vi.clearAllMocks();
});
