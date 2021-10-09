import { Card } from '@mui/material';
import styled from 'styled-components';

const MovieItemContainer = styled(Card)`
	display: flex;
	border: 2px solid ${({ theme }) => theme.colors.secondary};
	box-shadow: none !important;

	@media (max-width: ${({ theme }) => theme.devicesWidths.smallScreens}) {
		flex-direction: column;
	}
`;

const RedirectWrapper = styled.div`
	cursor: pointer;
`;

const MovieItemContent = styled.div`
	display: flex;
	flex-direction: column;
`;

const MovieItemContentDescription = styled.p`
	width: 50rem;
	margin-bottom: 2rem;

	@media (max-width: ${({ theme }) => theme.devicesWidths.tablet}) {
		width: 30rem;
	}

	@media (max-width: ${({ theme }) => theme.devicesWidths.mobile}) {
		display: none;
	}
`;

const VisitOfficialSiteLink = styled.a`
	font-size: ${({ theme }) => theme.fontSize.heading};
	font-weight: 600;
	color: ${({ theme }) => theme.colors.secondary};
`;

export {
	MovieItemContainer,
	RedirectWrapper,
	MovieItemContentDescription,
	MovieItemContent,
	VisitOfficialSiteLink,
};
