import { withRouter } from 'react-router';
import { MovieItem } from '../../components';
import { StarsRating } from '../../components/StarsRating';
import { useMovieDetails } from '../../hooks';
import {
	MovieDetailsContainer,
	MovieDetailsContent,
	MovieDetailsReview,
	MovieDetailsReviewHeader,
	MovieDetailsNote,
} from './StyledMovieDetails';

export const MovieDetails = withRouter(({ match }) => {
	const { movie, handleAddRating, handleChangeRating, handleRemoveRating } =
		useMovieDetails(match.params.id);

	return movie && movie.movieDetails ? (
		<MovieDetailsContainer>
			<MovieDetailsContent>
				<MovieItem movie={movie.movieDetails} isDetailsPage />
			</MovieDetailsContent>

			<MovieDetailsReview>
				<MovieDetailsReviewHeader>Your Review</MovieDetailsReviewHeader>
				<StarsRating
					handleAddRating={handleAddRating}
					handleChangeRating={handleChangeRating}
					handleRemoveRating={handleRemoveRating}
					value={movie.rating.rating}
				/>
				<MovieDetailsNote placeholder="Your private notes and comments about the movie..." />
			</MovieDetailsReview>
		</MovieDetailsContainer>
	) : null;
});
