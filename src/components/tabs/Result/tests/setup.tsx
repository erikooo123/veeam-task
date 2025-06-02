import { render } from '@testing-library/react';
import Result from '../Result';
import userEvent from '@testing-library/user-event';
import { mockFormConfig } from './mocks';

type SetupParams = { config?: string };

export const setup = ({ config = JSON.stringify(mockFormConfig) }: SetupParams = {}) => {
	const user = userEvent.setup();
	return { ...render(<Result config={config} onConfigSave={() => {}} />), user };
};
