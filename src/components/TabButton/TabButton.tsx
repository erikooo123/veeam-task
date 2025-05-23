import { FunctionComponent } from 'react';
import { Tab } from '../Container/services/types';

import { Button } from './TabButton.styled';

type TabButtonProps = Tab & {
	onTabClick: () => void;
	isSelected: boolean;
};

const TabButton: FunctionComponent<TabButtonProps> = ({ onTabClick, label, isSelected }) => (
	<Button type="button" onClick={onTabClick} role="tab" isSelected={isSelected}>
		{label}
	</Button>
);

export default TabButton;
