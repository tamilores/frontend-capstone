function BookingDataTable({ bookingData }) {
  if (!bookingData || bookingData.length === 0) {
    return <p>No booking data available.</p>;
  }

  const columns = Object.keys(bookingData[0]);

  return (
    <table border="1" style={{ marginTop: '2rem', width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {bookingData.map((row, idx) => (
          <tr key={idx}>
            {columns.map((col) => (
              <td key={col}>{row[col]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BookingDataTable;
