"use client";

import "react-datepicker/dist/react-datepicker.css";
import React from "react";

const UserDetailComponent = () => {

    return (
        <div >
            <div className={'flex justify-between items-center mb-4'}>
                <h3 className={'text-xl font-semibold'}>Add User Details</h3>
            </div>
            <div className={'border border-gray-300 bg-white px-8 py-16'}>
                <div className={'grid grid-cols-2 gap-6'}>
                    <input type={'text'} className={'bg-blue-50 p-3'} placeholder={'First Name'}/>
                    <input type={'text'} className={'bg-blue-50 p-3'} placeholder={'Last Name'}/>
                    <input type={'text'} className={'bg-blue-50 p-3'} placeholder={'Your Phone Number'}/>
                    <input type={'text'} className={'bg-blue-50 p-3'} placeholder={'Your Email'}/>
                    <div className="flex items-center space-x-4 text-gray-500 bg-blue-50 p-3">
                        <span className={'font-semibold me-4'}>Gender</span>
                        <label className="flex items-center space-x-2">
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                            />
                            <span className="text-sm">Male</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                            />
                            <span className="text-sm">Female</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="radio"
                                name="gender"
                                value="others"
                                className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                            />
                            <span className="text-sm">Others</span>
                        </label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserDetailComponent;
