import React, { useState } from "react";
import { Modal } from "./Modal";

export const Card = ({ dinosaur, setDinosaurList }) => {
  const onHandleDelete = (clickedDinosaurId) => {
    setDinosaurList((prev) => {
      const newDinosaurList = prev.filter((filteredDinosaur) => {
        return filteredDinosaur.id !== clickedDinosaurId;
      });
      return newDinosaurList;
    });
  };
  const [modalOpen, setModalOpen] = useState(false);

  const onHandleShowModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <div
        className="card"
        onClick={() => {
          onHandleShowModal();
        }}
      >
        {dinosaur.text}
        <button
          className="cardDeleteButton"
          onClick={() => {
            onHandleDelete(dinosaur.id);
          }}
        >
          ×
        </button>
      </div>

      <Modal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        content={dinosaur.text}
      />
    </>
  );
};
