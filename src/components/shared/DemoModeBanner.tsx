import { userRoleEnum } from "@/enums/userRoleEnum";
import { selectCurrentUserRole } from "@/features/authSlice";
import { useSelector } from "react-redux";

const DemoModeBanner: React.FC = () => {
  const currentUserRole = useSelector(selectCurrentUserRole);

  if (currentUserRole !== userRoleEnum.Demo) return null;

  return (
    <div className="m-3 rounded-lg border border-Warning-500 bg-Warning-50 px-4 py-3 text-H6/Medium text-Warning-700">
      شما در نسخه آزمایشی هستید. امکان مشاهده و بررسی بخش‌های پروژه وجود دارد، اما تغییر اطلاعات غیرفعال است.
    </div>
  );
};

export default DemoModeBanner;
