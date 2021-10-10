import styled from 'styled-components';

const MoviePosterContainer = styled.div`
	cursor: pointer;
	width: fit-content !important;
`;

const MoviePosterImage = styled.img`
	cursor: pointer;
	border-radius: 8px;

	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	transition: all 0.2s;

	&:hover {
		transform: scale(1.03) translateZ(0) perspective(1px);
	}

	@media (max-width: ${({ theme }) => theme.devicesWidths.mobile}) {
		width: 100%;
	}
`;

export { MoviePosterContainer, MoviePosterImage };
