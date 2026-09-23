import IconArrowRight from "@/components/icons/IconArrow-right";
import IconPlus from "@/components/icons/IconPlus";
import { Button } from "@/components/ui";
import { typeIconEnum } from "@/enums/styleIconEnum";
import useCurrentUserIdentity from "@/hooks/useCurrentUserIdentity";
import { IDashboardNavbarMobileProps } from "@/interface/IProps";
import { handleImageError } from "@/utility";
import { useNavigate } from "react-router-dom";
import LogoSidbar from "@/components/contentSidbar/LogoSidbar";
import MobileNavigationMenu from "./MobileNavigationMenu";

const DashboardNavbarMobile: React.FC<IDashboardNavbarMobileProps> = ({
  title,
  subTitle,
  actionLabel,
  onAction,
  actionDisabled = false,
  actionDisabledTitle,
  backLabel,
  backPath,
  onBack,
}) => {
  const navigate = useNavigate();
  const { userName, imageUrl } = useCurrentUserIdentity();

  return (
    <>
      <header className="flex w-full flex-col border-b border-lightGray-200 bg-white shadow-sm tablet:hidden">
        <h1 className="sr-only">پیشخوان سلفیت</h1>
        <LogoSidbar mobile />

        <div className="flex w-full items-center px-3 py-2">
          <div className="flex min-w-0 flex-1 items-center gap-2">
            <MobileNavigationMenu />
            <img
              src={imageUrl}
              alt={`تصویر ${userName}`}
              onError={handleImageError}
              className="h-9 w-9 shrink-0 rounded-full object-cover"
            />
            <span className="min-w-0 truncate text-H6/Semibold text-lightGray-900">
              {userName}
            </span>
          </div>

          <div className="flex shrink-0 items-center gap-1">
            {actionLabel && onAction && (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                disabled={actionDisabled}
                onClick={onAction}
                title={actionDisabled ? actionDisabledTitle : actionLabel}
                aria-label={actionLabel}
              >
                <IconPlus
                  typeIcon={typeIconEnum.Reqular}
                  className="fill-selfit-500"
                />
              </Button>
            )}

            {backLabel && (onBack || backPath) && (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => {
                  if (onBack) {
                    onBack();
                  } else if (backPath) {
                    navigate(backPath);
                  }
                }}
                title={backLabel}
                aria-label={backLabel}
              >
                <IconArrowRight
                  typeIcon={typeIconEnum.Reqular}
                  className="fill-lightGray-800"
                />
              </Button>
            )}

          </div>
        </div>
      </header>

      <div className="m-3 flex flex-col gap-2 tablet:hidden">
        <h2 className="text-H3/Bold text-lightGray-900">{title}</h2>
        <p className="text-H5/Regular text-lightGray-600">{subTitle}</p>
      </div>
    </>
  );
};

export default DashboardNavbarMobile;
