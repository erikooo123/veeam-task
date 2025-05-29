import { IAceEditorProps } from 'react-ace';

export enum TabId {
	Result = 'Result',
	Config = 'Config',
}

export type Tab = {
	label: string;
	id: TabId;
};

export type TabProps = {
	config: string;
	onConfigChange: IAceEditorProps['onChange'];
};
