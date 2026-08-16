import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ISelectedProps } from "@/interface/IProps";

interface ISelectedPropsWithEvents extends ISelectedProps {
  selectProps?: React.ComponentProps<typeof Select>; // Props for Select
  triggerProps?: React.ComponentProps<typeof SelectTrigger>; // Props for SelectTrigger
  value?: string; // مقدار انتخاب‌شده
  onValueChange?: (value: string) => void; // هندلر تغییر مقدار
}

const Selected: React.FC<ISelectedPropsWithEvents> = ({
  items,
  selectProps,
  triggerProps,
  value,
  onValueChange,
}) => {
  return (
    <Select value={value} onValueChange={onValueChange} {...selectProps}>
      <SelectTrigger className="w-[57px]" {...triggerProps}>
        <SelectValue placeholder={items[0]?.name || "انتخاب کنید"} />
      </SelectTrigger>
      <SelectContent>
        {items.map((item) => (
          <SelectItem key={item.value} value={item.name}>
            {item.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default Selected;
