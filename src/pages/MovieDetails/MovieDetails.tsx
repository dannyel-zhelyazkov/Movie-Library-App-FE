import { useEffect, useState } from 'react';
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
	const {
		movie,
		handleAddRating,
		handleChangeRating,
		handleRemoveRating,
		handleChangeNotes,
	} = useMovieDetails(match.params.id);

	const [typedNotes, setTypedNotes] = useState<string>('');

	useEffect(() => {
		if (movie.notes.notes) {
			setTypedNotes(movie.notes.notes);
		}
	}, [movie.notes.notes]);

	return movie && movie.movieDetails && movie.rating && movie.notes ? (
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
				<MovieDetailsNote
					placeholder="Your private notes and comments about the movie..."
					value={typedNotes}
					onChange={(e) => {
						setTypedNotes((_: string) => {
							handleChangeNotes(e.target.value);
							return e.target.value;
						});
					}}
				/>
			</MovieDetailsReview>
		</MovieDetailsContainer>
	) : null;
});
