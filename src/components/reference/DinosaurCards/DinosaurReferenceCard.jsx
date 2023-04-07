import React from "react";
import { CategoryTitle } from "./DinosaurReferenceCard/CategoryTitle";
import { CategoryDeleteButton } from "./DinosaurReferenceCard/CategoryDeleteButton";
import { CardAddInput } from "./DinosaurReferenceCard/CardAddInput";
import { Cards } from "./DinosaurReferenceCard/Cards";

export const DinosaurReferenceCard = () => {
  return (
    <div className="dinosaurReferenceCard">
      <CategoryTitle />
      <CategoryDeleteButton />
      <CardAddInput />
      <Cards />
    </div>
  );
};
