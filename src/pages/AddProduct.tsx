import { Helmet } from "react-helmet";
import NavbarAddAndEditProduct from "@/components/shared/NavbarAddAndEditProduct";
import Spinner from "@/components/shared/Snipper";
import useAddProduct from "@/hooks/useAddProduct";
import DetailProduct from "@/components/contentProducts/DetailProduct";
import ImageProduct from "@/components/contentProducts/ImageProduct";
import { FormProvider } from "react-hook-form";

const AddProduct: React.FC = () => {

  const {
    methods,
    isLoading,
    onSubmit,
    error,
    previewUrl,
    setPreviewUrl,
    handleRemoveImage,
    handleFileChange,
    status
  } = useAddProduct();

  return (
    <>
      {isLoading && <Spinner text={"لطفا صبر کنید😊"} />}
      <Helmet>
        <title>Add Product</title>
      </Helmet>
      <NavbarAddAndEditProduct
        title="اضافه کردن محصول"
        subTitle={"اضافه کردن محصول جدید"}
      />
      <div className="flex flex-col bg-lightGray-50 ">
        <div className="flex flex-col gap-2 m-3 tablet:hidden">
          <h3 className="text-H3/Bold"> اضافه کردن محصول</h3>
          <h5 className="text-H5/Regular text-lightGray-600">
            اضافه کردن محصول جدید
          </h5>
        </div>
        <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="tablet:grid tablet:grid-cols-12"
        >
          <DetailProduct/>
          <ImageProduct error={error} handleFileChange={handleFileChange} handleRemoveImage={handleRemoveImage} previewUrl={previewUrl} setPreviewUrl={setPreviewUrl} status={status}/>
        </form>
        </FormProvider>
      </div>
    </>
  );
};

export default AddProduct;
