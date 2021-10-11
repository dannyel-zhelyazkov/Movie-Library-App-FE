import { CircularProgress } from '@mui/material';
import { MoviesSearchList, Pagination, Search } from '../../components';
import { theme } from '../../const';
import { useSearch } from '../../hooks/useSearch';
import {
	SearchMoviesContainer,
	SearchMoviesHeader,
	SearchSection,
} from './StyledSearchMovies';

export const SearchMovies = () => {
	const {
		typedTitle,
		isLoading,
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
					value={typedTitle}
					handleSearch={() => handleSearchMovies()}
					handleChangeTypedTitle={handleChangeTypedTitle}
				/>
			</SearchSection>
			{isLoading ? (
				<CircularProgress sx={{ color: theme.colors.secondary }} />
			) : (
				<MoviesSearchList movies={movies} />
			)}
			{page !== 0 ? (
				<Pagination
					page={page}
					count={totalPages}
					handleSearchOnPageChange={handleSearchMovies}
				/>
			) : null}
		</SearchMoviesContainer>
	);
};
