import React, { useState } from "react";
import Head from "../../../common/components/auth/head";
import { resetFields } from "../../../common/components/auth/fields";
import FormAction from "../../../common/components/auth/formAction";
import Input from "../../../common/components/auth/input";

const fields: any = resetFields;
let fieldsState = {};
fields.forEach((field: any) => (fieldsState[field.id] = ""));

const Reset = () => {
  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (e: any) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    console.log(e, "ere", loginState);
    e.preventDefault();
    authenticateUser();
  };

  //Handle Login API Integration here
  const authenticateUser = () => {};

  return (
    <div className="m-14 flex flex-col justify-center items-center">
      {/* <div className=" top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"> */}
      <div className="relative w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="px-6 py-6 lg:px-8">
            <Head
              heading="Reset your password"
              paragraph="Already have an account? "
              linkName="Signin"
              linkUrl="/login"
            />
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="-space-y-px ">
                {fields.map((field: any) => (
                  <Input
                  key={field.id}
                  // handleChange={handleChange}
                  labelText={field.labelText}
                  labelhtmlFor={field.labelFor}
                  id={field.id}
                  // register={register}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  options={field.options}
                  // errors={errors}
                  customClass={field.type === "number" && "remove-arrow"}
                  />
                ))}
              </div>

              <FormAction handleSubmit={handleSubmit} text="Reset" />
            </form>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Reset;
