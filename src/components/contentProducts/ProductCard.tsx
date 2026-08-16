import { useNavigate } from "react-router-dom";
import { IProductCardAndTableProps } from "@/interface/IProps";
import { customFormatMoney, handleImageError } from "@/utility";
import { Badge, Button } from "../ui";
import ConfirmDeleteProduct from "./ConfirmDeleteProduct";
import IconTrash_can from "../icons/IconTrash-can";
import { typeIconEnum } from "@/enums/styleIconEnum";
import IconEdit from "../icons/IconEdit";

const ProductCard: React.FC<IProductCardAndTableProps> = ({
  product: item,
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col tablet:hidden overflow-auto">
      <div className="box-border flex flex-col p-4 mt-6 gap-6 bg-white border border-gray-200 rounded-md">
        {/* Product Information */}
        <div className="flex flex-row items-center gap-2 w-full h-11">
          <div className="w-10 h-10 bg-lightGray-100 border border-lightGray-100 rounded-md flex justify-center items-center">
            <img
              src={item.fileUrl?.toString()}
              alt={item.title || "No Image"}
              onError={handleImageError}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="flex flex-col justify-center gap-1 w-56">
            <h5 className="text-Heading/H5/Medium text-lightGray-900">
              {item.title}
            </h5>
            <p className="text-Paragraph/X Small/Regular text-lightGray-700">
              {item.publicId}
            </p>
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col items-end gap-3 w-full">
          {/* Price Row */}
          <div className="flex flex-row justify-between items-center w-full">
            <div className="flex flex-row">
              <p className="text-XSmall/Medium text-lightGray-700">مبلغ</p>
              <p className="bg-lightGray-50 text-Microscope/Medium text-lightGray-800 rounded px-2 py-1">
                ریال
              </p>
            </div>
            <div className="justify-end">
              <p className="text-XSmall/Medium text-lightGray-900">
                {customFormatMoney(item.amount)}
              </p>
            </div>
          </div>
          <hr className="w-full border-gray-200" />
          {/* Quantity Row */}
          <div className="flex flex-row justify-between items-center w-full">
            <p className="text-XSmall/Medium text-lightGray-700">تعداد موجود</p>
            <p className="text-XSmall/Medium text-lightGray-900">
              {item.quantity} عدد
            </p>
          </div>
          <hr className="w-full border-gray-200" />
          {/* Status Row */}
          <div className="flex flex-row justify-between items-center w-full">
            <p className="text-XSmall/Medium text-lightGray-700">وضعیت</p>
            <div>
              <h6 className="text-H6/Medium">
                {" "}
                <Badge
                  className={`px-4 py-2 ${item.status === "Active"
                      ? "bg-selfit-50 text-selfit-600"
                      : item.status === "DeActive"
                        ? "bg-lightGray-50 text-lightGray-600"
                        : "bg-Error-50 text-Error-600"
                    }`}
                  variant={"default"}
                >
                  <h6 className="text-H6/Medium">
                    {item.status === "Active"
                      ? "فعال"
                      : item.status === "DeActive"
                        ? "غیر فعال"
                        : "حذف شده"}
                  </h6>
                </Badge>
              </h6>
            </div>
          </div>
        </div>

        {/* Delete Button */}
        <div className="flex flex-row gap-2">
          <ConfirmDeleteProduct id={item.id} className="w-1/2">
            {" "}
            <Button className="flex-1 flex-row justify-center items-center gap-3 w-full h-10 bg-Error-25 text-Error-500 font-semibold rounded-md hover:bg-red-100 transition">
              <IconTrash_can
                typeIcon={typeIconEnum.Reqular}
                className={"fill-Error-500"}
              />
              حذف محصول
            </Button>
          </ConfirmDeleteProduct>

          <Button
            className="flex-1 flex-row justify-center items-center gap-3 w-1/2 h-10 bg-Warning-25 text-Warning-500  font-semibold rounded-md hover:bg-Warning-50 transition"
            onClick={() => navigate(`/editProduct/${item.id}`)}
          >
            <IconEdit
              typeIcon={typeIconEnum.Reqular}
              className="text-Warning-500 "
            />
            ویرایش محصول
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
