import { FC } from 'react';
import { PaginationContainer } from './StyledPagination';

interface PaginationProps {
	count: number;
	page: number;
	handleSearchOnPageChange?: (page: number) => void;
}

export const Pagination: FC<PaginationProps> = ({
	count,
	page,
	handleSearchOnPageChange,
}) => {
	const handleChangePage = (_: React.ChangeEvent<unknown>, page: number) => {
		if (handleSearchOnPageChange) {
			handleSearchOnPageChange(page);
		}
	};
	return (
		<PaginationContainer
			count={count}
			shape="rounded"
			page={page}
			siblingCount={0}
			onChange={handleChangePage}
		/>
	);
};
