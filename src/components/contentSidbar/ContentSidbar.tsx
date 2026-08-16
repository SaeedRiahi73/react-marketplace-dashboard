import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "@/features/authSlice";
import { typeIconEnum } from "../../enums/styleIconEnum";
import IconBox_archive from "../icons/IconBox-archive";
import IconDoor_open from "../icons/IconDoor-open";
import IconGear from "../icons/IconGear";
import IconGrid_2 from "../icons/IconGrid-2";
import Confirm from "../shared/Confirm";

const ContentSidbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <div className="mt-3 w-full h-full">
      <div className="flex flex-col gap-2 bg-white">
        {/* <!-- Dashboard Tab --> */}
        <div className=" flex items-center h-full space-x-2  gap-3 p-2 border-r-[6px] rounded-sm border-white">
          <IconGrid_2
            typeIcon={typeIconEnum.Reqular}
            className="fill-lightGray-700"
          />
          <span className="text-lightGray-700">پیشخوان</span>
        </div>

        {/* <!-- All Products Tab --> */}
        <div
          className="flex items-center h-full space-x-2  gap-3 p-2 border-r-[6px] rounded-sm border-selfit-500 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <IconBox_archive
            typeIcon={typeIconEnum.Reqular}
            className="fill-selfit-700"
          />
          <span className="text-selfit-600 font-medium">همه محصولات</span>
        </div>

        {/* <!-- Divider --> */}
        <div className="border-b border-gray-300 my-2"></div>

        {/* <!-- Settings Tab --> */}
        <div className="flex items-center h-full space-x-2  gap-3 p-2 border-r-[6px] rounded-sm border-white">
          <IconGear
            typeIcon={typeIconEnum.Solid}
            className="stroke-lightGray-700"
          />
          <span className="text-lightGray-700">تنظیمات</span>
        </div>
        <div className="absolute flex items-center justify-center bottom-5 left-0 right-0 ">
          <Confirm
            button={
              <button className="px-5 bg-white rounded-lg flex flex-row items-center gap-2 h-12 border border-lightGray-100 ">
                <h6 className="text-H6/Semibold text-Error-500">
                  خروج از حساب کاربری
                </h6>
                <IconDoor_open
                  typeIcon={typeIconEnum.Reqular}
                  className="fill-Error-500"
                />
              </button>
            }
            title={"خروج از حساب کاربری"}
            content={"آیا می‌خواهید از حساب‌ کاربری خود خارج شوید؟"}
            confirm={handleLogout}
          />
        </div>
      </div>
    </div>
  );
};

export default ContentSidbar;
