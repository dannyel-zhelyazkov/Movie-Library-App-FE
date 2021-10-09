import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import heroSection from '../../assets/images/hero-section-x2.jpg';

const HeroSectionContainer = styled.div`
	position: relative;
	background: url(${heroSection});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: top;
	height: 40rem;

	&::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 40rem;
		background: black;
		opacity: 0.4;
		z-index: 10;

		@media (max-width: ${({ theme }) => theme.devicesWidths.mobile}) {
			height: 20rem;
		}
	}

	@media (max-width: ${({ theme }) => theme.devicesWidths.mobile}) {
		height: 20rem;
	}
`;

const HeroSectionContent = styled.div`
	position: relative;
	padding: 10rem;
	z-index: 100;

	@media (max-width: ${({ theme }) => theme.devicesWidths.tablet}) {
		padding: 8rem;
	}

	@media (max-width: ${({ theme }) => theme.devicesWidths.mobile}) {
		padding: 1.5rem;
	}
`;

const HeroSectionHeading = styled.h1`
	color: ${({ theme }) => theme.colors.secondary};

	@media (max-width: ${({ theme }) => theme.devicesWidths.mobile}) {
		font-size: ${({ theme }) => theme.fontSize.heading};
	}
`;

const HeroSectionParagraph = styled.p`
	font-size: ${({ theme }) => theme.fontSize.bigHeading};
	color: ${({ theme }) => theme.colors.white};

	& > span {
		display: block;
		color: ${({ theme }) => theme.colors.secondary};
	}

	@media (max-width: ${({ theme }) => theme.devicesWidths.mobile}) {
		font-size: ${({ theme }) => theme.fontSize.large};
	}
`;

const SearchMoviesLink = styled(NavLink)`
	margin-top: 1rem;
	display: inline-block;
	text-decoration: none;
	color: white;
	background-color: ${({ theme }) => theme.colors.secondary};
	color: ${({ theme }) => theme.colors.white};
	padding: 0.75rem 1rem;
	border-radius: 4px;
`;

export {
	HeroSectionContainer,
	HeroSectionContent,
	HeroSectionParagraph,
	HeroSectionHeading,
	SearchMoviesLink,
};
