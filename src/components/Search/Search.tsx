import { SearchButton } from '..';
import { SearchContainer, SearchInput } from './StyledSearch';

export const Search = () => {
	return (
		<SearchContainer>
			<SearchInput type="text" placeholder="Search by movie title..." />
			<SearchButton />
		</SearchContainer>
	);
};
