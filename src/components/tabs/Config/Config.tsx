import type { FunctionComponent } from 'react';
import ace from 'ace-builds';
import AceEditor from 'react-ace';
import { TabProps } from '../../Container/services/types';

import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/worker-json';

ace.config.set('basePath', '/node_modules/ace-builds/src-noconflict/');

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
			value={JSON.stringify(config, null, 2)}
		/>
	);
};

export default Config;
