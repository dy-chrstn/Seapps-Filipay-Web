import React, { useState } from "react";
import { FaImage } from "react-icons/fa6";
import { BiSolidFilePdf } from "react-icons/bi";
import Select from "react-select";

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

  const handleDeleteModal = () => {
    onClose();
  };

  const handlePhotoIDUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
    }
  };

  const handleSelfieVerificationUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
    }
  };

  const handleBusinessPermitUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
    }
  };

  const handleRemovePhotoID = () => {
    setEditedData((prevData: any) => ({
      ...prevData,
      selfieVerification: "",
    }));
  };

  const handleRemoveSelfieVerification = () => {
    setEditedData((prevData: any) => ({
      ...prevData,
      selfieVerification: "",
    }));
  };

  const handleRemoveBusinessPermit = () => {
    setEditedData((prevData: any) => ({
      ...prevData,
      selfieVerification: "",
    }));
  };

  const handleViewPhotoID = () => {};
  const handleViewSelfieVerification = () => {};
  const handleViewBusinessPermit = () => {};

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
            Edit Details
          </h2>
          <div className="flex space-x-2">
            <button className="text-sm font-semibold text-gray-500 hover:text-gray-700">
              -
            </button>
            <button
              className="text-sm font-semibold text-red-500 hover:text-red-700"
              onClick={handleDeleteModal}
            >
              ×
            </button>
          </div>
        </div>

        {/* Personal Details  */}
        <div className="pl-0 mt-2">
    
{/* Status Field */}
<div className="mt-2 flex items-center">
          <label className="text-[0.68rem] ml-4 font-bold text-black mr-2 ">
            Status:
          </label>
          <div>
            <label className="ml-2 inline-flex items-center text-[0.68rem] space-x-2">
              <input
                type="radio"
                value="Completed"
                checked={editedData.status === "Completed"}
                onChange={() =>
                  setEditedData({ ...editedData, status: "Completed" })
                }
                className="form-radio"
              />
              <span className="">Completed</span>
            </label>
            <label className="inline-flex items-center ml-2 text-[0.68rem] space-x-2">
              <input
                type="radio"
                value="In Progress"
                checked={editedData.status === "In Progress"}
                onChange={() =>
                  setEditedData({ ...editedData, status: "In Progress" })
                }
                className="form-radio ml-2"
              />
              <span className="ml-2">In Progress</span>
            </label>


            <label className="inline-flex items-center ml-2 text-[0.68rem] space-x-2">
              <input
                type="radio"
                value="Error"
                checked={editedData.status === "Error"}
                onChange={() =>
                  setEditedData({ ...editedData, status: "Error" })
                }
                className="form-radio ml-2"
              />
              <span className="ml-2">Error</span>
            </label>

          </div>
        </div>

          <div className="flex justify-end mt-4">
            <button
              className="border border-gray-500 text-[0.62rem] font-bold text-gray-700 py-1 px-4 rounded-md"
              onClick={handleDeleteModal}
            >
              DELETE
            </button>
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
