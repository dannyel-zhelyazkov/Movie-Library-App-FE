import { FC } from 'react';
import { SearchButton } from '..';
import { SearchContainer, SearchInput } from './StyledSearch';

interface SearchProps {
	searchType?: 'FAVORITE' | 'ALL';
	handleSearchMovies?: () => void;
	handleChangeTypedTitle?: (value: string) => void;
}

export const Search: FC<SearchProps> = ({
	searchType,
	handleSearchMovies,
	handleChangeTypedTitle,
}) => {
	return (
		<SearchContainer>
			<SearchInput
				type="text"
				placeholder="Search by movie title..."
				onChange={(event) =>
					handleChangeTypedTitle
						? handleChangeTypedTitle(event.target.value)
						: null
				}
			/>
			<SearchButton
				onClick={handleSearchMovies ? handleSearchMovies : () => {}}
			/>
		</SearchContainer>
	);
};
