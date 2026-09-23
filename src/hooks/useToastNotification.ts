import type { AppDispatch, RootState } from "@/app/store";
import { typeToastEnum } from "@/enums/typeToastEnum";
import { setClearToastMessage } from "@/features/toastSlice";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const useToastNotification = (): void => {
  const dispatch = useDispatch<AppDispatch>();
  const { message, status } = useSelector((state: RootState) => state.toast);
  const lastDisplayedMessage = useRef<string | null>(null);

  useEffect(() => {
    if (!message) {
      lastDisplayedMessage.current = null;
      return;
    }

    if (lastDisplayedMessage.current === message) return;

    lastDisplayedMessage.current = message;

    if (status === typeToastEnum.success) {
      toast.success(message);
    } else {
      toast.error(message);
    }

    dispatch(setClearToastMessage());
  }, [dispatch, message, status]);
};

export default useToastNotification;
