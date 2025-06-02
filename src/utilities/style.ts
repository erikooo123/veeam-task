import { css } from 'styled-components';

export const focusStyles = css`
	&:focus {
		outline: none;
		border-color: #0066cc;
		box-shadow: 0 0 0 2px rgba(0, 102, 204, 0.2);
	}
`;
