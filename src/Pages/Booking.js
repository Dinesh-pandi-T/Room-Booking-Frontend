import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./../Styles/Booking.css";
import API from "../Services/api"; 


const BookingRoom = () => {
  const { id } = useParams();
  // const { data } = useOutletContext();

  const user = JSON.parse(localStorage.getItem("user"));
  const isUser = user?.role === "user";

  const [res, setRes] = useState(null);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  useEffect(() => {
      const fetchRoom = async ()=> {
        try {
          const room = await API.get(`/rooms/${id}`);
          console.log(room.data.data);

          setRes(room.data.data);
        } catch (error) {}
      };
      fetchRoom();
  }, [id]);

  const handleBooking = async () => {
    if (!fromDate || !toDate) {
      alert("Please select From and To dates");
      return;
    }

    try {
      await API.post("/bookings", {
        userId: user._id || user.id,
        roomId: res.id,
        fromDate,
        toDate,
      });

      alert("Room booked successfully");
    } catch (err) {
      alert("Room booking failed");
    }
  };


  if (!res) {
    return <h2>Loading ...</h2>;
  }

  return (
    <div className="book-room">
      <div className="imageContainer">
        {res.images.map((img, i) => (
          <img className="img" key={i} src={img} alt={res.name} />
        ))}
      </div>

      <h1 className="id">Room {res.id}</h1>
      <h2 className="title">{res.name}</h2>
      <p className="desc">{res.description}</p>

      <div className="tags">
        {res.amenities.map((amenity, i) => (
          <span className="tag" key={i}>
            {amenity}
          </span>
        ))}
      </div>

      {isUser && res.available !== false && (
        <div className="date-box">
          <label>From Date</label>
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />

          <label>To Date</label>
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />

          <button className="book-btn" onClick={handleBooking}>
            Book Room
          </button>
        </div>
      )}

      {res.available === false && (
        <p className="not-available">Room Not Available</p>
      )}
    </div>
  );
};

export default BookingRoom;
