import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./index";
import { getStatus, setStatusFilter } from "@/features/filterSlice";
import { RootState } from "@/app/store";
import { productFilterEnum } from "@/enums/productFilterEnum";
import { IStatusFilterd } from "@/interface/IFilter";

interface Framework {
  value: productFilterEnum;
  label: string;
}

interface ComboboxProps {
  frameworks: Framework[];
  children?: React.ReactNode;
  className?: string;
}

const Combobox: React.FC<ComboboxProps> = ({
  children = "Select a framework",
  className,
  frameworks,
}) => {
  const [open, setOpen] = React.useState(false);
  // const [value, setValue] = React.useState("");

  const disPatch = useDispatch();

  const status: IStatusFilterd = useSelector((state: RootState) =>
    getStatus(state)
  );

  const selectedFramework = frameworks.find((framework) => {
    // console.log(framework.value);
    // console.log(status.statusValue);

    return framework.value === status.statusValue;
  });

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-activedescendant={
            selectedFramework ? String(selectedFramework.value) : undefined
          }
          className={cn("w-[200px]", className)}
        >
          {children}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={String(framework.value)}
                  role="option"
                  aria-selected={status.statusValue === framework.value}
                  onSelect={() => {
                    if (framework.value !== status.statusValue) {
                      disPatch(setStatusFilter({ statusValue: framework.value }));
                    }
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      status.statusValue === framework.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Combobox;
