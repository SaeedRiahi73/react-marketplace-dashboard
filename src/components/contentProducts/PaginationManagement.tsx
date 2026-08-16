import { PaginationManagementProps } from "@/interface/IProps";
import { Button, Selected } from "../ui";
import IconAngle_right from "../icons/IconAngle-right";
import { typeIconEnum } from "@/enums/styleIconEnum";
import IconAngle_Left from "../icons/IconAngle-left";
import IconAngles_right from "../icons/IconAngles-right";
import IconAngles_left from "../icons/IconAngles-left";
import React from "react";

const PaginationManagement: React.FC<PaginationManagementProps> = ({
  handleFirstPage,
  handleLastPage,
  handleNextPage,
  handlePageClick,
  handlePreviousPage,
  currentPage,
  numberPage,
  pageCount,
}) => {
  return (
    <div className="flex flex-row items-center gap-4 grow tablet:grow-0 justify-between">
      <div className="flex flex-row items-center gap-2">
        <div className="hidden tablet:flex  flex-row items-center gap-2">
          <Selected
            items={numberPage}
            onValueChange={handlePageClick}
            value={currentPage.toString()}
          />
        </div>
        <div className="tablet:hidden  flex-row items-center gap-2">
          <p className="text-Medium/Regular text-lightGray-700">
            {currentPage.toString()}
          </p>
        </div>
        <div className="flex py-2 pl-3 tablet:border-l border-l-lightGray-200">
          <p className="text-Medium/Regular text-lightGray-700">
            از {pageCount} صفحه
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-2">
        <div className="flex-1">
          <Button
            variant={"link"}
            className="w-[40px] h-[40px] hover:bg-slate-50"
            onClick={handleLastPage}
            disabled={currentPage === pageCount ? true : false}
          >
            <IconAngles_right
              typeIcon={typeIconEnum.Reqular}
              className="fill-lightGray-900"
            />
          </Button>
        </div>
        <div className="flex-1">
          <Button
            className="w-[40px] h-[40px] bg-white hover:bg-slate-50 border-[1.5px] border-lightGray-200 rounded-lg"
            onClick={handleNextPage}
            disabled={currentPage === pageCount ? true : false}
          >
            <IconAngle_right
              typeIcon={typeIconEnum.Solid}
              className="fill-lightGray-900"
            />
          </Button>
        </div>
        <div className="flex-1">
          <Button
            onClick={handlePreviousPage}
            className="w-[40px] h-[40px] bg-white hover:bg-slate-50 border-[1.5px] border-lightGray-200 rounded-lg"
            disabled={currentPage === 1 ? true : false}
          >
            <IconAngle_Left
              typeIcon={typeIconEnum.Reqular}
              className="fill-lightGray-900"
            />
          </Button>
        </div>
        <div className="flex-1">
          <Button
            variant={"link"}
            className="w-[40px] h-[40px] hover:bg-slate-50"
            onClick={handleFirstPage}
            disabled={currentPage === 1 ? true : false}
          >
            <IconAngles_left
              typeIcon={typeIconEnum.Reqular}
              className="fill-lightGray-900"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(PaginationManagement);
