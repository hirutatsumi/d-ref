import React, { useState } from "react";
import { v4 as uuid } from "uuid";

export const CardAddInput = ({ setDinosaurList }) => {
  const [inputDinosaurName, setInputDinosaurName] = useState("");

  const dinosaurId = uuid();

  const handleChange = (event) => {
    setInputDinosaurName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setDinosaurList((prev) => [
      ...prev,
      { text: inputDinosaurName, id: dinosaurId },
    ]);

    setInputDinosaurName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => {
            handleChange(event);
          }}
          value={inputDinosaurName}
          placeholder="Which dinosaur?"
        />
      </form>
    </div>
  );
};
