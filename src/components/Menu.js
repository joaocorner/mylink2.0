import { BsLinkedin, BsGithub } from "react-icons/bs";

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
      <p className="menu-item">My Links</p>
    </div>
  );
};

export default Menu;
