import BookingDataTable from './BookingDataTable';
import bookingDataDefault from './bookingData';
import { useState, useEffect } from 'react';

function BookingForm({
    date, setDate,
    time, setTime,
    guests, setGuests,
    occasion, setOccasion,
    availableTimes,
    dispatch,
    submitForm
}) {
    const [bookingData, setBookingData] = useState(() => {
        const stored = localStorage.getItem('bookingData');
        return stored ? JSON.parse(stored) : bookingDataDefault;
    });

    useEffect(() => {
        localStorage.setItem('bookingData', JSON.stringify(bookingData));
    }, [bookingData]);

    function handleDateChange(e) {
        const newDate = e.target.value;
        setDate(newDate);
        dispatch({ type: 'update', date: newDate });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const formData = { date, time, guests, occasion };
        setBookingData(prev => [...prev, formData]);
        if (submitForm) submitForm(formData);
    }

    return (
        <>
            <section className="booking-form">
                <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }} onSubmit={handleSubmit}>

                    <label htmlFor="res-date">Choose date</label>
                    <input type="date" value={date} onChange={handleDateChange} required/>

                    <label htmlFor="res-time">Choose time</label>
                    <select value={time} onChange={(e) => setTime(e.target.value)} required>
                        <option value="" disabled>Select a time</option>
                        {availableTimes.map((t) => ( <option key={t} value={t}>{t}</option> ))}
                    </select>

                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" min="1" max="10" value={guests} onChange={(e) => setGuests(parseInt(e.target.value, 10) || 1)} required/>

                    <label htmlFor="occasion">Occasion</label>
                    <select value={occasion} onChange={e => setOccasion(e.target.value)} required>
                        <option value="" disabled>Select an occasion</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Other">Other</option>
                    </select>

                    <input className="button" type="submit" value="Make your reservation" />
                </form>

                <BookingDataTable bookingData={bookingData} />
            </section>
        </>
    );
}

export default BookingForm;