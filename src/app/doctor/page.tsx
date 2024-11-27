
import Skeleton from "@/app/skeleton";
import React from "react";

const DoctorPage = () => {

    const doctorInfos = [
        {
            name: 'Boniface Mwandob',
            image: '/assets/images/doctor-jms.jpg',
            specilization: 'Cardiologist'
        },
        {
            name: 'Boniface Mwandob',
            image: '/assets/images/general/avatar.png',
            specilization: 'Cardiologist'
        },
        {
            name: 'Boniface Mwandob',
            image: '/assets/images/general/avatar.png',
            specilization: 'Cardiologist'
        },  {
            name: 'Boniface Mwandob',
            image: '/assets/images/general/avatar.png',
            specilization: 'Cardiologist'
        },
        {
            name: 'Boniface Mwandob',
            image: '/assets/images/general/avatar.png',
            specilization: 'Cardiologist'
        },

    ]
    return (
        <Skeleton>
            <div className={'pt-44'}>
                <div className={'p-8'}>
                    <h5 className={'text-4xl font-semibold'}>Doctors</h5>
                    <h5>Passionate and Dedicated Doctors at your Service</h5>
                </div>
                <div>
                    <div className={'grid grid-cols-4 gap-8'}>
                        {doctorInfos.map((info, index) => (
                            <div key={index} className={' flex justify-center'}>
                                <div
                                    className={'w-full  border border-gray-200 flex flex-col items-center p-3 shadow-lg'}>
                                    <div className={'p-1 bg-white'}>
                                        <img
                                            className="h-52 w-fit"
                                            src={info.image}
                                            alt="logo"
                                        />
                                    </div>
                                    <div className={'w-full border border-gray-100 shadow-md'}>
                                        <div
                                            className={'bg-white py-4 w-full border-s-8 border-blue-500 ps-4 font-semibold '}>
                                            <h3>{info.name}</h3>
                                            <p className={'text-blue-800'}>{info.specilization}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </Skeleton>
    )
}

export default DoctorPage