import { Helmet } from "react-helmet";
import NavbarAddAndEditProduct from "@/components/shared/NavbarAddAndEditProduct";
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
      <NavbarAddAndEditProduct title={"ویرایش"} subTitle={"ویرایش محصول"} />
      <div className="flex flex-col bg-lightGray-50 ">
        <div className="flex flex-col gap-2 m-3 tablet:hidden">
          <h3 className="text-H3/Bold">ویرایش</h3>
          <h5 className="text-H5/Regular text-lightGray-600">ویرایش محصول</h5>
        </div>
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
