import React, { useState } from 'react'

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    position: { x: number; y: number };
    addNewPin: (event: any) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, position, addNewPin }) => {

    if (!isOpen) return null;

    return (
        <div
            className="absolute top-0 left-0 z-50  w-300 p-4 bg-white border rounded shadow"
            style={{
                transform: `translate(${position.x + -350}px, ${position.y + -150}px)`,
            }}
        >
            <div className="flex justify-between mb-2">
                <h2 className="text-lg font-semibold">Modal Content</h2>
                <button onClick={onClose}>Close</button>
            </div>

            <div className="flex flex-col justify-center items-center p-5">
                <button className=" w-150px p-2 mb-2 bg-button rounded-md duration-100 hover: bg-bghover" onClick={addNewPin}> Add Pin</button>
                <button className=" w-150px p-2 mb-2 bg-button rounded-md duration-100 hover:py-3 hover:w-boxHoverW" onClick={addNewPin}>Add Staring Pin</button>
                <button className=" w-150px p-2 mb-2 bg-button rounded-md duration-100 hover:py-3 hover:w-boxHoverW " onClick={addNewPin}>Add Ending Pin</button>
                <button className=" w-150px p-2  bg-button rounded-md duration-100 hover:py-3 hover:w-boxHoverW" onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

export default Modal;




