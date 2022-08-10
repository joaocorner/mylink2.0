import { BsLinkedin, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <a
        className="social"
        href="https://www.linkedin.com/in/joaoeduardocorner"
      >
        <BsLinkedin size={24} color="#fff" />
      </a>

      <a className="social" href="https://www.github.com/joaocorner">
        <BsGithub size={24} color="#fff" />
      </a>
      <Link to="/links" className="menu-item">
        My Links
      </Link>
    </div>
  );
};

export default Menu;
