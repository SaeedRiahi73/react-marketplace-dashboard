import { Helmet } from "react-helmet";
import DashboardNavbar from "@/components/shared/DashboardNavbar";
import Spinner from "@/components/shared/Snipper";
import useAddProduct from "@/hooks/useAddProduct";
import DetailProduct from "@/components/contentProducts/DetailProduct";
import ImageProduct from "@/components/contentProducts/ImageProduct";
import { FormProvider } from "react-hook-form";
import useHasPermission from "@/hooks/useHasPermission";
import { permissionEnum } from "@/enums/permissionEnum";

const AddProduct: React.FC = () => {
  const canCreateProduct = useHasPermission(permissionEnum.CreateProduct);

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
      {isLoading && <Spinner text={"لطفا صبر کنید😊"} overlay />}
      <Helmet>
        <title>Add Product</title>
      </Helmet>
      <DashboardNavbar
        title="اضافه کردن محصول"
        subTitle="اضافه کردن محصول جدید"
        backLabel="بازگشت به محصولات"
        backPath="/"
      />
      <div className="flex flex-col bg-lightGray-50 ">
        <FormProvider {...methods}>
        <form
          onSubmit={canCreateProduct
            ? methods.handleSubmit(onSubmit)
            : (event) => event.preventDefault()
          }
          className="tablet:grid tablet:grid-cols-12"
        >
          <DetailProduct canSubmit={canCreateProduct} />
          <ImageProduct error={error} handleFileChange={handleFileChange} handleRemoveImage={handleRemoveImage} previewUrl={previewUrl} setPreviewUrl={setPreviewUrl} status={status} canSubmit={canCreateProduct} />
        </form>
        </FormProvider>
      </div>
    </>
  );
};

export default AddProduct;
