import { FunctionComponent } from 'react';
import Config from '../../tabs/Config/Config';
import Result from '../../tabs/Result/Result';
import { TabId, Tab } from './types';

export const TAB_MAP: Record<TabId, FunctionComponent> = {
	[TabId.Result]: Result,
	[TabId.Config]: Config,
};

export const TABS: Tab[] = [
	{ label: 'Config', id: TabId.Config },
	{ label: 'Result', id: TabId.Result },
];
