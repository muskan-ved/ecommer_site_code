import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { paymentValidations } from "../../../formvalidations/siteconfigValidation";
import { ErrorShowing } from "../errorshowingcmp/errorshowingcmp";
export default function ManagePaymentSetting() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<any>({
        resolver: yupResolver(paymentValidations),
    });
    const onSubmit = (data: any) => {
        alert(JSON.stringify(data))
    }

    console.log(errors)

    return (
        <>
            {/* <div className="flex items-center justify-between pb-4">
                <p className="font-bold">Payment Configration</p>
            </div> */}
            <div className="flex items-center bg-gray-50">
                <div className="flex-1 h-full max-w-full mx-auto bg-white rounded-lg ">
                    <div className="flex flex-col md:flex-row">
                        {/* <div className="h-32 md:h-auto md:w-1/2 p-2">
                            <img className="object-cover w-full h-full" src="https://source.unsplash.com/user/erondu/1600x900"
                                alt="img" />
                        </div> */}
                        <div className="flex items-center justify-center p-4  md:w-full">
                            <div className="w-full">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="flex items-center justify-between pb-4 mt-0 pt-0">
                                        <p className="border-b-2 border-blue-900">PAYMENT INFORMATION</p>
                                    </div>
                                    <div className="mt-5 h-20">
                                        <label className="block text-sm">
                                            Publishable Key
                                        </label>
                                        <input type="text"
                                            {...register("publishkey")}
                                            className="w-full text-gray-700 text-xs px-4 py-3 mt-1.5  border border-gray-400 rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            placeholder="Publishable Key ...." />
                                        {errors && errors.publishkey
                                            ? ErrorShowing(errors?.publishkey?.message)
                                            : ""}
                                    </div>
                                    <div className="mt-6 h-20">
                                        <label className="block text-sm">
                                            Secret Key
                                        </label>
                                        <input type="text"
                                            {...register("secretkey")}
                                            className="w-full px-4 py-3 mt-1.5 text-gray-700 text-xs border border-gray-400 rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            placeholder="Secret Key ...." />
                                        {errors && errors.secretkey
                                            ? ErrorShowing(errors?.secretkey?.message)
                                            : ""}
                                    </div>
                                    <div className="-mx-3 md:flex mt-8">
                                        <div className="md:w-full px-3">
                                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800  focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">UPDATE</button>
                                            <button type="button" className=" ml-5 text-white bg-red-700 hover:bg-red-800  focus:outline-none  font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">CANCEL</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}