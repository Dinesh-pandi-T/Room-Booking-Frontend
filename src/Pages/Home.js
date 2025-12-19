import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../Styles/home.css";
import API from "../Services/api";

const Home = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await API.get("/rooms");

        const availableRooms = res.data.data.filter(
          (room) => room.available === true
        );

        setRooms(availableRooms);
      } catch (err) {
        console.error("Error fetching rooms:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  return (
    <div className="home">
      {/* HERO SECTION */}
      <div className="hero">
        <div className="hero-text">
          <h1>Book Your Perfect Stay</h1>
          <p>
            Discover comfortable rooms, modern amenities, and the best prices.
            Book your stay easily and quickly with our hotel booking system.
          </p>
          <a href="#rooms" className="hero-link">
            Explore Rooms
          </a>
        </div>

        <div className="hero-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLelZlvPF2boIZgunEw9d1Bz72K79ELkJSIg&s"
            alt="Hotel Room"
          />
        </div>
      </div>

      <h2 id="rooms">Room Booking</h2>

      {loading ? (
        <p>Loading rooms...</p>
      ) : rooms.length === 0 ? (
        <p>No rooms available</p>
      ) : (
        <div className="qCon">
          {rooms.map((room) => (
            <div
              className="q"
              key={room.roomId}
              onClick={() => navigate(`/booking/${room.roomId}`)}
            >
              <div className="imageContainer">
                {room.images?.map((img, i) => (
                  <img className="img" key={i} src={img} alt={room.name} />
                ))}
              </div>

              <h4>
                {room.roomId} . {room.name}
              </h4>

              <p>{room.description}</p>

              <p>₹ {room.price}</p>

              <div className="tags">
                {room.amenities?.map((item, idx) => (
                  <span className="tag" key={idx}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
