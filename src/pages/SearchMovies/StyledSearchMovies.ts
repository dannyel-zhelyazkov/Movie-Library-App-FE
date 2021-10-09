import styled from 'styled-components';

const SearchMoviesContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1rem;
`;

const SearchMoviesHeader = styled.h1`
	margin-top: 4rem;
	margin-bottom: 1rem;
	text-align: center;
`;

const SearchSection = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 3rem;
`;

const MoviesList = styled.ul`
	display: flex;
	flex-direction: column;
	list-style: none;
	align-items: center;

	& > li {
		margin-bottom: 2rem;
	}
`;

export { SearchMoviesContainer, SearchMoviesHeader, SearchSection, MoviesList };
