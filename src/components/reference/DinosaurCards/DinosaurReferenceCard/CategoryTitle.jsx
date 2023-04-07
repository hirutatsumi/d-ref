import React, { useState } from "react";

export const CategoryTitle = () => {
  const [inputTitle, setInputTitle] = useState("Large Carnivore");
  const [isClicked, setIsClicked] = useState(false);

  const handleChange = (event) => {
    setInputTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsClicked(false);
  };

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleBlur = () => {
    setIsClicked(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {isClicked ? (
          <input
            className="input"
            onChange={(event) => {
              handleChange(event);
            }}
            value={inputTitle}
            autoFocus
            onBlur={handleBlur}
          />
        ) : (
          <button className="button" onClick={handleClick}>
            {inputTitle}
          </button>
        )}
      </form>
    </div>
  );
};
