const ContentCard = ({ id, title, desc, date, image }) => {
  return (
    <div className="card">
      <div className="title">
        <p>{title}</p>
      </div>
      <div className="date">
        <p>{date}</p>
      </div>
      <img src={image} alt="" />
      <div className="desc">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ContentCard;
