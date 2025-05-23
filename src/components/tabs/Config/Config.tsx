import type { FunctionComponent } from 'react';

import AceEditor from 'react-ace';

type ConfigProps = {
	config: string;
};

const Config: FunctionComponent<ConfigProps> = ({ config }) => {
	return (
		<AceEditor
			fontSize={14}
			height="400px"
			highlightActiveLine
			mode="json"
			onChange={() => console.log('changed')}
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
