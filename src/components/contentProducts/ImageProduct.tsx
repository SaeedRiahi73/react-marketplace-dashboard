import { Button, Label } from "@/components/ui";
import IconTrash_can from "@/components/icons/IconTrash-can";
import IconUpload from "@/components/icons/IconUpload";
import { typeIconEnum } from "@/enums/styleIconEnum";
import { IImageProduct } from "@/interface/IProduct";
import { useFormContext } from "react-hook-form";
import { statusProductEnum } from "@/enums/statusProductEnum";


const ImageProduct: React.FC<IImageProduct> = ({ handleFileChange, handleRemoveImage, previewUrl, setPreviewUrl, error, status, canSubmit = true }) => {
    const { setValue, formState: { errors } } = useFormContext();

    return (
        <div className="bg-white rounded-xl flex flex-col col-span-12 p-4 m-2 gap-6 tablet:h-[450px] tablet:gap-2 tablet:col-span-4">
            {/* <div className="flex flex-col items-center border-2 border-dashed border-gray-300 rounded-md p-6"> */}
            <div className="flex flex-col gap-4">
                <h5 className="text-H5/Bold">تصویر محصول</h5>
                {previewUrl ? (
                    <>
                        <div className="relative w-full h-[140px] tablet:h-[180px] border-gray-300 rounded-lg">
                            <img
                                src={previewUrl}
                                className=" h-[140px] tablet:h-[180px] bg-cover w-full rounded-md"
                                alt="Preview"
                            />
                            <Button
                                variant={"default"}
                                className="absolute top-3 right-3 w-[40px] h-[40px] rounded-md bg-white"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (handleRemoveImage) {
                                        handleRemoveImage();
                                    } else {
                                        setPreviewUrl("");
                                    }
                                }}
                            >
                                <IconTrash_can
                                    typeIcon={typeIconEnum.Reqular}
                                    className="fill-Error-500 bg-white"
                                />
                            </Button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex flex-col items-center border-2 border-dashed border-gray-300 rounded-lg tablet:h-[180px]">
                            <Label
                                htmlFor="fileInput"
                                className="flex flex-row gap-2 p-4 items-center justify-center cursor-pointer bg-white hover:bg-gray-100 border-[1.5px] border-gray-300 text-gray-700 rounded-lg px-4 py-2 m-16 "
                            >
                                <IconUpload typeIcon={typeIconEnum.Reqular} />
                                <h5 className="text-H5/Semibold">انتخاب فایل...</h5>
                            </Label>
                            <input
                                id="fileInput"
                                type="file"
                                className="hidden"
                                accept=".jpg,.png"
                                onChange={handleFileChange}
                            />
                        </div>
                    </>
                )}
                <div className="flex flex-row justify-between">
                    <p className="text-XSmall/Regular text-lightGray-700">
                        فرمت‌های مجاز: png و jpg
                    </p>
                    <p className="text-XSmall/Regular text-lightGray-700">
                        حداکثر سایز فایل: ۵۰۰ کیلوبایت
                    </p>
                </div>
                {errors.fileName && (
                    <p className="text-red-500 text-sm ">
                        {errors.fileName.message?.toString()}
                    </p>
                )}
                {error && <p className="text-red-500 text-sm ">{error}</p>}
                <hr className="m-3" />
                <div className="flex flex-col gap-4">
                    <h5 className="text-H5/Bold">وضعیت محصول</h5>
                    <div className="flex flex-row gap-2">
                        <Button
                            className={`w-full rounded-3xl text-H6/Medium border px-4 py-2 ${status === statusProductEnum.Active
                                ? "bg-selfit-500 text-selfit-800"
                                : "bg-white text-lightGray-700"
                                }`}
                            onClick={(e) => {
                                e.preventDefault();
                                setValue("status", statusProductEnum.Active);
                            }}
                        >
                            فعال
                        </Button>
                        <Button
                            variant={"default"}
                            className={`w-full rounded-3xl text-H6/Medium border px-4 py-2 ${status === statusProductEnum.DeActive
                                ? "bg-selfit-500 text-selfit-800"
                                : "bg-white text-lightGray-700"
                                }`}
                            onClick={(e) => {
                                e.preventDefault();
                                setValue("status", statusProductEnum.DeActive);
                            }}
                        >
                            غیرفعال
                        </Button>
                    </div>
                </div>
                <hr className="tablet:hidden my-3" />
                <Button
                    type="submit"
                    disabled={!canSubmit}
                    title={!canSubmit ? "نسخه آزمایشی اجازه ذخیره محصول ندارد" : undefined}
                    className="w-full tablet:hidden bg-selfit-500 text-selfit-800 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    ذخیره محصول
                </Button>
            </div>
        </div>
    )
}


export default ImageProduct;
