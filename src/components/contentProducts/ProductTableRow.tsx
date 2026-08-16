import { useNavigate } from "react-router-dom";
import { TableCell, TableRow, Badge, Button } from "@/components/ui/index";
import { typeIconEnum } from "@/enums/styleIconEnum";
import noPhoto from "@/assets/image/noPhoto.jpg";
import { customFormatMoney } from "@/utility/index";
import IconEdit from "../icons/IconEdit";
import ConfirmDeleteProduct from "./ConfirmDeleteProduct";
import IconTrash_can from "../icons/IconTrash-can";
import { IProductCardAndTableProps } from "@/interface/IProps";
import { statusProductEnum } from "@/enums/statusProductEnum";

const ProductTableRow: React.FC<IProductCardAndTableProps> = ({
  product: item,
  SelectedColumns,
}) => {
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_BASE_URL_localhostApi;
  const fullImageUrl = item.image ? `${BASE_URL}${item.image}` : "/default-placeholder.png";
  console.log(fullImageUrl);
  
  return (
    <TableRow className="bg-white hover:bg-gray-50 h-fit gap-0 border-gray-200 max-h-16">
      <TableCell
        className={`flex flex-row gap-[10px] items-center pr-4 max-h-16 py-2 px-4 ${
          !SelectedColumns!.productInfo ? "hidden" : ""
        }`}
      >
        <img
          src={fullImageUrl} 
          alt={item.name || "No Image"}
          onError={(e) => (e.currentTarget.src = noPhoto)}
          className="rounded-lg w-[40px] h-[40px]"
        />
        <h6 className="text-lightGray-900 text-H6/Medium">{item.name}</h6>
      </TableCell>
      <TableCell className={`px-4 ${!SelectedColumns!.amount ? "hidden" : ""}`}>
        <h5 className="text-H5/Medium text-lightGray-900">
          {customFormatMoney(item.price)}
        </h5>
      </TableCell>
      <TableCell
        className={`px-4 py-2 ${!SelectedColumns!.stock ? "hidden" : ""}`}
      >
        <h5 className="text-H5/Medium text-lightGray-900">
          {item.quantity} عدد
        </h5>
      </TableCell>
      <TableCell
        className={`px-4 py-2 ${!SelectedColumns!.status ? "hidden" : ""}`}
      >
        <Badge
          className={`px-4 py-2 ${
            item.quantity === 0
              ? "bg-Error-50 text-Error-600"
              : item.status === statusProductEnum.Active
              ? "bg-selfit-50 text-selfit-600"
              : item.status === statusProductEnum.DeActive
              ? "bg-lightGray-50 text-lightGray-600"
              : "bg-lightGray-50 text-lightGray-600"
          }`}
          variant={"default"}
        >
          <h6 className="text-H6/Medium">
            {item.quantity === 0
              ? "ناموجود"
              : item.status === statusProductEnum.Active
              ? "فعال"
              : item.status === statusProductEnum.DeActive
              ? "غیر فعال"
              : "نامشخص"}
          </h6>
        </Badge>
      </TableCell>
      <TableCell
        className={`px-4 py-2 ${!SelectedColumns!.actions ? "hidden" : ""}`}
      >
        <Button
          variant="link"
          onClick={() => navigate(`editProduct/${item.id}`)}
        >
          <IconEdit
            typeIcon={typeIconEnum.Reqular}
            className="stroke-Warning-500"
          />
        </Button>
        {/* <Button variant="link">
                    <IconTrash_can
                      typeIcon={typeIconEnum.Reqular}
                      style={"stroke-Error-500 bg-white"}
                    />
                  </Button> */}
        <ConfirmDeleteProduct id={item.id}>
          <Button variant="link" role="combobox">
            <IconTrash_can
              typeIcon={typeIconEnum.Reqular}
              className="fill-Error-500"
            />
          </Button>
        </ConfirmDeleteProduct>
      </TableCell>
    </TableRow>
  );
};

export default ProductTableRow;
