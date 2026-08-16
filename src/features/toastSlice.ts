import { typeToastEnum } from "@/enums/typeToastEnum";
import { IToast } from "@/interface/IToast";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: IToast = {
    status: typeToastEnum.success,
    message: null
}

const toastSlice = createSlice({
    name: "toast",
    initialState,
    reducers: {
        setToastMessage: (state, action: PayloadAction<IToast>) => {
            if (!state.message) {
                state.message = action.payload.message;
                state.status = action.payload.status
            }
        },
        setClearToastMessage: (state) => {
            state.status = typeToastEnum.success,
            state.message = null
        }
    }
})

export const { setClearToastMessage, setToastMessage } = toastSlice.actions;
export default toastSlice.reducer;