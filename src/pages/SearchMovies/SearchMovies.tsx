import { MovieItem, Pagination, Search } from '../../components';
import {
	MoviesList,
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
			<MoviesList>
				{[1, 2, 3].map(() => (
					<li>
						<MovieItem />
					</li>
				))}
			</MoviesList>
			<Pagination count={3} />
		</SearchMoviesContainer>
	);
};
