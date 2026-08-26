import { useState } from "react";
import { useDeleteProductMutation } from "@/api/productApiSlice";
import { IuseConfirmDeleteProduct, IUseConfirmDeleteProductProps } from "@/interface/IProduct";
import toast from "react-hot-toast";
import useHasPermission from "@/hooks/useHasPermission";
import { permissionEnum } from "@/enums/permissionEnum";


const useConfirmDeleteProduct = ({id}:IUseConfirmDeleteProductProps):IuseConfirmDeleteProduct => {

    const [open, setOpen] = useState<boolean>(false);
    const canDeleteProduct = useHasPermission(permissionEnum.DeleteProduct);

    const [deleteProduct, { isLoading }] = useDeleteProductMutation();

    const handleDelete = async () => {
        if (!canDeleteProduct) {
            toast.error("شما اجازه حذف محصول را ندارید.");
            return;
        }

        try {
            await deleteProduct(id).unwrap();
            setOpen(false);
            toast.success("محصول با موفقیت حذف شد.");
        } catch {
            // پیام خطای API به‌صورت سراسری در apiSlice نمایش داده می‌شود.
        }
    };

    return{
        isLoading,canDeleteProduct,open,setOpen,handleDelete,
    }
}


export default useConfirmDeleteProduct;
