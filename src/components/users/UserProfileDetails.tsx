import IconEdit from "@/components/icons/IconEdit";
import IconKey from "@/components/icons/IconKey";
import { Button } from "@/components/ui";
import { typeIconEnum } from "@/enums/styleIconEnum";
import { IUserProfileDetailsProps } from "@/interface/IProps";
import UserAccountDetailsCard from "./UserAccountDetailsCard";

const UserProfileDetails: React.FC<IUserProfileDetailsProps> = ({
  profile,
  onEditProfile,
  onChangePassword,
}) => {
  return (
    <UserAccountDetailsCard
      user={profile}
      caption="حساب کاربری شما"
      detailsTitle="اطلاعات حساب"
      detailsDescription="اطلاعات ثبت‌شده برای حساب کاربری شما"
      actions={
        (onEditProfile || onChangePassword) && (
          <div className="grid grid-cols-2 gap-2">
            {onEditProfile && (
              <Button
                type="button"
                variant="outline"
                onClick={onEditProfile}
                className="h-11 w-full gap-1.5 whitespace-nowrap border-lightGray-300 bg-white px-2 text-H6/Medium text-lightGray-800 hover:border-lightGray-400 hover:bg-lightGray-50"
              >
                <IconEdit
                  typeIcon={typeIconEnum.Reqular}
                  className="h-[18px] w-[18px] shrink-0"
                />
                ویرایش پروفایل
              </Button>
            )}

            {onChangePassword && (
              <Button
                type="button"
                onClick={onChangePassword}
                className="h-11 w-full gap-1.5 whitespace-nowrap bg-selfit-500 px-2 text-H6/Semibold text-selfit-900 shadow-sm hover:bg-selfit-600"
              >
                <IconKey
                  typeIcon={typeIconEnum.Reqular}
                  className="h-[18px] w-[18px] shrink-0 fill-current"
                />
                تغییر رمز عبور
              </Button>
            )}
          </div>
        )
      }
    />
  );
};

export default UserProfileDetails;
