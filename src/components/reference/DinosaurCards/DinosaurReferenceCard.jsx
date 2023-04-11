import React, { useState } from "react";
import { CategoryTitle } from "./DinosaurReferenceCard/CategoryTitle";
import { CategoryDeleteButton } from "./DinosaurReferenceCard/CategoryDeleteButton";
import { CardAddInput } from "./DinosaurReferenceCard/CardAddInput";
import { Cards } from "./DinosaurReferenceCard/Cards";

export const DinosaurReferenceCard = () => {
  const [dinosaurList, setDinosaurList] = useState([]);

  return (
    <div className="dinosaurReferenceCard">
      <CategoryTitle />
      <CategoryDeleteButton />
      <CardAddInput setDinosaurList={setDinosaurList} />
      <Cards dinosaurList={dinosaurList} setDinosaurList={setDinosaurList} />
    </div>
  );
};
