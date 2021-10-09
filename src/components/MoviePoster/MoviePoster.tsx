import { FC } from 'react';
import { MoviePosterContainer } from './StyledMoviePoster';

interface MoviePosterProps {
	width?: number;
}

export const MoviePoster: FC<MoviePosterProps> = ({ width }) => {
	return <MoviePosterContainer style={{ width: `${width}rem` }} />;
};
