import { expect, test } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { setup } from './setup';

test('should render both Config and Result tabs', async () => {
	setup();

	expect(screen.getByRole('tab', { name: 'Config' })).toBeInTheDocument();
	expect(screen.getByRole('tab', { name: 'Result' })).toBeInTheDocument();
});

test('should switch between tabs when clicking tab buttons', async () => {
	const user = userEvent.setup();
	setup();

	const configTab = screen.getByRole('tab', { name: 'Config' });
	const resultTab = screen.getByRole('tab', { name: 'Result' });

	expect(configTab).toHaveAttribute('aria-selected', 'true');
	expect(resultTab).toHaveAttribute('aria-selected', 'false');

	await user.click(resultTab);

	expect(configTab).toHaveAttribute('aria-selected', 'false');
	expect(resultTab).toHaveAttribute('aria-selected', 'true');
});
