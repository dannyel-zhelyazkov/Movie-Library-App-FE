import { Card, CardHeader } from '@mui/material';
import styled from 'styled-components';

const MovieItemContainer = styled(Card)`
	display: flex;
	border: 2px solid ${({ theme }) => theme.colors.secondary};
	box-shadow: none !important;
	padding: 0.5rem;

	@media (max-width: ${({ theme }) => theme.devicesWidths.smallScreens}) {
		width: 100%;
		flex-direction: column;
	}
`;

const RedirectWrapper = styled.div`
	cursor: pointer;
`;

const MovieItemContent = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
`;

const MovieItemHeader = styled(CardHeader)`
	& span:first-child {
		width: 80%;

		@media (max-width: ${({ theme }) => theme.devicesWidths.smallScreens}) {
			width: 100%;
		}
	}
`;

const MovieItemContentDescription = styled.p`
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
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
	MovieItemHeader,
	MovieItemContentDescription,
	MovieItemContent,
	VisitOfficialSiteLink,
};
