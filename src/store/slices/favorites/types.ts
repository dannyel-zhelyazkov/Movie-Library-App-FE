export interface FavoritesState {
	isLoading: boolean;
	title: string | null;
	favorites: Array<FavoriteMovie>;
	favoritesIds: Array<{
		id: string;
		movieId: number;
	}>;
	page: number;
	totalPages: number;
	error: string | null;
}

export interface FavoriteMovies {
	favorites: Array<FavoriteMovie>;
	favoritesIds: Array<number>;
	totalPages: number;
}

export interface FavoriteMovie {
	id: string;
	movieId: number;
	title: string;
	poster: string;
}
