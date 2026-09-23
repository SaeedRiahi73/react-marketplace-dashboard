import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState } from "../interface/IAuth";
import { clearAuthSession, getDemoAuthSession } from "@/utility/authSessionStorage";
import { IAuthSession } from "@/interface/IAuth";
import type { RootState } from "@/app/store";


const initialState: IAuthState = {
    session: getDemoAuthSession(),
    isAuthInitialized: false,
    logoutOpenDialog: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setSession(state, action: PayloadAction<IAuthSession>) {
            state.session = action.payload;
        },
        setAuthInitialized(state, action: PayloadAction<boolean>) {
            state.isAuthInitialized = action.payload;
        },
        // setIsLoading(state, action: PayloadAction<boolean>) {
        //     state.token.isLoading = action.payload;
        // },
        logout(state) {
            state.session = null;
            clearAuthSession();
        }
    }
})

export const { setSession, setAuthInitialized, logout } = authSlice.actions;

export const selectAuthSession = (state: RootState): IAuthSession | null =>
    state.auth.session;

export const selectCurrentUserRole = (state: RootState) =>
    state.auth.session?.role ?? null;

export default authSlice.reducer;

// export const getIsLoading = (state: RootState): boolean => state.auth.token.isLoading;
