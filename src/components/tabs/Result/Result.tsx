import { FormEventHandler, useState, type FunctionComponent } from 'react';
import { Field, FieldType, FieldTypeToValue } from './services/types';
import { TabProps } from '../../Container/services/types';
import FieldComponent from '../../Field/Field';

const Result: FunctionComponent<TabProps> = ({ config }) => {
	const [formData, setFormData] = useState<Record<string, FieldTypeToValue[FieldType]>>({});

	if (!config) return <p>No form configuration loaded.</p>;

	const onSubmit: FormEventHandler = (e) => {
		e.preventDefault();
		console.log(formData);
	};

	const renderField = <T extends FieldType>(field: Field<T>) => {
		const { name } = field;

		const handleFieldChange = (name: string, value: FieldTypeToValue[T]) => {
			setFormData((prev) => ({ ...prev, [name]: value }));
		};

		return (
			<FieldComponent
				{...field}
				// TODO: Try to remove casting
				value={formData[name] as FieldTypeToValue[T]}
				onChange={handleFieldChange}
				key={name}
			/>
		);
	};

	return <form onSubmit={onSubmit}>{JSON.parse(config).map(renderField)}</form>;
};

export default Result;
