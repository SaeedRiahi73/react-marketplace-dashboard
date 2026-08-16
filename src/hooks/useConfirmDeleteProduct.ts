import { useState } from "react";
import { useDeleteProductMutation } from "@/api/productApiSlice";
import { IuseConfirmDeleteProduct, IUseConfirmDeleteProductProps } from "@/interface/IProduct";
import toast from "react-hot-toast";


const useConfirmDeleteProduct = ({id}:IUseConfirmDeleteProductProps):IuseConfirmDeleteProduct => {

    const [open, setOpen] = useState<boolean>(false);

    const [deleteProduct, { isLoading }] = useDeleteProductMutation();

    const handleDelete = async () => {
        try {
            await deleteProduct(id).unwrap();
            setOpen(false);
            toast.success("محصول با موفقیت حذف شد.");
        } catch {
            toast.error("حذف محصول انجام نشد.");
        }
    };

    return{
        isLoading,open,setOpen,handleDelete,
    }
}


export default useConfirmDeleteProduct;
