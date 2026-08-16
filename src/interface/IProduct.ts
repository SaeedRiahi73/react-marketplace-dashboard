import { FieldErrors, UseFormRegister } from "react-hook-form";
import { productFormvalue } from "@/type/types";
import { UseFormReturn, SubmitHandler } from "react-hook-form";
import { statusProductEnum } from "@/enums/statusProductEnum";


export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  status: statusProductEnum;
  image?: string | null;
}

export interface IAddProduct {
  name: string;
  description: string;
  price: number;
  quantity: number;
  status: number;
  imageFile?: File | null;
}

export interface IEditProduct {
  ProductId:string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  status: number;
  imageFile?: File | null;
}

export interface IDetailAddProduct {
  register: UseFormRegister<productFormvalue>;
  errors: FieldErrors<productFormvalue>;
}

export interface IImageProduct {
  previewUrl: string,
  setPreviewUrl: React.Dispatch<React.SetStateAction<string>>,
  handleRemoveImage?: () => void,
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  error: string,
  status: statusProductEnum;
}

export interface IUseAddProductReturn {
  methods: UseFormReturn<productFormvalue>;
  isLoading: boolean;
  onSubmit: SubmitHandler<productFormvalue>;
  error: string;
  previewUrl: string;
  setPreviewUrl: React.Dispatch<React.SetStateAction<string>>;
  handleRemoveImage: () => void;
  handleFileChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => Promise<void>;
  status: statusProductEnum;
}

export interface IConfirmDeleteProductProps {
  children: React.ReactNode,
  id: string,
  className?: string
}

export interface IUseConfirmDeleteProductProps extends Pick<IConfirmDeleteProductProps, "id"> { };


export interface IuseConfirmDeleteProduct {
  isLoading: boolean,
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  handleDelete: () => Promise<void>
}

