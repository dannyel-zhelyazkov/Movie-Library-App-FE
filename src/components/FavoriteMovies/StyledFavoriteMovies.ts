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
	justify-content: center;
	margin: 2rem auto !important;
`;

const FavoriteMovieWrapper = styled(Grid)`
	padding: 0 !important;
	transition: all 0.2s;

	&:hover {
		transform: scale(1.05);
	}
`;

export {
	FavoriteMoviesContainer,
	FavoriteMoviesHeader,
	FavoriteMoviesList,
	FavoriteMovieWrapper,
};
