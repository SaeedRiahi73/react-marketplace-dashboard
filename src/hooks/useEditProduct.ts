import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    useEditProductMutation,
    useGetProductByIdQuery,
} from "@/api/productApiSlice";
import { formSchema } from "@/validation/addProductValidation";
import toast from "react-hot-toast";
import { productFormvalue } from "@/type/types";
import { statusProductEnum } from "@/enums/statusProductEnum";
import { noPhoto } from "@/assets/image";

const useEditProduct = () => {
    const [error, setError] = useState<string>("");
    const [previewUrl, setPreviewUrl] = useState<string>("");
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [removeImage, setRemoveImage] = useState<boolean>(false);
    const BASE_URL = import.meta.env.VITE_BASE_URL_localhostApi;


    const [setProduct, { isLoading }] = useEditProductMutation();

    const navigate = useNavigate();

    const { productId } = useParams<{ productId: string }>();

    const { data: product } = useGetProductByIdQuery(productId!, {
        skip: !productId,
    });

    const methods = useForm<productFormvalue>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            price: 0,
            quantity: 0,
            status: statusProductEnum.Active,
            description: "",
            fileName: ""
        },
    });
    const { setValue, watch } = methods;

    const handleRemoveImage = () => {
        setImageFile(null);
        setPreviewUrl("");
        setValue("fileName", "");
        setRemoveImage(true);
    };

    useEffect(() => {
        if (product) {
            setRemoveImage(false);
            setValue("status", product.status);
            setValue("price", product.price);
            setValue("quantity", product.quantity);
            setValue("name", product.name);
            setValue("description", product.description);
            setValue("fileName", product.image);
            if (product.image) {
                const fullImageUrl = `${BASE_URL}${product.image}`;
                setPreviewUrl(fullImageUrl);
            }else{
                setPreviewUrl("");
            }
        }
    }, [product]);

    const status = watch("status");

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
                setRemoveImage(false);
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
        // const productObj: IEditProduct = {
        //     ProductId: product ? product.id : nanoid(),
        //     name: data.name,
        //     description: data.description ? data.description : "",
        //     price: data.price,
        //     quantity: data.quantity,
        //     status: data.status,
        //     imageFile: data,
        //     createdOn: new Date(),
        // };

        const productFormData = new FormData();
        if (productId) {
            productFormData.append("Id", productId);
        }
        productFormData.append("name", data.name);
        productFormData.append("description", data.description || "");
        productFormData.append("price", data.price.toString());
        productFormData.append("quantity", data.quantity.toString());
        productFormData.append("status", data.status.toString());
        productFormData.append("RemoveImage", removeImage.toString());

        if (imageFile) {

            productFormData.append("imageFile", imageFile);
        }

        if (!productId) {
            toast.error("شناسه محصول معتبر نیست");
            return;
        }
        try {
            await setProduct({
                id: productId,
                data: productFormData,
            }).unwrap();
            // dispatch(setToastMessage("محصول ویرایش شد.‍"));
            toast.success("محصول ویرایش شد.‍");
            // myToast();
            navigate("/");
        } catch (error) {
            console.log("khata" + error);
        }
    };

    return {
        methods,
        isLoading,
        onSubmit,
        previewUrl,
        error,
        status,
        handleFileChange,
        handleRemoveImage,
        setPreviewUrl
    }
}

export default useEditProduct;
