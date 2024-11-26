"use client"
import Skeleton from "@/app/skeleton";
import React from "react";
import MultiStepFormComponent from "@/app/appointment/multi-step-form-component";

const ServicePage = () => {

    return (
        <Skeleton>
            <div className={'pt-44'}>
                <MultiStepFormComponent/>
            </div>
        </Skeleton>
    )
}

export default ServicePage