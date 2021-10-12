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
	notes: Notes;
}

export interface Rating {
	id: string | null;
	rating: number | null;
}

export interface Notes {
	id: string | null;
	notes: string | null;
}
