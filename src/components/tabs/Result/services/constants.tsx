import { FunctionComponent } from 'react';
import { FieldRendererProps, FieldType } from './types';

export const FIELD_MAP: {
	[T in FieldType]: FunctionComponent<FieldRendererProps<T>>;
} = {
	text: ({ field, value, onChange }) => (
		<input type="text" id={field.name} value={value ?? ''} onChange={(e) => onChange(field.name, e.target.value)} />
	),
	number: ({ field, value, onChange }) => (
		<input
			type="number"
			id={field.name}
			value={value ?? ''}
			onChange={(e) => onChange(field.name, Number(e.target.value))}
		/>
	),
	textarea: ({ field, value, onChange }) => (
		<textarea id={field.name} value={value ?? ''} onChange={(e) => onChange(field.name, e.target.value)} />
	),
	checkbox: ({ field, value, onChange }) => (
		<input
			type="checkbox"
			id={field.name}
			checked={value ?? false}
			onChange={(e) => onChange(field.name, e.target.checked)}
		/>
	),
	date: ({ field, value, onChange }) => (
		<input type="date" id={field.name} value={value ?? ''} onChange={(e) => onChange(field.name, e.target.value)} />
	),
	radio: ({ field, value, onChange }) => (
		<div>
			{field.options?.map((option) => (
				<label key={option}>
					<input
						type="radio"
						name={field.name}
						value={option}
						checked={value === option}
						onChange={() => onChange(field.name, option)}
					/>
					{option}
				</label>
			))}
		</div>
	),
};
