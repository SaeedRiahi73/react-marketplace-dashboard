import { Helmet } from "react-helmet";
import DashboardNavbar from "@/components/shared/DashboardNavbar";
import Spinner from "@/components/shared/Snipper";
import useEditProduct from "@/hooks/useEditProduct";
import { FormProvider } from "react-hook-form";
import DetailProduct from "@/components/contentProducts/DetailProduct";
import ImageProduct from "@/components/contentProducts/ImageProduct";
import useHasPermission from "@/hooks/useHasPermission";
import { permissionEnum } from "@/enums/permissionEnum";



const EditProduct: React.FC = () => {
  const canEditProduct = useHasPermission(permissionEnum.EditProduct);

  const {
    methods,
    error,
    handleFileChange,
    handleRemoveImage,
    isLoading,
    onSubmit,
    previewUrl,
    status,
    setPreviewUrl
  } = useEditProduct();

  return (
    <>
      {isLoading && <Spinner text="لطفا صبر کنید..." overlay />}
      <Helmet>
        <title>Add Product</title>
      </Helmet>
      <DashboardNavbar
        title="ویرایش"
        subTitle="ویرایش محصول"
        backLabel="بازگشت به محصولات"
        backPath="/"
      />
      <div className="flex flex-col bg-lightGray-50 ">
        <FormProvider {...methods}>
          <form
            onSubmit={canEditProduct
              ? methods.handleSubmit(onSubmit)
              : (event) => event.preventDefault()
            }
            className="tablet:grid tablet:grid-cols-12"
          >
            <DetailProduct canSubmit={canEditProduct} />
            <ImageProduct error={error} handleFileChange={handleFileChange} handleRemoveImage={handleRemoveImage} previewUrl={previewUrl} setPreviewUrl={setPreviewUrl} status={status} canSubmit={canEditProduct} />
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default EditProduct;
