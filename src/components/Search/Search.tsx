import { FC } from 'react';
import { SearchButton } from '..';
import { SearchContainer, SearchInput } from './StyledSearch';

interface SearchProps {
	value?: string;
	handleSearch: () => void;
	handleChangeTypedTitle: (value: string) => void;
}

export const Search: FC<SearchProps> = ({
	value,
	handleSearch,
	handleChangeTypedTitle,
}) => {
	return (
		<SearchContainer>
			<SearchInput
				type="text"
				value={value ? value : ''}
				placeholder="Search by movie title..."
				onChange={(event) => handleChangeTypedTitle(event.target.value)}
			/>
			<SearchButton onClick={handleSearch} />
		</SearchContainer>
	);
};
