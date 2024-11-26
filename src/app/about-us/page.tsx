import Skeleton from "@/app/skeleton";
import React from "react";

const AboutUsPage = () => {
    return (
        <Skeleton>
            <div className={'pt-44'}>
                <div className={'p-8 grid grid-cols-2 mb-48'}>
                    <h5 className={'text-5xl font-semibold text-black'}>Award winning digital financier</h5>
                    <p>The leading provider of flexible payment options that let you buy what you want, when you want
                        it. Our mission is to empower consumers with convenient and affordable payment solutions that
                        help them manage their finances and achieve their goals.</p>
                </div>
                <img
                    className="w-screen relative left-1/2 -translate-x-1/2"
                    src="/assets/images/doctor-group2.png"
                    alt="logo"
                />
                <div className={'grid grid-cols-2 mt-48'}>
                    <div>
                        <h3 className={'text-5xl font-bold'}>Together </h3>
                        <h3 className={'text-5xl font-bold'}>We are Strong</h3>
                    </div>
                    <div>
                        <h3 className={'font-semibold text-lg mb-4'}>Laina Finance boasts a skilled team of finance
                            professionals
                            with expertise in digital
                            lending,
                            customer service, and financial literacy, dedicated to providing exceptional service and
                            support
                            to Tanzanian businesses.</h3>
                        <p>Our team is the backbone of our operations, comprising experienced and knowledgeable finance
                            professionals who are passionate about helping Tanzanian businesses thrive. Our staff
                            members are carefully selected for their expertise in various areas, including digital
                            lending, customer service, financial management, risk assessment, and compliance. Our team
                            is committed to delivering exceptional service and support to our clients. We work closely
                            with businesses to understand their unique financing needs and provide personalized
                            solutions that meet their requirements.</p>
                    </div>
                </div>
            </div>
        </Skeleton>
    )
}

export default AboutUsPage