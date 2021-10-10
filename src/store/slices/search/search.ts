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
		},
		searchFailure: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		clearSearchMovies: (state) => {
			state.isLoading = initialState.isLoading;
			state.searchQuery = initialState.searchQuery;
			state.movies = initialState.movies;
			state.totalPages = initialState.totalPages;
			state.page = initialState.page;
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

			const movies = (data as SearchMovieItems).items;
			const totalPages = (data as SearchMovieItems).pages;

			dispatch(searchSuccess({ searchQuery: title, movies, totalPages, page }));
		} catch (err) {
			dispatch(searchFailure(err));
		}
	};

export const selectSearchMovies = (state: RootState) => state.search.movies;
export const selectSearchPages = (state: RootState) => state.search.totalPages;
export const selectSearchPage = (state: RootState) => state.search.page;
export const selectSearchMoviesTitle = (state: RootState) =>
	state.search.searchQuery;

export const { searchStart, searchSuccess, searchFailure, clearSearchMovies } =
	searchSlice.actions;
export const searchReducer = searchSlice.reducer;
