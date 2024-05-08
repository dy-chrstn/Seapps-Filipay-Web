import React, { useState } from "react";
import { FaImage } from "react-icons/fa6";
import { BiSolidFilePdf } from "react-icons/bi";


interface AddDetailsAction {
  onClose: () => void;
}

const AddDetailsAction: React.FC<AddDetailsAction> = ({onClose,}) => {
  const [addedData, setaddedData] = useState<any>({
    name: "",
    accountNumber: "",
    email: "",
    mobileNumber: "",
    address: "",
    photoID: "",
    selfieVerification: "",
    businessPermit: "",
  });


  const handleFieldChange = (selectedOption: any) => {
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

  const handlePhotoIDUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
    }
  };

  const handleSelfieVerificationUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
    }
  };

  const handleBusinessPermitUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
    }
  };



  const handleRemovePhotoID = () => {
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

  
  const handleRemoveBusinessPermit = () => {
    setaddedData((prevData: any) => ({
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

        <div className="pl-0 mt-2">
          {/* Name Actions */}
          <div className="mb-3 flex items-center">
            <label className="text-[0.68rem] font-bold text-black mr-2">
              Name:
            </label>
            <input
              type="text"
              value={addedData.name}
              onChange={(e) =>
                setaddedData({ ...addedData, name: e.target.value })
              }
              className=" text-sky-600 ml-[6rem] px-1 border border-gray-300 rounded-md text-[0.68rem] w-44 h-5"
            />
          </div>

          {/* Acc No Field */}
          <div className="mt-1 flex items-center">
          <label className="text-[0.68rem] font-bold text-black mr-2">
              Account Number:
            </label>
            <input
              type="text"
              value={addedData.accountNumber}
              onChange={(e) =>
                setaddedData({ ...addedData, accountNumber: e.target.value })
              }
              className="text-sky-600 ml-[2.50rem] px-1 border border-gray-300 rounded-md text-[0.68rem] w-44 h-5"
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
              className="text-sky-600 ml-[3.50rem] px-1 border border-gray-300 rounded-md text-[0.68rem] w-44 h-5"
            />
          </div>

          {/* Mobile NO Field */}
          <div className="mt-2 flex items-center">
          <label className="text-[0.68rem] font-bold text-black mr-2">
              Mobile Number:
            </label>
            <input
              type="text"
              value={addedData.mobileNumber}
              onChange={(e) =>
                setaddedData({ ...addedData, mobileNumber: e.target.value })
              }
              className="text-sky-600 ml-[2.90rem] px-1 border border-gray-300 rounded-md text-[0.68rem] w-44 h-5"
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
              className="text-sky-600 ml-[86px] px-1 border border-gray-300 rounded-md text-[0.68rem] w-44 h-5"
            />
          </div>


          <div className="">
            {/* Photo and Selfie FILES */}
            <div className="mt-3 flex items-center">
            <label className="text-[0.68rem] font-bold text-black">
            Photo ID</label>
            <div className="ml-[7.25rem] flex items-center">
              <FaImage className="text-gray-400 text-[1.35rem]" />
              <label
                className="text-blue-500 cursor-pointer mr-2 ml-2 text-[0.68rem]"
                onClick={handleViewPhotoID}
              >
                View
              </label>
              <label
                className="text-blue-500 cursor-pointer mr-2 text-[0.68rem]"
                htmlFor="logoUpload"
              >
                Upload
              </label>
              <input
                id="logoUpload"
                type="file"
                name="logo"
                onChange={handlePhotoIDUpload}
                className="hidden"
              />
              <label
                className="text-gray-600 cursor-pointer text-[0.68rem]"
                onClick={handleRemovePhotoID}
              >
                Remove
              </label>
            </div>
          </div>



          <div className="mt-2 flex items-center">
            <label className="text-[0.68rem] font-bold text-black">
            Selfie Verification</label>
            <div className="ml-[4.45rem] flex items-center">
              <FaImage className="text-gray-400 text-[1.35rem]" />
              <label
                className="text-blue-500 cursor-pointer mr-2 ml-2 text-[0.68rem]"
                onClick={handleViewSelfieVerification}
              >
                View
              </label>
              <label
                className="text-blue-500 cursor-pointer mr-2 text-[0.68rem]"
                htmlFor="selfieVerification"
              >
                Upload
              </label>
              <input
                id="selfieVerification"
                type="file"
                name="logo"
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


          <div className="mt-1.5 flex items-center">
            <label className="text-[0.68rem] font-bold text-black">
            Business Permit</label>
            <div className="ml-[4.75rem] flex items-center">
              <BiSolidFilePdf className="text-gray-400 text-[1.75rem]" />
              <label
                className="text-blue-500 cursor-pointer mr-2 ml-2 text-[0.68rem]"
                onClick={handleViewBusinessPermit}
              >
                View
              </label>
              <label
                className="text-blue-500 cursor-pointer mr-2 text-[0.68rem]"
                htmlFor="businessPermit"
              >
                Upload
              </label>
              <input
                id="businessPermitUpload"
                type="file"
                name="logo"
                onChange={handleBusinessPermitUpload}
                className="hidden"
              />
              <label
                className="text-gray-600 cursor-pointer text-[0.68rem]"
                onClick={handleRemoveBusinessPermit}
              >
                Remove
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
    </div>
  );
};

export default AddDetailsAction;
