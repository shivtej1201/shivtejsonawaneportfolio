import data from "../../data/index.json";

export default function Experience() {
  return (
    <section className="testimonial--section" id="Experience">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          {/* <p className="sub--title">Experience</p> */}
          <h2 className="sections--heading">Experience</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.experience?.map((item, index) => (
          <div key={index} className="testimonial--section--card">
            <div className="testimonial--section--card--review"></div>
            <p className="text-md_exp">{item.company}</p>
            <div className="testimonial--section--card--author--detail">
              <div>
                <p className="text-md testimonial--author--name">
                  {item.author_name}
                </p>
                <p className="text-md testimonial--author--designation">
                  {item.author_designation}
                </p>
              </div>
            </div>
            <div>
              <p>{item.description1}</p>
              <p>{item.description2}</p>
              <p>{item.description3}</p>
              <p>{item.description4}</p>
              <p>{item.description5}</p>
              <p>{item.description6}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
