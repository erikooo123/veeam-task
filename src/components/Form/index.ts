import styled from 'styled-components';
import { focusStyles } from '../../utilities/style';

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: space-between;
	gap: 24px;
`;

export const Button = styled.button`
	background: transparent;
	border: 1px solid #000;
	cursor: pointer;
	font-size: 16px;
	outline: none;
	padding: 8px 16px;
	display: inline;
	align-self: flex-end;
	border-radius: 8px;
	transition: all 0.2s;

	&:hover {
		background-color: aliceblue;
	}
`;

export const Input = styled.input`
	border-radius: 4px;
	border: 1px solid #ddd;
	font-size: 14px;
	margin: 8px 0;
	padding: 8px 12px;
	transition: border-color 0.3s ease;
	width: 50%;

	${focusStyles}

	&:hover {
		border-color: #999;
	}

	&[type='checkbox'],
	&[type='radio'] {
		width: auto;
		margin-right: 8px;
	}
`;

export const TextArea = styled.textarea`
	border-radius: 4px;
	border: 1px solid #ddd;
	font-family: inherit;
	font-size: 14px;
	margin: 8px 0 0 16px;
	min-height: 100px;
	padding: 8px 12px;
	resize: vertical;
	transition: border-color 0.3s ease;
	width: 100%;
	resize: none;

	${focusStyles}

	&:hover {
		border-color: #999;
	}
`;

export const Label = styled.label`
	color: #333;
	display: block;
	font-size: 14px;
	font-weight: 500;
	margin-bottom: 4px;
`;
