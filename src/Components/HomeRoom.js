import { useNavigate } from "react-router-dom";

const HomeRoom = ({ rooms }) => {
  const navigate = useNavigate();

  return (
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

      {rooms.map((data) => {
        return (
          <div
            id="a"
            className="q"
            key={data.id}
            onClick={() => navigate(`/booking/${data.id}`)}
          >
            <div className="imageContainer">
              {data.images.map((img, i) => (
                <img className="img" key={i} src={img} alt={data.name} />
              ))}
            </div>

            <h4>
              {data.id}. {data.name}
            </h4>

            <p>Description</p>
            <p>{data.description}</p>

            <p>₹ {data.price}</p>

            <div className="tags">
              {data.amenities.map((item, idx) => (
                <span className="tag" key={idx}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomeRoom;
