import { typeIconEnum } from "../../enums/styleIconEnum";
import IconDoor_open from "../icons/IconDoor-open";
import IconUser from "../icons/IconUser";
import Confirm from "../shared/Confirm";
import { Button } from "../ui";
import IconDownload from "../icons/IconDownload";
import IconPlus from "../icons/IconPlus";
import { INavbarProductMobileProps } from "@/interface/IProps";


const NavbarProductMobile: React.FC<INavbarProductMobileProps> = ({handleLogout,onAddProduct}) => {

    return (
        <div className="bg-white flex flex-row items-center border-b py-2 mt-8 w-full border-lightGray-200 shadow-sm tablet:hidden">
            <div className="flex-1 ">
                <Button variant={"link"} className="px-3">
                    <h5 className="text-H5/Bold">پیشخوان سلفیت</h5>
                </Button>
            </div>
            <div className="flex-1 px-3">
                <div className="justify-end flex flex-row gap-2 items-center">
                    <Button variant={"link"} className="p-2">
                        <IconUser typeIcon={typeIconEnum.Reqular} />
                    </Button>
                    <Button variant={"link"} className="p-2">
                        <IconDownload typeIcon={typeIconEnum.Reqular} />
                    </Button>
                    <Button
                        variant={"link"}
                        className="p-2"
                        onClick={onAddProduct}
                    >
                        <IconPlus
                            typeIcon={typeIconEnum.Reqular}
                            className="fill-selfit-500"
                        />
                    </Button>
                    <Confirm
                        button={
                            <Button variant={"link"} className="p-2">
                                <IconDoor_open
                                    typeIcon={typeIconEnum.Reqular}
                                    className="fill-Error-500"
                                />
                            </Button>
                        }
                        title={"خروج از حساب کاربری"}
                        content={"آیا می‌خواهید از حساب‌ کاربری خود خارج شوید؟"}
                        confirm={handleLogout}
                    />
                </div>
            </div>
        </div>
    )
}

export default NavbarProductMobile;