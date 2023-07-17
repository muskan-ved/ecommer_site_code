import React from "react";
export default function ManagePaymentSetting() {
    return (
        <>
            <div className="flex items-center justify-between pb-4">
                <p className="font-bold">Payment Configration</p>
            </div>
            <div className="flex items-center bg-gray-50">
                <div className="flex-1 h-full max-w-full mx-auto bg-white rounded-lg ">
                    <div className="flex flex-col md:flex-row">
                        <div className="h-32 md:h-auto md:w-1/2 p-2">
                            <img className="object-cover w-full h-full" src="https://source.unsplash.com/user/erondu/1600x900"
                                alt="img" />
                        </div>
                        <div className="flex items-center justify-center p-6  md:w-1/2">
                            <div className="w-full">
                                <div className="flex items-center justify-between pb-4 mt-0 pt-0">
                                    <p className="border-b-2 border-blue-900">PAYMENT INFORMATION</p>
                                </div>
                                <div className="mt-2">
                                    <label className="block text-sm">
                                        Publishable Key
                                    </label>
                                    <input type="text"
                                        className="w-full px-4 py-4 mt-1.5 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        placeholder="Publishable Key ...." />
                                </div>
                                <div className="mt-6">
                                    <label className="block text-sm">
                                        Secret Key
                                    </label>
                                    <input type="text"
                                        className="w-full px-4 py-4 mt-1.5 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        placeholder="Secret Key ...." />
                                </div>
                                <button
                                    className="block w-full px-4 py-3 mt-6 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                                >
                                    UPDATE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}