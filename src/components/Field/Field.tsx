import { FunctionComponent } from 'react';
import { FieldType } from '../tabs/Result/services/types';
import { FieldProps, FieldRendererProps } from './services/types';
import { FIELD_MAP } from './services/constants';
import { Wrapper } from './Field.styled';

const Field = <T extends FieldType>({ type, name, label, value, onChange, options }: FieldProps<T>) => {
	const Input: FunctionComponent<FieldRendererProps<T>> = FIELD_MAP[type];

	if (!Input) return <p key={name}>Unsupported field type: {type}</p>;

	return (
		<Wrapper>
			<label htmlFor={name}>{label}</label>
			<Input name={name} label={label} value={value} onChange={onChange} options={options} />
		</Wrapper>
	);
};

export default Field;
