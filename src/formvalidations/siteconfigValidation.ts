import * as Yup from "yup";
//email content form validation
export const roleValidations = Yup.object().shape({
  name: Yup.string()
    .required("Name field is required*")
    .min(3, "Name must be at least 3 characters*")
    .matches(/^[A-Za-z ]*$/, "Please enter valid name*"),
});
