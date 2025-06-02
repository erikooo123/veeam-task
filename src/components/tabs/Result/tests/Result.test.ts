import { expect, test, vi } from 'vitest';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { setup } from './setup';

test('should render all form fields from the config', async () => {
	setup();

	expect(screen.getByLabelText('Username')).toBeVisible();
	expect(screen.getByLabelText('Age')).toBeVisible();
	expect(screen.getByLabelText('Subscribe')).toBeVisible();
});

test('should render all buttons from the config', async () => {
	setup();

	expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
	expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
});

test('should update field values on user input', async () => {
	const { user } = setup();

	const usernameInput = screen.getByLabelText('Username');
	const ageInput = screen.getByLabelText('Age');
	const subscribeCheckbox = screen.getByLabelText('Subscribe');

	await user.type(usernameInput, 'testuser');
	await user.type(ageInput, '25');
	await user.click(subscribeCheckbox);

	expect(usernameInput).toHaveValue('testuser');
	expect(ageInput).toHaveValue(25);
	expect(subscribeCheckbox).toBeChecked();
});

test('should show alert with "Submit" text when Submit button is clicked', async () => {
	vi.spyOn(window, 'alert').mockImplementation(() => {});

	const { user } = setup();

	await user.click(screen.getByRole('button', { name: 'Submit' }));

	expect(window.alert).toHaveBeenCalledWith('Submit');
});
