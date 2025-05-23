import { FormEventHandler, useState, type FunctionComponent } from 'react';
import { FIELD_MAP } from './services/constants';
import { Field, FieldType, FieldTypeToValue } from './services/types';

type ResultProps = {
	config: string;
};

type FormData = {
	[K in string]: FieldTypeToValue[keyof FieldTypeToValue];
};

const Result: FunctionComponent<ResultProps> = ({ config }) => {
	const [formData, setFormData] = useState<FormData>({});

	if (!config) return <p>No form configuration loaded.</p>;

	const fields = JSON.parse(config) as Field[];

	const handleChange = <T extends FieldType>(name: string, value: FieldTypeToValue[T]) => {
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const onSubmit: FormEventHandler = (e) => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<form onSubmit={onSubmit}>
			{fields.map((field) => {
				const FieldComponent = FIELD_MAP[field.type];

				if (!FieldComponent) {
					return <p key={field.name}>Unsupported field type: {field.type}</p>;
				}

				return (
					<div key={field.name}>
						<label htmlFor={field.name}>{field.label}</label>
						<FieldComponent field={field} value={formData[field.name]} onChange={handleChange} />
					</div>
				);
			})}
		</form>
	);
};

export default Result;
