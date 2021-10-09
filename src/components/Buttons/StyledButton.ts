import styled from 'styled-components';

interface CustomButtonProps {
	bg: string;
}

const CustomButton = styled.button<CustomButtonProps>`
	outline: none;
	border: none;
	padding: 0.75rem 1rem;
	border-radius: 4px;
	background-color: ${({ bg }) => bg};
	color: ${({ theme }) => theme.colors.white};
	font-weight: ${({ theme }) => theme.fontWeight.semiBold};
	cursor: pointer;

	@media (max-width: ${({ theme }) => theme.devicesWidths.mobile}) {
		margin-bottom: 0.5rem;
	}
`;

export { CustomButton };
