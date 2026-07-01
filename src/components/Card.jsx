import React from "react";
import { styling } from "./mock";

const Card = () => {
  const { title, card } = styling;
  console.log();
  return (
    <div>
      <div className={card}>this is a div</div>
      <h2 className={title}>this is heading two</h2>
    </div>
  );
};

export default Card;
