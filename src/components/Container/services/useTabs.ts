import { FunctionComponent, useState } from 'react';
import { TABS, TAB_MAP } from './constants';
import { TabId, TabProps } from './types';

type TabsUtils = {
	Tab: FunctionComponent<TabProps>;
	onTabClick: (id: TabId) => void;
	selectedTab: TabId;
};

const useTabs = (): TabsUtils => {
	const [selectedTab, setSelectedTab] = useState<TabId>(TABS[0].id);
	const Tab = TAB_MAP[selectedTab];

	const onTabClick = (id: TabId) => setSelectedTab(id);

	return { Tab, selectedTab, onTabClick };
};

export default useTabs;
