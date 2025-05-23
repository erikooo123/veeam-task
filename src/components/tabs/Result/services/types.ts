export type FieldTypeToValue = {
	text: string;
	number: number;
	textarea: string;
	checkbox: boolean;
	date: string;
	radio: string;
};

export type FieldType = keyof FieldTypeToValue;

export type Field<T extends FieldType = FieldType> = {
	name: string;
	label: string;
	type: T;
	options?: T extends 'radio' ? string[] : never;
};

export type FormValues = {
	[K in string]: FieldTypeToValue[FieldType];
};
