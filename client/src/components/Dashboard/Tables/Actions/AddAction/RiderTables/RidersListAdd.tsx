import React, { useState } from "react";
import { FaImage } from "react-icons/fa6";
import { BiSolidFilePdf } from "react-icons/bi";
import Select from "react-select";

interface AddDetailsActionProps {
    onClose: () => void;
  }

  const AddDetailsAction: React.FC<AddDetailsActionProps> = ({
  onClose,
}) => {
    const [addedData, setaddedData] = useState<any>({
        lastName: "",
        firstName:  "",
        middleName:  "",
        contactNumber:  "",
        dateOfBirth:  "",
        email :  "",
        address:  "",
        classification:  "",
        cardUID:  "",
        cardSN:  "",
        verification:  "",
        status:  "",
      });

  const handleClassificationChange = (selectedOption: any) => {
    setaddedData((prevData: any) => ({
        ...prevData,
      Classification: selectedOption.value,
    }));
  };

  const handleTransportChange = (selectedOption: any) => {
    setaddedData((prevData: any) => ({
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

  const handleIdentityVerificationUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleBusinessVerificationload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
    }
  };

  const handleRemoveIdentityVerification = () => {
    setaddedData((prevData: any) => ({
      ...prevData,
      selfieVerification: "",
    }));
  };

  const handleRemoveSelfieVerification = () => {
    setaddedData((prevData: any) => ({
      ...prevData,
      selfieVerification: "",
    }));
  };

  const handleRemoveBusinessVerification = () => {
    setaddedData((prevData: any) => ({
      ...prevData,
      selfieVerification: "",
    }));
  };

  const handleViewIdentityVerification = () => {};
  const handleViewSelfieVerification = () => {};
  const handleViewBusinessVerification = () => {};

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
            Add Details
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
              value={addedData.lastName}
              onChange={(e) =>
                setaddedData({ ...addedData, lastName: e.target.value })
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
              value={addedData.firstName}
              onChange={(e) =>
                setaddedData({ ...addedData, firstName: e.target.value })
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
              value={addedData.middleName}
              onChange={(e) =>
                setaddedData({ ...addedData, middleName: e.target.value })
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
              value={addedData.contactNumber}
              onChange={(e) =>
                setaddedData({ ...addedData, contactNumber: e.target.value })
              }
              className=" text-sky-600 ml-[2.60rem] px-1 border border-gray-300 rounded-md text-[0.68rem] w-44 h-5"
            />
          </div>


                {/* DOB Field */}
                <div className="mt-2 flex items-center">
            <label className="text-[0.68rem] font-bold text-black mr-2">
              Date of Birth:
            </label>
            <input
              type="date"
              value={addedData.dateOfBirth}
              onChange={(e) =>
                setaddedData({ ...addedData, dateOfBirth: e.target.value })
              }
              className="ml-[8.60rem] px-0 py-1 border border-gray-400 rounded-md text-[0.68rem] w-[6rem]"
            />
          </div>

       

          {/* Email Address Field */}
          <div className="mt-2 flex items-center">
            <label className="text-[0.68rem] font-bold text-black mr-2">
              Email Address:
            </label>
            <input
              type="text"
              value={addedData.email}
              onChange={(e) =>
                setaddedData({ ...addedData, email: e.target.value })
              }
              className="text-sky-600 ml-[3.40rem] px-1 border border-gray-300 rounded-md text-[0.68rem] w-44 h-5"
            />
          </div>

         {/* Address Field */}
         <div className="mt-2 flex items-center">
            <label className="text-[0.68rem] font-bold text-black mr-2">
               Address:
            </label>
            <input
              type="text"
              value={addedData.address}
              onChange={(e) =>
                setaddedData({ ...addedData, address: e.target.value })
              }
              className="text-sky-600 ml-[5.40rem] px-1 border border-gray-300 rounded-md text-[0.68rem] w-44 h-5"
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
                { value: "Standard", label: "Standard" },
                { value: "Student", label: "Student" },
                { value: "PWD", label: "PWD" },
                { value: "Senior Citizen", label: "Senior Citizen" },


              ]}
              value={addedData.classification ? { value: addedData.classification, label: addedData.classification } : null}
              onChange={handleClassificationChange}
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
              value={addedData.CardUID}
              onChange={(e) =>
                setaddedData({ ...addedData, CardUID: e.target.value })
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
              value={addedData.CardSN}
              onChange={(e) =>
                setaddedData({ ...addedData, CardSN: e.target.value })
              }
              className="text-sky-600 ml-[5.30rem] px-1 border border-gray-300 rounded-md text-[0.68rem] w-44 h-5"
            />
          </div>

          <div className="">
            {/* Photo and Selfie FILES */}
            <div className="mt-3 flex items-center">
            <label className="text-[0.68rem] font-bold text-black">
            Identity Verification</label>
            <div className="ml-[4.25rem] flex items-center">
              <FaImage className="text-gray-400 text-[1.35rem]" />
              <label
                className="text-blue-500 cursor-pointer mr-2 ml-2 text-[0.68rem]"
                onClick={handleViewIdentityVerification}
              >
                View
              </label>
              <label
                className="text-blue-500 cursor-pointer mr-2 text-[0.68rem]"
                htmlFor="IdentityVerificationUpload"
              >
                Upload
              </label>
              <input
                id="IdentityVerificationUpload"
                type="file"
                name="logo"
                onChange={handleIdentityVerificationUpload}
                className="hidden"
              />
              <label
                className="text-gray-600 cursor-pointer text-[0.68rem]"
                onClick={handleRemoveIdentityVerification}
              >
                Remove
              </label>
            </div>
          </div>
          </div>


          <div className="">
            {/* Photo and Selfie FILES */}
            <div className="mt-3 flex items-center">
            <label className="text-[0.68rem] font-bold text-black">
            Selfie Verification</label>
            <div className="ml-[4.90rem] flex items-center">
              <FaImage className="text-gray-400 text-[1.35rem]" />
              <label
                className="text-blue-500 cursor-pointer mr-2 ml-2 text-[0.68rem]"
                onClick={handleViewSelfieVerification}
              >
                View
              </label>
              <label
                className="text-blue-500 cursor-pointer mr-2 text-[0.68rem]"
                htmlFor="SelfieVerificationUpload"
              >
                Upload
              </label>
              <input
                id="IdentityVerificationUpload"
                type="file"
                name="Selfie"
                onChange={handleSelfieVerificationUpload}
                className="hidden"
              />
              <label
                className="text-gray-600 cursor-pointer text-[0.68rem]"
                onClick={handleRemoveSelfieVerification}
              >
                Remove
              </label>
            </div>
          </div>
          </div>


          <div className="">
            <div className="mt-3 flex items-center">
            <label className="text-[0.68rem] font-bold text-black">
            Business Verification</label>
            <div className="ml-[3.55rem] flex items-center">
              <BiSolidFilePdf className="text-gray-400 text-[1.80rem]" />
              <label
                className="text-blue-500 cursor-pointer mr-2 ml-2 text-[0.68rem]"
                onClick={handleViewBusinessVerification}
              >
                View
              </label>
              <label
                className="text-blue-500 cursor-pointer mr-2 text-[0.68rem]"
                htmlFor="BusinessVerificationUpload"
              >
                Upload
              </label>
              <input
                id="BusinessVerificationUpload"
                type="file"
                name="Business Verification"
                onChange={handleBusinessVerificationload}
                className="hidden"
              />
              <label
                className="text-gray-600 cursor-pointer text-[0.68rem]"
                onClick={handleRemoveBusinessVerification}
              >
                Remove
              </label>
            </div>
          </div>
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
                checked={addedData.status === "Active"}
                onChange={() =>
                  setaddedData({ ...addedData, status: "Active" })
                }
                className="form-radio"
              />
              <span className="">Active</span>
            </label>
            <label className="inline-flex items-center ml-2 text-[0.68rem] space-x-3">
              <input
                type="radio"
                value="Inactive"
                checked={addedData.status === "Inactive"}
                onChange={() =>
                  setaddedData({ ...addedData, status: "Inactive" })
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

export default AddDetailsAction;
