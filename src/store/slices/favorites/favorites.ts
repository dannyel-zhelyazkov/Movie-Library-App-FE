import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../..';
import { client } from '../../../client';
import { FavoriteMovies, FavoritesState } from './types';

const initialState: FavoritesState = {
	isLoading: false,
	title: null,
	favorites: [],
	favoritesIds: [],
	page: 0,
	totalPages: 0,
	error: null,
	cleared: true,
	initialLoad: true,
	edgeLengthChanged: false,
};

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		fetchFavoritesStart: (state) => {
			state.isLoading = true;
		},
		fetchFavoritesSuccess: (state, action) => {
			state.isLoading = false;
			state.favorites = action.payload.favorites;
			state.favoritesIds = action.payload.favoritesIds;
			state.page = action.payload.page;
			state.totalPages = action.payload.totalPages;
			state.title = action.payload.title;
			state.cleared = false;
			state.initialLoad = action.payload.initialLoad;
			state.edgeLengthChanged = false;
		},
		fetchFavoritesFailure: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
			state.cleared = true;
		},
		addToFavoritesStart: (state) => {
			state.isLoading = true;
		},
		addToFavoritesSuccess: (state, action) => {
			state.isLoading = false;
			if (state.favorites.length < 4) {
				state.favorites.push({ ...action.payload });
			} else {
				state.edgeLengthChanged = true;
			}
			state.favoritesIds.push({
				id: action.payload.id,
				movieId: action.payload.movieId,
			});
		},
		addToFavoritesFailure: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		removeFromFavoritesStart: (state) => {
			state.isLoading = true;
		},
		removeFromFavoritesSuccess: (state, action) => {
			state.isLoading = false;
			if (state.favorites.length === 1) {
				state.edgeLengthChanged = true;
			}
			state.favorites = state.favorites.filter((f) => f.id !== action.payload);
			state.favoritesIds = state.favoritesIds.filter(
				(fid) => fid.id !== action.payload,
			);
		},
		removeFromFavoritesFailure: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		clearTitle: (state) => {
			state.title = initialState.title;
			state.cleared = true;
		},
	},
});

export const fetchFavorites =
	(page: number, title?: string, initialLoad?: boolean) =>
	async (dispatch: AppDispatch) => {
		dispatch(fetchFavoritesStart());
		try {
			const res = await client.get(
				`/favorites?page=${page}&title=${title ? title : ''}`,
			);

			const { favorites, totalPages, favoritesIds } =
				res.data as FavoriteMovies;

			dispatch(
				fetchFavoritesSuccess({
					page: favorites.length === 0 ? 0 : page,
					favorites,
					totalPages,
					favoritesIds,
					title,
					initialLoad,
				}),
			);
		} catch (err: any) {
			dispatch(fetchFavoritesFailure(err.message));
		}
	};

export const addToFavorites =
	(movieId: string, title: string, poster: string) =>
	async (dispatch: AppDispatch) => {
		dispatch(addToFavoritesStart());
		try {
			const { data } = await client.post('/favorites', {
				id: movieId,
				title,
				poster,
			});

			dispatch(addToFavoritesSuccess(data));
		} catch (err: any) {
			dispatch(addToFavoritesFailure(err.message));
		}
	};

export const removeFromFavorites =
	(id: string) => async (dispatch: AppDispatch) => {
		dispatch(removeFromFavoritesStart());
		try {
			await client.delete(`/favorites/${id}`);

			dispatch(removeFromFavoritesSuccess(id));
		} catch (err: any) {
			dispatch(removeFromFavoritesFailure(err.message));
		}
	};

export const selectFavorites = (state: RootState) => state.favorites;
export const selectFavoritesEdgeLengthChanged = (state: RootState) =>
	state.favorites.edgeLengthChanged;
export const selectFavoritesError = (state: RootState) => state.favorites.error;
export const selectFavoritesIsLoading = (state: RootState) =>
	state.favorites.isLoading;
export const selectFavoritesTitle = (state: RootState) => state.favorites.title;
export const selectFavoritesPage = (state: RootState) => state.favorites.page;
export const selectFavoritesTotalPages = (state: RootState) =>
	state.favorites.totalPages;
export const selectFavoritesCleared = (state: RootState) =>
	state.favorites.cleared;
export const selectFavoritesInitialLoad = (state: RootState) =>
	state.favorites.initialLoad;
export const {
	fetchFavoritesStart,
	fetchFavoritesSuccess,
	fetchFavoritesFailure,
	addToFavoritesStart,
	addToFavoritesSuccess,
	addToFavoritesFailure,
	removeFromFavoritesStart,
	removeFromFavoritesSuccess,
	removeFromFavoritesFailure,
	clearTitle,
} = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
