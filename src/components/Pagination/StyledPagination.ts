import { Pagination } from '@mui/material';
import styled from 'styled-components';

const PaginationContainer = styled(Pagination)`
	& > ul > li > button.Mui-selected {
		background-color: ${({ theme }) => theme.colors.secondary};
		color: ${({ theme }) => theme.colors.white};
	}
`;

export { PaginationContainer };
