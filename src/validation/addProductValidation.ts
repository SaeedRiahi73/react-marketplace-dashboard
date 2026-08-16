import { statusProductEnum } from "@/enums/statusProductEnum";
import { z } from "zod";

export const formSchema = z.object({
    name: z.string().min(1, "عنوان نباید خالی باشد"), // عنوان باید رشته‌ای و حداقل یک کاراکتر باشد
    description: z.string().optional(), // توضیحات می‌تواند اختیاری باشد
    price: z.preprocess(
        (value) => (value === "" ? undefined : value), // مقادیر خالی را مدیریت کن
        z
            .number({ invalid_type_error: "مقدار باید عدد باشد", message: "مقدار نباید خالی باشد" }) // پیام خطای نوع
            .min(1, "مقدار نباید خالی باشد") // پیام خطای مقدار
    ),
    quantity: z.preprocess(
        (value) => (value === "" ? undefined : value), // مقادیر خالی را مدیریت کن
        z
            .number({ invalid_type_error: "تعداد باید عدد باشد", message: "تعداد نباید خالی باشد" })
            .min(0, "تعداد نمی‌تواند منفی باشد") // صفر یعنی محصول ناموجود است
            .int("تعداد باید عدد صحیح باشد") // پیام خطای عدد صحیح
    ),
    status: z.nativeEnum(statusProductEnum), // وضعیت فقط می‌تواند "Active" یا "Inactive" باشد
    fileName: z
        .string()
        .nullable()
        .optional(),
})
