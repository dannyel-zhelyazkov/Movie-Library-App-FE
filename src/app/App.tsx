import { Navbar } from '../components';
import { Theme } from '../const';
import { AppRouter } from './AppRouter';

export const App = () => {
	return (
		<Theme>
			<AppRouter>
				<Navbar />
			</AppRouter>
		</Theme>
	);
};
