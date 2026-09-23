import useCurrentUserIdentity from "@/hooks/useCurrentUserIdentity";
import useNavigationItems from "@/hooks/useNavigationItems";
import useLogout from "@/hooks/useLogout";
import { handleImageError } from "@/utility";
import { Button } from "@/components/ui";
import Confirm from "@/components/shared/Confirm";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LogOut, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const MobileNavigationMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogoutConfirmOpen, setIsLogoutConfirmOpen] = useState(false);

  const { userName, roleLabel, imageUrl } = useCurrentUserIdentity();
  const visibleItems = useNavigationItems();
  const { handleLogout } = useLogout();

  return (
    <>
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="باز کردن منوی بخش‌ها"
            className="shrink-0"
          >
            <Menu className="text-lightGray-800" aria-hidden="true" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetTitle className="sr-only">منوی بخش‌های پیشخوان</SheetTitle>
          <div className="mt-10 mb-6 flex items-center gap-3 rounded-xl bg-selfit-500 p-3">
            <img
              src={imageUrl}
              alt={`تصویر ${userName}`}
              onError={handleImageError}
              className="h-14 w-14 shrink-0 rounded-full object-cover"
            />
            <div className="min-w-0">
              <p className="truncate text-H6/Semibold text-white">
                {userName}
              </p>
              <p className="mt-1 text-H6/Regular text-gray-200">
                {roleLabel}
              </p>
            </div>
          </div>
          <p className="mb-2 px-2 text-H6/Semibold text-lightGray-700">
            بخش‌های پیشخوان
          </p>
          <nav aria-label="بخش‌های پیشخوان" className="flex flex-col gap-2">
            {visibleItems.map((item) => {
              const Icon = item.icon;
              const iconClassName = item.isActive
                ? "text-selfit-700"
                : "text-lightGray-700";

              return (
                // asChild خود Link را عنصر قابل‌کلیک نگه می‌دارد و پس از انتخاب، Sheet را می‌بندد.
                <SheetClose asChild key={item.id}>
                  <Link
                    to={item.to}
                    className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-H6/Medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-selfit-500 ${
                      item.isActive
                        ? "border-selfit-100 bg-selfit-25 text-selfit-700"
                        : "border-transparent text-lightGray-700 hover:bg-lightGray-50"
                    }`}
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.8}
                      className={iconClassName}
                      aria-hidden="true"
                    />
                    <span>{item.label}</span>
                  </Link>
                </SheetClose>
              );
            })}
          </nav>
          <Button
            type="button"
            variant="ghost"
            className="mt-auto flex w-full justify-start gap-3 border-t border-lightGray-200 pt-5 text-H6/Medium text-Error-500 hover:bg-Error-25 hover:text-Error-600"
            onClick={() => {
              // تأیید خروج بیرون Sheet باز می‌شود تا دو پنجره مودال هم‌زمان فعال نباشند.
              setIsMenuOpen(false);
              setIsLogoutConfirmOpen(true);
            }}
          >
            <LogOut size={20} aria-hidden="true" />
            خروج از حساب کاربری
          </Button>
        </SheetContent>
      </Sheet>
      <Confirm
        open={isLogoutConfirmOpen}
        onOpenChange={setIsLogoutConfirmOpen}
        title="خروج از حساب کاربری"
        content="آیا می‌خواهید از حساب کاربری خود خارج شوید؟"
        confirm={handleLogout}
      />
    </>
  );
};

export default MobileNavigationMenu;
