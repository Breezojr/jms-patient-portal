import Skeleton from "@/app/skeleton";
import React from "react";

const ServicePage = () => {

    const doctorInfos = [
        {
            title: 'Qualified Doctors',
            image: '/assets/images/general/doctor.svg',
            description: 'a person who holds a degree recognised by the Medical Council is registered'
        },
        {
            title: 'Trusted Treatment',
            image: '/assets/images/general/treatment.svg',
            description: 'jms has many types of treatment to relieve symptoms for all types illness .'
        },

        {
            title: '24/7 Services',
            image: '/assets/images/general/service.svg',
            description: 'jms is at your service 24×7 aiming to provide the best services of medical'
        },

        {
            title: 'Health CheckUp',
            image: '/assets/images/service/heart-rate.svg',
            description: 'A usual full-body health check-up is made up of blood and urine tests lungs function tests.'
        },

        {
            title: 'X-Ray',
            image: '/assets/images/service/x-ray.svg',
            description: 'An X-ray is an imagination test that produces pictures of the organs, tissues of the body.'
        },

        {
            title: 'Blood Bank',
            image: '/assets/images/service/chemotherapy.svg',
            description: 'Blood banking is the process that takes place in the lab to make sure that donated blood.'
        },
        {
            title: 'Laboratory',
            image: '/assets/images/service/flask.svg',
            description: 'Clinical lab services are tests on specimens from the body that are used to treat patients.'
        },
        {
            title: 'Outdoor Checkup',
            image: '/assets/images/service/stethoscope.svg',
            description: 'Clinics / Hospitals of Outdoor Checkup Services, Emergency Care Service.'
        },
        {
            title: 'Ambulance',
            image: '/assets/images/service/ambulance.svg',
            description: 'Emergency ambulance services have dedicated staff to handle medical conditions at any time anywhere.'
        }
    ]
    return (
        <Skeleton>
            <div className={'pt-44'}>
                <div className={'p-8'}>
                    <h5 className={'text-4xl font-semibold'}>Services</h5>
                    <h5>Passionate and Dedicated Services</h5>
                </div>
                <div>
                    <div className={'grid grid-cols-4 gap-8'}>
                        {doctorInfos.map((info, index) => (
                            <div key={index} className={' flex justify-center'}>
                                <div
                                    className={'w-full  border border-gray-200 flex flex-col items-center p-3 shadow-lg'}>
                                    <div className={'p-6 bg-blue-400 mb-2'}>
                                        <img
                                            className="h-12 w-fit"
                                            src={info.image}
                                            alt="logo"
                                        />
                                    </div>
                                    <div className={'w-full border border-gray-100 shadow-md'}>
                                        <div
                                            className={'bg-white py-4 w-full border-s-4 border-blue-500 ps-4 flex flex-col items-center '}>
                                            <h3 className={'font-semibold text-2xl mb-2'}>{info.title}</h3>
                                            <p className={'text-gray-600'}>{info.description}</p>
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

export default ServicePage