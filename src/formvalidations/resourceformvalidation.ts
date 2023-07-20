import * as Yup from "yup";
export const resourceValidations = Yup.object().shape({
  resourcename: Yup.string()
    .required("Field is required*")
    .min(3, "Name must be at least 3 characters*")
    .matches(/^[A-Za-z ]*$/, "Please enter valid name*"),
  quantity: Yup.string().required("Field is required*"),
  status: Yup.string().required("Field is required*"),
});
