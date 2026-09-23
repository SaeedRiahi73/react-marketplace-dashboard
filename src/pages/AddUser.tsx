import DashboardNavbar from "@/components/shared/DashboardNavbar";
import CreateUserForm from "@/components/users/CreateUserForm";
import { Helmet } from "react-helmet";

const AddUser: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>افزودن کاربر</title>
      </Helmet>

      <DashboardNavbar
        title="افزودن کاربر"
        subTitle="ایجاد حساب جدید برای مدیر محصول"
        backLabel="بازگشت به کاربران"
        backPath="/users"
      />

      <div className="flex flex-1 overflow-y-auto p-4 tablet:p-8">
        <div className="mx-auto w-full max-w-4xl">
          <CreateUserForm />
        </div>
      </div>
    </>
  );
};

export default AddUser;
