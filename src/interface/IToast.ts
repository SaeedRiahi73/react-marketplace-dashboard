import { typeToastEnum } from "@/enums/typeToastEnum";

export interface IToast {
    status:typeToastEnum,
    message: string|null
}