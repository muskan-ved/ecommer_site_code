import * as Yup from "yup";
export const couponValidations = Yup.object().shape({
  couponname: Yup.string()
    .required("Field is required*")
    .min(3, "Name must be at least 3 characters*")
    .matches(/^[A-Za-z ]*$/, "Please enter valid name*"),
  couponcode: Yup.string().required("Field is required*"),
  couponprice: Yup.string().required("Field is required*"),
  status: Yup.string().required("Field is required*"),
});
