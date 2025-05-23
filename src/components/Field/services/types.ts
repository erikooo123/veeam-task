import { FieldType, FieldTypeToValue } from '../../tabs/Result/services/types';

export type FieldProps<T extends FieldType> = {
	type: T;
	name: string;
	label: string;
	value: FieldTypeToValue[T];
	onChange: (name: string, value: FieldTypeToValue[T]) => void;
};
