import { typeToastEnum } from "@/enums/typeToastEnum";
import { z } from "zod";
import { formSchema } from "@/validation/addProductValidation";
import { createUserSchema } from "@/validation/createUserValidation";
import { updateProfileSchema } from "@/validation/updateProfileValidation";
import { changePasswordSchema } from "@/validation/changePasswordValidation";

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

export type CreateUserFormValues = z.infer<typeof createUserSchema>;

export type UpdateProfileFormValues = z.infer<typeof updateProfileSchema>;

export type ChangePasswordFormValues = z.infer<typeof changePasswordSchema>;

export const EMPTY_GUID = "00000000-0000-0000-0000-000000000000";
