import { BsLinkedin, BsGithub } from "react-icons/bs";
import LinkMenu from "./LinkMenu";

const Menu = () => {
  return (
    <div className="menu">
      <LinkMenu
        classname2={"social"}
        text={<BsLinkedin size={24} color="#fff" />}
        link="https://www/in/joaoeduardocorner"
      />
      <LinkMenu
        classname2={"social"}
        text={<BsGithub size={24} color="#fff" />}
        link="https://www.github.com/joaocorner"
      />
      <LinkMenu
        classname2={"menu-item"}
        text={"My Links"}
        link="/links"
      />
    </div>
  );
};

export default Menu;
