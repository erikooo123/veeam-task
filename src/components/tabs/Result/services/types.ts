export type FieldTypeToValue = {
	text: string;
	number: number;
	textarea: string;
	checkbox: boolean;
	date: string;
	radio: string;
};

export type FieldType = keyof FieldTypeToValue;

export type RawField<T extends FieldType = FieldType> = {
	name: string;
	label: string;
	type: T;
	options?: string[];
};

export type FormValues = {
	[K in string]: FieldTypeToValue[FieldType];
};

type FormButton = {
	text: string;
};

export type Field = RawField & { value: FieldTypeToValue[FieldType] };

export type FormData = {
	buttons: FormButton[];
	fields: Field[];
};

export type Config = {
	buttons: FormButton[];
	fields: RawField[];
};
