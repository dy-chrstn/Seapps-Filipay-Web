import React, { useState } from "react";
import { BiSolidFilePdf } from "react-icons/bi";
import philippineFlag from "./ph-flag.png";

interface AddDetailsAction {
  onClose: () => void;
}

const AddDetailsAction: React.FC<AddDetailsAction> = ({ onClose }) => {
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



  const handleReceiptUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
    }
  };

  const handleRemoveReceipt = () => {
    setaddedData((prevData: any) => ({
      ...prevData,
      selfieVerification: "",
    }));
  };

  const handleViewReceipt = () => {};

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
            Add Cash In
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

          {/* Bank Partner Field */}
          <div className="mt-1 flex items-center">
            <label className="text-[0.68rem] font-bold text-black mr-2">
              Bank Partner:
            </label>
            <input
              type="text"
              value={addedData.bankPartner}
              onChange={(e) =>
                setaddedData({ ...addedData, bankPartner: e.target.value })
              }
              className="text-sky-600 ml-[3.70rem] px-1 border border-gray-300 rounded-md text-[0.68rem] w-44 h-5"
            />
          </div>

          {/*TN Field*/}
          <div className="mt-2 flex items-center">
            <label className="text-[0.68rem] font-bold text-black mr-2">
              Transaction Number:
            </label>
            <input
              type="text"
              value={addedData.transactionNumber}
              onChange={(e) =>
                setaddedData({ ...addedData, transactionNumber: e.target.value })
              }
              className="text-sky-600 ml-[1.30rem] px-1 border border-gray-300 rounded-md text-[0.68rem] w-44 h-5"
            />
          </div>

          {/* Date Field */}
          <div className="mt-2 flex items-center">
            <label className="text-[0.68rem] font-bold text-black mr-2">
              Date of Transaction:
            </label>
            <input
              type="date"
              value={addedData.dateOfTransaction}
              onChange={(e) =>
                setaddedData({ ...addedData, dateOfTransaction: e.target.value })
              }
              className="ml-[6.60rem] px-0 py-1 border border-gray-400 rounded-md text-[0.68rem] w-[6rem]"
            />
          </div>

          {/* Amount Field */}
          <div className="mt-2 flex items-center relative">
            <label className="text-[0.68rem] font-bold text-black mr-2">
              Amount:
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-20 top-1 flex items-center pl-2 text-gray-700 text-xxs font-bold">
                <img
                  src={philippineFlag}
                  alt="Philippine Flag"
                  className="h-3 w-3 mr-1"
                />{" "}
                Php |
              </span>
              <input
                type="text"
                value={addedData.amount}
                onChange={(e) =>
                  setaddedData({ ...addedData, amount: e.target.value })
                }
                className="text-sky-600 ml-[5.20rem] pl-14 pr-2 pb-1 border border-gray-300 rounded-md text-[0.68rem] w-44 h-5"
              />
            </div>
          </div>

          <div className="">
            <div className="mt-2 flex items-center">
              <label className="text-[0.68rem] font-bold text-black">
                Receipt
              </label>
              <div className="ml-[5.75rem] flex items-center">
                <BiSolidFilePdf className="text-gray-400 text-[1.75rem]" />
                <label
                  className="text-blue-500 cursor-pointer mr-2 ml-2 text-[0.68rem]"
                  onClick={handleViewReceipt}
                >
                  View
                </label>
                <label
                  className="text-blue-500 cursor-pointer mr-2 text-[0.68rem]"
                  htmlFor="Receipt"
                >
                  Upload
                </label>
                <input
                  id="Receipt"
                  type="file"
                  name="logo"
                  onChange={handleReceiptUpload}
                  className="hidden"
                />
                <label
                  className="text-gray-600 cursor-pointer text-[0.68rem]"
                  onClick={handleRemoveReceipt}
                >
                  Remove
                </label>
              </div>
            </div>

            {/* Status Field */}
            <div className="mt-2 flex items-center">
              <label className="text-[0.68rem] font-bold text-black mr-2 ">
                Status:
              </label>
              <div>
                <label className="ml-[5.70rem] inline-flex items-center text-[0.68rem] space-x-3">
                  <input
                    type="radio"
                    value="Approved"
                    checked={addedData.status === "Approved"}
                    onChange={() =>
                      setaddedData({ ...addedData, status: "Approved" })
                    }
                    className="form-radio"
                  />
                  <span className="">Approved</span>
                </label>
                <label className="inline-flex items-center ml-2 text-[0.68rem] space-x-3">
                  <input
                    type="radio"
                    value="Inactive"
                    checked={addedData.status === "Disapproved"}
                    onChange={() =>
                      setaddedData({ ...addedData, status: "Disapproved" })
                    }
                    className="form-radio ml-2"
                  />
                  <span className="ml-2">Disapproved</span>
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
