import { Badge, Button, Card, CardContent } from "@/components/ui";
import { userRoleEnum } from "@/enums/userRoleEnum";
import { IUsersMobileListProps } from "@/interface/IProps";
import { handleImageError } from "@/utility";
import ChangeUserStatusDialog from "./ChangeUserStatusDialog";
import useHasPermission from "@/hooks/useHasPermission";
import { permissionEnum } from "@/enums/permissionEnum";
import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const roleDetails: Record<
  userRoleEnum,
  { label: string; className: string }
> = {
  [userRoleEnum.Admin]: {
    label: "مدیر سیستم",
    className: "bg-Warning-25 text-Warning-600",
  },
  [userRoleEnum.Demo]: {
    label: "دمو",
    className: "bg-lightGray-100 text-lightGray-700",
  },
  [userRoleEnum.ProductManager]: {
    label: "مدیر محصول",
    className: "bg-selfit-50 text-selfit-700",
  },
};

const UsersMobileList: React.FC<IUsersMobileListProps> = ({ users }) => {
  const baseUrl = import.meta.env.VITE_BASE_URL_localhostApi;
  const navigate = useNavigate();
  const canViewUserDetails = useHasPermission(
    permissionEnum.ViewUserDetails,
  );

  return (
    <div className="flex flex-col gap-3 pl-1 tablet:hidden">
      {users.map((user) => {
        const imageUrl = user.image
          ? `${baseUrl}${user.image}`
          : "/default-placeholder.png";
        const role = roleDetails[user.role];

        return (
          <Card
            key={user.id}
            className={`shrink-0 overflow-hidden border-r-4 bg-white transition-shadow hover:shadow-md ${
              user.isActive ? "border-r-selfit-500" : "border-r-Error-400"
            }`}
          >
            <CardContent className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-lightGray-200 bg-lightGray-50 ring-2 ring-lightGray-100">
                    <img
                      src={imageUrl}
                      alt={user.username}
                      onError={handleImageError}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate text-H6/Semibold text-lightGray-900">
                      {user.username}
                    </h3>
                    <Badge className={`${role.className} mt-2 px-2.5 py-1`}>
                      {role.label}
                    </Badge>
                  </div>
                </div>

                <Badge
                  variant="outline"
                  className={
                    user.isActive
                      ? "shrink-0 gap-2 border-selfit-100 bg-selfit-25 text-selfit-700"
                      : "shrink-0 gap-2 border-Error-100 bg-Error-25 text-Error-600"
                  }
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      user.isActive ? "bg-selfit-500" : "bg-Error-400"
                    }`}
                  />
                  {user.isActive ? "فعال" : "غیرفعال"}
                </Badge>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-lightGray-100 pt-3">
                <span className="text-XSmall/Medium text-lightGray-600">
                  تاریخ عضویت
                </span>
                <time
                  dateTime={user.createdAt}
                  className="text-XSmall/Medium text-lightGray-800"
                >
                  {new Date(user.createdAt).toLocaleDateString("fa-IR")}
                </time>
              </div>

              <div className="mt-3 flex flex-wrap justify-end gap-2">
                {canViewUserDetails && (
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => navigate(`/users/${user.id}`)}
                    className="h-9 gap-2 rounded-full border-lightGray-200 px-3 text-H6/Medium text-lightGray-700 hover:border-selfit-200 hover:bg-selfit-25 hover:text-selfit-700"
                  >
                    <Eye size={16} strokeWidth={1.8} />
                    مشاهده جزئیات
                  </Button>
                )}
                <ChangeUserStatusDialog user={user} />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default UsersMobileList;
