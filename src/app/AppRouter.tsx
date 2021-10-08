import { Route, Switch } from 'react-router-dom';
import { Home, MovieDetails, SearchMovies } from '../pages';

export const AppRouter = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/search" component={SearchMovies} />
			<Route exact path="/details/:id" component={MovieDetails} />
		</Switch>
	);
};
