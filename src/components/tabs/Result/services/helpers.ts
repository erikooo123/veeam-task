import type { FieldType, FieldTypeToValue, Config } from './types';
import { type FormData } from './types';

export const getInitialValue = ({
	type,
	options,
}: {
	type: FieldType;
	options?: string[];
}): FieldTypeToValue[FieldType] => {
	if (type === 'checkbox') return false;
	if (type === 'radio' && options) return options[0];
	return '';
};

export const getInitialFormData = (config: Config): FormData => ({
	...config,
	fields: config.fields.map((params) => ({
		...params,
		value: getInitialValue({ type: params.type, options: params.options }),
	})),
});
