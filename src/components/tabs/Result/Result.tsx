import { FormEventHandler, useState, type FunctionComponent } from 'react';
import { Field, FieldType, FieldTypeToValue } from './services/types';
import { TabProps } from '../../Container/services/types';
import FieldComponent from '../../Field/Field';
import { getInitialFormData } from './services/helpers';
import { type FormData } from './services/types';
import { ButtonsWrapper } from './Result.styled';
import { Button, Form } from '../../Form';

const Result: FunctionComponent<TabProps> = ({ config }) => {
	const [formData, setFormData] = useState<FormData>(getInitialFormData(JSON.parse(config)));

	if (!config) return <p>No form configuration loaded.</p>;

	const onSubmit: FormEventHandler = (e) => {
		e.preventDefault();
		console.log(formData);
	};

	const renderField = (field: Field) => {
		const { name } = field;

		const handleFieldChange = (name: string, value: FieldTypeToValue[FieldType]) => {
			setFormData((prev) => ({
				...prev,
				fields: prev.fields.map((field) => (field.name === name ? { ...field, value } : field)),
			}));
		};

		return <FieldComponent {...field} onChange={handleFieldChange} key={name} />;
	};

	const fields = formData.fields.map(renderField);
	const buttons = formData.buttons.map(({ text }) => (
		<Button key={text} type="button">
			{text}
		</Button>
	));

	return (
		<Form onSubmit={onSubmit}>
			<div>{fields}</div>
			<ButtonsWrapper>{buttons}</ButtonsWrapper>
		</Form>
	);
};

export default Result;
