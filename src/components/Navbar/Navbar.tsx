import { Search } from '../Search';
import { MyMovieCollectionText, NavbarContainer } from './StyledNavbar';

export const Navbar = () => {
	return (
		<NavbarContainer>
			<div>
				<MyMovieCollectionText to="/">
					My Movie Collection
				</MyMovieCollectionText>
			</div>
			<Search />
		</NavbarContainer>
	);
};
