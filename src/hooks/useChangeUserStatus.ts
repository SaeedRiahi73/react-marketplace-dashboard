import { useChangeUserStatusMutation } from "@/api/userApiSlice";
import { permissionEnum } from "@/enums/permissionEnum";
import { typeToastEnum } from "@/enums/typeToastEnum";
import { setToastMessage } from "@/features/toastSlice";
import useHasPermission from "@/hooks/useHasPermission";
import {
  IUseChangeUserStatusProps,
  IUseChangeUserStatusReturn,
} from "@/interface/IUser";
import { useState } from "react";
import { useDispatch } from "react-redux";

const useChangeUserStatus = ({
  user,
}: IUseChangeUserStatusProps): IUseChangeUserStatusReturn => {
  const [open, setOpen] = useState(false);
  const hasChangeStatusPermission = useHasPermission(
    permissionEnum.ChangeUserStatus,
  );
  const [changeUserStatus, { isLoading }] = useChangeUserStatusMutation();
  const dispatch = useDispatch();
  const canChangeStatus = hasChangeStatusPermission && user.canChangeStatus;

  const handleChangeStatus = async (): Promise<void> => {
    if (!canChangeStatus) {
      dispatch(
        setToastMessage({
          status: typeToastEnum.error,
          message: "شما اجازه تغییر وضعیت این کاربر را ندارید.",
        }),
      );
      return;
    }

    try {
      await changeUserStatus({
        id: user.id,
        isActive: !user.isActive,
      }).unwrap();

      setOpen(false);
      dispatch(
        setToastMessage({
          status: typeToastEnum.success,
          message: user.isActive
            ? "کاربر با موفقیت غیرفعال شد."
            : "کاربر با موفقیت فعال شد.",
        }),
      );
    } catch {
      // پیام خطای API به‌صورت سراسری در apiSlice نمایش داده می‌شود.
    }
  };

  return {
    canChangeStatus,
    isLoading,
    open,
    setOpen,
    handleChangeStatus,
  };
};

export default useChangeUserStatus;
