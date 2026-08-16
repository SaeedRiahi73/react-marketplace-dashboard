import { setSearchQueryFilter } from "@/features/filterSlice";
import { useEffect, useMemo } from "react";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";
import { SearchHandler } from "@/type/types";


const useSearchFilter = (): SearchHandler => {

    const dispatch = useDispatch();

    const handleSearchQuertFilter = useMemo(
        () =>
            debounce((query) => {
                dispatch(setSearchQueryFilter(query));
            }, 1000),
        [dispatch]
    );

    useEffect(() => {
        return () => {
            handleSearchQuertFilter.cancel();   
        }
    }, [handleSearchQuertFilter])

    return handleSearchQuertFilter;
}


export default useSearchFilter;