import styled from 'styled-components';

const MoviesList = styled.ul`
	display: flex;
	flex-direction: column;
	list-style: none;
	align-items: center;

	& > li {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		margin-bottom: 2rem;
	}
`;

export { MoviesList };
