import * as Yup from "yup";
export const productValidations = Yup.object().shape({
  productname: Yup.string()
    .required("Field is required*")
    .min(3, "Name must be at least 3 characters*")
    .matches(/^[A-Za-z ]*$/, "Please enter valid name*"),
  marketprice: Yup.string().required("Field is required*"),
  sellingprice: Yup.string().required("Field is required*"),
  quantity: Yup.string().required("Field is required*"),
  productslug: Yup.string().required("Field is required*"),
  productcategory: Yup.string().required("Field is required*"),
});
