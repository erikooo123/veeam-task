import { FunctionComponent } from 'react';
import { FieldType, FieldTypeToValue, RawField } from '../../tabs/Result/services/types';

export type FieldProps<T extends FieldType> = Pick<FieldRendererProps<T>, 'options'> & {
	type: T;
	name: string;
	label: string;
	value: FieldTypeToValue[T];
	onChange: (name: string, value: FieldTypeToValue[T]) => void;
};

export type FieldRendererProps<T extends FieldType> = Pick<RawField<T>, 'name' | 'label'> & {
	value: FieldTypeToValue[T] | undefined;
	onChange: (name: string, value: FieldTypeToValue[T]) => void;
	options?: string[];
};

export type FieldMap = {
	[Type in FieldType]: FunctionComponent<FieldRendererProps<Type>>;
};
