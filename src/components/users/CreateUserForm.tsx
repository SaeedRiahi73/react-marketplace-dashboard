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
import useCreateUser from "@/hooks/useCreateUser";

const CreateUserForm: React.FC = () => {
  const { methods, onSubmit, isLoading } = useCreateUser();
  const { control, formState, handleSubmit } = methods;
  const canSubmit = formState.isDirty && formState.isValid && !isLoading;

  return (
    <Card className="w-full border-lightGray-200 bg-white shadow-sm">
      <CardHeader className="border-b border-lightGray-100 p-5 tablet:p-6">
        <CardTitle className="text-H3/Bold text-lightGray-900">
          اطلاعات کاربر جدید
        </CardTitle>
        <CardDescription className="text-H6/Regular text-lightGray-600">
          اطلاعات حساب مدیر محصول را وارد کنید.
        </CardDescription>
      </CardHeader>

      <CardContent className="p-5 tablet:p-6">
        <Form {...methods}>
          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-5 tablet:grid-cols-2"
          >
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
                  <FormMessage className="text-XSmall/Medium text-Error-500" />
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
                  <FormMessage className="text-XSmall/Medium text-Error-500" />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-H6/Medium text-lightGray-800">
                    رمز عبور
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      autoComplete="new-password"
                      maxLength={100}
                      dir="ltr"
                      placeholder="حداقل ۸ کاراکتر"
                      className="text-left tablet:mr-0"
                      classNameContainerInput="h-11 border-lightGray-300 bg-white focus-within:border-selfit-500 focus-within:ring-2 focus-within:ring-selfit-100"
                    />
                  </FormControl>
                  <FormMessage className="text-XSmall/Medium text-Error-500" />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-H6/Medium text-lightGray-800">
                    تکرار رمز عبور
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      autoComplete="new-password"
                      maxLength={100}
                      dir="ltr"
                      placeholder="رمز عبور را دوباره وارد کنید"
                      className="text-left tablet:mr-0"
                      classNameContainerInput="h-11 border-lightGray-300 bg-white focus-within:border-selfit-500 focus-within:ring-2 focus-within:ring-selfit-100"
                    />
                  </FormControl>
                  <FormMessage className="text-XSmall/Medium text-Error-500" />
                </FormItem>
              )}
            />

            <div className="flex items-end tablet:col-span-2 tablet:justify-end">
              <Button
                type="submit"
                disabled={!canSubmit}
                className="h-11 w-full rounded-lg bg-selfit-500 text-H6/Semibold text-selfit-900 hover:bg-selfit-600 disabled:bg-lightGray-100 disabled:text-lightGray-600 tablet:max-w-xs"
              >
                {isLoading ? "در حال ایجاد کاربر..." : "ایجاد کاربر"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default CreateUserForm;
