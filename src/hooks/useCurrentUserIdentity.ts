import noPhoto from "@/assets/image/noPhoto.jpg";
import { useGetCurrentUserQuery } from "@/api/userApiSlice";
import { userRoleLabels } from "@/constants/userRoleLabels";
import { selectAuthSession } from "@/features/authSlice";
import { useSelector } from "react-redux";

const useCurrentUserIdentity = () => {
  const session = useSelector(selectAuthSession);
  const { data: profile } = useGetCurrentUserQuery();
  const baseUrl = import.meta.env.VITE_BASE_URL_localhostApi;
  const role = profile?.role ?? session?.role;

  // تا زمان دریافت پروفایل یا در خطای موقت API، اطلاعات Login قابل نمایش می‌ماند.
  return {
    userName: profile?.username ?? session?.userName ?? "کاربر",
    roleLabel: role ? userRoleLabels[role] : "",
    imageUrl: profile?.image ? `${baseUrl}${profile.image}` : noPhoto,
  };
};

export default useCurrentUserIdentity;
