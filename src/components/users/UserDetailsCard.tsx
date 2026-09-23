import { IUserDetailsCardProps } from "@/interface/IProps";
import ChangeUserStatusDialog from "./ChangeUserStatusDialog";
import UserAccountDetailsCard from "./UserAccountDetailsCard";

const UserDetailsCard: React.FC<IUserDetailsCardProps> = ({ user }) => {
  return (
    <UserAccountDetailsCard
      user={user}
      caption="اطلاعات کاربر"
      detailsTitle="جزئیات حساب"
      detailsDescription="اطلاعات ثبت‌شده برای این کاربر"
      actions={
        user.canChangeStatus ? <ChangeUserStatusDialog user={user} /> : undefined
      }
    />
  );
};

export default UserDetailsCard;
