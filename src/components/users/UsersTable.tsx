import {
  Badge,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";
import { userRoleEnum } from "@/enums/userRoleEnum";
import { IUsersTableProps } from "@/interface/IProps";
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

const UsersTable: React.FC<IUsersTableProps> = ({ users }) => {
  const baseUrl = import.meta.env.VITE_BASE_URL_localhostApi;
  const navigate = useNavigate();
  const canViewUserDetails = useHasPermission(
    permissionEnum.ViewUserDetails,
  );

  return (
    <div className="hidden min-h-0 flex-1 overflow-hidden rounded-lg border border-lightGray-200 tablet:block [&>div]:h-full">
      <Table className="min-w-[820px]">
        <TableHeader className="sticky top-0 z-10 bg-lightGray-50">
          <TableRow className="hover:bg-lightGray-50">
            <TableHead className="h-12 px-5 text-right text-H6/Medium text-lightGray-800">
              کاربر
            </TableHead>
            <TableHead className="h-12 px-5 text-right text-H6/Medium text-lightGray-800">
              نقش
            </TableHead>
            <TableHead className="h-12 px-5 text-right text-H6/Medium text-lightGray-800">
              تاریخ ایجاد
            </TableHead>
            <TableHead className="h-12 px-5 text-right text-H6/Medium text-lightGray-800">
              وضعیت
            </TableHead>
            <TableHead className="h-12 px-5 text-right text-H6/Medium text-lightGray-800">
              عملیات
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {users.map((user) => {
            const imageUrl = user.image
              ? `${baseUrl}${user.image}`
              : "/default-placeholder.png";
            const role = roleDetails[user.role];

            return (
              <TableRow
                key={user.id}
                className="bg-white hover:bg-lightGray-25"
              >
                <TableCell className="px-5 py-2">
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-lightGray-200 bg-lightGray-50">
                      <img
                        src={imageUrl}
                        alt={user.username}
                        onError={handleImageError}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className="text-H6/Semibold text-lightGray-900">
                      {user.username}
                    </span>
                  </div>
                </TableCell>

                <TableCell className="px-5 py-2">
                  <Badge className={`${role.className} px-3 py-1`}>
                    {role.label}
                  </Badge>
                </TableCell>

                <TableCell className="px-5 py-2 text-H6/Regular text-lightGray-700">
                  {new Date(user.createdAt).toLocaleDateString("fa-IR")}
                </TableCell>

                <TableCell className="px-5 py-2">
                  <Badge
                    variant="outline"
                    className={
                      user.isActive
                        ? "gap-2 border-selfit-100 bg-selfit-25 px-3 py-1 text-selfit-700"
                        : "gap-2 border-Error-100 bg-Error-25 px-3 py-1 text-Error-600"
                    }
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${
                        user.isActive ? "bg-selfit-500" : "bg-Error-400"
                      }`}
                    />
                    {user.isActive ? "فعال" : "غیرفعال"}
                  </Badge>
                </TableCell>

                <TableCell className="px-5 py-2">
                  <div className="flex items-center gap-2">
                    {canViewUserDetails && (
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => navigate(`/users/${user.id}`)}
                        title={`مشاهده جزئیات ${user.username}`}
                        aria-label={`مشاهده جزئیات ${user.username}`}
                        className="h-9 w-9 rounded-full border-lightGray-200 text-lightGray-700 hover:border-selfit-200 hover:bg-selfit-25 hover:text-selfit-700"
                      >
                        <Eye size={17} strokeWidth={1.8} />
                      </Button>
                    )}
                    <ChangeUserStatusDialog user={user} />
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default UsersTable;
