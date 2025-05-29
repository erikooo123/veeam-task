import { IAceEditorProps } from 'react-ace';
import { Config } from '../../tabs/Result/services/types';

export enum TabId {
	Result = 'Result',
	Config = 'Config',
}

export type Tab = {
	label: string;
	id: TabId;
};

export type TabProps = {
	config: Config;
	onConfigChange: IAceEditorProps['onChange'];
};
