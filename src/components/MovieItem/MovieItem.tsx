import { CardActions, CardContent, CardMedia } from '@mui/material';
import { FC, useCallback } from 'react';
import { useHistory } from 'react-router';
import { FavoriteButton } from '..';
import { SearchMovieItem, selectFavorites } from '../../store';
import {
	MovieItemContainer,
	MovieItemContent,
	MovieItemContentDescription,
	MovieItemHeader,
	RedirectWrapper,
	VisitOfficialSiteLink,
} from './StyledMovieItem';
import imageNotFound from '../../assets/images/not-found.png';
import { useAppSelector, useFavorites } from '../../hooks';

interface MovieItemProps {
	movie?: SearchMovieItem;
	isDetailsPage?: boolean;
}

export const MovieItem: FC<MovieItemProps> = ({ movie, isDetailsPage }) => {
	const { push } = useHistory();
	const { handleAddToFavorites, handleRemoveFromFavorites } = useFavorites();

	const handlePushToDetailsPage = useCallback(
		(id: number) => {
			if (!isDetailsPage) {
				push(`/details/${id}`);
			}
		},
		[push, isDetailsPage],
	);

	const favorite = useAppSelector(selectFavorites).favoritesIds.find(
		(fid) => fid.movieId === movie?.id,
	);

	const cardMedia = movie ? (
		<CardMedia
			component="img"
			height="320"
			image={
				movie.poster
					? `https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster}`
					: imageNotFound
			}
			alt={movie.title}
		/>
	) : null;

	return movie ? (
		<MovieItemContainer>
			{!isDetailsPage ? (
				<RedirectWrapper onClick={() => handlePushToDetailsPage(movie.id)}>
					{cardMedia}
				</RedirectWrapper>
			) : (
				cardMedia
			)}
			<MovieItemContent onClick={(e) => e.stopPropagation()}>
				<MovieItemHeader
					title={`${movie.title} (${movie.releaseDate})`}
					subheader={movie.genres.join(', ')}
				/>
				<CardContent>
					<MovieItemContentDescription>
						{movie.description}
					</MovieItemContentDescription>
					<VisitOfficialSiteLink href={movie.officialPage}>
						Visit official site
					</VisitOfficialSiteLink>
				</CardContent>
				<CardActions disableSpacing>
					<FavoriteButton
						isFavorite={!!favorite}
						handleClick={() => {
							if (favorite) {
								handleRemoveFromFavorites(favorite.id);
							} else {
								handleAddToFavorites(`${movie.id}`, movie.title, movie.poster);
							}
						}}
					/>
				</CardActions>
			</MovieItemContent>
		</MovieItemContainer>
	) : null;
};
