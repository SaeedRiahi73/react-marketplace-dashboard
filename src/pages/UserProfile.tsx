import { useGetCurrentUserQuery } from "@/api/userApiSlice";
import DashboardNavbar from "@/components/shared/DashboardNavbar";
import Spinner from "@/components/shared/Snipper";
import UserProfileDetails from "@/components/users/UserProfileDetails";
import UpdateProfileForm from "@/components/users/UpdateProfileForm";
import ChangePasswordForm from "@/components/users/ChangePasswordForm";
import { permissionEnum } from "@/enums/permissionEnum";
import useHasPermission from "@/hooks/useHasPermission";
import { useState } from "react";
import { Helmet } from "react-helmet";

type ProfileViewMode = "details" | "editProfile" | "changePassword";

const UserProfile: React.FC = () => {
  const [viewMode, setViewMode] = useState<ProfileViewMode>("details");
  
  const canEditProfile = useHasPermission(permissionEnum.EditOwnProfile);
  const canChangePassword = useHasPermission(
    permissionEnum.ChangeOwnPassword,
  );
  const { data: profile, isError, isLoading } = useGetCurrentUserQuery();

  if (isLoading) {
    return <Spinner text="در حال دریافت اطلاعات حساب..." />;
  }

  return (
    <>
      <Helmet>
        <title>حساب کاربری</title>
      </Helmet>

      <DashboardNavbar
        title="حساب کاربری"
        subTitle="مشاهده و مدیریت اطلاعات شخصی"
        backLabel={
          viewMode !== "details" ? "بازگشت به حساب کاربری" : undefined
        }
        onBack={
          viewMode !== "details"
            ? () => setViewMode("details")
            : undefined
        }
      />

      <div className="flex flex-1 overflow-y-auto p-4 tablet:p-8">
        <section className="mx-auto w-full max-w-4xl">
          {isError || !profile ? (
            <div className="rounded-xl border border-Error-100 bg-Error-25 p-8 text-center text-H6/Medium text-Error-600">
              دریافت اطلاعات حساب کاربری با خطا مواجه شد.
            </div>
          ) : viewMode === "editProfile" && canEditProfile ? (
            <UpdateProfileForm
              profile={profile}
              onCancel={() => setViewMode("details")}
              onSuccess={() => setViewMode("details")}
            />
          ) : viewMode === "changePassword" && canChangePassword ? (
            <ChangePasswordForm onCancel={() => setViewMode("details")} />
          ) : (
            <UserProfileDetails
              profile={profile}
              onEditProfile={
                canEditProfile
                  ? () => setViewMode("editProfile")
                  : undefined
              }
              onChangePassword={
                canChangePassword
                  ? () => setViewMode("changePassword")
                  : undefined
              }
            />
          )}
        </section>
      </div>
    </>
  );
};

export default UserProfile;
