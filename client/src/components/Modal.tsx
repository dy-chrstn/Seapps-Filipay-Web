import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  position: { x: number; y: number };
  addNewPin: (event: any) => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  position,
  addNewPin,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="absolute top-0 left-0 z-50  w-200 p-2 bg-white border rounded shadow border-none"
      style={{
        transform: `translate(${position.x + -200}px, ${position.y + -10}px)`,
      }}
    >
      <div className="flex justify-between mb-2"></div>

      <div className="flex flex-col justify-center items-center">
        <button
          className=" w-150px p-2 mb-2 bg-button rounded-md duration-100 hover:py-3"
          onClick={() => addNewPin("")}
        >
          {" "}
          Add Pin
        </button>
        <button
          className=" w-150px p-2 mb-2 bg-button rounded-md duration-100 hover:py-3 hover:w-boxHoverW"
          onClick={() => addNewPin("Starting Pin")}
        >
          Add Staring Pin
        </button>
        <button
          className=" w-150px p-2 mb-2 bg-button rounded-md duration-100 hover:py-3 hover:w-boxHoverW "
          onClick={() => addNewPin("Ending Pin")}
        >
          Add Ending Pin
        </button>
        <button
          className=" w-150px p-2  bg-button rounded-md duration-100 hover:py-3 hover:w-boxHoverW"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Modal;
