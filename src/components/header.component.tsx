'use client';
import React from "react";

function HeaderComponent() {
    return (
        <nav className="fixed top-0 z-20 w-full bg-white shadow-md px-64">
            <div className="flex items-center p-2 py-4 gap-32">
                {/* Logo */}
                <img
                    className="h-14 w-fit"
                    src="/assets/images/logo/jms-logo-original.png"
                    alt="logo"
                />
                {/* Navigation Links */}
                <div className="flex items-center text-black gap-8" style={{
                    fontWeight: 500,
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: '16px',
                    color: '#222222'
                }}>
                    <button className={'hover:text-blue-800'}>Doctors</button>
                    <button className={'hover:text-blue-800'}>About Us</button>
                    <button className={'hover:text-blue-800'}>Service</button>
                    <button className={'hover:text-blue-800'}>Contact Us</button>
                </div>

                <div className={''}>
                    <button
                        className={'text-white bg-blue-700 px-12 py-3 rounded-l-full rounded-r-full font-semibold'}
                        style={{fontSize: '16px'}}
                    >Appointment
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default HeaderComponent;
