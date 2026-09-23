import { useRefreshTokenMutation } from "@/api/authApiSlice";
import type { RootState } from "@/app/store";
import { setAuthInitialized, setSession } from "@/features/authSlice";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const useAuthInitializer = (): boolean => {
    const dispatch = useDispatch();
    const session = useSelector((state: RootState) => state.auth.session);
    const isAuthInitialized = useSelector(
        (state: RootState) => state.auth.isAuthInitialized,
    );
    const [refreshToken] = useRefreshTokenMutation();
    const initializationStarted = useRef(false);

    useEffect(() => {
        if (initializationStarted.current) return;

        initializationStarted.current = true;

        const initializeAuth = async (): Promise<void> => {
            if (session) {
                dispatch(setAuthInitialized(true));
                return;
            }

            try {
                const response = await refreshToken().unwrap();

                if (response.isSuccess) {
                    dispatch(setSession(response.data));
                }
            } catch {
                // نداشتن Refresh Cookie معتبر در شروع برنامه یک وضعیت طبیعی است.
            } finally {
                dispatch(setAuthInitialized(true));
            }
        };

        void initializeAuth();
    }, [dispatch, refreshToken, session]);

    return isAuthInitialized;
};

export default useAuthInitializer;
