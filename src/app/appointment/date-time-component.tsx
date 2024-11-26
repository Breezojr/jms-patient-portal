"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateTimeComponent = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    const hours = [
        "8:00 AM",
        "9:00 AM",
        "10:00 AM",
        "11:00 AM",
        "12:00 PM",
        "1:00 PM",
        "2:00 PM",
        "3:00 PM",
        "4:00 PM",
        "5:00 PM",
        "6:00 PM",
        "7:00 PM",
    ];

    const handleTimeClick = (time: string) => {
        setSelectedTime(time);
    };

    return (
        <div >
            <div className={'flex justify-between items-center mb-4'}>
                <h3 className={'text-xl font-semibold'}>Select Date and Time</h3>
                {/*<div className={'flex border border-gray-200'}>*/}
                {/*    <input className={'p-2 '} placeholder={'search'}/>*/}
                {/*    <button className={'border-s border-gray-200 p-2 '}><Search/></button>*/}
                {/*</div>*/}
            </div>

            <div className={'px-8 mt-16'}>
                <div className="grid grid-cols-2">
                    <div className="w-full flex justify-center">
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            inline
                            className="rounded-md shadow-md border border-gray-300 w-full max-w-[500px] p-4"
                            calendarClassName="bg-white rounded-md"
                            dayClassName={(date) =>
                                "w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-100" +
                                (date?.toDateString() === selectedDate?.toDateString() ? " bg-blue-500 text-white" : "")
                            }
                            weekDayClassName={() => "text-sm font-medium text-gray-500"}
                            monthClassName="text-lg font-semibold"
                            yearDropdownItemClassName="cursor-pointer hover:bg-blue-100"
                        />
                    </div>

                    <div className="w-full ">
                        <div className="grid grid-cols-3 gap-2">
                            {hours.map((time) => (
                                <div
                                    key={time}
                                    className={`p-2 border rounded-md text-center cursor-pointer ${
                                        selectedTime === time
                                            ? "border-blue-500 bg-blue-100"
                                            : "border-gray-300"
                                    } hover:border-blue-500 transition-all`}
                                    onClick={() => handleTimeClick(time)}
                                >
                                    {time}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default DateTimeComponent;
