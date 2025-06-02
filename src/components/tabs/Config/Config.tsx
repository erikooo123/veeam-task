import { useRef, type FunctionComponent } from 'react';
import ace from 'ace-builds';
import AceEditor from 'react-ace';
import { TabProps } from '../../Container/services/types';

import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/worker-json';
import { Button } from '../../Form';
import { toast } from 'react-toastify';
import { Wrapper } from './Config.styled';

ace.config.set('basePath', '/node_modules/ace-builds/src-noconflict/');

const Config: FunctionComponent<TabProps> = ({ config, onConfigSave }) => {
	const ref = useRef<AceEditor | null>(null);

	const handleSave = () => {
		if (!ref.current) return;

		const editor = ref.current.editor;
		const value = editor.getValue();

		try {
			const parsedValue = JSON.parse(value);
			onConfigSave(JSON.stringify(parsedValue, null, 2));
			toast.success('Configuration saved successfully!');
		} catch (e) {
			toast.error('Something went wrong. Please check your JSON syntax.');
			console.error(e);
		}
	};

	return (
		<Wrapper>
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
		</Wrapper>
	);
};

export default Config;
