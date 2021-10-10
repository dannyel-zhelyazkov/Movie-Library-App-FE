import { MoviesSearchList, Pagination, Search } from '../../components';
import { useSearch } from '../../hooks/useSearch';
import {
	SearchMoviesContainer,
	SearchMoviesHeader,
	SearchSection,
} from './StyledSearchMovies';

export const SearchMovies = () => {
	const {
		movies,
		page,
		totalPages,
		handleSearchMovies,
		handleChangeTypedTitle,
	} = useSearch();

	return (
		<SearchMoviesContainer>
			<SearchSection>
				<SearchMoviesHeader>Search</SearchMoviesHeader>
				<Search
					searchType="ALL"
					handleSearchMovies={handleSearchMovies}
					handleChangeTypedTitle={handleChangeTypedTitle}
				/>
			</SearchSection>
			<MoviesSearchList movies={movies} />
			{page ? (
				<Pagination
					page={page}
					count={totalPages}
					handleSearchOnPageChange={handleSearchMovies}
				/>
			) : null}
		</SearchMoviesContainer>
	);
};
