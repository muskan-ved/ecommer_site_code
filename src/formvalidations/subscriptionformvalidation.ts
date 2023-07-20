import * as Yup from "yup";
export const subscriptionValidations = Yup.object().shape({
  name: Yup.string()
    .required("Field is required*")
    .min(3, "Name must be at least 3 characters*")
    .matches(/^[A-Za-z ]*$/, "Please enter valid name*"),
  price: Yup.string().required("Field is required*"),
  status: Yup.string().required("Field is required*"),
});
