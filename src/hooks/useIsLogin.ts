import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

const useIsLogin = (): boolean => {
    const token = useSelector((state: RootState) => state.auth.token.token);

    return Boolean(token);
};

export default useIsLogin;
