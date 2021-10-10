import { FC } from 'react';
import { theme } from '../../const';
import { CustomButton } from './StyledButton';

interface SearchButtonProps {
	onClick: () => void;
}

export const SearchButton: FC<SearchButtonProps> = ({ onClick }) => (
	<CustomButton bg={theme.colors.secondary} onClick={onClick}>
		Search
	</CustomButton>
);
