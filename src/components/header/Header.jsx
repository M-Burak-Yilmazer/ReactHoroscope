import image from "../../assets/logo.png";
import "../header/Header.scss";
const Header = () => {
  return (
    <header>
      <div className="imgs">
        <img src={image} alt="" />
      </div>
      <div className="links">
        <a href="#">HOROSCOPE</a>
        <a href="#">DAILY</a>
        <a href="#">TAROT</a>
        <a href="#">ARTICLE</a>
        <a href="#">CONTACT</a>
      </div>
    </header>
  );
};

export default Header;
