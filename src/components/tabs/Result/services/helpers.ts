import type { FieldType, FieldTypeToValue, Config } from './types';
import { type FormData } from './types';

export const getInitialValue = (type: FieldType): FieldTypeToValue[FieldType] => (type === 'checkbox' ? false : '');

export const getInitialFormData = (config: Config): FormData => {
	return {
		...config,
		fields: config.fields.map((params) => ({
			...params,
			value: getInitialValue(params.type),
		})),
	};
};
