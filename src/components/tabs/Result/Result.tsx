import { FormEventHandler, useState, type FunctionComponent } from 'react';
import { Field, FieldType, FieldTypeToValue } from './services/types';
import { TabProps } from '../../Container/services/types';
import FieldComponent from '../../Field/Field';
import { getInitialFormData } from './services/helpers';
import { type FormData } from './services/types';

const Result: FunctionComponent<TabProps> = ({ config }) => {
	const [formData, setFormData] = useState<FormData>(getInitialFormData(config));

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
