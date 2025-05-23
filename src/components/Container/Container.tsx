import { useState, type FunctionComponent } from 'react';
import { TAB_MAP, TABS } from './services/constants';
import { TabId } from './services/types';
import TabButton from '../TabButton/TabButton';
import { TabButtons, TabWrapper, Wrapper } from './Container.styled';

import configuration from '../../data/exampleForm.json';

const Container: FunctionComponent = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [config, setConfig] = useState(JSON.stringify(configuration, null, 2));
	const [selectedTab, setSelectedTab] = useState<TabId>(TabId.Config);
	const Tab = TAB_MAP[selectedTab];

	return (
		<Wrapper>
			<TabButtons role="tablist">
				{TABS.map((tab) => (
					<TabButton {...tab} onTabClick={() => setSelectedTab(tab.id)} isSelected={selectedTab === tab.id} />
				))}
			</TabButtons>

			<TabWrapper role="tabpanel">
				<Tab config={config} />
			</TabWrapper>
		</Wrapper>
	);
};

export default Container;
