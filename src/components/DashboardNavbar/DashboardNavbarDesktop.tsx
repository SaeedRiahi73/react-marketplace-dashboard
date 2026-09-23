import IconPlus from "@/components/icons/IconPlus";
import IconArrowRight from "@/components/icons/IconArrow-right";
import { Button } from "@/components/ui";
import { typeIconEnum } from "@/enums/styleIconEnum";
import { IDashboardNavbarDesktopProps } from "@/interface/IProps";
import { useNavigate } from "react-router-dom";

const DashboardNavbarDesktop: React.FC<IDashboardNavbarDesktopProps> = ({
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

  return (
    <header className="hidden w-full items-center justify-between border-b border-lightGray-200 bg-white px-8 py-4 shadow-sm tablet:flex">
      <div className="flex flex-col gap-1">
        <h1 className="text-H3/Bold text-lightGray-900">{title}</h1>
        <p className="text-H5/Regular text-lightGray-700">{subTitle}</p>
      </div>

      {actionLabel && onAction && (
        <Button
          type="button"
          disabled={actionDisabled}
          onClick={onAction}
          title={actionDisabled ? actionDisabledTitle : actionLabel}
          className="h-12 gap-2 rounded-lg bg-selfit-500 px-4 text-H6/Semibold text-selfit-800 hover:bg-selfit-600 disabled:bg-lightGray-100 disabled:text-lightGray-600"
        >
          <IconPlus
            typeIcon={typeIconEnum.Reqular}
            className="fill-current"
          />
          {actionLabel}
        </Button>
      )}

      {backLabel && (onBack || backPath) && (
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            if (onBack) {
              onBack();
            } else if (backPath) {
              navigate(backPath);
            }
          }}
          className="h-11 gap-2 border-lightGray-200 bg-white text-lightGray-800 hover:bg-lightGray-50"
        >
          <IconArrowRight
            typeIcon={typeIconEnum.Reqular}
            className="fill-lightGray-800"
          />
          {backLabel}
        </Button>
      )}
    </header>
  );
};

export default DashboardNavbarDesktop;
