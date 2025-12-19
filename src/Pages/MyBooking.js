import { useEffect, useState } from "react";
import API from "../Services/api";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    API.get(`/bookings/user/${user.id}`)
      .then((res) => setBookings(res.data.data))
      .catch(() => {});
  }, [user.id]);

  return (
    <div>
      <h2>My Bookings</h2>

      {bookings.map((b) => (
        <div key={b.bookingId}>
          <p>Room ID: {b.roomId}</p>
          <p>
            {b.fromDate} → {b.toDate}
          </p>
          <p>Status: {b.status}</p>
        </div>
      ))}
    </div>
  );
};

export default MyBookings;
