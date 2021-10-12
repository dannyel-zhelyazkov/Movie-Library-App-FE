export interface Movie {
	id: number;
	title: string;
	poster: string;
	genres: Array<string>;
	releaseDate: string;
	description: string;
	officialPage: string;
}

export interface SearchState {
	isLoading: boolean;
	searchQuery: string | null;
	page: number;
	totalPages: number;
	movies: Array<Movie>;
	error: string | null;
	cleared: boolean;
}

export interface SearchMovieItems {
	items: Array<Movie>;
	pages: number;
}
