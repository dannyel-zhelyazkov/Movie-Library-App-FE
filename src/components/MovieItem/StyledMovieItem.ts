import { Card } from '@mui/material';
import styled from 'styled-components';

const MovieItemContainer = styled(Card)`
	display: flex;

	@media (max-width: ${({ theme }) => theme.devicesWidths.smallScreens}) {
		flex-direction: column;
	}
`;

const MovieItemContent = styled.div`
	display: flex;
	flex-direction: column;
`;

const MovieItemContentDescription = styled.p`
	width: 50rem;

	@media (max-width: ${({ theme }) => theme.devicesWidths.tablet}) {
		width: 30rem;
	}

	@media (max-width: ${({ theme }) => theme.devicesWidths.mobile}) {
		display: none;
	}
`;

export { MovieItemContainer, MovieItemContentDescription, MovieItemContent };
