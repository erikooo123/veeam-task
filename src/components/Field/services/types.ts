import { FunctionComponent } from 'react';
import { Field, FieldType, FieldTypeToValue } from '../../tabs/Result/services/types';

export type FieldProps<T extends FieldType> = {
	type: T;
	name: string;
	label: string;
	value: FieldTypeToValue[T];
	onChange: (name: string, value: FieldTypeToValue[T]) => void;
};

export type FieldRendererProps<T extends FieldType> = Pick<Field<T>, 'name' | 'label'> & {
	value: FieldTypeToValue[T] | undefined;
	onChange: (name: string, value: FieldTypeToValue[T]) => void;
	options?: T extends 'radio' ? string[] : never;
};

export type FieldMap = {
	[Type in FieldType]: FunctionComponent<FieldRendererProps<Type>>;
};
