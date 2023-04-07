import React from "react";
import { CategoryAddButton } from "./DinosaurCards/CategoryAddButton";
import { DinosaurReferenceCard } from "./DinosaurCards/DinosaurReferenceCard";

export const DinosaurCards = () => {
  return (
    <div>
      <DinosaurReferenceCard />
      <CategoryAddButton />
    </div>
  );
};
