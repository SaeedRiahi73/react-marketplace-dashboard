import { IViewportState } from "@/interface/IViewportState";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/app/store";

const initialState: IViewportState = {
    isMobile: false
}

const viewportSlice = createSlice({
    name: "viewport",
    initialState,
    reducers: {
        setIsMobile(state, action: PayloadAction<boolean>) {
            state.isMobile = action.payload
        }
    }
})

export const isMobileSelector=(state:RootState)=>state.viewport.isMobile;
export const { setIsMobile } = viewportSlice.actions;
export default viewportSlice.reducer;
