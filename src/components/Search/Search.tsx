import { SearchButton, SearchContainer, SearchInput } from './StyledSearch';

export const Search = () => {
	return (
		<SearchContainer>
			<SearchInput type="text" placeholder="Search by movie title..." />
			<SearchButton>Search</SearchButton>
		</SearchContainer>
	);
};
