import { FiLink } from "react-icons/fi";
import Menu from "./Menu";

const Home = ({ title }) => {
  return (
    <div className="container-home">
      <div className="logo">
        <img src="./Logo.png" alt="logo" />
        <h1>{title}</h1>
        <span>Paste your link to shorten 👇</span>
      </div>
      <div className="area-input">
        <div>
          <FiLink size={24} color="#fff" />
          <input placeholder="Paste your link here..." />
        </div>
        <button>Shorten</button>
      </div>
      <Menu className="menu-item" />
    </div>
  );
};

Home.defaultProps = {
  title: "My Links",
};

export default Home;
