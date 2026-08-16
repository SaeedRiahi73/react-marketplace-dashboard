import { RootState } from "@/app/store";
import { getCurrentPage, getCurrentProductCount, getProductPerPage, setCurrentPage, setProductPerPage } from "@/features/filterSlice";
import { ISelected } from "@/interface/IProps";
import { useDispatch, useSelector } from "react-redux";
import { usePageCalculation } from "./usePageCalculation";
import { useCallback } from "react";

const usePagination = () => {

    const dispatch = useDispatch();

    // شماره صفحه فعلی
    const currentPage = useSelector((state: RootState) => getCurrentPage(state));
    // تعداد محصولات در هر صفحه
    const productPerPage = useSelector((state: RootState) => getProductPerPage(state));
    // تعداد کل محصولات
    const currentProductCount = useSelector((state: RootState) => getCurrentProductCount(state));

    ////////////////////////////////////////

    const pageCount = Math.ceil(currentProductCount / productPerPage);

    const numberPage: ISelected[] = usePageCalculation(pageCount);

    ///////////////////////////////////////////

    const numberRows: ISelected[] = usePageCalculation(currentProductCount);

    const setPage = useCallback(
        (page: number) => {
            dispatch(setCurrentPage(page));
        },
        [dispatch]
    );


    const handlePageClick = useCallback((value: string) => {
        const newCurrentPage = parseInt(value);
        setPage(newCurrentPage);
    }, [setPage]);


    const handleRow = useCallback((value: string) => {
        if (pageCount > productPerPage) {
            setPage(1);
        }
        dispatch(setProductPerPage(parseInt(value)));
    }, [pageCount, productPerPage, dispatch, setPage])


    const handleNextPage = useCallback(() => {
        setPage(currentPage + 1);
    }, [currentPage, setPage])


    const handlePreviousPage = useCallback(() => {
        setPage(currentPage - 1);

    }, [currentPage, setPage]);


    const handleFirstPage = useCallback(() => {
        setPage(1);
    }, [setPage])


    const handleLastPage = useCallback(() => {
        setPage(pageCount);
    }, [setPage])

    return {
        currentProductCount,
        currentPage,
        pageCount,
        numberPage,
        numberRows,
        handlePageClick,
        handleRow,
        handleNextPage,
        handlePreviousPage,
        handleFirstPage,
        handleLastPage
    }
}


export default usePagination