import { Input } from '../../../Input/Input.styled';
import { FieldMap } from './types';

export const FIELD_MAP: FieldMap = {
	text: ({ name, value, onChange }) => (
		<Input type="text" id={name} value={value} onChange={(e) => onChange(name, e.target.value)} />
	),
	number: ({ name, value, onChange }) => (
		<Input type="number" id={name} value={value} onChange={(e) => onChange(name, Number(e.target.value))} />
	),
	textarea: ({ name, value, onChange }) => (
		<textarea id={name} value={value} onChange={(e) => onChange(name, e.target.value)} />
	),
	checkbox: ({ name, value, onChange }) => (
		<Input type="checkbox" id={name} checked={value} onChange={(e) => onChange(name, e.target.checked)} />
	),
	date: ({ name, value, onChange }) => (
		<Input type="date" id={name} value={value} onChange={(e) => onChange(name, e.target.value)} />
	),
	radio: ({ options, name, value, onChange }) => (
		<div>
			{options?.map((option) => (
				<label key={option}>
					<Input
						type="radio"
						name={name}
						value={option}
						checked={value === option}
						onChange={() => onChange(name, option)}
					/>
					{option}
				</label>
			))}
		</div>
	),
};
