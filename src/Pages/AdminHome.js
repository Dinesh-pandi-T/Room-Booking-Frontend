import { useOutletContext } from "react-router-dom";
import "./../Styles/home.css";

const AdminHome = () => {
  const { data } = useOutletContext();

  return (
    <div className="home">
      <h2>Home</h2>

      <div className="qCon">
        <div className="hero">
          <div className="hero-text">
            <h1>Book Your Perfect Stay</h1>
            <p>
              Discover comfortable rooms, modern amenities, and the best prices.
              Book your stay easily and quickly with our hotel booking system.
            </p>
            <a href="#a" class="hero-link">
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
        {data.map((room) => (
          <div className="q" key={room.id}>
            <div id = "a" className="imageContainer">
              {room.images.map((img, i) => (
                <img className="img" key={i} src={img} alt={room.name} />
              ))}
            </div>

            <h4>
              {room.id}. {room.name}
            </h4>

            <p>Description</p>
            <p>{room.description}</p>

            <p>₹ {room.price}</p>

            <div className="tags">
              {room.amenities.map((item, idx) => (
                <span className="tag" key={idx}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminHome;
