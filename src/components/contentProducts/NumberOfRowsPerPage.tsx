import { NumberOfRowsPerPageProps } from "@/interface/IProps";
import { Selected } from "../ui";

const NumberOfRowsPerPage: React.FC<NumberOfRowsPerPageProps> = ({
  numberRows,
  handleRow,
  currentProductCount,
}) => {
  return (
    <div className="hidden tablet:flex flex-row items-center gap-4">
      <div className="flex flex-row items-center gap-2">
        <h6 className="text-H6/Regular text-lightGray-700">
          تعداد سطر در هر صفحه :
        </h6>
        <Selected
          items={numberRows}
          onValueChange={handleRow}
          // triggerProps={{
          //   onClick: handleTriggerClick, // رویداد برای SelectTrigger
          // }}
        />
      </div>
      <div className="flex py-2 pr-3 border-r border-r-lightGray-200">
        <h6 className="text-H6/Regular text-lightGray-700">
          {currentProductCount} نتیجه
        </h6>
      </div>
    </div>
  );
};

export default NumberOfRowsPerPage;
