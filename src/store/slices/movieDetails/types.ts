import { Movie } from '..';

export interface MovieDetailsState {
	isLoading: boolean;
	movie: DetailedMovie;
	error: string | null;
	cleared: boolean;
}

export interface DetailedMovie {
	movieDetails: Movie | null;
	rating: Rating;
	notes: string | null;
}

export interface Rating {
	id: string;
	rating: number | null;
}
