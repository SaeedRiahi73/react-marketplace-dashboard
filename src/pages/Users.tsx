import { useGetUsersQuery } from "@/api/userApiSlice";
import IconSearch from "@/components/icons/IconSearch";
import DashboardNavbar from "@/components/shared/DashboardNavbar";
import Pagination from "@/components/shared/Pagination";
import Spinner from "@/components/shared/Snipper";
import { Input, Label } from "@/components/ui";
import UsersFilters from "@/components/users/UsersFilters";
import UsersMobileList from "@/components/users/UsersMobileList";
import UsersTable from "@/components/users/UsersTable";
import { userRoleIdEnum } from "@/enums/userRoleIdEnum";
import { userSortOrderEnum } from "@/enums/userSortOrderEnum";
import { permissionEnum } from "@/enums/permissionEnum";
import useDebouncedValue from "@/hooks/useDebouncedValue";
import useHasPermission from "@/hooks/useHasPermission";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const Users: React.FC = () => {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState<userRoleIdEnum>();
  const [isActive, setIsActive] = useState<boolean>();
  const [sortOrder, setSortOrder] = useState(userSortOrderEnum.Newest);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const navigate = useNavigate();

  const canCreateUser = useHasPermission(permissionEnum.CreateUser);
  
  const debouncedSearch = useDebouncedValue(search.trim(), 500);

  const { data, isError, isFetching, isLoading } = useGetUsersQuery({
    pageNumber,
    pageSize,
    search: debouncedSearch || undefined,
    role,
    isActive,
    sortOrder,
  });

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setPageNumber(1);
  };

  const handleRoleChange = (value?: userRoleIdEnum) => {
    setRole(value);
    setPageNumber(1);
  };

  const handleStatusChange = (value?: boolean) => {
    setIsActive(value);
    setPageNumber(1);
  };

  const handleSortOrderChange = (value: userSortOrderEnum) => {
    setSortOrder(value);
    setPageNumber(1);
  };

  const handlePageSizeChange = (value: number) => {
    setPageSize(value);
    setPageNumber(1);
  };

  if (isLoading) {
    return <Spinner text="در حال دریافت کاربران..." />;
  }

  return (
    <>
      <Helmet>
        <title>مدیریت کاربران</title>
      </Helmet>

      <DashboardNavbar
        title="کاربران"
        subTitle="مدیریت کاربران سیستم"
        actionLabel="اضافه کردن کاربر"
        onAction={() => navigate("/addUser")}
        actionDisabled={!canCreateUser}
        actionDisabledTitle="فقط مدیر سیستم اجازه ایجاد کاربر دارد"
      />

      <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4 tablet:min-h-0 tablet:gap-6 tablet:overflow-hidden tablet:p-8">
        <div className="shrink-0 rounded-xl border border-lightGray-200 bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-4 laptop:flex-row laptop:items-end">
            <div className="flex w-full flex-col gap-2 laptop:max-w-lg">
              <Label
                htmlFor="users-search"
                className="text-H6/Medium text-lightGray-800"
              >
                جست‌وجوی کاربران
              </Label>
              <Input
                id="users-search"
                value={search}
                onChange={(event) => handleSearchChange(event.target.value)}
                placeholder="نام کاربری را جست‌وجو کنید..."
                aria-label="جست‌وجوی کاربران"
                maxLength={50}
                icon={<IconSearch className="fill-selfit-600" />}
                classNameContainerInput="h-11 w-full border-lightGray-300 bg-white shadow-sm transition focus-within:border-selfit-500 focus-within:ring-2 focus-within:ring-selfit-100"
              />
            </div>

            <UsersFilters
              role={role}
              isActive={isActive}
              sortOrder={sortOrder}
              onRoleChange={handleRoleChange}
              onStatusChange={handleStatusChange}
              onSortOrderChange={handleSortOrderChange}
            />
          </div>
        </div>

        <section className="flex flex-col rounded-xl bg-white p-4 shadow-sm tablet:min-h-0 tablet:flex-1">
          {isFetching && !isLoading && (
            <p className="mb-3 text-XSmall/Medium text-lightGray-600">
              در حال دریافت نتایج...
            </p>
          )}

          {isError ? (
            <p className="py-10 text-center text-H6/Medium text-Error-500">
              دریافت اطلاعات کاربران با خطا مواجه شد.
            </p>
          ) : data?.items.length ? (
            <div className="flex flex-col gap-3 tablet:min-h-0 tablet:flex-1">
              <p className="shrink-0 text-H6/Medium text-lightGray-700">
                تعداد کل کاربران: {data.totalCount}
              </p>
              <UsersMobileList users={data.items} />
              <UsersTable users={data.items} />
              <div className="shrink-0">
                <Pagination
                  currentPage={data.pageNumber}
                  totalPages={data.totalPages}
                  pageSize={data.pageSize}
                  totalCount={data.totalCount}
                  onPageChange={setPageNumber}
                  onPageSizeChange={handlePageSizeChange}
                />
              </div>
            </div>
          ) : (
            <p className="py-10 text-center text-H6/Medium text-lightGray-600">
              {debouncedSearch
                ? "کاربری با این نام پیدا نشد."
                : "کاربری برای نمایش وجود ندارد."}
            </p>
          )}
        </section>
      </div>
    </>
  );
};

export default Users;
