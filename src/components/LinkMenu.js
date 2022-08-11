import { Link } from "react-router-dom";

const LinkMenu = ({ color, text, link, classname2 }) => {
  return (
    <Link className={classname2} style={{ backgroundColor: color }} to={link}>
      {text}
    </Link>
  );
};

export default LinkMenu;