import styled, { css } from 'styled-components';

type ButtonProps = {
	$isSelected: boolean;
};

export const Button = styled.button<ButtonProps>(
	({ $isSelected }) => css`
		width: 140px;
		padding: 12px;
		background: ${$isSelected ? '#f5f5f5' : 'transparent'};
		outline: none;
		border: 1px solid #000;
		cursor: pointer;
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
		border-bottom: none;
	`,
);
