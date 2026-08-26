import { Button, Input, Label, Textarea } from "@/components/ui";
import { IProductSubmitProps } from "@/interface/IProduct";
import { useFormContext } from "react-hook-form";

const DetailProduct: React.FC<IProductSubmitProps> = ({ canSubmit = true }) => {

  const { register, formState: { errors } } = useFormContext();
  return (
    <div className="bg-white rounded-xl flex flex-col col-span-12 p-4 m-3 gap-6 tablet:gap-2  tablet:col-span-8">
      <div className="border-b border-lightGray-200 pt-2 pb-4">
        <h5 className="text-H5/Bold">جزئیات محصول</h5>
      </div>
      <div className="flex flex-col gap-3">
        <Label
          htmlFor="title"
          className="text-H5/Semibold text-lightGray-900"
        >
          نام محصول
        </Label>
        <Input
          id="name"
          classNameContainerInput="bg-white rounded-xl"
          className="placeholder:text-H6/Medium placeholder:text-lightGray-600"
          {...register("name")}
          placeholder="نام محصول را وارد کنید"
        />
        {errors.name && (
          <p className="text-red-500 text-sm ">{errors.name.message?.toString()}</p>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <Label
          htmlFor="amount"
          className="text-H5/Semibold text-lightGray-900"
        >
          مبلغ محصول
        </Label>
        <Input
          id="price"
          type="number"
          classNameContainerInput="bg-white rounded-xl"
          className="placeholder:text-H6/Medium placeholder:text-lightGray-600"
          {...register("price", { valueAsNumber: true })}
          placeholder="مبلغ محصول را به ریال وارد کنید"
        />
        {errors.price && (
          <p className="text-red-500 text-sm">{errors.price.message?.toString()}</p>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <Label
          htmlFor="quantity"
          className="text-H5/Semibold text-lightGray-900"
        >
          تعداد موجودی
        </Label>
        <Input
          id="quantity"
          type="number"
          classNameContainerInput="bg-white rounded-xl"
          className="placeholder:text-H6/Medium placeholder:text-lightGray-600"
          {...register("quantity", { valueAsNumber: true })}
          placeholder="تعداد موجود را وارد کنید"
        />
        {errors.quantity && (
          <p className="text-red-500 text-sm">
            {errors.quantity.message?.toString()}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <Label
          htmlFor="description"
          className="text-H5/Semibold text-lightGray-900"
        >
          درباره محصول
        </Label>
        <Textarea
          id="description"
          className="bg-white rounded-xl placeholder:text-H6/Medium placeholder:text-lightGray-600"
          {...register("description")}
          placeholder="توضیحات محصول را وارد کنید"
        />
      </div>

      <Button
        type="submit"
        disabled={!canSubmit}
        title={!canSubmit ? "نسخه آزمایشی اجازه ذخیره محصول ندارد" : undefined}
        className="hidden w-full tablet:flex bg-selfit-500 text-selfit-800 disabled:cursor-not-allowed disabled:opacity-50"
      >
        ذخیره محصول
      </Button>
    </div>
  )
}

export default DetailProduct;
