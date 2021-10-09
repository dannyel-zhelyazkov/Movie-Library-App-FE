import styled from 'styled-components';

const SearchContainer = styled.div`
	display: flex;

	@media (max-width: ${({ theme }) => theme.devicesWidths.mobile}) {
		flex-direction: column;
	}
`;

const SearchInput = styled.input`
	border: none;
	outline: 2px solid ${({ theme }) => theme.colors.secondary};
	border-radius: 4px;
	padding: 0.75rem;
	width: 20rem;
	margin-right: 1rem;

	@media (max-width: ${({ theme }) => theme.devicesWidths.mobile}) {
		width: 100%;
		margin-bottom: 0.5rem;
	}
`;

export { SearchContainer, SearchInput };
