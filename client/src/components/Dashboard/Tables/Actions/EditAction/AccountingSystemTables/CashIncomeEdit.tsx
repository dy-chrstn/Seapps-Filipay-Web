import React, { useState } from "react";
import philippineFlag from "./ph-flag.png";

interface EditDetailsActionProps {
  rowData: any;
  onClose: () => void;
}

const EditDetailsAction: React.FC<EditDetailsActionProps> = ({
  rowData,
  onClose,
}) => {
  const [editedData, setEditedData] = useState<any>(rowData);


  const handleSaveChanges = () => {
    onClose();
  };

  const handleCloseModal = () => {
    onClose();
  };

  

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="absolute bg-gray-800 opacity-50 w-full h-full"></div>
      <div className="relative bg-white p-4 rounded-lg z-10">
        <div className="flex items-center">
          <h2 className="text-[0.78rem]  font-bold mr-auto text-blue-800">
            Edit Cash Income
          </h2>
          <div className="flex space-x-2">
            <button className="text-sm font-semibold text-gray-500 hover:text-gray-700">
              -
            </button>
            <button
              className="text-sm font-semibold text-red-500 hover:text-red-700"
              onClick={handleCloseModal}
            >
              ×
            </button>
          </div>
        </div>

        <div className="pl-0 mt-2">
        
        <div className="pl-0 mt-3 flex items-center">
          <label className="text-[0.68rem] font-bold text-black mr-2">
            Driver Name
          </label>
          <input
            type="text"
            value={editedData.DriverName}
            onChange={(e) =>
              setEditedData({ ...editedData, DriverName: e.target.value })
            }
            className="ml-[2.20rem] px-1 border border-gray-300 rounded-md text-[0.68rem] w-[9.70rem] h-5"
          />
        </div>

        <div className="pl-0 mt-2 flex items-center">
          <label className="text-[0.68rem] font-bold text-black mr-2">
            Vehicle Code
          </label>
          <input
            type="text"
            value={editedData.VehicleCode}
            onChange={(e) =>
              setEditedData({ ...editedData, VehicleCode: e.target.value })
            }
            className="ml-[2.10rem] px-1 border border-gray-300 rounded-md text-[0.68rem] w-[9.70rem] h-5"
          />
        </div>


        <div className="pl-0 mt-2 flex items-center">
          <label className="text-[0.68rem] font-bold text-black mr-2">
            Origin
          </label>
          <input
            type="text"
            value={editedData.Origin}
            onChange={(e) =>
              setEditedData({ ...editedData, Origin: e.target.value })
            }
            className="ml-[4.10rem] px-1 border border-gray-300 rounded-md text-[0.68rem] w-[9.70rem] h-5"
          />
        </div>



        <div className="pl-0 mt-2 flex items-center">
          <label className="text-[0.68rem] font-bold text-black mr-2">
            Destination
          </label>
          <input
            type="text"
            value={editedData.Destination}
            onChange={(e) =>
              setEditedData({ ...editedData, Destination: e.target.value })
            }
            className="ml-[2.40rem] px-1 border border-gray-300 rounded-md text-[0.68rem] w-[9.70rem] h-5"
          />
        </div>


        <div className="pl-0 mt-2 flex items-center">
  <label className="text-[0.68rem] font-bold text-black mr-2">
    Cash
  </label>
  <div className="relative flex items-center">
    <div className="absolute inset-y-0 left-[4.70rem] top-1 flex items-center">
      <div className="rounded-md bg-gray-200 flex items-center px-1 py-0.5 mr-1 mb-0.5">
        <img
          src={philippineFlag}
          alt="Philippine Flag"
          className="h-3 w-3 mr-1"
        />
        <span className="text-gray-700 text-xxs font-bold mr-1">Php</span>
      </div>
    </div>
    <input
      type="text"
      value={editedData.Cash}
      onChange={(e) => setEditedData({ ...editedData, Cash: e.target.value })}
      style={{ paddingLeft: '3.50rem' }} 
      className="ml-[4.70rem] px-1 border border-gray-300 rounded-md text-[0.68rem] w-[7.70rem] h-5"
    />
  </div>
</div>

        </div>

          <div className="flex justify-end mt-3">
            <button
              className="ml-2 hover:bg-blue-600 transition-colors duration-300 bg-blue-800 text-xxxs font-bold text-white py-1 px-4 rounded-md mr-2"
              onClick={handleSaveChanges}
            >
              SAVE
            </button>
          </div>
        </div>
      </div>
  );
};

export default EditDetailsAction;
