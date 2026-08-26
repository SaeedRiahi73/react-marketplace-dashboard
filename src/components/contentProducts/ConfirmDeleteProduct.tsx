import {
  Button,
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui";
import { IConfirmDeleteProductProps } from "@/interface/IProduct";
import Spinner from "../shared/Snipper";
import useConfirmDeleteProduct from "@/hooks/useConfirmDeleteProduct";

const ConfirmDeleteProduct: React.FC<IConfirmDeleteProductProps> = ({
  id,
  children,
  className,
}) => {

  const {isLoading,canDeleteProduct,handleDelete,open,setOpen} = useConfirmDeleteProduct({id});

  return (
    <>
      {isLoading && <Spinner text={"لطفا صبر کنید..."} />}
      <Popover
        open={canDeleteProduct && open}
        onOpenChange={(nextOpen) => {
          if (canDeleteProduct) setOpen(nextOpen);
        }}
      >
        <PopoverTrigger
          asChild
          disabled={!canDeleteProduct}
          title={!canDeleteProduct ? "شما اجازه حذف محصول را ندارید" : undefined}
          className={className}
        >
          {children}
        </PopoverTrigger>
        <PopoverContent className="w-[240px] gap-3 p-2 rounded-lg shadow-md ">
          <Command>
            <CommandList>
              <CommandGroup className="bg-white">
                <CommandItem className="flex flex-col bg-white">
                  <div className="flex-1">
                    <p className="text-XSmall/Medium text-lightGray-800">
                      آيا می‌خواهید این محصول حذف شود؟
                    </p>
                  </div>
                  <div className="flex-1 flex-row gap-1 justify-start">
                    <Button
                      className="text-lightGray-600 bg-white"
                      onClick={() => setOpen(false)}
                    >
                      بی‌خیال
                    </Button>
                    <Button
                      className="py-1 px-3 rounded-full bg-Error-500 text-white"
                      onClick={handleDelete}
                    >
                      حذف محصول
                    </Button>
                  </div>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default ConfirmDeleteProduct;
