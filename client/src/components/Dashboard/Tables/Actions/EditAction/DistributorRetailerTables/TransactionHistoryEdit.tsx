import React, { useState } from "react";


interface EditDetailsActionProps {
  rowData: any;
  onClose: () => void;
}

const EditDetailsAction: React.FC<EditDetailsActionProps> = ({
  rowData,
  onClose,
}) => {
  const [editedData, setEditedData] = useState<any>(rowData);

  const handleClassificationChange = (selectedOption: any) => {
    setEditedData((prevData: any) => ({
      ...prevData,
      Classification: selectedOption.value,
    }));
  };

  const handleTransportChange = (selectedOption: any) => {
    setEditedData((prevData: any) => ({
      ...prevData,
      transport: selectedOption.value,
    }));
  };


  const handleSaveChanges = () => {
    onClose();
  };

  const handleCloseModal = () => {
    onClose();
  };

  

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      minHeight: "18px",
      height: "18px",
      fontSize: "10.5px",
      border: "1px solid #d1d5db",
      width: "161px",
    }),
    input: (provided: any) => ({
      ...provided,
      margin: "-10%",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    indicatorsContainer: (provided: any) => ({
      ...provided,
      height: "17px",
    }),
    menu: (provided: any) => ({
      ...provided,
      fontSize: "0.8rem",
    }),
    option: (provided: any) => ({
      ...provided,
      fontSize: "0.7rem",
      padding: "0.2rem 0.80rem",
    }),
    dropdownIndicator: (base: any) => ({
      ...base,
      color: "#00558d",
    }),
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="absolute bg-gray-800 opacity-50 w-full h-full"></div>
      <div className="relative bg-white p-4 rounded-lg z-10">
        <div className="flex items-center">
          <h2 className="text-[0.78rem]  font-bold mr-auto text-blue-800">
            Edit Status
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
{/* Status Field */}
<div className="mt-2 flex items-center">
          <label className="text-[0.68rem] font-bold text-black mr-2 ">
            Status:
          </label>
          <div>
            <label className="ml-[2.70rem] inline-flex items-center text-[0.68rem] space-x-3">
              <input
                type="radio"
                value="Completed"
                checked={editedData.status === "Approved"}
                onChange={() =>
                  setEditedData({ ...editedData, status: "Approved" })
                }
                className="form-radio"
              />
              <span className="">Approved</span>
            </label>
            <label className="inline-flex items-center ml-2 text-[0.68rem] space-x-3">
              <input
                type="radio"
                value="In Progress"
                checked={editedData.status === "Disapproved"}
                onChange={() =>
                  setEditedData({ ...editedData, status: "Disapproved" })
                }
                className="form-radio ml-2"
              />
              <span className="ml-2">Disapproved</span>
            </label>
            
          </div>
        </div>

          <div className="flex justify-end mt-4">
            <button
              className="ml-2 hover:bg-blue-600 transition-colors duration-300 bg-blue-800 text-xxxs font-bold text-white py-1 px-4 rounded-md mr-2"
              onClick={handleSaveChanges}
            >
              SAVE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditDetailsAction;
