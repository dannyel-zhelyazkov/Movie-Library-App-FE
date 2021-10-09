import { MovieItem } from '../../components';
import {
	MovieDetailsContainer,
	MovieDetailsContent,
	MovieDetailsReview,
	MovieDetailsReviewHeader,
	MovieDetailsReviewRating,
	MovieDetailsNote,
} from './StyledMovieDetails';

export const MovieDetails = () => {
	return (
		<MovieDetailsContainer>
			<MovieDetailsContent>
				<MovieItem isDetailsPage />
			</MovieDetailsContent>

			<MovieDetailsReview>
				<MovieDetailsReviewHeader>Your Review</MovieDetailsReviewHeader>
				<MovieDetailsReviewRating size="large" />
				<MovieDetailsNote placeholder="Your private notes and comments about the movie..." />
			</MovieDetailsReview>
		</MovieDetailsContainer>
	);
};
