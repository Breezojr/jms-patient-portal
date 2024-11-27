import Skeleton from "@/app/skeleton";
import React from "react";
import { Send} from "lucide-react";

const ServicePage = () => {

    return (
        <Skeleton>
            <div className={'pt-44'}>
                <div className={'px-48'}>
                    <div>
                        <div className={'flex items-center gap-2 mb-6'}>
                            <h5 className={'text-4xl font-semibold'}>We&#39;d love to</h5>
                            <h5 className={'text-4xl'}>Hear from you!</h5>
                        </div>
                        <h5>We are here and always ready to help you. Let us know how we serve you and we’ll get back
                            within
                            no
                            time.
                        </h5>
                    </div>
                    <div className={'mt-12'}>
                        <div className={'grid grid-cols-2 gap-6'}>
                            <input type={'text'} className={'bg-blue-50 p-3'} placeholder={'First Name'}/>
                            <input type={'text'} className={'bg-blue-50 p-3'} placeholder={'Last Name'}/>
                            <input type={'text'} className={'bg-blue-50 p-3'} placeholder={'Your Phone Number'}/>
                            <input type={'text'} className={'bg-blue-50 p-3'} placeholder={'Your Email'}/>
                        </div>
                        <textarea className={'bg-blue-50 mt-6 w-full p-4'} placeholder={'Your Message'}
                                  rows={4}>

                        </textarea>
                    </div>
                    <button
                        className={'text-white bg-blue-900 px-12 py-3 rounded-l-full rounded-r-full font-semibold flex items-center mt-6'}
                        style={{fontSize: '16px'}}
                    >
                        Send Message
                        <Send size={14} strokeWidth={6} className={'ms-2'}/>
                    </button>
                </div>
            </div>
        </Skeleton>
    )
}

export default ServicePage