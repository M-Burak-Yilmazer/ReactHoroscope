import ContentCard from "./ContentCard";
import "./Content.scss";
import { data } from "../../helpers/data";

const Content = () => {
  return (
    <div className="cardContainer">
      <h1>WHO ARE YOU ?</h1>
      <div className="contentContainer">
        {data.map((item, index) => (
          <ContentCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Content;
