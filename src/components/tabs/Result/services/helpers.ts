import type { FieldType, FieldTypeToValue, Field } from './types';
import { type FormData } from './types';

export const getInitialValue = (type: FieldType): FieldTypeToValue[FieldType] => {
	switch (type) {
		case 'checkbox':
			return false;
		case 'number':
			return 0;
		default:
			return '';
	}
};

export const getInitialFormData = (config: string): FormData => {
	const fields: Field[] = JSON.parse(config);

	return fields.reduce(
		(acc, { name, type }) => ({
			...acc,
			[name]: getInitialValue(type),
		}),
		Object.create(null),
	);
};
