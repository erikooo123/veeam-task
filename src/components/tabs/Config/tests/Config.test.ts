import { expect, test, vi } from 'vitest';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { setup } from './setup';
import { toast } from 'react-toastify';

test('should show success toast when saving valid JSON', async () => {
	const { user } = setup();

	const saveButton = screen.getByRole('button', { name: 'Save' });
	await user.click(saveButton);

	expect(toast.success).toHaveBeenCalledWith('Configuration saved successfully!');
});

test('should show error toast and throw when saving invalid JSON', async () => {
	const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
	const { user } = setup();

	const editor = screen.getByRole('textbox');
	await user.clear(editor);
	await user.type(editor, 'invalid json');

	const saveButton = screen.getByRole('button', { name: 'Save' });
	await user.click(saveButton);

	expect(toast.error).toHaveBeenCalledWith('Something went wrong. Please check your JSON syntax.');
	consoleSpy.mockRestore();
});
