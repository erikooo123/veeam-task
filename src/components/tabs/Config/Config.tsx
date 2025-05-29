import { useRef, type FunctionComponent } from 'react';
import ace from 'ace-builds';
import AceEditor from 'react-ace';
import { TabProps } from '../../Container/services/types';

import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/worker-json';
import { Button } from '../../Form';

ace.config.set('basePath', '/node_modules/ace-builds/src-noconflict/');

const Config: FunctionComponent<TabProps> = ({ config, onConfigSave }) => {
	const ref = useRef<AceEditor | null>(null);

	const handleSave = () => {
		if (!ref.current) return;
		const editor = ref.current.editor;
		const value = editor.getValue();
		onConfigSave(value);
	};

	return (
		<div>
			<AceEditor
				ref={ref}
				fontSize={14}
				height="400px"
				highlightActiveLine
				mode="json"
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
			<Button type="button" onClick={handleSave}>
				Save
			</Button>
		</div>
	);
};

export default Config;
