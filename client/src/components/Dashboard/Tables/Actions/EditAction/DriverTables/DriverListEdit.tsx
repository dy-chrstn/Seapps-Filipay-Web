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
          <div className="mb-3 flex items-center">
            <label className="text-[0.68rem] font-bold text-black mr-2">
              Last Name:
            </label>
            <input
              type="text"
              value={editedData.LastName}
              onChange={(e) =>
                setEditedData({ ...editedData, LastName: e.target.value })
              }
              className=" text-sky-600 ml-[4.50rem] px-1 border border-gray-300 rounded-md text-[0.68rem] w-44 h-5"
            />
          </div>

          <div className="mb-3 flex items-center">
            <label className="text-[0.68rem] font-bold text-black mr-2">
              First Name:
            </label>
            <input
              type="text"
              value={editedData.FirstName}
              onChange={(e) =>
                setEditedData({ ...editedData, FirstName: e.target.value })
              }
              className=" text-sky-600 ml-[4.50rem] px-1 border border-gray-300 rounded-md text-[0.68rem] w-44 h-5"
            />
          </div>

          <div className="mb-3 flex items-center">
            <label className="text-[0.68rem] font-bold text-black mr-2">
              Middle Name:
            </label>
            <input
              type="text"
              value={editedData.MiddleName}
              onChange={(e) =>
                setEditedData({ ...editedData, MiddleName: e.target.value })
              }
              className=" text-sky-600 ml-[3.60rem] px-1 border border-gray-300 rounded-md text-[0.68rem] w-44 h-5"
            />
          </div>

          <div className="mb-3 flex items-center">
            <label className="text-[0.68rem] font-bold text-black mr-2">
              Contact Number:
            </label>
            <input
              type="text"
              value={editedData.ContactNumber}
              onChange={(e) =>
                setEditedData({ ...editedData, ContactNumber: e.target.value })
              }
              className=" text-sky-600 ml-[2.60rem] px-1 border border-gray-300 rounded-md text-[0.68rem] w-44 h-5"
            />
          </div>

          <div className="mb-3 flex items-center">
            <label className="text-[0.68rem] font-bold text-black mr-2">
              Driver's License:
            </label>
            <input
              type="text"
              value={editedData.DriversLicense}
              onChange={(e) =>
                setEditedData({ ...editedData, DriversLicense: e.target.value })
              }
              className=" text-sky-600 ml-[2.99rem] px-1 border border-gray-300 rounded-md text-[0.68rem] w-44 h-5"
            />
          </div>

          {/* Email Address Field */}
          <div className="mt-2 flex items-center">
            <label className="text-[0.68rem] font-bold text-black mr-2">
              Email Address:
            </label>
            <input
              type="text"
              value={editedData.EmailAddress}
              onChange={(e) =>
                setEditedData({ ...editedData, EmailAddress: e.target.value })
              }
              className="text-sky-600 ml-[3.40rem] px-1 border border-gray-300 rounded-md text-[0.68rem] w-44 h-5"
            />
          </div>

          {/* DOB Field */}
          <div className="mt-2 flex items-center">
            <label className="text-[0.68rem] font-bold text-black mr-2">
              Date of Birth:
            </label>
            <input
              type="date"
              value={editedData.DateOfBirth}
              onChange={(e) =>
                setEditedData({ ...editedData, DateOfBirth: e.target.value })
              }
              className="ml-[8.60rem] px-0 py-1 border border-gray-400 rounded-md text-[0.68rem] w-[6rem]"
            />
          </div>

          {/* Classification Field */}
          <div className="mt-3 flex items-center">
          <label className="text-[0.68rem] font-bold text-black mr-2">
              Classification:
            </label>
            <div className="pl-[4.60rem] mb-2">
            <Select
              options={[
                { value: "Regular", label: "Regular" },
                { value: "Non-Regular", label: "Non-Regular" },
              ]}
              value={editedData.Classification ? { value: editedData.Classification, label: editedData.Classification } : null}
              onChange={handleClassificationChange}
              styles={customStyles} 
            />
            </div>
          </div>

          <div className="mt-1 flex items-center">
          <label className="text-[0.68rem] font-bold text-black mr-2 ">
            Transport Cooperative/
            <br />
            Corporation:{" "}
          </label>

          <div className="ml-[1.50rem] mb-2">
            <Select
              options={[
                {
                  value: "Transport Cooperative",
                  label: "Transport Cooperative",
                },
                {
                  value: "Transport Corporation",
                  label: "Transport Corporation",
                },
              ]}
              value={
                editedData.TransportCooperative
                  ? { value: editedData.TransportCooperative, label: editedData.TransportCooperative }
                  : null
              }
              onChange={handleTransportChange}
              styles={customStyles}
            />
          </div>
        </div>

    {/* Card Details Field */}
    <div className="mt-2 flex items-center">
            <label className="text-[0.68rem] font-bold text-black mr-2">
              Card UID:
            </label>
            <input
              type="text"
              value={editedData.CardUID}
              onChange={(e) =>
                setEditedData({ ...editedData, CardUID: e.target.value })
              }
              className="text-sky-600 ml-[5.0rem] px-1 border border-gray-300 rounded-md text-[0.68rem] w-44 h-5"
            />
          </div>

          <div className="mt-2 flex items-center">
            <label className="text-[0.68rem] font-bold text-black mr-2">
              Card SN:
            </label>
            <input
              type="text"
              value={editedData.CardSN}
              onChange={(e) =>
                setEditedData({ ...editedData, CardSN: e.target.value })
              }
              className="text-sky-600 ml-[5.30rem] px-1 border border-gray-300 rounded-md text-[0.68rem] w-44 h-5"
            />
          </div>


{/* Status Field */}
<div className="mt-2 flex items-center">
          <label className="text-[0.68rem] font-bold text-black mr-2 ">
            Status:
          </label>
          <div>
            <label className="ml-[6.70rem] inline-flex items-center text-[0.68rem] space-x-3">
              <input
                type="radio"
                value="Active"
                checked={editedData.status === "Active"}
                onChange={() =>
                  setEditedData({ ...editedData, status: "Active" })
                }
                className="form-radio"
              />
              <span className="">Active</span>
            </label>
            <label className="inline-flex items-center ml-2 text-[0.68rem] space-x-3">
              <input
                type="radio"
                value="Inactive"
                checked={editedData.status === "Inactive"}
                onChange={() =>
                  setEditedData({ ...editedData, status: "Inactive" })
                }
                className="form-radio ml-2"
              />
              <span className="ml-2">Inactive</span>
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
