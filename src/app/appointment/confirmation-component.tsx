"use client";

import "react-datepicker/dist/react-datepicker.css";
import React from "react";

const ConfirmationComponent = () => {

    return (
        <div>
            <div className={'flex justify-between items-center mb-4'}>
                <h3 className={'text-xl font-semibold'}>Confirmation Detail</h3>
            </div>
            <div className={'border border-gray-300 bg-white px-8 '}>
                <div className={'grid grid-cols-2'}>
                    <div className={'p-6 '}>
                        <div className={''}>
                            <h3 className={'font-semibold p-1 text-lg'}>Clinic Info</h3>
                            <div className={'bg-blue-50 border border-gray-200 shadow-sm p-4 '}>
                                <h3 className={'py-2 font-semibold mb-1'}>Valley Clinic</h3>
                                <h3 className={'text-gray-500 mb-1'}>3/e, Naaz Bldg, Lamington Road,</h3>
                                <h3 className={'text-gray-500'}>Mumbai, 400004, India</h3>
                            </div>
                        </div>
                        <div className={'mt-8'}>
                            <h3 className={'font-semibold p-1 text-lg'}>Patient Info</h3>
                            <div className={'bg-blue-50 border border-gray-200 shadow-sm p-4 font-semibold'}>
                                <div className={'flex justify-between mb-1'}>
                                    <p>Name:</p>
                                    <p className={'text-gray-500'}>John Doe</p>
                                </div>
                                <div className={'flex justify-between mb-1'}>
                                    <p>Number:</p>
                                    <p className={'text-gray-500'}>+255 789 345 2837</p>
                                </div>
                                <div className={'flex justify-between'}>
                                    <p>Email:</p>
                                    <p className={'text-gray-500'}>johndeo@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'p-6'}>
                        <div>
                            <h3 className={'font-semibold p-1 text-lg'}>Appointment Summary</h3>
                            <div className={'bg-blue-50 border border-gray-200 shadow-sm p-4 w-full font-semibold'}>
                                <div className={'flex justify-between mb-1'}>
                                    <p>Doctor:</p>
                                    <p className={'text-gray-500'}>Emily Thompson</p>
                                </div>
                                <div className={'flex justify-between mb-1'}>
                                    <p>Date:</p>
                                    <p className={'text-gray-500'}>July 1, 2023</p>
                                </div>
                                <div className={'flex justify-between mb-1'}>
                                    <p>Time:</p>
                                    <p className={'text-gray-500'}>02:30 PM</p>
                                </div>
                                <div className={'bg-white border border-gray-200 shadow-sm p-4 mb-1'}>
                                    <h3 className={'font-semibold mb-2'}>Services</h3>
                                    <div className={'flex justify-between'}>
                                        <p>Home Visit:</p>
                                        <p className={'text-gray-500'}>$500/-</p>
                                    </div>

                                </div>
                                <div className={'flex justify-between'}>
                                    <p>Total Price:</p>
                                    <p className={'text-gray-500'}>$500/-</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationComponent;
