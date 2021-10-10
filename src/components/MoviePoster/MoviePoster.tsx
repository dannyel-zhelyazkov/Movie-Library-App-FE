import { FC } from 'react';
import { MoviePosterContainer, MoviePosterImage } from './StyledMoviePoster';
import imageNotFound from '../../assets/images/not-found.png';

interface MoviePosterProps {
	width?: number;
	poster: string;
}

export const MoviePoster: FC<MoviePosterProps> = ({ width, poster }) => {
	return (
		<MoviePosterContainer style={{ width: `${width}rem` }}>
			<MoviePosterImage
				src={
					poster
						? `https://www.themoviedb.org/t/p/w220_and_h330_face/${poster}`
						: imageNotFound
				}
				alt={poster}
			/>
		</MoviePosterContainer>
	);
};
