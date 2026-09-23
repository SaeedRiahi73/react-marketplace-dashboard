import { z } from "zod";

const MAX_PROFILE_IMAGE_SIZE = 2 * 1024 * 1024;
const ALLOWED_PROFILE_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
];

const profileImageSchema = z
  .custom<File>(
    (value) => value instanceof File,
    "فایل تصویر انتخاب‌شده معتبر نیست.",
  )
  .refine(
    (file) => file.size <= MAX_PROFILE_IMAGE_SIZE,
    "حجم تصویر نباید بیشتر از ۲ مگابایت باشد.",
  )
  .refine(
    (file) => ALLOWED_PROFILE_IMAGE_TYPES.includes(file.type),
    "فرمت تصویر باید JPG، JPEG، PNG یا WEBP باشد.",
  );

export const updateProfileSchema = z
  .object({
    username: z
      .string()
      .trim()
      .min(3, "نام کاربری باید حداقل ۳ کاراکتر باشد.")
      .max(50, "نام کاربری نمی‌تواند بیشتر از ۵۰ کاراکتر باشد.")
      .regex(
        /^[a-zA-Z0-9._ -]+$/,
        "نام کاربری فقط می‌تواند شامل حروف انگلیسی، عدد، فاصله، نقطه، زیرخط و خط تیره باشد.",
      ),
    email: z
      .string()
      .trim()
      .min(1, "ایمیل الزامی است.")
      .max(50, "ایمیل نمی‌تواند بیشتر از ۵۰ کاراکتر باشد.")
      .email("فرمت ایمیل معتبر نیست."),
    imageFile: profileImageSchema.nullable(),
    removeImage: z.boolean(),
  })
  .refine((values) => !(values.imageFile && values.removeImage), {
    message: "آپلود تصویر جدید و حذف تصویر فعلی هم‌زمان امکان‌پذیر نیست.",
    path: ["imageFile"],
  });
