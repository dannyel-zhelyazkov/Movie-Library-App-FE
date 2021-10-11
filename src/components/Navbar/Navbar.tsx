import { useHistory } from 'react-router';
import { useFavorites } from '../../hooks';
import { Search } from '../Search';
import { MyMovieCollectionText, NavbarContainer } from './StyledNavbar';

export const Navbar = () => {
	const { push } = useHistory();
	const { typedTitle, handleSearchFavorites, handleChangeTypedTitle } =
		useFavorites();

	return (
		<NavbarContainer>
			<div>
				<MyMovieCollectionText to="/">
					My Movie Collection
				</MyMovieCollectionText>
			</div>
			<Search
				value={typedTitle}
				handleSearch={async () => {
					await handleSearchFavorites();
					push('/');
				}}
				handleChangeTypedTitle={handleChangeTypedTitle}
			/>
		</NavbarContainer>
	);
};
