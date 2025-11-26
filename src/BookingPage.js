import BookingForm from "./BookingForm";


function BookingPage({
  date, setDate,
  time, setTime,
  guests, setGuests,
  occasion, setOccasion,
  availableTimes,
  dispatch,
  submitForm
  }) {
  return (
    <>
      <BookingForm
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        guests={guests}
        setGuests={setGuests}
        occasion={occasion}
        setOccasion={setOccasion}
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </>
  );
}

export default BookingPage;