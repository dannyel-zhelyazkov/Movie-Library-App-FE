import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { FC } from 'react';
import { CustomButton } from './StyledButton';
import { theme } from '../../const';

interface FavoriteButtonProps {
	isFavorite?: boolean;
}

export const FavoriteButton: FC<FavoriteButtonProps> = ({ isFavorite }) => {
	return (
		<CustomButton bg={theme.colors.secondary}>
			<FontAwesomeIcon
				size="2x"
				color={isFavorite ? theme.colors.primary : 'white'}
				icon={isFavorite ? solidHeart : regularHeart}
			/>
		</CustomButton>
	);
};
