import { Route, Switch } from 'react-router-dom';
import { Home, MovieDetails, Search } from '../pages';

export const AppRouter = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/search" component={Search} />
			<Route exact path="/details/:id" component={MovieDetails} />
		</Switch>
	);
};
