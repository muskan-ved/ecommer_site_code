import * as Yup from "yup";
//role form validation
export const roleValidations = Yup.object().shape({
  name: Yup.string()
    .required("Name field is required*")
    .min(3, "Name must be at least 3 characters*")
    .matches(/^[A-Za-z ]*$/, "Please enter valid name*"),
});
//add/edit user form validation
export const adduserValidations = Yup.object().shape({
  name: Yup.string()
    .required("Field is required*")
    .min(3, "Name must be at least 3 characters*")
    .matches(/^[A-Za-z ]*$/, "Please enter valid name*"),
  email: Yup.string().required("Field is required*"),
  number: Yup.string().required("Field is required*"),
  username: Yup.string().required("Field is required*"),
});
