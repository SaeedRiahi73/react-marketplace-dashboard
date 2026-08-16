import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Button,
  Checkbox,
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./index";
import IconGrip_dots_vertical from "../icons/IconGrip-dots-vertical";
import { typeIconEnum } from "@/enums/styleIconEnum";
import { Column } from "@/type/types";
import { IColumnSelectorProps } from "@/interface/IProps";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedColumns, setToggleColumn } from "@/features/filterSlice";
import { RootState } from "@/app/store";

// type SelectedColumns = Record<string, boolean>;

const columns: Column[] = [
  { id: "productInfo", label: "اطلاعات محصول" },
  { id: "amount", label: "مبلغ" },
  { id: "stock", label: "تعداد موجود" },
  { id: "status", label: "وضعیت" },
  { id: "actions", label: "اقدامات" },
];

const ColumnSelector: React.FC<IColumnSelectorProps> = ({
  children = "ستون‌ها",
  className,
}) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const dispatch = useDispatch();
  const selectedColumns = useSelector((state: RootState) =>
    getSelectedColumns(state)
  );

  //console.log(selectedColumns);

  // const [selectedColumns, setSelectedColumns] = React.useState<SelectedColumns>(
  //   columns.reduce<SelectedColumns>((acc, col) => {
  //     acc[col.id] = true;
  //     return acc;
  //   }, {})
  // );

  // const toggleColumn = (id: string) => {
  //   setSelectedColumns((prev) => ({
  //     ...prev,
  //     [id]: !prev[id],
  //   }));
  // };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={className}
        >
          {children}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[262px] rounded-xl border-[1.5px] p-2 gap-2 border-lightGray-100">
        <Command>
          <CommandList>
            <CommandGroup>
              {columns.map((column) => (
                <CommandItem
                  key={column.id}
                  className="flex flex-row items-center justify-between gap-2 p-3"
                  onSelect={() => dispatch(setToggleColumn(column.id))}
                >
                  <Checkbox
                    className={cn(
                      "ml-2 h-4 w-4 data-[state=checked]:bg-selfit-500 data-[state=checked]:border-white"
                    )}
                    checked={selectedColumns[column.id]}
                  />

                  <h6 className="justify-start flex-grow text-H6/Semibold">
                    {column.label}
                  </h6>

                  <IconGrip_dots_vertical
                    typeIcon={typeIconEnum.Reqular}
                    className={"stroke-lightGray-700"}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default ColumnSelector;
