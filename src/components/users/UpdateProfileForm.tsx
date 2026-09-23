import IconTrashCan from "@/components/icons/IconTrash-can";
import IconUpload from "@/components/icons/IconUpload";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Label,
} from "@/components/ui";
import { typeIconEnum } from "@/enums/styleIconEnum";
import useUpdateProfile from "@/hooks/useUpdateProfile";
import { ICurrentUserProfile } from "@/interface/IUser";
import { handleImageError } from "@/utility";

interface IUpdateProfileFormProps {
  profile: ICurrentUserProfile;
  onCancel: () => void;
  onSuccess: () => void;
}

const UpdateProfileForm: React.FC<IUpdateProfileFormProps> = ({
  profile,
  onCancel,
  onSuccess,
}) => {
  const {
    methods,
    onSubmit,
    isLoading,
    previewUrl,
    handleFileChange,
    handleRemoveImage,
  } = useUpdateProfile({ profile, onSuccess });
  const { control, formState, handleSubmit } = methods;
  const canSubmit = formState.isDirty && formState.isValid && !isLoading;

  return (
    <Card className="overflow-hidden border-lightGray-200 bg-white shadow-sm">
      <CardHeader className="border-b border-lightGray-100 p-5 tablet:p-6">
        <CardTitle className="text-H3/Bold text-lightGray-900">
          ویرایش اطلاعات حساب
        </CardTitle>
        <CardDescription className="text-H6/Regular text-lightGray-600">
          نام کاربری، ایمیل یا تصویر حساب خود را تغییر دهید.
        </CardDescription>
      </CardHeader>

      <CardContent className="p-5 tablet:p-6">
        <Form {...methods}>
          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col items-center gap-5 rounded-xl border border-lightGray-100 bg-lightGray-25 p-5 tablet:flex-row">
              <div className="h-28 w-28 shrink-0 overflow-hidden rounded-full border-4 border-white bg-lightGray-100 shadow-md">
                <img
                  src={previewUrl || "/default-placeholder.png"}
                  alt={`تصویر ${profile.username}`}
                  onError={handleImageError}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex w-full flex-col items-center gap-3 tablet:items-start">
                <div>
                  <h3 className="text-center text-H5/Bold text-lightGray-900 tablet:text-right">
                    تصویر حساب کاربری
                  </h3>
                  <p className="mt-1 text-center text-H6/Regular text-lightGray-600 tablet:text-right">
                    فرمت‌های JPG، JPEG، PNG و WEBP تا حداکثر ۲ مگابایت
                  </p>
                </div>

                <div className="flex w-full flex-col gap-2 mobile:flex-row tablet:w-auto">
                  <Label
                    htmlFor="profile-image-input"
                    className="flex h-11 cursor-pointer items-center justify-center gap-2 rounded-md border border-lightGray-300 bg-white px-4 text-H6/Medium text-lightGray-800 transition-colors hover:bg-lightGray-50"
                  >
                    <IconUpload typeIcon={typeIconEnum.Reqular} />
                    انتخاب تصویر
                  </Label>
                  <input
                    id="profile-image-input"
                    type="file"
                    accept=".jpg,.jpeg,.png,.webp"
                    onChange={handleFileChange}
                    className="hidden"
                    aria-label="انتخاب تصویر پروفایل"
                  />

                  {previewUrl && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleRemoveImage}
                      className="h-11 gap-2 border-Error-100 bg-white text-H6/Medium text-Error-500 hover:bg-Error-25 hover:text-Error-600"
                    >
                      <IconTrashCan
                        typeIcon={typeIconEnum.Reqular}
                        className="fill-current"
                      />
                      حذف تصویر
                    </Button>
                  )}
                </div>

                {formState.errors.imageFile && (
                  <p className="text-H6/Regular text-Error-500">
                    {formState.errors.imageFile.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 tablet:grid-cols-2">
              <FormField
                control={control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-H6/Medium text-lightGray-800">
                      نام کاربری
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        autoComplete="username"
                        maxLength={50}
                        placeholder="نام کاربری خود را وارد کنید"
                        classNameContainerInput="h-11 border-lightGray-300 bg-white focus-within:border-selfit-500 focus-within:ring-2 focus-within:ring-selfit-100"
                      />
                    </FormControl>
                    <FormMessage className="text-H6/Regular text-Error-500" />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-H6/Medium text-lightGray-800">
                      ایمیل
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        autoComplete="email"
                        maxLength={50}
                        dir="ltr"
                        placeholder="ایمیل خود را وارد کنید"
                        className="text-left tablet:mr-0"
                        classNameContainerInput="h-11 border-lightGray-300 bg-white focus-within:border-selfit-500 focus-within:ring-2 focus-within:ring-selfit-100"
                      />
                    </FormControl>
                    <FormMessage className="text-H6/Regular text-Error-500" />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col-reverse gap-3 border-t border-lightGray-100 pt-5 mobile:flex-row mobile:justify-end">
              <Button
                type="button"
                variant="outline"
                onClick={onCancel}
                disabled={isLoading}
                className="h-11 border-lightGray-300 bg-white px-6 text-H6/Medium text-lightGray-800 hover:bg-lightGray-50"
              >
                لغو
              </Button>
              <Button
                type="submit"
                disabled={!canSubmit}
                className="h-11 bg-selfit-500 px-6 text-H6/Semibold text-selfit-900 hover:bg-selfit-600 disabled:bg-lightGray-100 disabled:text-lightGray-600"
              >
                {isLoading ? "در حال ذخیره..." : "ذخیره تغییرات"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default UpdateProfileForm;
