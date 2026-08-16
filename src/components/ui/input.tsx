import React from "react";
import { cn } from "@/lib/utils"; // تابع کمکی برای ترکیب کلاس‌ها

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  customSize?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  classNameForIcon?: string;
  classNameContainerInput?: string;
}

const inputSizes = {
  sm: "text-sm px-3 py-1",
  md: "text-md px-4 py-2",
  lg: "text-lg px-6 py-3",
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      customSize = "sm",
      className,
      classNameForIcon,
      classNameContainerInput,
      icon,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn(
          "flex items-center p-2 border bg-lightGray-50 border-lightGray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-selfit-600",
          classNameContainerInput
        )}
      >
        <div className={`pl-2 border-lightGray-200 ${classNameForIcon}`}>
          {icon}
        </div>
        <input
          ref={ref}
          className={cn(
            "flex-grow outline-none bg-transparent text-right placeholder-gray-500 tablet:mr-2",
            inputSizes[customSize],
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
