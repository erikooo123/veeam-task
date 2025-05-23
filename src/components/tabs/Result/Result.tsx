import { FormEventHandler, useState, type FunctionComponent } from 'react';
import { FIELD_MAP } from './services/constants';
import { Field, FieldRendererProps, FieldType, FieldTypeToValue } from './services/types';
import { TabProps } from '../../Container/services/types';

const Result: FunctionComponent<TabProps> = ({ config }) => {
	const [formData, setFormData] = useState<Record<string, string | boolean | number>>({});

	if (!config) return <p>No form configuration loaded.</p>;

	const renderField = <T extends FieldType>(field: Field<T>) => {
		const { type, name, label } = field;

		const Field: FunctionComponent<FieldRendererProps<T>> = FIELD_MAP[type];

		if (!Field) return <p key={name}>Unsupported field type: {type}</p>;

		const handleFieldChange = (name: string, value: FieldTypeToValue[T]) => {
			setFormData((prev) => ({ ...prev, [name]: value }));
		};

		return (
			<div key={name}>
				<label htmlFor={name}>{label}</label>
				<Field
					field={field}
					// TODO: Try to remove casting
					value={formData[name] as FieldTypeToValue[T]}
					onChange={handleFieldChange}
				/>
			</div>
		);
	};

	const onSubmit: FormEventHandler = (e) => {
		e.preventDefault();
		console.log(formData);
	};

	return <form onSubmit={onSubmit}>{JSON.parse(config).map(renderField)}</form>;
};

export default Result;
