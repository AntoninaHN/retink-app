import styles from "./Features.modules.css";
import video from "../assets/img/video.png";
import img1 from "../assets/svg/artificial-intelligence.svg";
import img2 from "../assets/svg/Groupbrandidentity.svg";
import img3 from "../assets/svg/Vectorinform.svg";
import img4 from "../assets/svg/direct-customer.svg";
import img5 from "../assets/svg/Vectorpublish.svg";
import { nanoid } from "nanoid";

function Card({ img, title, description }) {
  return (
    <div>
      <ul className="cards-list">
        <li className="card-image card">
          <img src={img} alt=""></img>
        </li>
        <li className="card-title card">
          <h2>{title}</h2>
        </li>
        <li className="card-description card">
          <p>{description}</p>
        </li>
      </ul>
    </div>
  );
}
function Features() {
  const cards = [
    {
      id: nanoid(),
      img: img1,
      title: "MakeAI-assisted Content Choices",
      description:
        "Access and Order from an extensive catalogue in any language and on your budget's terms. If unsure, our AI guides you to the best.",
    },
    {
      id: nanoid(),
      img: img2,
      title: "Upload and Maintain your Brand Identity",
      description:
        "Add your preferences and brand assets to ensure the contents is consistent with your brand identity. No brand asset? We can make for you!",
    },
    {
      id: nanoid(),
      img: img3,
      title: "Be informed as we create",
      description:
        "Your details are translated and sent to the AI, FP, or both (per your choice) as you relax and receive continuous updates.",
    },
    {
      id: nanoid(),
      img: img4,
      title: "Receive and Review",
      description:
        "The finished content is delivered and you can make corrections that we will effect to satisfy your requirements.",
    },
    {
      id: nanoid(),
      img: img5,
      title: "Publish and Monitor your contents' progress",
      description:
        "The finished content is delivered and you can make corrections that we will effect to satisfy your requirements.",
    },
  ];

  return (
    <div className="features">
      <div>
        <h2 className="features-title">EXPLAINER VIDEO</h2>
        <div className="features-video">
          <img src={video} alt="video" />
        </div>
      </div>

      <div className="cards">
        {cards.map((card) => (
          <Card
            img={card.img}
            title={card.title}
            description={card.description}
            key={card.id}
          />
        ))}
      </div>
    </div>
  );
}
export default Features;
