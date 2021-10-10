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
		},
		fetchFavoritesFailure: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		addToFavoritesStart: (state) => {
			state.isLoading = true;
		},
		addToFavoritesSuccess: (state, action) => {
			state.isLoading = false;
			if (state.favorites.length < 4) {
				state.favorites.push({ ...action.payload });
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
			state.favorites = state.favorites.filter((f) => f.id !== action.payload);
			state.favoritesIds = state.favoritesIds.filter(
				(fid) => fid.id !== action.payload,
			);
		},
		removeFromFavoritesFailure: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export const fetchFavorites =
	(page: number) => async (dispatch: AppDispatch) => {
		dispatch(fetchFavoritesStart());
		try {
			const res = await client.get('/favorites', {
				params: {
					page,
				},
			});

			const { favorites, totalPages, favoritesIds } =
				res.data as FavoriteMovies;

			dispatch(
				fetchFavoritesSuccess({
					page: favorites.length === 0 ? 0 : page,
					favorites,
					totalPages,
					favoritesIds,
				}),
			);
		} catch (err) {
			dispatch(fetchFavoritesFailure(err));
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
		} catch (err) {
			dispatch(addToFavoritesFailure(err));
		}
	};

export const removeFromFavorites =
	(id: string) => async (dispatch: AppDispatch) => {
		dispatch(removeFromFavoritesStart());
		try {
			await client.delete(`/favorites/${id}`);

			dispatch(removeFromFavoritesSuccess(id));
		} catch (err) {
			dispatch(removeFromFavoritesFailure(err));
		}
	};

export const selectFavorites = (state: RootState) => state.favorites;
export const selectFavoritesPage = (state: RootState) => state.favorites.page;
export const selectFavoritesTotalPages = (state: RootState) =>
	state.favorites.totalPages;

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
} = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
