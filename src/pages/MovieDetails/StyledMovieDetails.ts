import { Rating } from '@mui/material';
import styled from 'styled-components';

const MovieDetailsContainer = styled.div`
	padding: 2rem;
`;

const MovieDetailsContent = styled.div`
	display: flex;
	margin-bottom: 1rem;
`;

const MovieDetailsReview = styled.div`
	display: flex;
	flex-direction: column;
`;

const MovieDetailsReviewHeader = styled.h3`
	display: block;
	margin-bottom: 1rem;
`;

const MovieDetailsReviewRating = styled(Rating)`
	margin-bottom: 1rem;
	width: fit-content;

	& > label > span.MuiRating-iconFilled {
		color: ${({ theme }) => theme.colors.secondary};
	}
`;

const MovieDetailsNote = styled.textarea`
	width: 30rem;
	height: 10rem;
	outline: none;
	padding: 0.5rem;
	resize: none;

	@media (max-width: ${({ theme }) => theme.devicesWidths.mobile}) {
		width: 100%;
	}
`;

export {
	MovieDetailsContainer,
	MovieDetailsContent,
	MovieDetailsReview,
	MovieDetailsReviewHeader,
	MovieDetailsReviewRating,
	MovieDetailsNote,
};
