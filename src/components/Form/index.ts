import styled from 'styled-components';

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
`;

export const Button = styled.button`
	background: transparent;
	outline: none;
	border: 1px solid #000;
	padding: 8px;
	font-size: 16px;
	cursor: pointer;
`;

export const Input = styled.input`
	width: 50%;
	padding: 8px 12px;
	margin: 8px 0;
	border: 1px solid #ddd;
	border-radius: 4px;
	font-size: 14px;
	transition: border-color 0.3s ease;

	&:focus {
		outline: none;
		border-color: #0066cc;
		box-shadow: 0 0 0 2px rgba(0, 102, 204, 0.2);
	}

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
	width: 100%;
	padding: 8px 12px;
	margin: 8px 0;
	border: 1px solid #ddd;
	border-radius: 4px;
	font-size: 14px;
	min-height: 100px;
	resize: vertical;
	font-family: inherit;
	transition: border-color 0.3s ease;

	&:focus {
		outline: none;
		border-color: #0066cc;
		box-shadow: 0 0 0 2px rgba(0, 102, 204, 0.2);
	}

	&:hover {
		border-color: #999;
	}
`;

export const Label = styled.label`
	display: block;
	margin-bottom: 4px;
	font-size: 14px;
	font-weight: 500;
	color: #333;
`;
