import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FC, useCallback } from 'react';
import { theme } from '../../const';
import {
	StarsRatingContainer,
	StyledClearRating,
	StyledStarsRating,
} from './StyledStarsRating';

interface RatingProps {
	value: number | null;
	handleAddRating: (newRating: number) => void;
	handleChangeRating: (newRating: number) => void;
	handleRemoveRating: () => void;
}

export const StarsRating: FC<RatingProps> = ({
	value,
	handleAddRating,
	handleChangeRating,
	handleRemoveRating,
}) => {
	const handleOnChange = useCallback(
		(_: React.SyntheticEvent<Element, Event>, rating: number | null) => {
			if (rating) {
				if (value) {
					handleChangeRating(rating);
					return;
				}

				handleAddRating(rating);
			}
		},
		[handleAddRating, handleChangeRating, value],
	);

	const handleOnClick = useCallback(() => {
		if (value) {
			handleRemoveRating();
		}
	}, [handleRemoveRating, value]);

	return (
		<StarsRatingContainer>
			<StyledStarsRating value={value} size="large" onChange={handleOnChange} />
			<StyledClearRating
				size="2x"
				icon={faTimes}
				onClick={handleOnClick}
				color={theme.colors.primary}
			/>
		</StarsRatingContainer>
	);
};
