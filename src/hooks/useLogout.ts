import { apiSlice } from "@/api/apiSlice";
import { useLogoutMutation } from "@/api/authApiSlice";
import { logout } from "@/features/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [logoutRequest, { isLoading }] = useLogoutMutation();

    const handleLogout = async (): Promise<void> => {
        if (isLoading) return;

        try {
            await logoutRequest().unwrap();
        } catch {
            // پیام خطای API به‌صورت سراسری نمایش داده می‌شود.
        } finally {
            dispatch(logout());
            dispatch(apiSlice.util.resetApiState());
            navigate("/login", { replace: true });
        }
    };

    return { handleLogout, isLoading };
};

export default useLogout;
