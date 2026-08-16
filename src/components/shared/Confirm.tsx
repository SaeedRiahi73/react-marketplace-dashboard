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

const Confirm: React.FC<IConfirmProps> = ({ button, title, content,confirm }) => {
  return (
    <Dialog>
      <DialogTrigger>
        {button} {/* Directly pass the button without wrapping */}
      </DialogTrigger>
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
          <DialogClose  className="flex flex-row justify-end gap-2">
            <Button type="button" className="bg-white border rounded-lg text-lightGray-900">
              انصراف
            </Button>
            <Button type="button" className="bg-Error-500 text-white" onClick={()=>confirm()}>
              بله
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Confirm;
