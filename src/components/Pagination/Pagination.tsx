import { ChangeEvent, FC } from 'react';
import { PaginationContainer } from './StyledPagination';

interface PaginationProps {
	count: number;
	handleOnPageChange?: (event: ChangeEvent<unknown>, page: number) => void;
}

export const Pagination: FC<PaginationProps> = ({
	count,
	handleOnPageChange,
}) => {
	return (
		<PaginationContainer
			count={count}
			shape="rounded"
			siblingCount={0}
			onChange={handleOnPageChange}
		/>
	);
};
