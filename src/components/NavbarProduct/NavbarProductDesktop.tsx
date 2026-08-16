import { INavbarProductDesktopProps } from "@/interface/IProps";
import { typeIconEnum } from "../../enums/styleIconEnum";

import IconDownload from "../icons/IconDownload";
import IconPlus from "../icons/IconPlus";

const NavbarProductDesktop : React.FC<INavbarProductDesktopProps>=({onAddProduct})=>{

    return(
        <div className="hidden bg-white tablet:flex flex-row justify-between items-center border-b px-8 py-4  w-full border-lightGray-200 shadow-sm ">
        <div className="flex flex-col">
          <h3 className="text-H3/Bold">محصولات</h3>
          <h5 className="text-H5/Regular text-gray-700">
            مدیریت محصولات سلفیت
          </h5>
        </div>
        <div className="flex-grow flex-1 flex flex-row items-center gap-4 justify-end">
          <div className="hidden">
            <button className=" px-3 bg-white rounded-lg flex flex-row items-center gap-2 h-12 border border-lightGray-100 ">
              <IconDownload typeIcon={typeIconEnum.Reqular} />
              <h6 className="text-H6/Semibold text-selfit-800">
                استخراج با فرمت اکسل
              </h6>
            </button>
          </div>

          <button
            className="px-3 bg-selfit-500 rounded-lg flex flex-row items-center gap-2 h-12"
            onClick={onAddProduct}
          >
            <IconPlus
              typeIcon={typeIconEnum.Reqular}
              className="fill-selfit-800"
            />
            <h6 className="text-H6/Semibold text-selfit-800">
              اضافه کردن محصول
            </h6>
          </button>
        </div>
      </div>
    )
}

export default NavbarProductDesktop;