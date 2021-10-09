import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 5rem;
	background-color: ${({ theme }) => theme.colors.primary};
	padding: 0 1rem;

	@media (max-width: ${({ theme }) => theme.devicesWidths.mobile}) {
		font-size: ${({ theme }) => theme.fontSize.large};
		flex-direction: column;
		justify-content: center;
		height: 10rem;

		& > div:first-child {
			margin-bottom: 1rem;
		}
	}
`;

const MyMovieCollectionText = styled(NavLink)`
	font-size: ${({ theme }) => theme.fontSize.large};
	text-decoration: none;
	font-weight: ${({ theme }) => theme.fontWeight.semiBold};
	color: ${({ theme }) => theme.colors.secondary};
`;

export { NavbarContainer, MyMovieCollectionText };
