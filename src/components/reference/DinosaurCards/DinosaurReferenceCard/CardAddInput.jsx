import React, { useState } from "react";

export const CardAddInput = ({ setDinosaurList }) => {
  const [inputDinosaurName, setInputDinosaurName] = useState("");

  const handleChange = (event) => {
    setInputDinosaurName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setDinosaurList((prev) => [...prev, { text: inputDinosaurName }]);

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
