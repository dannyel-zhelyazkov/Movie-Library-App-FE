export interface SearchMovieItem {
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
	movies: Array<SearchMovieItem>;
	error: string | null;
}

export interface SearchMovieItems {
	items: Array<SearchMovieItem>;
	pages: number;
}
