import { useState, type FunctionComponent } from 'react';
import { TAB_MAP, TABS } from './services/constants';
import { TabId, TabProps } from './services/types';
import TabButton from '../TabButton/TabButton';
import { TabButtons, TabWrapper, Wrapper } from './Container.styled';

import configuration from '../../data/exampleForm.json';
import { toast } from 'react-toastify';

const Container: FunctionComponent = () => {
	const [config, setConfig] = useState(JSON.stringify(configuration, null, 2));
	const [selectedTab, setSelectedTab] = useState<TabId>(TabId.Config);
	const Tab = TAB_MAP[selectedTab];

	const onConfigSave: TabProps['onConfigSave'] = (value) => {
		setConfig(value);
		toast.success('Braavo');
	};

	return (
		<Wrapper>
			<TabButtons role="tablist">
				{TABS.map((tab) => (
					<TabButton
						{...tab}
						onTabClick={() => setSelectedTab(tab.id)}
						isSelected={selectedTab === tab.id}
						key={tab.id}
					/>
				))}
			</TabButtons>

			<TabWrapper role="tabpanel">
				<Tab config={config} onConfigSave={onConfigSave} />
			</TabWrapper>
		</Wrapper>
	);
};

export default Container;
