import styles from "./Content.modules.css";
import { nanoid } from "nanoid";

import logo from "../assets/img/logo.png";
import laptop from "../assets/img/laptop.png";
import handLaptop from "../assets/img/hand-laptop.png";
import lenses from "../assets/img/lenses.png";
import typewriter from "../assets/img/typewriter.png";
import smartphone from "../assets/img/smartphone.png";

function ContentCard({ img, title, description }) {
  return (
    <div className="contentcard">
      <div className="contentcard-img">
        <img src={img} alt="/"></img>
      </div>
      <div className="contentcard-title">
        <p>{title}</p>
      </div>
      <div className="contentcard-desc">
        <p>{description}</p>
      </div>
    </div>
  );
}

const contentCards = [
  {
    id: nanoid(),
    img: logo,
    title: "Logos",
    description:
      "Have a unique & creative logo designed to express and represent your brand identity.",
  },
  {
    id: nanoid(),
    img: laptop,
    title: "Blog Writing",
    description:
      "Write SEO enriched blog posts as long or short articles on any topic of your choice.",
  },
  {
    id: nanoid(),
    title: "Animated Videos",
    img: handLaptop,
    description:
      "Bring animated characters to life to keep your viewers engaged and  entertained.",
  },
  {
    id: nanoid(),
    img: lenses,
    title: "Product Demo",
    description:
      "Introduce your product to potential customers in a clear and creative video.",
  },
  {
    id: nanoid(),
    img: typewriter,
    title: "Copywriting",
    description:
      "Have creative and compelling copies written to boost your product, brand, service or company.",
  },
  {
    id: nanoid(),
    img: smartphone,
    title: "Social Media Ads",
    description: "Boost sales and awareness with tailor made ads from experts.",
  },
];

function Content() {
  return (
    <div className="content-text">
      <ul className="contentcard-top">
        <li className="content-first">
          <h2 className="title-text">Transform your Creation Process</h2>
          With a new approach toordering content, you can now stop juggling
          multiple documents and meetings and start publishing content faster
          and on demand
        </li>
        <li className="content-second">
          <h2 className="title-text">
            Activate your business growth with RetinkContent.
          </h2>
          Save time and maintain your brand identity within your budget range or
          sign up for affordable plans and still access multiple content
          services like:
        </li>
      </ul>
      <div className="content-cards">
        <div className="content-card">
          {contentCards.map((card) => (
            <ContentCard
              img={card.img}
              title={card.title}
              description={card.description}
              key={card.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
