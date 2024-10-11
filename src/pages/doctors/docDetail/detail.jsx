import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer';
import { BsExclamationCircle } from "react-icons/bs";
import './style.css';
import Buttom from '../../../components/buttom/buttom';
import Card from '../../../components/card/card';
import images from '../../../data/images'
const data = [
    { name: "Richard James", spec: "Neurologist", pic: images.doc1, id: '122' },
    { name: "Emily Larson", spec: "Gastroenterologist", pic: images.doc2, id: '55555' },
    { name: "Ryan Martinez", spec: "Gastroenterologist", pic: images.doc3, id: '777777' },
    
]

export default function Detail() {
    const [week, setWeek] = useState([]);
    const [selectedDate, setSelectedDate] = useState("");

    const [time, setTime] = useState('')
    const handelChangeTIme = (e) => {
        setTime(e.target.value)
    }

    // Handle date change when the user selects a date
    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    //handel the appointment
    const handelAppointment = () => {
        console.log(time, selectedDate)
    }

    // Predefined hours for each day
    const hours = [
        { day: "Sunday", times: ["10:00 am", "01:00 am", "10:00 pm", "10:00 am", "10:00 am"] },
        { day: "Monday", times: ["09:00 am", "01:00 am", "10:00 pm", "10:00 am", "10:00 am"] },
        { day: "Tuesday", times: ["10:00 am", "01:00 am", "10:00 pm", "10:00 am", "10:00 am"] },
        { day: "Wednesday", times: ["04:00 am", "01:00 am", "10:00 pm", "10:00 am", "10:00 am"] },
        { day: "Thursday", times: ["06:00 am", "01:00 am", "10:00 pm", "10:00 am", "10:00 am"] },
        { day: "Friday", times: ["11:00 am", "01:00 am", "10:00 pm", "10:00 am", "10:00 am"] },
        { day: "Saturday", times: ["12:00 am", "01:00 am", "10:00 pm", "10:00 am", "10:00 am"] },
    ];

    // Generate the next 7 days based on the current date and set the current date as default
    useEffect(() => {
        const currentDate = new Date();
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        const weekArray = [];
        for (let i = 0; i < 7; i++) {
            const nextDay = new Date();
            nextDay.setDate(currentDate.getDate() + i); // Increment the day
            const dayName = dayNames[nextDay.getDay()]; // Get the day name
            const formattedDate = `${nextDay.getDate()}/${nextDay.getMonth() + 1}/${nextDay.getFullYear()}`;
            weekArray.push({ dayName, formattedDate });

            // Automatically set the current day as selected by default
            if (i === 0) {
                setSelectedDate(`${dayName}, ${formattedDate}`);
            }
        }

        setWeek(weekArray); // Set the generated week data to state
    }, []);

    // Get the doctor id from URL params
    const { id } = useParams();

    // InfoCard component to display doctor details
    const InfoCard = ({ name, year, spec, about, price, img }) => {
        return (
            <div className='mainCard'>
                <div className='img'>
                    <img src={img} alt='doc' />
                </div>
                <div className='infoCard'>
                    <h3>Dr. {name}</h3>
                    <div className='docSpes'>
                        <p>MBBS - {spec}</p>
                        <p>{year} Years</p>
                    </div>
                    <div className='about'>
                        <span>About</span>
                        <BsExclamationCircle style={{ fontSize: 15, marginLeft: 4 }} />
                    </div>
                    <p className='aboutDesc'>{about}</p>
                    <div className='price'>
                        <span>Appointment fee: </span>
                        {price}$
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className='container detail'>
            <Header />

            {/* Doctor Info Card */}
            <InfoCard
                name={'Richard James'}
                year={'4'}
                spec={'General physician'}
                about={'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.'}
                price={'50'}
                img={images.doc1}
            />

            <p className='p'>Booking slots</p>

            {/* Date selection section */}
            <div className="date-selection">
                {week.map((day, index) => (
                    <div key={index} className='weekDate'>
                        <label>
                            <input
                                type="radio"
                                name="appointmentDate"
                                value={`${day.dayName}, ${day.formattedDate}`}
                                onChange={handleDateChange}
                                checked={selectedDate === `${day.dayName}, ${day.formattedDate}`}
                            />
                            <div className="circle">
                                {day.dayName} <br />
                                {day.formattedDate}
                            </div>
                        </label>
                    </div>
                ))}

            </div>

            {/* Time slots based on selected date */}
            <div className='workHours'>
                {hours.map((h) => (
                    <div className='hour' key={h.day}>
                        {selectedDate.includes(h.day) &&
                            h.times.map((time, index) => (
                                <label key={index}>
                                    <input
                                        type='radio'
                                        name="time"
                                        value={time}
                                        onChange={handelChangeTIme}
                                    />
                                    <div>
                                        {time}
                                    </div>
                                </label>
                            ))}
                    </div>
                ))}
            </div>
            <div className='handelAction'>
                <Buttom name={'Book appointment'} action={handelAppointment} />

            </div>
            <div className='relatedDoctors'>
                <h2>Related Doctors</h2>
                <p className='p2'>Simply browse through our extensive list of trusted doctors.</p>
                <div className='doctors2'>
                    {data.map((e) => {
                        return (
                            <Card img={e.pic} name={e.name} spec={e.spec} id={e.id} />
                        )
                    })
                    }
                </div>

            </div>
            <Footer />
        </div>
    );
}
