import { IConfirmProps } from "@/interface/IProps";
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui";

const Confirm: React.FC<IConfirmProps> = ({
  button,
  title,
  content,
  confirm,
  open,
  onOpenChange,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {button && <DialogTrigger asChild>{button}</DialogTrigger>}
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <p className="text-Small/Medium text-lightGray-800">{content}</p>
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <div className="flex flex-row justify-end gap-2">
            <DialogClose asChild>
              <Button
                type="button"
                className="bg-white border rounded-lg text-lightGray-900"
              >
                انصراف
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button
                type="button"
                className="bg-Error-500 text-white"
                onClick={confirm}
              >
                بله
              </Button>
            </DialogClose>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Confirm;
