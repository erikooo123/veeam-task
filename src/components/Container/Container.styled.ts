import styled from 'styled-components';

export const TabWrapper = styled.div`
	border: 1px solid #000;
	padding: 12px;
	height: 100%;
`;

export const TabButtons = styled.div`
	display: flex;

	& > *:not(:last-child) {
		border-right: none;
	}
`;

export const Wrapper = styled.div`
	width: 600px;
	min-height: 600px;
	display: flex;
	flex-direction: column;
`;
