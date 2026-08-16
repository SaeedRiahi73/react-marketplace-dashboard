
import { typeIconEnum } from "../../enums/styleIconEnum";
import IconEye from "../../components/icons/IconEye";
import IconEye_slash from "../../components/icons/IconEye-slash";
import IconUser from "../../components/icons/IconUser";
import IconKey from "../../components/icons/IconKey";
import Spinner from "../shared/Snipper";
import { Alert, AlertDescription, AlertTitle } from "../ui";
import { Smile } from "lucide-react";
import useLoginForm from "@/hooks/useLoginForm";

const FormLogin = () => {
  const {
    canEnter,
    formik,
    isLoading,
    setVisibilityPassword,
    visibilityPassword
  } = useLoginForm();
  
  return (
    <>
      {isLoading ? (
        <Spinner text={"ممکن است چند لحظه طول بکشد، لطفا شکیبا باشید."} />
      ) : (
        <>
          <div className="relative my-12 p-4 mx-auto z-10 flex flex-col items-center bg-white shadow-lg rounded-2xl text-center">
            {/* <Alert variant="success" className={`items-center`}>
              <Smile className="h-4 w-4" />
              <AlertTitle>کاربر گرامی</AlertTitle>
              <AlertDescription className="justify-start mt-2 ">
                نام کاربری : test , کلمه عبور: test
              </AlertDescription>
            </Alert> */}
            <div className="flex flex-col justify-center items-center mt-4 gap-2">
              <h4 className="text-H4/Bold mb-2 font-bold text-gray-800">
                به داشبورد مدیریتی{" "}
                <span className="text-selfit-600">سلفیت</span> خوش آمدید!
              </h4>
              <p className="text-gray-600 text-H6/Regular">
                جهت ورود، اطلاعات خود را وارد کنید
              </p>
            </div>

            <form className="mt-4" onSubmit={formik.handleSubmit}>
              <div className="flex flex-col items-center gap-5">
                <div className="text-right flex flex-col gap-2">
                  <div className="flex flex-col w-[312px] gap-2">
                    <label className="text-H5/Semibold text-lightGray-900">
                      نام کاربری
                    </label>
                    <div className="w-full flex items-center h-[55px] px-4 py-2 mt-1 border border-lightGray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-selfit-600">
                      <div className="hidden pl-2 border-l-2 border-lightGray-200 tablet:block">
                        <IconUser
                          typeIcon={typeIconEnum.Reqular}
                          className="h-5 w-4 fill-lightGray-600"
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="نام کاربری خود را وارد کنید"
                        className="flex-grow outline-none bg-transparent text-right placeholder-gray-500 tablet:mr-2"
                        {...formik.getFieldProps("usernameOrEmail")}
                      />
                    </div>
                    {formik.touched.usernameOrEmail && formik.errors.usernameOrEmail && (
                      <div className="text-red-500 text-H6/Semibold">
                        {formik.errors.usernameOrEmail}
                      </div>
                    )}
                  </div>

                  <div className="relative flex flex-col w-[312px] gap-2">
                    <label className="text-H5/Semibold text-lightGray-900">
                      رمز عبور
                    </label>
                    <div className="w-full flex items-center h-[55px] px-4 py-2 mt-1 border border-lightGray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-selfit-600">
                      <div className="hidden pl-2 border-l-2 border-lightGray-200 tablet:block">
                        <IconKey
                          typeIcon={typeIconEnum.Reqular}
                          className="w-4 h-5 fill-lightGray-600"
                        />
                      </div>
                      <input
                        type={visibilityPassword ? "text" : "password"}
                        placeholder="رمز عبور خود را وارد کنید"
                        className="flex-grow outline-none bg-transparent text-right placeholder-gray-500 tablet:mr-2"
                        {...formik.getFieldProps("password")}
                      />
                      <div
                        className="cursor-pointer"
                        onClick={() => setVisibilityPassword((prev) => !prev)}
                      >
                        {visibilityPassword ? (
                          <IconEye_slash
                            typeIcon={typeIconEnum.Reqular}
                            className="fill-lightGray-600"
                          />
                        ) : (
                          <IconEye
                            typeIcon={typeIconEnum.Reqular}
                            className="fill-lightGray-600"
                          />
                        )}
                      </div>
                    </div>
                    {formik.touched.password && formik.errors.password && (
                      <div className="text-red-500 text-H6/Semibold">
                        {formik.errors.password}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-row items-center gap-4 justify-start w-full">
                  <input
                    type="checkbox"
                    className="rounded text-green-500 focus:ring-green-400"
                    {...formik.getFieldProps("rememberMe")}
                  />
                  <label htmlFor="remember" className="text-sm text-gray-600">
                    من را به خاطر بسپار
                  </label>
                </div>

                <div className="w-full">
                  <button
                    disabled={!canEnter}
                    className={`w-full text-selfit-800 text-H5/Semibold py-1 rounded-lg transition ${canEnter
                      ? "bg-selfit-500 hover:bg-selfit-600"
                      : "bg-lightGray-100"
                      }`}
                  >
                    ورود به داشبورد
                  </button>
                </div>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default FormLogin;
