import React from "react";

export const Modal = ({ modalOpen, setModalOpen, content }) => {
  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      {/* {modalOpen ? (
        <div className="overlay">
          <div className="modalContent">
            <p>{content}</p>
            <button
              onClick={() => {
                handleModalClose();
              }}
            >
              Close
            </button>
          </div>
        </div>
      ) : (
        <></>
      )} */}

      {/* the same as above */}
      {false}
      {modalOpen && (
        <div className="overlay">
          <div className="modalContent">
            <p>{content}</p>
            <div className="modalCloseButtonParent">
              <button
                className="modalCloseButtonChild"
                onClick={handleModalClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
