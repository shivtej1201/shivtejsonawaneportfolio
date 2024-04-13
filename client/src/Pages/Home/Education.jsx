import data from "../../data/index.json";
import { Link } from "react-router-dom";
import { FaArrowRightFromBracket } from "react-icons/fa6";

export default function Education() {
  return (
    <section className="testimonial--section" id="Education">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          {/* <p className="sub--title">Education</p> */}
          <h2 className="skills--section--heading">Education</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.education?.map((item, index) => (
          <div key={index} className="testimonial--section--card">
            <p className="text-md_edu">{item.description}</p>
            <div className="testimonial--section--card--author--detail">
              <div>
                <p className="text-md testimonial--author--name">
                  <b>Year : </b> {item.author_name}
                </p>
                <p className="text-md testimonial--author--designation">
                  <b>Grade :</b> {item.author_designation}
                </p>
                <Link to={item.url} className="link_Name">
                  View Result :{item.link}
                  <FaArrowRightFromBracket className="icon_Arrow" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
