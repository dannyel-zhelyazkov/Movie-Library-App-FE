import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { searchReducer, favoritesReducer, movieDetailsReducer } from './slices';

export const store = configureStore({
	reducer: {
		search: searchReducer,
		favorites: favoritesReducer,
		movieDetails: movieDetailsReducer,
	},
	devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
