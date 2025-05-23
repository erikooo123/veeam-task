import { FunctionComponent } from 'react';
import { FIELD_MAP } from '../tabs/Result/services/constants';
import { FieldRendererProps, FieldType } from '../tabs/Result/services/types';
import { FieldProps } from './services/types';

const Field = <T extends FieldType>({ type, name, label, value, onChange }: FieldProps<T>) => {
	const Input: FunctionComponent<FieldRendererProps<T>> = FIELD_MAP[type];

	if (!Input) return <p key={name}>Unsupported field type: {type}</p>;

	return (
		<div>
			<label htmlFor={name}>{label}</label>
			<Input name={name} label={label} value={value} onChange={onChange} />
		</div>
	);
};

export default Field;
