"use client";

import { useState } from "react";
import {Search} from "lucide-react";

const ClinicComponent = () => {
    const clinics = [
        {
            id: 1,
            label: "Miracle Clinic",
            image: "/assets/images/general/treatment.svg",
            description: "3/e, Naaz Bldg, Lamington Road, Mumbai, 400004, India",
            email: "miracle_clinic@kivicare.com",
        },
        {
            id: 2,
            label: "Healing Touch",
            image: "/assets/images/general/treatment.svg",
            description: "123, Wellness Street, Pune, 411001, India",
            email: "healing_touch@kivicare.com",
        },
    ];

    const [selectedClinic, setSelectedClinic] = useState<number | null>(null);

    const handleClinicClick = (id: number) => {
        setSelectedClinic(id);
    };

    return (
        <div>
            <div className={'flex justify-between items-center mb-4'}>
                <h3 className={'text-xl font-semibold'}>Select Clinic</h3>
                <div className={'flex border border-gray-200'}>
                    <input className={'p-2 '} placeholder={'search'}/>
                    <button className={'border-s border-gray-200 p-2 '}><Search/></button>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
                {clinics.map((clinic) => (
                    <div
                        key={clinic.id}
                        className={`flex flex-col items-center p-4 border rounded-md shadow-md transition-all cursor-pointer ${
                            selectedClinic === clinic.id ? "border-blue-500" : "border-gray-300"
                        }`}
                        onClick={() => handleClinicClick(clinic.id)}
                    >
                        {/* Image */}

                        <div className={'bg-blue-400 p-4'}>
                            <img
                                src={clinic.image}
                                alt={clinic.label}
                                className="w-fit h-20 object-contain mb-4"
                            />
                        </div>


                        {/* Label */}
                        <h2 className="text-lg font-bold text-gray-800">{clinic.label}</h2>

                        {/* Description */}
                        <p className="text-sm text-gray-600 text-center mt-2">
                            {clinic.description}
                        </p>

                        {/* Email */}
                        <p className="text-sm text-gray-500 mt-1">{clinic.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClinicComponent;
