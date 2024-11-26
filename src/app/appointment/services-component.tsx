"use client";

import { useState } from "react";
import {Search} from "lucide-react";

const ServicesComponent = () => {
    const clinics = [
        {
            id: 1,
            label: "Extractions",
            image: "/assets/images/general/doctor.svg",
            exp: "$100/-",
            email: "alexandra_johnson@kivicare.com",
        },
        {
            id: 2,
            label: "Teeth Cleaning",
            image: "/assets/images/general/treatment.svg",
            exp: "$150/-",
            email: "emily_thompson@kivicare.com",
        },
        {
            id: 3,
            label: "Root Canary",
            image: "/assets/images/general/treatment.svg",
            exp: "$100/=",
            email: "emily_thompson@kivicare.com",
        },
    ];

    const [selectedClinic, setSelectedClinic] = useState<number | null>(null);

    const handleClinicClick = (id: number) => {
        setSelectedClinic(id);
    };

    return (
        <div>
            <div className={'flex justify-between items-center mb-4'}>
                <h3 className={'text-xl font-semibold'}>Select Service</h3>
                <div className={'flex border border-gray-200'}>
                    <input className={'p-2 '} placeholder={'search'}/>
                    <button className={'border-s border-gray-200 p-2 '}><Search/></button>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {clinics.map((clinic) => (
                    <div
                        key={clinic.id}
                        className={`flex flex-col items-center p-4 border rounded-md shadow-md transition-all cursor-pointer ${
                            selectedClinic === clinic.id ? "border-blue-500" : "border-gray-300"
                        }`}
                        onClick={() => handleClinicClick(clinic.id)}
                    >
                        <div className={'bg-blue-400 p-4'}>
                            <img
                                src={clinic.image}
                                alt={clinic.label}
                                className="w-fit h-20 object-contain mb-4"
                            />
                        </div>
                        <h2 className="text-lg font-bold text-gray-800">{clinic.label}</h2>
                        <p className="text-sm text-gray-500 mt-1">{clinic.exp}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesComponent;
