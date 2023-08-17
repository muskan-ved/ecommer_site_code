import React,{useState} from "react";
import Head from "../../../common/components/auth/head";
import { loginFields } from "../../../common/components/auth/fields";
import FormAction from "../../../common/components/auth/formAction";
import FormExtra from "../../../common/components/auth/formExtra";
import Input from "../../../common/components/auth/input";

const fields: any = loginFields;
let fieldsState = {};
fields.forEach((field: any) => (fieldsState[field.id] = ""));

export default function Login() {
  
    const [loginState, setLoginState] = useState(fieldsState);
  
    const handleChange = (e: any) => {
      setLoginState({ ...loginState, [e.target.id]: e.target.value });
    };
  
    const handleSubmit = (e: any) => {
      console.log(e,"ere",loginState)
      e.preventDefault();
      authenticateUser();
    };
  
    //Handle Login API Integration here
    const authenticateUser = () => {};
  return (
    <div className="m-32 flex flex-col justify-center items-center">
      {/* <div className=" top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"> */}
        <div className="relative w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="px-6 py-6 lg:px-8">
              <Head
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/register"
              />
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="-space-y-px flex flex-col">
                  {fields.map((field:any) => (
                    <Input
                      key={field.id}
                      handleChange={handleChange}
                      value={loginState[field.id]}
                      labelText={field.labelText}
                      labelhtmlFor={field.labelFor}
                      id={field.id}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                    />
                  ))}
                </div>

                <FormExtra />
                <FormAction handleSubmit={handleSubmit} text="Login" />
              </form>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}

  {
    /* <div>
      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
  </div>
  <div>
      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
  </div>
  <div className="flex justify-between">
      <div className="flex items-start">
          <div className="flex items-center h-5">
              <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
          </div>
          <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
      </div>
      <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
  </div>
  <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
  <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
      Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
  </div> */
  }