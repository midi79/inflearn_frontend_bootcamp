import * as yup from "yup";

export const schema = yup.object({
  writer: yup.string().required("Please insert writer."),
  title: yup.string().required("Please insert title."),
  contents: yup.string().required("Please insert contents."),
  email: yup
    .string()
    .email("Not a correct email form")
    .required("Email required."),
  password: yup
    .string()
    .min(4, "At least 4 length.")
    .max(15, "Max length 15.")
    .required("Password is required."),
  phone: yup
    .string()
    .matches(/^\d{3}-\d{3,4}-\d{4}$/, "Not a vaild phone number")
    .required("Phone number is required."),
});
