'use client';
import React, {useEffect, useState} from "react";
import {Plus} from "lucide-react";
import {useRouter} from "next/navigation"

function HeaderComponent() {
    const [isScrolled, setIsScrolled] = useState(false);
    const router = useRouter()


    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0); // Change the background when scrolled
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleNavigate = (url: string) => {
        router.push(url)

    }


    return (
        <nav
            className={`fixed top-0 z-20 w-full px-64 transition-colors duration-300 ${
                isScrolled ? "bg-white shadow-md" : "bg-transparent"
            }`}
        >
            <div className="flex w-full justify-between  py-4">
                <div className="flex items-center gap-32 ">
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
                        <button className={'hover:text-blue-800'}
                                onClick={() =>handleNavigate('/doctor')}
                        >Doctors</button>
                        <button className={'hover:text-blue-800'}
                                onClick={() =>handleNavigate('/about-us')}
                        >About Us</button>
                        <button className={'hover:text-blue-800'}>Service</button>
                        <button className={'hover:text-blue-800'}>Contact Us</button>
                    </div>
                </div>
                <div className={''}>
                    <button
                        className={'text-white bg-blue-900 px-12 py-3 rounded-l-full rounded-r-full font-semibold flex items-center'}
                        style={{fontSize: '16px'}}
                    >Appointment
                        <Plus size={14} strokeWidth={6} className={'ms-2'} />
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default HeaderComponent;
