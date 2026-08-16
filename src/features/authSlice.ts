import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState } from "../interface/IAuth";
import Cookies from "js-cookie";


const initialState: IAuthState = {
    token: {
        token: sessionStorage.getItem("token") || "",
        // isLoading: false
    },
    logoutOpenDialog: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken(state, action: PayloadAction<string>) {
            state.token.token = action.payload as string;
            // state.token.isLoading = false;
        },
        // setIsLoading(state, action: PayloadAction<boolean>) {
        //     state.token.isLoading = action.payload;
        // },
        logout(state) {
            state.token.token = "";
            sessionStorage.removeItem('token');
            Cookies.remove('token', { path: '/' });
        }
    }
})

export const { setToken, logout } = authSlice.actions;
export default authSlice.reducer;

// export const getIsLoading = (state: RootState): boolean => state.auth.token.isLoading;
