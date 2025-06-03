import { type FunctionComponent } from 'react';
import { TABS } from './services/constants';
import TabButton from '../TabButton/TabButton';
import { TabButtons, TabWrapper, Wrapper } from './Container.styled';

import { ToastContainer } from 'react-toastify';
import useTabs from './services/useTabs';
import useConfig from './services/useConfig';

const Container: FunctionComponent = () => {
	const { Tab, selectedTab, onTabClick } = useTabs();
	const config = useConfig();

	return (
		<Wrapper>
			<TabButtons role="tablist">
				{TABS.map((tab) => (
					<TabButton
						{...tab}
						onTabClick={() => onTabClick(tab.id)}
						isSelected={selectedTab === tab.id}
						key={tab.id}
					/>
				))}
			</TabButtons>

			<TabWrapper role="tabpanel">
				<Tab {...config} />
			</TabWrapper>
			<ToastContainer position="top-center" />
		</Wrapper>
	);
};

export default Container;
