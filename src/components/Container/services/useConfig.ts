import { useState } from 'react';
import { TabProps } from './types';
import configuration from '../../../data/exampleForm.json';

type ConfigUtils = {
	config: string;
	onConfigSave: (value: string) => void;
};

const useConfig = (): ConfigUtils => {
	const [config, setConfig] = useState(JSON.stringify(configuration, null, 2));
	const onConfigSave: TabProps['onConfigSave'] = (value) => setConfig(value);

	return { config, onConfigSave };
};

export default useConfig;
