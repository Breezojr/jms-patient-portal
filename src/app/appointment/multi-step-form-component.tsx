import React, {useState} from 'react';
import {CircleDot,} from "lucide-react";
import DoctorComponent from "@/app/appointment/doctor-component";
import ServicesComponent from "@/app/appointment/services-component";
import DateTimeComponent from "@/app/appointment/date-time-component";
import ClinicComponent from "@/app/appointment/clinics-component";
import MoreInfoComponent from "@/app/appointment/more-info-component";
import UserDetailComponent from "@/app/appointment/user-detail-component";
import ConfirmationComponent from "@/app/appointment/confirmation-component";

interface Step {
    id: number;
    label: string;
    description: string;
    content: JSX.Element;
}

const MultiStepForm: React.FC = () => {
    const steps: Step[] = [
        {
            id: 1,
            label: 'Choose a Clinic',
            description: 'Please Select a Clinic You want to Visit.',
            content: <ClinicComponent/>,
        },
        {
            id: 2,
            label: 'Choose Your Doctor',
            description: 'Pick a specific Doctor to Perform your Service.',
            content: <DoctorComponent/>,
        },
        {
            id: 3,
            label: 'Doctor Services',
            description: 'Please Select a Service from below Options.',
            content: <ServicesComponent/>,
        },
        {
            id: 4,
            label: 'Select date and Time',
            description: 'Select date to See a Timeline of Available Slots.',
            content: <DateTimeComponent/>,
        },
        {
            id: 5,
            label: 'Appointment Extra Data',
            description: 'Upload Files and Description about Appointment .',
            content: <MoreInfoComponent/>,
        },
        {
            id: 6,
            label: 'user Detail Information',
            description: 'Please provide your Contact Details.',
            content: <UserDetailComponent/>,
        },
        {
            id: 7,
            label: 'Confirmation',
            description: 'Confirm your Booking.',
            content: <ConfirmationComponent/>,
        },
    ];

    const [currentStep, setCurrentStep] = useState(1);

    const isStepCompleted = (stepId: number) => stepId < currentStep;

    const nextStep = () => {
        if (currentStep < steps.length) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const background = (stepId: number) => {
        if (Number(stepId) === Number(currentStep)) return 'bg-gray-100 text-green-900'
        if (isStepCompleted(stepId)) return 'bg-green-400'
    }


    return (
        <div className="flex p-4 border border-gray-100 shadow-md">
            {/* Sidebar */}
            <div className="w-1/3 bg-white ">
                <div className={'bg-blue-900 flex flex-col space-y-4 p-4'}>
                    {steps.map((step, index) => (
                        <div key={step.id} className="flex flex-col items-start mb-3">
                            {/* First Row: Checkbox and Title */}
                            <div className="flex items-center space-x-2 ">
                                <CircleDot
                                    strokeWidth={1}
                                    className={`text-white rounded-full ${background(step.id)}  me-4 `}
                                />
                                <span
                                    className={'text-gray-200 text-lg font-semibold'}
                                >  {step.label}
                                </span>
                            </div>

                            {index < steps.length && (
                                <div className="flex items-start space-x-2 mt-2 ps-3 ">
                                    <p className={`border-s text-gray-300 ps-8
                                 ${isStepCompleted(step.id)
                                        ? 'border-blue-500'
                                        : 'border-gray-200'}
                                 px-2 py-1`}>{step.description}</p>
                                </div>
                            )}
                        </div>
                    ))}

                </div>
            </div>

            {/* Form Content */}
            <div className="w-3/4 p-6 bg-gray-50 flex flex-col justify-between">
                <div>{steps[currentStep - 1].content}</div>
                <div className="mt-4 flex justify-between">
                    <button
                        onClick={prevStep}
                        className={`px-4 py-2 bg-gray-200 rounded ${
                            currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        disabled={currentStep === 1}
                    >
                        Previous
                    </button>
                    <button
                        onClick={nextStep}
                        className={`px-4 py-2 bg-blue-500 text-white rounded `}
                    >
                        {currentStep === steps.length ? 'Submit' : 'Next'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MultiStepForm;
