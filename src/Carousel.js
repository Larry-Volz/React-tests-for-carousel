import React, { useState } from "react";
import "./Carousel.css";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import Card from "./Card";

function Carousel(props) {
  const [cardIdx, setCardIdx] = useState(0);
  const card = props.cardData[cardIdx];
  const total = props.cardData.length;

  const goForward = () => {
    if(cardIdx < total){
        setCardIdx(cardIdx + 1)
      };
    };
  //ternary to turn T/F into 2 different classNames
  const rightIconHidden = cardIdx === total-1 ? "hidden":"";

  const goBack = () => {
    if(cardIdx > 0) {
      setCardIdx(cardIdx-1)
    };
  };
  const leftIconHidden = cardIdx === 0 ? "hidden":"";

  return (
    <div className="Carousel">
      <h1>{props.title}</h1>
      <div className="Carousel-main">
        <i
          className= {`fas fa-chevron-circle-left fa-2x ${leftIconHidden}`}
          onClick={goBack}
          data-testid="left-arrow" //testid = marked specifically for tests to use
        />
        <Card
          caption={card.caption} //defined above - FROM Carousel prop, passed TO Card component
          src={card.src}
          currNum={cardIdx + 1}
          totalNum={total}
        />
        <i
          className={`fas fa-chevron-circle-right fa-2x ${rightIconHidden}`}
          onClick={goForward}
          data-testid="right-arrow"
        />
      </div>
    </div>
  );
}

Carousel.defaultProps = {
  title: "Shells from far away beaches.",
  cardData: [
    {
      src: image1,
      caption: "Photo by Richard Pasquarella on Unsplash"
    },
    {
      src: image2,
      caption: "Photo by Pratik Patel on Unsplash"
    },
    {
      src: image3,
      caption: "Photo by Josh Post on Unsplash"
    }
  ]
};

export default Carousel;
