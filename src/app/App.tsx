import { useEffect } from 'react';
import { Navbar } from '../components';
import { Theme } from '../const';
import { useAppDispatch } from '../hooks';
import { fetchFavorites } from '../store';
import { AppRouter } from './AppRouter';

export const App = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchFavorites(1));
	}, [dispatch]);

	return (
		<Theme>
			<AppRouter>
				<Navbar />
			</AppRouter>
		</Theme>
	);
};
