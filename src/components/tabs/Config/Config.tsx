import type { FunctionComponent } from 'react';

import AceEditor from 'react-ace';

const Config: FunctionComponent = () => {
	return (
		<AceEditor
			fontSize={14}
			height="600px"
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
		/>
	);
};

export default Config;
