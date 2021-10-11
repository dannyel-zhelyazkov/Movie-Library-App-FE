import { Grid } from '@mui/material';
import styled from 'styled-components';

const FavoriteMoviesContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1rem;
`;

const FavoriteMoviesHeader = styled.h2`
	margin-top: 2rem;
	margin-bottom: 2rem;
`;

const FavoriteMoviesList = styled(Grid)`
	display: flex;
	justify-content: center;
	margin: 2rem auto !important;
`;

const FavoriteMovieWrapper = styled(Grid)`
	display: flex;
	justify-content: center;
	padding: 0 !important;
`;

export {
	FavoriteMoviesContainer,
	FavoriteMoviesHeader,
	FavoriteMoviesList,
	FavoriteMovieWrapper,
};
