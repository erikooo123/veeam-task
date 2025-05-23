import type { FunctionComponent } from 'react';

import AceEditor from 'react-ace';
import { TabProps } from '../../Container/services/types';

const Config: FunctionComponent<TabProps> = ({ config, onConfigChange }) => {
	return (
		<AceEditor
			fontSize={14}
			height="400px"
			highlightActiveLine
			mode="json"
			onChange={onConfigChange}
			setOptions={{
				enableBasicAutocompletion: true,
				enableLiveAutocompletion: true,
				enableSnippets: true,
				showLineNumbers: true,
				spellcheck: true,
				tabSize: 4,
				useWorker: true,
			}}
			showPrintMargin={false}
			theme="monokai"
			width="100%"
			value={config}
		/>
	);
};

export default Config;
