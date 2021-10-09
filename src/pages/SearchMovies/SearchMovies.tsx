import { MoviesSearchList, Pagination, Search } from '../../components';
import {
	SearchMoviesContainer,
	SearchMoviesHeader,
	SearchSection,
} from './StyledSearchMovies';

export const SearchMovies = () => {
	return (
		<SearchMoviesContainer>
			<SearchSection>
				<SearchMoviesHeader>Search</SearchMoviesHeader>
				<Search />
			</SearchSection>
			<MoviesSearchList />
			<Pagination count={3} />
		</SearchMoviesContainer>
	);
};
