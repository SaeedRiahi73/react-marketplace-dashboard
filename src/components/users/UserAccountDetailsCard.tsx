import { Badge, Card, CardContent } from "@/components/ui";
import { userRoleLabels } from "@/constants/userRoleLabels";
import { IUserAccountDetailsCardProps } from "@/interface/IProps";
import { handleImageError } from "@/utility";
import { AtSign, CalendarDays, Clock3, Mail, ShieldCheck } from "lucide-react";

const formatDate = (date?: string | null): string =>
  date ? new Date(date).toLocaleDateString("fa-IR") : "ثبت نشده";

const UserAccountDetailsCard: React.FC<IUserAccountDetailsCardProps> = ({
  user,
  caption,
  detailsTitle,
  detailsDescription,
  actions,
}) => {
  const baseUrl = import.meta.env.VITE_BASE_URL_localhostApi;
  const imageUrl = user.image
    ? `${baseUrl}${user.image}`
    : "/default-placeholder.png";
  const details = [
    {
      label: "نام کاربری",
      value: user.username,
      icon: <AtSign size={20} strokeWidth={1.8} />,
      dir: "rtl" as const,
    },
    {
      label: "ایمیل",
      value: user.email,
      icon: <Mail size={20} strokeWidth={1.8} />,
      dir: "ltr" as const,
    },
    {
      label: "تاریخ ایجاد حساب",
      value: formatDate(user.createdAt),
      icon: <CalendarDays size={20} strokeWidth={1.8} />,
      dir: "rtl" as const,
    },
    {
      label: "آخرین ویرایش",
      value: formatDate(user.updatedAt),
      icon: <Clock3 size={20} strokeWidth={1.8} />,
      dir: "rtl" as const,
    },
  ];

  return (
    <Card className="overflow-hidden border-lightGray-200 bg-white shadow-md">
      <CardContent className="p-0">
        <div className="relative overflow-hidden border-b border-lightGray-100 bg-gradient-to-l from-white via-lightGray-25 to-lightGray-50 px-5 py-8 tablet:px-8 tablet:py-10">
          <div className="absolute -left-16 -top-20 h-52 w-52 rounded-full bg-lightGray-100/70 blur-2xl" />
          <div className="absolute -bottom-24 right-1/3 h-48 w-48 rounded-full bg-white/80 blur-2xl" />

          <div className="relative flex flex-col items-center gap-6 tablet:flex-row tablet:gap-7">
            <div className="relative shrink-0 rounded-full border border-lightGray-200 bg-white p-1 shadow-lg shadow-lightGray-200/70">
              <div className="h-28 w-28 overflow-hidden rounded-full border-4 border-white bg-lightGray-100 tablet:h-32 tablet:w-32">
                <img
                  src={imageUrl}
                  alt={`تصویر ${user.username}`}
                  onError={handleImageError}
                  className="h-full w-full object-cover"
                />
              </div>
              <span
                className={`absolute bottom-2 right-2 h-5 w-5 rounded-full border-4 border-white tablet:bottom-3 tablet:right-3 ${
                  user.isActive ? "bg-selfit-500" : "bg-Error-400"
                }`}
                title={user.isActive ? "حساب فعال" : "حساب غیرفعال"}
                aria-label={user.isActive ? "حساب فعال" : "حساب غیرفعال"}
              />
            </div>

            <div className="flex min-w-0 flex-1 flex-col items-center tablet:items-start">
              <p className="mb-1 text-H6/Regular text-lightGray-600">
                {caption}
              </p>
              <h2 className="max-w-full break-words text-center text-H3/Bold text-lightGray-900 tablet:text-right">
                {user.username}
              </h2>
              <div
                dir="ltr"
                className="mt-2 flex max-w-full items-center gap-2 text-left text-H6/Regular text-lightGray-600"
              >
                <Mail size={17} strokeWidth={1.8} className="shrink-0" />
                <span className="break-all">{user.email}</span>
              </div>
              <Badge
                variant="outline"
                className="mt-4 border-lightGray-200 bg-lightGray-50 px-3 py-1 text-H6/Medium text-lightGray-700"
              >
                {userRoleLabels[user.role]}
              </Badge>
            </div>

            <div className="w-full rounded-2xl border border-lightGray-200 bg-white/90 p-3 shadow-sm tablet:w-[330px] tablet:min-w-[330px]">
              <div className="flex w-full items-center gap-3 px-1 py-1">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                    user.isActive
                      ? "bg-selfit-25 text-selfit-600"
                      : "bg-Error-25 text-Error-500"
                  }`}
                >
                  <ShieldCheck size={23} strokeWidth={1.8} />
                </div>
                <div className="flex min-w-0 flex-1 items-center justify-between gap-3">
                  <p className="text-H6/Regular text-lightGray-600">
                    وضعیت حساب
                  </p>
                  <p
                    className={`text-H6/Semibold ${
                      user.isActive ? "text-selfit-700" : "text-Error-600"
                    }`}
                  >
                    {user.isActive ? "فعال و تأییدشده" : "غیرفعال"}
                  </p>
                </div>
              </div>

              {actions && (
                <div className="mt-3 border-t border-lightGray-100 pt-3">
                  {actions}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="border-b border-lightGray-100 px-5 py-4 tablet:px-8">
          <h3 className="text-H5/Bold text-lightGray-900">{detailsTitle}</h3>
          <p className="mt-1 text-H6/Regular text-lightGray-600">
            {detailsDescription}
          </p>
        </div>

        <dl className="grid grid-cols-1 gap-3 p-4 tablet:grid-cols-2 tablet:p-6">
          {details.map((detail) => (
            <div
              key={detail.label}
              className="flex items-start gap-3 rounded-xl border border-lightGray-100 bg-lightGray-25 p-4 transition-colors hover:border-selfit-100 hover:bg-selfit-25"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-selfit-600 shadow-sm">
                {detail.icon}
              </div>
              <div className="min-w-0">
                <dt className="text-H6/Regular text-lightGray-600">
                  {detail.label}
                </dt>
                <dd
                  dir={detail.dir}
                  className={`mt-1 break-words text-H6/Semibold text-lightGray-900 ${
                    detail.dir === "ltr" ? "text-left" : "text-right"
                  }`}
                >
                  {detail.value}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </CardContent>
    </Card>
  );
};

export default UserAccountDetailsCard;
