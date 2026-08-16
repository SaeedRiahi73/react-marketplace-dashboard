import { useState } from "react";
import { useAddProductMutation } from "@/api/productApiSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { formSchema } from "@/validation/addProductValidation";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IUseAddProductReturn } from "@/interface/IProduct";
import { setToastMessage } from "@/features/toastSlice";
import { productFormvalue } from "@/type/types";
import { statusProductEnum } from "@/enums/statusProductEnum";
import { IToast } from "@/interface/IToast";
import { typeToastEnum } from "@/enums/typeToastEnum";

const useAddProduct = (): IUseAddProductReturn => {

    const [error, setError] = useState<string>("");
    const [previewUrl, setPreviewUrl] = useState<string>("");
    const [imageFile, setImageFile] = useState<File | null>(null);

    const [setProduct, { isLoading }] = useAddProductMutation();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const methods = useForm<productFormvalue>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            description: "",
            price: 0,
            quantity: 0,
            status: statusProductEnum.Active,
            fileName: "",
        },
    });

    const { watch, setValue } = methods;
    const status = watch("status");

    const handleRemoveImage = () => {
        setImageFile(null);
        setPreviewUrl("");
        setValue("fileName", "");
    };

    const handleFileChange = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = event.target.files?.[0];
        if (file) {
            const maxSize = 2 * 1024 * 1024; // 2MB
            if (!file.name.endsWith(".png") && !file.name.endsWith(".jpg")) {
                setError("لینک باید به یک فایل PNG یا JPG ختم شود");
                return;
            }
            if (maxSize < file.size) {
                setError("سایز فایل نباید بیشتر از 2۰۰ کیلوبایت باش");
                return;
            }
            else {
                setError("");
                setImageFile(file);
                setPreviewUrl(URL.createObjectURL(file));
                // try {
                //     const base64String = await fileToBase64(file);
                //     setValue("fileName", base64String);
                //     setPreviewUrl(base64String);
                // } catch (error) {
                //     console.error("Error converting file to Base64:", error);
                // }
            }
        }
    };

    const onSubmit: SubmitHandler<productFormvalue> = async (data) => {
        // const productObj: IAddProduct = {
        //     name: data.name,
        //     description: data.description ? data.description : "",
        //     price: data.price,
        //     quantity: data.quantity,
        //     status:Number(data.status),
        //     imageFile: imageFile
        // };

        const productFormData = new FormData();
        productFormData.append("name", data.name);
        productFormData.append("description", data.description || "");
        productFormData.append("price", data.price.toString());
        productFormData.append("quantity", data.quantity.toString());
        productFormData.append("status", data.status.toString());

        if (imageFile) {

            productFormData.append("imageFile", imageFile);
        }

        try {
            console.log(productFormData);
            var r = await setProduct(productFormData).unwrap();
            console.log(r);

            const toast: IToast = {
                status: typeToastEnum.success,
                message: "محصول جدید اضافه شد.‍"
            }
            dispatch(setToastMessage(toast));
            navigate("/");
        } catch (error) {
            console.log("khata" + error);
        }
    };

    return {
        methods,
        isLoading,
        onSubmit,
        error,
        previewUrl,
        setPreviewUrl,
        handleRemoveImage,
        handleFileChange,
        status
    }
}

export default useAddProduct;
