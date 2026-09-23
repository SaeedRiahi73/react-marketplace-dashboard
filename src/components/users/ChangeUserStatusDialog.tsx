import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui";
import useChangeUserStatus from "@/hooks/useChangeUserStatus";
import { IUserListItem } from "@/interface/IUser";
import { Loader2, UserCheck, UserX } from "lucide-react";

interface IChangeUserStatusDialogProps {
  user: IUserListItem;
}

const ChangeUserStatusDialog: React.FC<IChangeUserStatusDialogProps> = ({
  user,
}) => {
  const {
    canChangeStatus,
    isLoading,
    open,
    setOpen,
    handleChangeStatus,
  } = useChangeUserStatus({ user });
  const actionLabel = user.isActive ? "غیرفعال‌سازی" : "فعال‌سازی";
  const StatusIcon = user.isActive ? UserX : UserCheck;

  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => {
        if (canChangeStatus && !isLoading) setOpen(nextOpen);
      }}
    >
      <DialogTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="sm"
          disabled={!canChangeStatus || isLoading}
          title={
            canChangeStatus
              ? `${actionLabel} کاربر`
              : "تغییر وضعیت این کاربر مجاز نیست"
          }
          className={`h-9 gap-2 rounded-full px-3 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md ${
            !canChangeStatus
              ? "border-lightGray-200 bg-lightGray-50 text-lightGray-500"
              : user.isActive
                ? "border-Error-100 bg-Error-25 text-Error-600 hover:bg-Error-50 hover:text-Error-700"
                : "border-selfit-100 bg-selfit-25 text-selfit-700 hover:bg-selfit-50 hover:text-selfit-800"
          }`}
        >
          <StatusIcon className="h-4 w-4" />
          {actionLabel}
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-md">
        <DialogHeader className="text-right">
          <DialogTitle className="text-H4/Bold text-lightGray-900">
            {actionLabel} کاربر
          </DialogTitle>
          <DialogDescription className="pt-2 text-right text-H6/Regular text-lightGray-600">
            آیا از {actionLabel} حساب «{user.username}» مطمئن هستید؟
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex-row justify-end gap-2">
          <DialogClose asChild>
            <Button
              type="button"
              variant="outline"
              disabled={isLoading}
              className="border-lightGray-200"
            >
              انصراف
            </Button>
          </DialogClose>
          <Button
            type="button"
            disabled={isLoading}
            onClick={handleChangeStatus}
            className={
              user.isActive
                ? "bg-Error-500 text-white hover:bg-Error-600"
                : "bg-selfit-500 text-selfit-900 hover:bg-selfit-600"
            }
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                در حال انجام...
              </>
            ) : (
              <>
                <StatusIcon className="h-4 w-4" />
                {actionLabel}
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ChangeUserStatusDialog;
