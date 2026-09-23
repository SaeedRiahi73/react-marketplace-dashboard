import IconAngleLeft from "@/components/icons/IconAngle-left";
import IconAngleRight from "@/components/icons/IconAngle-right";
import IconAnglesLeft from "@/components/icons/IconAngles-left";
import IconAnglesRight from "@/components/icons/IconAngles-right";
import {
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { typeIconEnum } from "@/enums/styleIconEnum";

interface IPaginationProps {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalCount: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: number) => void;
}

const Pagination: React.FC<IPaginationProps> = ({
  currentPage,
  totalPages,
  pageSize,
  totalCount,
  onPageChange,
  onPageSizeChange,
}) => {
  const isFirstPage = currentPage <= 1;
  const isLastPage = currentPage >= totalPages;
  const maximumPageSize = Math.max(1, Math.min(totalCount, 50));
  const effectivePageSize = Math.min(pageSize, maximumPageSize);
  const pageSizeOptions = Array.from(
    { length: maximumPageSize },
    (_, index) => index + 1,
  );
  const formatNumber = (value: number) => value.toLocaleString("fa-IR");

  return (
    <div className="flex flex-col gap-4 border-t border-lightGray-200 pt-4 tablet:flex-row tablet:items-center tablet:justify-between">
      <div className="flex w-full items-center justify-between gap-3 tablet:w-auto tablet:justify-start">
        <div className="flex items-center gap-2">
          <span className="text-XSmall/Medium text-lightGray-600">
            <span className="tablet:hidden">نمایش:</span>
            <span className="hidden tablet:inline">تعداد در هر صفحه:</span>
          </span>
          <Select
            value={effectivePageSize.toString()}
            onValueChange={(value) => onPageSizeChange(Number(value))}
          >
            <SelectTrigger
              className="h-9 w-16 border-lightGray-200 bg-white"
              aria-label="تعداد کاربران در هر صفحه"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {pageSizeOptions.map((option) => (
                <SelectItem key={option} value={option.toString()}>
                  {formatNumber(option)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <span className="rounded-full bg-lightGray-50 px-3 py-1.5 text-XSmall/Medium text-lightGray-700">
          {formatNumber(totalCount)} نتیجه
        </span>
      </div>

      <div className="flex w-full items-center justify-center gap-1 tablet:w-auto tablet:gap-2">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="h-9 w-9"
          onClick={() => onPageChange(1)}
          disabled={isFirstPage}
          aria-label="صفحه اول"
        >
          <IconAnglesLeft
            typeIcon={typeIconEnum.Reqular}
            className="fill-lightGray-900"
          />
        </Button>
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="h-9 w-9 border-lightGray-200 bg-white"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={isFirstPage}
          aria-label="صفحه قبلی"
        >
          <IconAngleLeft
            typeIcon={typeIconEnum.Reqular}
            className="fill-lightGray-900"
          />
        </Button>

        <span className="mx-1 min-w-24 rounded-full bg-selfit-25 px-3 py-2 text-center text-XSmall/Medium text-selfit-800">
          صفحه {formatNumber(currentPage)} از {formatNumber(totalPages)}
        </span>

        <Button
          type="button"
          variant="outline"
          size="icon"
          className="h-9 w-9 border-lightGray-200 bg-white"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={isLastPage}
          aria-label="صفحه بعدی"
        >
          <IconAngleRight
            typeIcon={typeIconEnum.Solid}
            className="fill-lightGray-900"
          />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="h-9 w-9"
          onClick={() => onPageChange(totalPages)}
          disabled={isLastPage}
          aria-label="صفحه آخر"
        >
          <IconAnglesRight
            typeIcon={typeIconEnum.Reqular}
            className="fill-lightGray-900"
          />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
