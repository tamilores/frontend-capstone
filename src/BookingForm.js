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

    const isFormValid =
        date &&
        time &&
        guests >= 1 && guests <= 10 &&
        occasion;

    function handleSubmit(e) {
        e.preventDefault();
        const formData = { date, time, guests, occasion };
        setBookingData(prev => [...prev, formData]);
        if (submitForm) submitForm(formData);
    }

    return (
        <>
            <section className="booking-form">
                <form id="booking-form" style={{ display: "grid", maxWidth: "200px", gap: "20px" }} onSubmit={handleSubmit}>

                    <label htmlFor="res-date">Choose date</label>
                    <input id="res-date" type="date" value={date} onChange={handleDateChange} required min={new Date().toISOString().split('T')[0]} />

                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required>
                        <option value="" disabled>Select a time</option>
                        {availableTimes.map((t) => ( <option key={t} value={t}>{t}</option> ))}
                    </select>

                    <label htmlFor="guests">Number of guests</label>
                    <input id="guests" type="number" min="1" max="10" value={guests} onChange={(e) => setGuests(parseInt(e.target.value, 10) || 1)} required step="1" />

                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)} required>
                        <option value="" disabled>Select an occasion</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Other">Other</option>
                    </select>

                    <input className="button" type="submit" value="Make your reservation" aria-label="On Click" disabled={!isFormValid} />
                </form>

                <BookingDataTable bookingData={bookingData} />
            </section>
        </>
    );
}

export default BookingForm;