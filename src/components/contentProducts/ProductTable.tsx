import { useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  Badge,
} from "@/components/ui/index";
import { IProduct } from "@/interface/IProduct";
import { RootState } from "@/app/store";
import { getFilteredProduct, getSelectedColumns } from "@/features/filterSlice";
import ProductTableRow from "./ProductTableRow";

const ProductTable: React.FC = () => {
  const dataProduct: IProduct[] = useSelector((state: RootState) =>
    getFilteredProduct(state)
  );
  console.log(dataProduct);
  const SelectedColumns = useSelector((state: RootState) =>
    getSelectedColumns(state)
  );

  return (
    <div
      className="hidden tablet:flex w-full max-h-[400px] overflow-y-auto border-t border-b border-gray-200"
      style={{ direction: "rtl" }}
    >
      <Table className="border rounded-lg border-lightGray-100 gap-0">
        <TableHeader>
          <TableRow>
            <TableHead
              className={`text-right ${!SelectedColumns.productInfo ? "hidden" : ""
                }`}
            >
              <h5 className="text-H5/Medium text-black">اطلاعات محصول</h5>
            </TableHead>
            <TableHead
              className={`text-right flex flex-row items-center ${!SelectedColumns.amount ? "hidden" : ""
                }`}
            >
              <h5 className="text-H5/Medium text-black">مبلغ</h5>
              <Badge
                variant="default"
                className="bg-lightGray-50 text-lightGray-800"
              >
                <h5 className="text-H5/Medium text-black">ریال</h5>
              </Badge>
            </TableHead>
            <TableHead
              className={`text-right ${!SelectedColumns.stock ? "hidden" : ""}`}
            >
              <h5 className="text-H5/Medium text-black">تعداد موجود</h5>
            </TableHead>
            <TableHead
              className={`text-right ${!SelectedColumns.status ? "hidden" : ""
                }`}
            >
              <h5 className="text-H5/Medium text-black">وضعیت</h5>
            </TableHead>
            <TableHead
              className={`text-right ${!SelectedColumns.actions ? "hidden" : ""
                }`}
            ></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="">
          {dataProduct.map((item, index) => (
            <ProductTableRow
              key={index}
              product={item}
              SelectedColumns={SelectedColumns}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductTable;
