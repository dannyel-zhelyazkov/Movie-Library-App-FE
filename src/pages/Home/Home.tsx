import { Navbar } from '../../components';
import { HeroSection } from '../../components';
import { FavoriteMovies } from '../../components';

export const Home = () => {
	return (
		<>
			<header>
				<Navbar />
				<HeroSection />
			</header>
			<FavoriteMovies />
		</>
	);
};
