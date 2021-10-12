import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Rating } from '@mui/material';
import styled from 'styled-components';

const StarsRatingContainer = styled.div`
	display: flex;
	margin-bottom: 1rem;
	width: fit-content;
`;

const StyledStarsRating = styled(Rating)`
	& > label > span.MuiRating-iconFilled {
		color: ${({ theme }) => theme.colors.secondary};
	}
`;

const StyledClearRating = styled(FontAwesomeIcon)`
	display: inline;
	margin-left: 1rem;
`;

export { StarsRatingContainer, StyledStarsRating, StyledClearRating };
