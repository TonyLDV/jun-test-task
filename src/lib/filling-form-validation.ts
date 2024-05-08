import * as z from "zod";

export const validationSchema = z.object({
  firstName: z.string().min(1, { message: "Ім'я є обов'язковим" }),
  lastName: z.string().min(1, { message: "Прізвище є обов'язковим" }),
  company: z.string().min(1, { message: "Компанія є обов'язковою" }),
  email: z.string().min(1, { message: "Email є обов'язковим" }).email({
    message: "Повинен бути валідний",
  }),
  // number: z.number().min(10, { message: "Номер повинен налічати 10 цифр" }),
  number: z
    .string({
      required_error: "required field",
      invalid_type_error: "Номер обов'язковий",
    })
    .min(10)
    .max(10),
  contry: z.string().min(4, { message: "Країна є обов'язковою" }),
  city: z.string().min(4, { message: "Місто є обов'язковим" }),
  state: z.string().min(4, { message: "Поле є обов'язковим" }),
  adress: z.string().min(6, { message: "Адреса є обов'язковою" }),
  postIndex: z
    .string({
      required_error: "required field",
      invalid_type_error: "Поштовий індекс обов'язковий",
    })
    .min(4)
    .max(6),
  cardNumber: z.string().min(19, { message: "Повинно бути 16 символів" }),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Поле обов'язкове"),
  cvv: z.string().regex(/^\d{3,4}$/, "Поле обов'язкове"),
});
