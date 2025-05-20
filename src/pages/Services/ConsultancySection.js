import index from "../../assets/images/index";

function ConsultancySection() {
  return (
    <div id="section3" className="section">
      <div className="content-section">
        <div className="text-column">
          <h2>ConsultancySection</h2>
          <p>
            Here is a short introduction to the product. This product is
            designed to provide the best user experience, with many outstanding
            features and high performance. Let's explore the great things the
            product brings.
          </p>
          <p>
            We are committed to quality and customer satisfaction. With a
            professional team, we are always ready to support you in any
            problem.
          </p>
          <div className="button-group">
            <button className="btn">Read More</button>
            <button className="btn">Download</button>
          </div>
        </div>
        <div className="image-column">
          <img src={index["consultancyBlue"]} alt="Description" />
        </div>
      </div>
    </div>
  );
}

export default ConsultancySection;
