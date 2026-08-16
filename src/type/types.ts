import { typeToastEnum } from "@/enums/typeToastEnum";
import { z } from "zod";
import { formSchema } from "@/validation/addProductValidation";

export type SelectedColumnsState = Record<string, boolean>;

export type Column = {
  id: string;
  label: string;
};

export type Toast = {
  message: string,
  type: typeToastEnum
}

export type SearchHandler = (query: string) => void;

export type typeError = {
  status?: number;
  message?: string;
  statusText?: string;
};

export type productFormvalue = z.infer<typeof formSchema>;

export const EMPTY_GUID = "00000000-0000-0000-0000-000000000000";
