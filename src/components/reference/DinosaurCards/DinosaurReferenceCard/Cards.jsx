import React from "react";
import { Card } from "./Cards/Card";

export const Cards = ({ dinosaurList, setDinosaurList }) => {
  return (
    <div>
      {dinosaurList.map((dinosaur, index) => {
        return (
          <div className="cards" key={index}>
            <Card dinosaur={dinosaur} setDinosaurList={setDinosaurList} />
          </div>
        );
      })}
    </div>
  );
};
