import React, { useState } from "react";
import Select from "react-select";

interface EditDetailsActionProps {
  onClose: () => void;
}

const EditDetailsAction: React.FC<EditDetailsActionProps> = ({ onClose }) => {
  const [editedData, seteditedData] = useState<any>({
    code: "",
    type: "",
    status: "",
  });

  const handleFieldChange = (selectedOption: any) => {
    seteditedData((prevData: any) => ({
      ...prevData,
      serviceType: selectedOption.value,
    }));
  };

  const handleSaveChanges = () => {
    onClose();
  };

  const handleDeleteModal = () => {
    onClose();
  };

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      minHeight: "18px",
      height: "18px",
      fontSize: "10.5px",
      border: "1px solid #d1d5db",
      width: "122px",
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
      fontSize: "0.68rem",
      width: "150px",
      marginTop: "-4px", 
    }),
    option: (provided: any) => ({
      ...provided,
      fontSize: "0.68rem",
      padding: "0.02rem 0.2rem",
      overflow: "hidden",
      textOverflow: "ellipsis",
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
          <h2 className="text-[0.78rem] font-bold mr-auto text-blue-800">
            Add Device
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

        {/* Device Number Field */}

        <div className="pl-0 mt-3 flex items-center">
          <label className="text-[0.68rem] font-bold text-black mr-2">
            Device Number:
          </label>
          <input
            type="text"
            value={editedData.code}
            onChange={(e) =>
              seteditedData({ ...editedData, code: e.target.value })
            }
            className="ml-[3.50rem] px-1 border border-gray-300 rounded-md text-[0.68rem] w-[9.70rem] h-5"
          />
        </div>

        {/* Type Field */}
        <div className="mt-2 flex items-center">
          <label className="text-[0.68rem] font-bold text-black mr-2">
            Type:
          </label>
          <div className="ml-[9rem] text-[0.68rem]">
            <Select
              options={[
                { value: "Passenger Validator", label: "Passenger Validator" },
                { value: "Driver’s Monitor", label: "Driver’s Monitor" },
              ]}
              value={
                editedData.serviceType
                  ? {
                      value: editedData.serviceType,
                      label: editedData.serviceType,
                    }
                  : null
              }
              onChange={handleFieldChange}
              styles={customStyles}
            />
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
                checked={editedData.status === "Active"}
                onChange={() =>
                  seteditedData({ ...editedData, status: "Active" })
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
                  seteditedData({ ...editedData, status: "Inactive" })
                }
                className="form-radio ml-2"
              />
              <span className="ml-2">Inactive</span>
            </label>
          </div>
        </div>

        <div className="flex justify-end mt-4 -mr-2">
          <button
            className="border border-gray-500 text-[0.62rem] font-bold text-gray-700 py-1 px-4 rounded-md"
            onClick={handleDeleteModal}
          >
            DELETE
          </button>
          <button
            className="hover:bg-blue-600 transition-colors duration-300 ml-2 bg-blue-800 text-[0.62rem] font-bold text-white py-1 px-4 rounded-md mr-2"
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
