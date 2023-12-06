import "./Navigation.scss";
import navicon from "../../assets/navicon.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Navigation() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className={`navigation ${showMenu ? "show-menu" : ""}`}>
      <img
        src={navicon}
        className="navigation__icon"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
        data-testid="navigation-item"
      />
      <a
        href="#"
        className={`navigation__link ${showMenu ? "" : "hide"}`}
        onClick={() => {
          navigate("/");
        }}
        data-testid="navigation-link"
      >
        Booking
      </a>
      <a
        href="#"
        className={`navigation__link ${showMenu ? "" : "hide"}`}
        onClick={() => {
          navigate("/confirmation");
        }}
        data-testid="navigation-link"
      >
        Confirmation
      </a>
    </nav>
  );
}

export default Navigation;
