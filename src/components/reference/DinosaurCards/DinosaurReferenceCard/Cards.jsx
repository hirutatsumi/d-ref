import React from "react";
import { Card } from "./Cards/Card";
import { CardDeleteButton } from "./Cards/CardDeleteButton";

export const Cards = ({ dinosaurList }) => {
  // console.log(dinosaurList);
  return (
    <div>
      {dinosaurList.map((dinosaur) => {
        return (
          <>
            <Card dinosaur={dinosaur} />
            <CardDeleteButton />
          </>
        );
      })}
    </div>
  );
};
