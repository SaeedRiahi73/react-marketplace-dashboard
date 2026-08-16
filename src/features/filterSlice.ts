import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilterState, IStatusFilterd } from "@/interface/IFilter";
import { productFilterEnum } from "@/enums/productFilterEnum";
import { RootState } from "@/app/store";
import { IProduct } from "@/interface/IProduct";


const initialState: IFilterState = {
    status: {
        statusValue: productFilterEnum.All,
    },
    searchQuery: "",
    filteredProduct: [],
    currentPage: 1,
    productPerPage: 6,
    currentProductCount: 0,
    selectedColumns: {
        productInfo: true,
        amount: true,
        stock: true,
        status: true,
        actions: true,
    }
}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setStatusFilter: (state, action: PayloadAction<IStatusFilterd>) => {
            state.status.statusValue = action.payload.statusValue;
        },
        setSearchQueryFilter: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload
        },
        setFilteredProduct: (state, action: PayloadAction<IProduct[]>) => {
            state.filteredProduct = action.payload;
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        setProductPerPage: (state, action: PayloadAction<number>) => {
            state.productPerPage = action.payload;
        },
        setCurrentProductCount: (state, action: PayloadAction<number>) => {
            state.currentProductCount = action.payload;
        },
        setToggleColumn: (state, action: PayloadAction<string>) => {
            const key = action.payload;
            state.selectedColumns[key] = !state.selectedColumns[key];
        }
    }
})


export const { setSearchQueryFilter, setStatusFilter, setToggleColumn, setFilteredProduct, setCurrentPage, setProductPerPage, setCurrentProductCount } = filterSlice.actions;
export default filterSlice.reducer;


export const getStatus = (state: RootState) => state.filter.status;
export const getSearchQuery = (state: RootState) => state.filter.searchQuery;
export const getFilteredProduct = (state: RootState) => state.filter.filteredProduct;
export const getCurrentPage = (state: RootState) => state.filter.currentPage;
export const getProductPerPage = (state: RootState) => state.filter.productPerPage;
export const getCurrentProductCount = (state: RootState) => state.filter.currentProductCount;
export const getSelectedColumns = (state: RootState) => state.filter.selectedColumns;

