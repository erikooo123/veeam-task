import { useState, type FunctionComponent } from 'react';
import { TAB_MAP, TABS } from './services/constants';
import { TabId } from './services/types';

import TabButton from '../TabButton/TabButton';

const Container: FunctionComponent = () => {
	const [selectedTab, setSelectedTab] = useState<TabId>(TabId.Config);
	const Tab = TAB_MAP[selectedTab];

	return (
		<div>
			<div role="tablist">
				{TABS.map((tab) => (
					<TabButton {...tab} onTabClick={() => setSelectedTab(tab.id)} />
				))}
			</div>

			<div role="tabpanel">
				<Tab />
			</div>
		</div>
	);
};

export default Container;
