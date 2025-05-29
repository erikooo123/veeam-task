import type { FieldType, FieldTypeToValue, Config } from './types';
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

export const getInitialFormData = (config: Config): FormData => {
	return {
		...config,
		fields: config.fields.map((params) => ({
			...params,
			value: getInitialValue(params.type),
		})),
	};
};
