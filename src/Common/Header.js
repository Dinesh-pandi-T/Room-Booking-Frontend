import { NavLink, useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const isLoggedIn = !!token;
  const role = user?.role; 
  const isAdmin = role === "admin";
  const isUser = role === "user";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };

  return (
    <header className="header">
      <img src="/booking.png" alt="Logo" className="logo" />

      <div className="links">
        {isUser && (
          <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/mybookings">My Bookings</NavLink>
            <NavLink to="/profile">Profile</NavLink>
          </>
        )}

        {isAdmin && (
          <>
            <NavLink to="/admin-home">Admin Home</NavLink>
            <NavLink to="/manageroom">Manage Rooms</NavLink>
          </>
        )}

        {!isLoggedIn && (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}

        {isLoggedIn && (
          <>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
