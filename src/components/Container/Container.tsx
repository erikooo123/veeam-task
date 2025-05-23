import { useState, type FunctionComponent } from 'react';
import { TAB_MAP, TABS } from './services/constants';
import { TabId } from './services/types';
import TabButton from '../TabButton/TabButton';
import { TabButtons, TabWrapper, Wrapper } from './Container.styled';

const Container: FunctionComponent = () => {
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
				<Tab />
			</TabWrapper>
		</Wrapper>
	);
};

export default Container;
