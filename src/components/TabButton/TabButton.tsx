import { FunctionComponent } from 'react';
import { Tab } from '../Container/services/types';

type TabButtonProps = Tab & {
	onTabClick: () => void;
};

const TabButton: FunctionComponent<TabButtonProps> = ({ onTabClick, label }) => (
	<button type="button" onClick={onTabClick} role="tab">
		{label}
	</button>
);

export default TabButton;
