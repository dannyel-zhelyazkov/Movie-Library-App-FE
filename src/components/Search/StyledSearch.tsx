import styled from 'styled-components';

const SearchContainer = styled.div`
	display: flex;

	@media (max-width: ${({ theme }) => theme.devicesWidths.mobile}) {
		flex-direction: column;
	}
`;

const SearchInput = styled.input`
	border: none;
	outline: none;
	border-radius: 4px;
	padding: 0.75rem;
	width: 20rem;
	margin-right: 1rem;

	@media (max-width: ${({ theme }) => theme.devicesWidths.mobile}) {
		width: 100%;
		margin-bottom: 0.5rem;
	}
`;

const SearchButton = styled.button`
	outline: none;
	border: none;
	padding: 0.75rem 1rem;
	border-radius: 4px;
	background-color: ${({ theme }) => theme.colors.secondary};
	color: ${({ theme }) => theme.colors.white};
	font-weight: ${({ theme }) => theme.fontWeight.semiBold};
	cursor: pointer;

	@media (max-width: ${({ theme }) => theme.devicesWidths.mobile}) {
		margin-bottom: 0.5rem;
	}
`;

export { SearchContainer, SearchInput, SearchButton };
