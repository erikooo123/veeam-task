import { render } from '@testing-library/react';
import Config from '../Config';
import userEvent from '@testing-library/user-event';
import { mockFormConfig } from '../../Result/tests/mocks';

type SetupParams = { config?: string };

export const setup = ({ config = JSON.stringify(mockFormConfig, null, 2) }: SetupParams = {}) => {
	const user = userEvent.setup();
	return { ...render(<Config config={config} onConfigSave={() => {}} />), user };
};
