import IconEye from "@/components/icons/IconEye";
import IconEyeSlash from "@/components/icons/IconEye-slash";
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
} from "@/components/ui";
import { typeIconEnum } from "@/enums/styleIconEnum";
import useChangePassword from "@/hooks/useChangePassword";
import { IChangePasswordFormProps } from "@/interface/IProps";
import { ShieldCheck } from "lucide-react";
import { useState } from "react";

type PasswordFieldName =
  | "currentPassword"
  | "newPassword"
  | "confirmNewPassword";

const ChangePasswordForm: React.FC<IChangePasswordFormProps> = ({
  onCancel,
}) => {
  const { methods, onSubmit, isLoading } = useChangePassword();
  const { control, formState, handleSubmit } = methods;
  const [visibleFields, setVisibleFields] = useState<
    Record<PasswordFieldName, boolean>
  >({
    currentPassword: false,
    newPassword: false,
    confirmNewPassword: false,
  });
  const canSubmit = formState.isDirty && formState.isValid && !isLoading;

  const toggleVisibility = (fieldName: PasswordFieldName) => {
    setVisibleFields((current) => ({
      ...current,
      [fieldName]: !current[fieldName],
    }));
  };

  const visibilityButton = (fieldName: PasswordFieldName) => (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={() => toggleVisibility(fieldName)}
      aria-label={visibleFields[fieldName] ? "مخفی‌کردن رمز" : "نمایش رمز"}
      className="h-8 w-8 text-lightGray-600 hover:bg-lightGray-100"
    >
      {visibleFields[fieldName] ? (
        <IconEyeSlash
          typeIcon={typeIconEnum.Reqular}
          className="fill-current"
        />
      ) : (
        <IconEye typeIcon={typeIconEnum.Reqular} className="fill-current" />
      )}
    </Button>
  );

  return (
    <Card className="overflow-hidden border-lightGray-200 bg-white shadow-sm">
      <CardHeader className="border-b border-lightGray-100 p-5 tablet:p-6">
        <CardTitle className="text-H3/Bold text-lightGray-900">
          تغییر رمز عبور
        </CardTitle>
        <CardDescription className="text-H6/Regular text-lightGray-600">
          برای حفظ امنیت حساب، یک رمز جدید و متفاوت انتخاب کنید.
        </CardDescription>
      </CardHeader>

      <CardContent className="p-5 tablet:p-6">
        <Form {...methods}>
          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <div className="flex items-start gap-3 rounded-xl border border-Warning-100 bg-Warning-25 p-4">
              <ShieldCheck
                size={22}
                strokeWidth={1.8}
                className="mt-0.5 shrink-0 text-Warning-600"
              />
              <div>
                <h3 className="text-H6/Semibold text-lightGray-900">
                  نکته امنیتی
                </h3>
                <p className="mt-1 text-H6/Regular text-lightGray-700">
                  پس از تغییر موفق رمز عبور، همه نشست‌های فعال بسته می‌شوند و
                  باید دوباره وارد حساب شوید.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 tablet:grid-cols-2">
              <FormField
                control={control}
                name="currentPassword"
                render={({ field }) => (
                  <FormItem className="tablet:col-span-2">
                    <FormLabel className="text-H6/Medium text-lightGray-800">
                      رمز عبور فعلی
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type={
                          visibleFields.currentPassword ? "text" : "password"
                        }
                        autoComplete="current-password"
                        dir="ltr"
                        placeholder="رمز عبور فعلی خود را وارد کنید"
                        icon={visibilityButton("currentPassword")}
                        className="text-left tablet:mr-0"
                        classNameContainerInput="h-11 border-lightGray-300 bg-white focus-within:border-selfit-500 focus-within:ring-2 focus-within:ring-selfit-100"
                      />
                    </FormControl>
                    <FormMessage className="text-H6/Regular text-Error-500" />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-H6/Medium text-lightGray-800">
                      رمز عبور جدید
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type={visibleFields.newPassword ? "text" : "password"}
                        autoComplete="new-password"
                        maxLength={100}
                        dir="ltr"
                        placeholder="حداقل ۸ کاراکتر"
                        icon={visibilityButton("newPassword")}
                        className="text-left tablet:mr-0"
                        classNameContainerInput="h-11 border-lightGray-300 bg-white focus-within:border-selfit-500 focus-within:ring-2 focus-within:ring-selfit-100"
                      />
                    </FormControl>
                    <FormMessage className="text-H6/Regular text-Error-500" />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="confirmNewPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-H6/Medium text-lightGray-800">
                      تکرار رمز عبور جدید
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type={
                          visibleFields.confirmNewPassword
                            ? "text"
                            : "password"
                        }
                        autoComplete="new-password"
                        maxLength={100}
                        dir="ltr"
                        placeholder="رمز جدید را دوباره وارد کنید"
                        icon={visibilityButton("confirmNewPassword")}
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
                {isLoading ? "در حال تغییر رمز..." : "تغییر رمز عبور"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ChangePasswordForm;
