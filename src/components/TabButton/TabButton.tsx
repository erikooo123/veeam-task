import { FunctionComponent } from 'react';
import { Tab, TabId } from '../Container/services/types';

type TabButtonProps = Tab & {
	onTabClick: (id: TabId) => void;
};

const TabButton: FunctionComponent<TabButtonProps> = ({
	onTabClick,
	label,
	id,
}) => (
	<button type="button" onClick={() => onTabClick(id)} role="tab">
		{label}
	</button>
);

export default TabButton;
