import { useNavigate } from "react-router-dom";
import { typeIconEnum } from "@/enums/styleIconEnum";
import IconDoor_open from "../icons/IconDoor-open";
import { Button } from "../ui";
import IconUser from "../icons/IconUser";
import { INvabarAddAndEditProps } from "@/interface/IProps";
import IconBox_archive from "../icons/IconBox-archive";

const NavbarAddAndEditProduct: React.FC<INvabarAddAndEditProps> = ({
  title,
  subTitle,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-white flex flex-row items-center border-b px-2 py-2 mt-8 w-full border-lightGray-200 shadow-sm tablet:hidden">
        <div className="flex-1 ">
          <Button variant={"link"} className="px-1">
            <h5 className="text-H5/Bold">پیشخوان سلفیت</h5>
          </Button>
        </div>
        <div className="flex flex-row">
          <Button variant={"link"} className="py-2 px-3">
            <IconUser typeIcon={typeIconEnum.Reqular} />
          </Button>
          <Button
            variant="link"
            className="p-2"
            onClick={() => navigate("/")}
            title="همه محصولات"
          >
            <IconBox_archive
              typeIcon={typeIconEnum.Reqular}
              className="fill-selfit-700"
            />
          </Button>
          <Button variant={"link"} className="py-2 px-3" title="خروج">
            <IconDoor_open
              typeIcon={typeIconEnum.Reqular}
              className="fill-Error-500"
            />
          </Button>
        </div>
      </div>
      <div className="hidden bg-white tablet:flex flex-row justify-between items-center border-b px-4 py-[14.5px]  w-full border-lightGray-200 shadow-sm ">
        <div className="flex flex-col gap-2">
          <h3 className="text-H3/Bold">{title}</h3>
          <h5 className="text-H5/Regular text-gray-700">{subTitle}</h5>
        </div>
      </div>
    </>
  );
};

export default NavbarAddAndEditProduct;
