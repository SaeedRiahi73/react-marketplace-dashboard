import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { userRoleIdEnum } from "@/enums/userRoleIdEnum";
import { userSortOrderEnum } from "@/enums/userSortOrderEnum";

interface IUsersFiltersProps {
  role?: userRoleIdEnum;
  isActive?: boolean;
  sortOrder: userSortOrderEnum;
  onRoleChange: (role?: userRoleIdEnum) => void;
  onStatusChange: (isActive?: boolean) => void;
  onSortOrderChange: (sortOrder: userSortOrderEnum) => void;
}

const UsersFilters: React.FC<IUsersFiltersProps> = ({
  role,
  isActive,
  sortOrder,
  onRoleChange,
  onStatusChange,
  onSortOrderChange,
}) => {
  const handleRoleChange = (value: string) => {
    onRoleChange(
      value === "all" ? undefined : (Number(value) as userRoleIdEnum),
    );
  };

  const handleStatusChange = (value: string) => {
    onStatusChange(value === "all" ? undefined : value === "true");
  };

  const handleSortOrderChange = (value: string) => {
    onSortOrderChange(Number(value) as userSortOrderEnum);
  };

  return (
    <div className="grid w-full grid-cols-1 gap-3 tablet:grid-cols-3">
      <Select value={role?.toString() ?? "all"} onValueChange={handleRoleChange}>
        <SelectTrigger aria-label="فیلتر نقش کاربران">
          <SelectValue placeholder="نقش کاربر" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">همه نقش‌ها</SelectItem>
          <SelectItem value={userRoleIdEnum.Admin.toString()}>Admin</SelectItem>
          <SelectItem value={userRoleIdEnum.Demo.toString()}>Demo</SelectItem>
          <SelectItem value={userRoleIdEnum.ProductManager.toString()}>
            ProductManager
          </SelectItem>
        </SelectContent>
      </Select>

      <Select
        value={isActive === undefined ? "all" : isActive.toString()}
        onValueChange={handleStatusChange}
      >
        <SelectTrigger aria-label="فیلتر وضعیت کاربران">
          <SelectValue placeholder="وضعیت کاربر" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">همه وضعیت‌ها</SelectItem>
          <SelectItem value="true">فعال</SelectItem>
          <SelectItem value="false">غیرفعال</SelectItem>
        </SelectContent>
      </Select>

      <Select
        value={sortOrder.toString()}
        onValueChange={handleSortOrderChange}
      >
        <SelectTrigger aria-label="مرتب‌سازی کاربران">
          <SelectValue placeholder="مرتب‌سازی" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={userSortOrderEnum.Newest.toString()}>
            جدیدترین
          </SelectItem>
          <SelectItem value={userSortOrderEnum.Oldest.toString()}>
            قدیمی‌ترین
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default UsersFilters;
