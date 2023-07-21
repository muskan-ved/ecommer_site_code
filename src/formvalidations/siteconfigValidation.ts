import * as Yup from "yup";
//email content form validation
export const emailcontentValidations = Yup.object().shape({
  emailtype: Yup.string().required("Field is required*"),
  emailfrom: Yup.string()
    .required("Field is required*")
    .min(3, "Email from must be at least 3 characters*")
    .matches(/^[A-Za-z ]*$/, "Please enter valid Email from*"),
  emailsubject: Yup.string()
    .required("Field is required*")
    .min(3, "Email subject must be at least 3 characters*")
    .matches(/^[A-Za-z ]*$/, "Please enter valid email subject*"),
});

//manage site setting
export const siteValidations = Yup.object().shape({
  organizationname: Yup.string()
    .required("Field is required*")
    .min(3, "Email from must be at least 3 characters*")
    .matches(/^[A-Za-z ]*$/, "Please enter valid Email from*"),
  organizationlogo: Yup.mixed().required("Field is required*"),
  organizationfavicon: Yup.mixed().required("Field is required*"),
});

//manage payment setting
export const paymentValidations = Yup.object().shape({
  publishkey: Yup.string()
    .required("Field is required*")
    .min(3, "Email from must be at least 3 characters*")
    .matches(/^[A-Za-z ]*$/, "Please enter valid Email from*"),
  secretkey: Yup.string()
    .required("Field is required*")
    .min(3, "Email from must be at least 3 characters*")
    .matches(/^[A-Za-z ]*$/, "Please enter valid Email from*"),
});
