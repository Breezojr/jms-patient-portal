import HeaderComponent from "@/components/header.component";
import React from "react";
import {Clock5, Plus} from "lucide-react";
import FooterComponent from "@/components/footer.component";

export default function Home() {

    const imageFiles = [
        '/assets/images/partners/nhif.jpeg',
        '/assets/images/partners/britam.png',
        '/assets/images/partners/strategies.jpeg',
        '/assets/images/partners/mo2.jpeg',
        '/assets/images/partners/jubilee.png',
        '/assets/images/partners/uap.jpeg',
    ]

    const services = [
        {
            title: 'Family Consultation',
            description: 'It is a long established fact that a will be distracted by the readable content of a page looking at its layout.',
            image: '/assets/images/service/family.png'
        },
        {
            title: 'Home Health Services',
            description: 'It is a long established fact that a will be distracted by the readable content of a page looking at its layout.',
            image: '/assets/images/service/home-health.png'
        },

        {
            title: 'Minor Procedures',
            description: 'It is a long established fact that a will be distracted by the readable content of a page looking at its layout.',
            image: '/assets/images/service/minor-procedure.png'
        },

        {
            title: 'Major Consultation',
            description: 'It is a long established fact that a will be distracted by the readable content of a page looking at its layout.',
            image: '/assets/images/service/minor-procedure.png'
        },
    ]

    const chooseUs = [
        {
            title: 'Flexible payment terms',
            description: 'Choose from a variety of payment options, including weekly, bi-weekly, or monthly installments, to fit your budget and schedule.',
            subtitle: 'Weekly, by-weekly, monthly',
            image: '/assets/images/service/family.png'
        },
        {
            title: 'Compliant to Islamic credit terms',
            description: 'Enjoy the convenience of purchases at zero interest fees. Our payment plans are transparent and easy to understand, so you can focus on what matters most - your purchase.',
            image: '/assets/images/service/home-health.png',
            subtitle: 'Zero Interest Fee',

        },

        {
            title: 'Fast and easy application',
            description: 'Our online application process is quick and easy, no credit history required, simply enter a few basic details and get an instant decision.',
            image: '/assets/images/service/minor-procedure.png',
            subtitle: 'Online Application Process',
        },


    ]


    return (
        <div className="min-h-screen mx-auto text-gray-700" style={{backgroundColor: '#FEFEFF'}}>
            <HeaderComponent/>
            <main className="px-64 ">
                <div className={'w-full h-3/4 grid grid-cols-2 mb-48'}>
                    <div className={'flex flex-col pt-52 justify-end gap-12  h-3/4'}>
                        <div className={'flex flex-col'}>
                            <h5 className={'text-blue-900 font-semibold'}
                                style={{
                                    fontSize: '24px',
                                }}
                            >Top Doctors</h5>
                            <h2 className={'font-semibold -mt-3'}
                                style={{
                                    fontSize: '48px',
                                }}
                            >Make Your</h2>
                            <p className={'text-gray-500 -mt-3'}
                               style={{
                                   fontSize: '20px',
                               }}
                            >Life Healthy</p>
                        </div>
                        <div>
                            <button
                                className={'text-white bg-blue-700 px-12 py-3 rounded-l-full rounded-r-full font-semibold flex items-center'}
                                style={{fontSize: '16px'}}
                            >
                                Read More
                                <Plus size={14} strokeWidth={6} className={'ms-2'}/>
                            </button>
                        </div>
                        <div className={'text-gray-700'}>
                            <div className={'grid grid-cols-2'}>
                                <div className={'text-gray-700'}>
                                    <h5 className={'font-semibold '}>specialisation in</h5>
                                    <div className={'flex flex-col'}>
                                        <p>Cardiologists</p>
                                        <p>Audiologist</p>
                                        <p>Internists</p>
                                    </div>
                                </div>
                                <div className={'text-gray-700'}>
                                    <h5 className={'font-semibold '}>Medical info</h5>
                                    <div className={'flex flex-col'}>
                                        <p>Dr. K.f. Brandina</p>
                                        <p>B.Kennedy</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'pt-14 mt-1'}>
                        <div className={'ps-8'}>
                            <img
                                className="w-fit rounded-3xl shadow-lg"
                                src="/assets/images/section-1.jpeg"
                                alt="home screen photo"
                                style={{
                                    height: '70vh'
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className={'font-semibold text-center text-2xl mb-4'}>Over 30+ partners and businesses growing
                        with Laina Finance</h3>
                    <div className={'flex justify-between gap-8 px-24'}>
                        {imageFiles.map((imageFile, index) => (
                            <div key={index} className={''}>
                                <img
                                    src={imageFile}
                                    alt="Partner Logo"
                                    className="w-auto h-16  object-contain p-0"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className={'mt-64'}>
                    <h3 className={'font-semibold text-center text-2xl mb-4'}>Our Services</h3>
                    <h3 className={'font-semibold text-center text-2xl mb-4'}>We provide flexible payment options</h3>
                    <div className={'flex justify-between gap-8'}>
                        {services.map((service, index) => (
                            <div key={index} className={'shadow-lg border border-gray-200 p-16'}>
                                <img
                                    src={service.image}
                                    alt="Partner Logo"
                                    className="w-auto h-16  object-contain p-0"
                                />
                                <h4 className={'text-lg font-semibold'}>{service.title}</h4>
                                <p>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>


                <div className={'mt-64 flex flex-col items-center'}>
                    <img
                        src={'/assets/images/how-it-works/header-image.svg'}
                        alt="Partner Logo"
                        className="w-auto h-16  object-contain p-0"
                    />
                    <h3 className={'font-semibold text-center text-2xl mb-4'}>How It Works</h3>
                    <h3 className={'p'}>We provide flexible payment options</h3>
                    <div className={'flex  flex-col'}>

                        <div className="grid grid-cols-5">
                            <div className="relative w-32 h-32 mx-auto mb-4">
                                <img
                                    src={'/assets/images/service/minor-procedure.png'}
                                    alt="Partner Logo"
                                    className="w-auto h-16 object-contain p-0 absolute inset-0 m-auto"
                                />
                                <div
                                    className="absolute inset-0 rounded-full border-2 border-dotted border-gray-400"
                                ></div>
                            </div>
                            <img
                                src={'/assets/images/how-it-works/process-line.svg'}
                                alt="Partner Logo"
                                className="w-48 h-16 object-contain mt-8"
                            />
                            <div className="relative w-32 h-32 mx-auto mb-4">
                                <img
                                    src={'/assets/images/service/minor-procedure.png'}
                                    alt="Partner Logo"
                                    className="w-auto h-16 object-contain p-0 absolute inset-0 m-auto"
                                />
                                <div
                                    className="absolute inset-0 rounded-full border-2 border-dotted border-gray-400"
                                ></div>
                            </div>
                            <img
                                src={'/assets/images/how-it-works/process-line-up.svg'}
                                alt="Partner Logo"
                                className="w-48 h-16 object-contain mb-4 rotate-180 mt-2"
                            />

                            <div className="relative w-32 h-32 mx-auto mb-4">
                                <img
                                    src={'/assets/images/service/minor-procedure.png'}
                                    alt="Partner Logo"
                                    className="w-auto h-16 object-contain p-0 absolute inset-0 m-auto"
                                />
                                <div
                                    className="absolute inset-0 rounded-full border-2 border-dotted border-gray-400"
                                ></div>
                            </div>
                        </div>

                        <div className={'grid grid-cols-3'}>
                            <div className="flex flex-col pe-16">
                                <h4 className="text-lg font-semibold text-center">Accessing our App/Website</h4>
                                <p className="text-center">Accessing our App/Website</p>
                            </div>
                            <div className="">
                                <h4 className="text-lg font-semibold text-center">Booking an Appointment</h4>
                                <p className="text-center">Booking an Appointment</p>
                            </div>
                            <div className="flex flex-col ps-36 ">
                                <h4 className="text-lg font-semibold text-center">Visit our Clinic</h4>
                                <p className="text-center">Visit our Clinic</p>
                            </div>
                        </div>

                        {/*))}*/}
                    </div>
                </div>
                <div className={'mt-48'}>
                    <div className={'grid grid-cols-2'}>
                        <div className={'p-6'}>
                            <div className={'pe-8 flex flex-col items-end'}>
                                <div className={'pe-24'}>
                                    <img
                                        className="w-fit rounded-3xl shadow-lg"
                                        src="/assets/images/section-2.jpeg"
                                        alt="home screen photo"
                                        style={{height: '58vh'}}

                                    />
                                </div>
                                <div
                                    className={'border border-gray-2 shadow-lg w-64 p-4 rounded-lg -me-16 bg-white -mt-64'}>
                                    <h5 className={'mb-4'}>What Makes us Different</h5>
                                    <div>
                                        {chooseUs.map((item, index) => (
                                            <div key={index}
                                                 className={`flex gap-4 mb-4`}
                                            >
                                                <img
                                                    className="w-fit rounded-3xl shadow-lg h-12"
                                                    src={item.image}
                                                    alt="home screen photo"
                                                />
                                                <div className={'flex flex-col justify-center'}>
                                                    <h5 className={''}
                                                        style={{fontSize: '10px', fontWeight: 600}}>{item.title}</h5>
                                                    <p className={''}
                                                       style={{
                                                           fontSize: '10px',
                                                           fontWeight: 400,
                                                       }}>{item.subtitle}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'px-12'}>
                            <h4 className={'text-black  mb-8'} style={{fontSize: '40px', fontWeight: 700}}>Why Choose
                                Us</h4>
                            {chooseUs.map((item, index) => (
                                <div key={index}
                                     className={`text-gray-400 ${index !== chooseUs.length - 1 ? 'mb-8' : ''}`}
                                >
                                    <h5 className={''} style={{fontSize: '20px', fontWeight: 600}}>{item.title}</h5>
                                    <p className={'text-xl'}
                                       style={{fontSize: '20px', fontWeight: 400,}}>{item.description}</p>

                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={' mt-48'}>
                        <div className={'flex shadow-md w-3/4 border border-gray-100 p-8'}>
                            <div className={'me-64 border border-gray-200 shadow-sm p-4 py-16'}>
                                <Clock5 size={48}/>
                                <h2 className={'mt-4 text-3xl font-bold mb-8'}>Opening Time</h2>
                                <div className={'flex font-semibold border-b  border-gray-200 mb-6'}>
                                    <p>Monday - Friday</p>
                                    <p>6:00 - 7:00 pm</p>
                                </div>
                                <div className={'flex font-semibold border-b  border-gray-200 mb-6'}>
                                    <p>Saturday</p>
                                    <p>8:00 - 9:00 pm</p>
                                </div>
                                <div className={'flex font-semibold border-b border-gray-200'}>
                                    <p>Sunday</p>
                                    <p>Closed</p>
                                </div>
                            </div>
                            <div className={'flex flex-col justify-end'}>
                                <h2 className={'mb-2 font-semibold'}>Brian Ford</h2>
                                <p className={'mb-2 font-extrabold text-gray-500'}>CEO & FOUNDER</p>
                                <button
                                    className={'text-white bg-blue-900 px-12 py-3 rounded-l-full rounded-r-full font-semibold flex items-center'}
                                    style={{fontSize: '16px'}}
                                >Appointment
                                    <Plus size={14} strokeWidth={6} className={'ms-2'}/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={' mt-48'}>
                        <div className={'grid grid-cols-2'}>
                            <div>
                                <img
                                    className="w-fit rounded-3xl shadow-lg h-80"
                                    src={'assets/images/section-1.jpeg'}
                                    alt="home screen photo"
                                />
                                <div className={'-mt-56 ms-56'}>
                                    <img
                                        className="w-64 rounded-3xl shadow-lg h-96 rotate-90"
                                        src={'assets/images/section-1.jpeg'}
                                        alt="home screen photo"
                                    />
                                </div>

                            </div>
                            <div>
                                <h4 className={'text-black mb-4'} style={{fontSize: '40px', fontWeight: 700}}>Download
                                    our easy to use mobile app!</h4>
                                <div className={'mb-6'}>
                                    <h4 className={'text-gray-500'}
                                        style={{fontSize: '20px', fontWeight: 700,}}>Customer App</h4>
                                    <p className={'text-gray-500'} style={{fontSize: '20px', fontWeight: 500,}}> You
                                        will get a credit card that will allow you to pay on anywhere. </p>
                                </div>

                                <div className={'mb-6'}>
                                    <h4 className={'text-gray-500'}
                                        style={{fontSize: '20px', fontWeight: 700,}}>Customer App</h4>
                                    <p className={'text-gray-500'} style={{fontSize: '20px', fontWeight: 500,}}> You will get a credit card that will allow you to pay on anywhere.. </p>
                                </div>

                                <div className={'flex px-16 gap-4'}>
                                    <button
                                        className={'text-white bg-blue-900 px-8 py-5 rounded-l-full rounded-r-full font-semibold flex items-center'}
                                        style={{fontSize: '16px'}}
                                    >
                                        <img
                                            className="w-fit rounded-3xl shadow-lg h-6 me-2"
                                            src={'assets/images/apple1.png'}
                                            alt="home screen photo"
                                        />
                                        Appstore
                                    </button>
                                    <button
                                        className={'text-white bg-blue-900 px-8 py-5 rounded-l-full rounded-r-full font-semibold flex items-center'}
                                        style={{fontSize: '16px'}}
                                    >
                                        <img
                                            className="w-fit rounded-3xl shadow-lg h-6 me-2"
                                            src={'assets/images/playstore.png'}
                                            alt="home screen photo"
                                        />
                                        Google Play
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<p className={'mt-48'}>hello</p>*/}
            </main>
            <FooterComponent/>

        </div>
    );
}
