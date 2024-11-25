'use client';
import React from "react";
import {MapPin, Send, PhoneOutgoing, Mail} from "lucide-react";

function FooterComponent() {

    const usefulLinks = [
        'About Us',
        'Services',
        'Doctors',
        'Contact Us',
    ]
    const workingDays = [
        {
            day: 'Monday - Friday',
            time: '6:00 - 7:00 pm'
        },
        {
            day: 'Friday',
            time: '8:00 - 9:00 pm'
        },
        {
            day: 'Saturday',
            time: '8:00 - 2:00 pm'
        },
        {
            day: 'Sunday',
            time: 'closed'
        },
    ]

    const socials = [
        '/assets/images/twitter.svg',
        '/assets/images/linkedin.svg',
        '/assets/images/messenger.svg',
        '/assets/images/infinity.svg',
    ]


    return (
        <div className={'px-64'}>
            <div className={' pb-12 pt-64  grid grid-cols-4 text-black'}>
                <div className={''}>
                    <div className={'flex mb-5'}>
                        <img
                            className="h-14 w-fit"
                            src="/assets/images/logo/jms-logo-original.png"
                            alt="logo"
                        />
                    </div>
                    <p className={'mb-5'}>Finance helps companies manage payments easily. </p>
                    <div className={'flex gap-3'}>
                        {
                            socials.map((social, index) => (
                                <img
                                    key={index}
                                    className="h-6 w-fit"
                                    src={social}
                                    alt="logo"
                                />
                            ))
                        }
                    </div>
                </div>
                <div className={'flex flex-col items-center '}>
                    <h3 className={'ps-24 w-full text-black mb-5'}
                        style={{
                            fontSize: '20px',
                            fontWeight: 700,
                            lineHeight: '28px'
                        }}

                    >Useful Links</h3>
                    <div>
                        {
                            usefulLinks.map((link, index) => (
                                <button key={index} className={'flex gap-2 mb-5'}
                                        style={{
                                            fontSize: '14px',
                                            fontWeight: 500
                                        }}
                                >
                                    <Send/> {link}</button>
                            ))
                        }
                    </div>
                </div>
                <div className={'flex flex-col items-center '}>
                    <h3 className={'ps-11 w-full text-black mb-5'}
                        style={{
                            fontSize: '20px',
                            fontWeight: 700,
                            lineHeight: '28px'
                        }}
                    >
                        Working Day
                    </h3>
                    <div>
                        {
                            workingDays.map((day, index) => (
                                <div key={index} className={'flex gap-2 mb-5'}
                                     style={{
                                         fontSize: '14px',
                                         fontWeight: 500
                                     }}
                                >
                                    <p>{day.day}</p>
                                    <p>{day.time}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={'flex flex-col items-center'}>
                    <h3 className={'w-full text-black mb-5'}
                        style={{
                            fontSize: '20px',
                            fontWeight: 700,
                            lineHeight: '28px'
                        }}

                    >
                        Reach Us
                    </h3>
                    <div>
                        <div className={'flex gap-2 mb-5'}
                             style={{
                                 fontSize: '14px',
                                 fontWeight: 500
                             }}
                        >
                            <PhoneOutgoing/>
                            <p>+0123456789</p>
                        </div>
                        <div className={'flex gap-2 mb-5'}
                             style={{
                                 fontSize: '14px',
                                 fontWeight: 500
                             }}
                        >
                            <Mail/>
                            <p>support@example.com</p>
                        </div>
                        <div className={'flex gap-2 mb-5'}
                             style={{
                                 fontSize: '14px',
                                 fontWeight: 500
                             }}
                        >
                            <p><MapPin/></p>
                            <p>1234 North Avenue Luke Lane, South Bend, IN 360001</p>
                        </div>


                    </div>
                </div>

            </div>

            <hr/>
            <p className="text-xs p-8 w-full text-center">Copyright @ <a href="#" target="_blank" className="text-primary">JMS</a>
                2022. All Rights Reserved.</p>
        </div>

    )

}

export default FooterComponent;
