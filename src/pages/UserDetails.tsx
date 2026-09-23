import { useGetUserByIdQuery } from "@/api/userApiSlice";
import DashboardNavbar from "@/components/shared/DashboardNavbar";
import Spinner from "@/components/shared/Snipper";
import UserDetailsCard from "@/components/users/UserDetailsCard";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

const UserDetails: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const {
    data: user,
    isError,
    isLoading,
  } = useGetUserByIdQuery(userId!, { skip: !userId });

  if (isLoading) {
    return <Spinner text="در حال دریافت جزئیات کاربر..." />;
  }

  return (
    <>
      <Helmet>
        <title>جزئیات کاربر</title>
      </Helmet>

      <DashboardNavbar
        title="جزئیات کاربر"
        subTitle="مشاهده اطلاعات و وضعیت حساب کاربر"
        backLabel="بازگشت به کاربران"
        backPath="/users"
      />

      <div className="flex flex-1 overflow-y-auto p-4 tablet:p-8">
        <section className="mx-auto w-full max-w-4xl">
          {isError || !user ? (
            <div className="rounded-xl border border-Error-100 bg-Error-25 p-8 text-center text-H6/Medium text-Error-600">
              دریافت جزئیات کاربر با خطا مواجه شد.
            </div>
          ) : (
            <UserDetailsCard user={user} />
          )}
        </section>
      </div>
    </>
  );
};

export default UserDetails;
