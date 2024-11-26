"use client";

import React from "react";

const MoreInfoComponent = () => {




    return (
        <div>
            <div className={'flex justify-between items-center mb-4'}>
                <h3 className={'text-xl font-semibold'}>More About Appointment</h3>
            </div>

            <div className="">
                <h3 className={'font-semibold mb-1'}>Appointment Description</h3>
                <textarea className={'bg-blue-50 w-full p-4 border border-gray-300'}
                          rows={4}>

                        </textarea>
            </div>
            <div className="w-full mx-auto mt-4">
                <label htmlFor="file-upload" className="block text-md  font-semibold text-gray-700 mb-2">
                    Add Medical Report
                </label>
                <div className="flex items-center justify-center w-full">
                    <label
                        htmlFor="file-upload"
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer border-gray-300 bg-gray-50 hover:border-blue-500 hover:bg-blue-50"
                    >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                                className="w-8 h-8 mb-4 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.235 12.486l4.106-4.106m-4.106 4.106L10.13 8.38m4.106 4.106l4.106 4.106m-4.106-4.106L10.13 16.592m1.342-11.31h3.056A2.5 2.5 0 0117 7.179v7.75A2.5 2.5 0 0114.528 17h-5.06A2.5 2.5 0 017 14.929v-7.75A2.5 2.5 0 019.471 5z"
                                />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500">
                                <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (max. 5MB)</p>
                        </div>
                        <input id="file-upload" type="file" className="hidden"/>
                    </label>
                </div>
            </div>

        </div>
    );
};

export default MoreInfoComponent;
