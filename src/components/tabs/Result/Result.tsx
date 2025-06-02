import { FormEventHandler, useMemo, useState, type FunctionComponent } from 'react';
import { Field, FieldType, FieldTypeToValue } from './services/types';
import { TabProps } from '../../Container/services/types';
import FieldComponent from '../../Field/Field';
import { getInitialFormData } from './services/helpers';
import { type FormData } from './services/types';
import { ButtonsWrapper } from './Result.styled';
import { Button, Form } from '../../Form';

const Result: FunctionComponent<TabProps> = ({ config }) => {
	const [formData, setFormData] = useState<FormData>(getInitialFormData(JSON.parse(config)));

	const onSubmit: FormEventHandler = (e) => {
		e.preventDefault();
		console.log(formData);
	};

	const renderField = (field: Field) => {
		const { name } = field;

		const handleFieldChange = (name: string, value: FieldTypeToValue[FieldType]) => {
			setFormData((prev) => ({
				...prev,
				fields: prev.fields.map((fieldCandidate) =>
					fieldCandidate.name === name ? { ...fieldCandidate, value } : field,
				),
			}));
		};

		return <FieldComponent {...field} onChange={handleFieldChange} key={name} />;
	};

	const fields = useMemo(() => formData.fields.map(renderField), [formData]);

	const buttons = useMemo(
		() =>
			formData.buttons.map(({ text }) => (
				<Button key={text} type="button" onClick={() => alert(text)}>
					{text}
				</Button>
			)),
		[formData],
	);

	if (!config) return <p>No form configuration loaded.</p>;

	return (
		<Form onSubmit={onSubmit}>
			<div>{fields}</div>
			<ButtonsWrapper>{buttons}</ButtonsWrapper>
		</Form>
	);
};

export default Result;
