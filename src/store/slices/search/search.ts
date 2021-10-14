import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../..';
import { client } from '../../../client';
import { SearchMovieItems, SearchState } from './types';

const initialState: SearchState = {
	isLoading: false,
	searchQuery: null,
	page: 0,
	totalPages: 0,
	movies: [],
	error: null,
	cleared: true,
};

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		searchStart: (state) => {
			state.isLoading = true;
		},
		searchSuccess: (state, action) => {
			state.isLoading = false;
			state.searchQuery = action.payload.searchQuery;
			state.movies = action.payload.movies;
			state.totalPages = action.payload.totalPages;
			state.page = action.payload.page;
			state.cleared = false;
		},
		searchFailure: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
			state.cleared = true;
		},
		clearSearchMovies: (state) => {
			state.isLoading = initialState.isLoading;
			state.searchQuery = initialState.searchQuery;
			state.movies = initialState.movies;
			state.totalPages = initialState.totalPages;
			state.page = initialState.page;
			state.cleared = true;
		},
	},
});

export const searchMovie =
	(page: number, title: string) => async (dispatch: AppDispatch) => {
		dispatch(searchStart());
		try {
			const { data } = await client.get('/search', {
				params: { page, title },
			});

			const { items, pages } = data as SearchMovieItems;

			dispatch(
				searchSuccess({
					searchQuery: title,
					movies: items,
					totalPages: pages,
					page: items.length === 0 ? 0 : page,
				}),
			);
		} catch (err: any) {
			dispatch(searchFailure(err.message));
		}
	};

export const selectSearchMoviesIsLoading = (state: RootState) =>
	state.search.isLoading;
export const selectSearchMoviesError = (state: RootState) => state.search.error;
export const selectSearchMovies = (state: RootState) => state.search.movies;
export const selectSearchPages = (state: RootState) => state.search.totalPages;
export const selectSearchPage = (state: RootState) => state.search.page;
export const selectSearchMoviesTitle = (state: RootState) =>
	state.search.searchQuery;
export const selectSearchMoviesCleared = (state: RootState) =>
	state.search.cleared;

export const { searchStart, searchSuccess, searchFailure, clearSearchMovies } =
	searchSlice.actions;
export const searchReducer = searchSlice.reducer;
