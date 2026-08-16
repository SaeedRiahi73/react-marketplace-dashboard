import NumberOfRowsPerPage from "./NumberOfRowsPerPage";
import PaginationManagement from "./PaginationManagement";
import usePagination from "@/hooks/usePagination";

const Pagination: React.FC = () => {

  const {
    pageCount,
    currentProductCount,
    currentPage,
    numberPage,
    numberRows,
    handlePageClick,
    handleRow,
    handleNextPage,
    handlePreviousPage,
    handleFirstPage,
    handleLastPage
  } = usePagination();

  return (
    <div className="flex tablet:flex-row justify-between">
      <NumberOfRowsPerPage
        numberRows={numberRows}
        handleRow={handleRow}
        currentProductCount={currentProductCount}
      />
      <PaginationManagement
        currentPage={currentPage}
        handleFirstPage={handleFirstPage}
        handleLastPage={handleLastPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        handlePreviousPage={handlePreviousPage}
        numberPage={numberPage}
        pageCount={pageCount}
      />
    </div>
  );
};

export default Pagination;
