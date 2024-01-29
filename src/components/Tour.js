const Tour = ({ id, image, date, title, info, location, duration, cost }) => {
  return (
    <div className="tour">
      <img src={image} alt={title} />
      <div className="tour-details">
        <h3>{title}</h3>
        <p>{info}</p>
        <p>
          <strong>Date:</strong> {date}
        </p>
        <p>
          <strong>Location:</strong> {location}
        </p>
        <p>
          <strong>Duration:</strong> {duration}
        </p>
        <p>
          <strong>Cost:</strong> {cost}
        </p>
      </div>
    </div>
  );
};

/*const Tour = ({ image, date, title, info, location, duration, cost }) => {
  return (
    <section className="section" id='tours'>
      <div className='section-title'>
        <h2>{title}</h2>
      </div>
      <div className="section-center featured-center">
    <article className="tour-card">
      <div className="tour-img-container">
        <img
          src={image}
        />
        <p className="tour-date">{date}</p>
        </div>
      </article>
    </div>

    <article className="tour-card">
      <div className="tour-img-container">
        <img
          src="images/tour-4.jpeg"
          className="tour-img"
          alt="kenya highlights"
        />
        <p className="tour-date">december 5th, 2019</p>
      </div>


      <div className="tour-info">
        <div className="tour-title"><h4>kenya highlights</h4></div>
        <p>{info}</p>


      <div className="tour-footer">
          <p>
            <span><i className="fas fa-map"></i></span>{location}
          </p>
          <p>{cost}</p>
          <p>{duration}</p>
        </div>
    </article>
</section>
*/

export default Tour;
