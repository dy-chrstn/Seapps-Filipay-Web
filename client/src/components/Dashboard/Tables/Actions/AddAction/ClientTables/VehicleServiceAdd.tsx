import React, { useState } from "react";
import Select from "react-select";

interface AddDetailsActionProps {
  onClose: () => void;
}

const AddDetailsAction: React.FC<AddDetailsActionProps> = ({ onClose }) => {
  const [addedData, setAddedData] = useState<any>({
    serviceType: "",
    totalUnits: "",
  });

  const handleFieldChange = (selectedOption: any) => {
    setAddedData((prevData: any) => ({
      ...prevData,
      serviceType: selectedOption.value,
    }));
  };

  const handleSaveChanges = () => {
    // Logic to save edited data
    // You can send addedData to your backend or update it in your state
    // After saving, you may also close the modal
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
      fontSize: "0.8rem",
      width: "150px",
      marginTop: "-4px", // Adjusting the margin-top to move the dropdown up
    }),
    option: (provided: any) => ({
      ...provided,
      fontSize: "0.7rem",
      padding: "0.02rem 0.2rem",
      overflow: "hidden",
      textOverflow: "ellipsis", // Truncate long option labels
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
          <h2 className="text-xxs font-bold mr-auto text-blue-800">
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

        <div className="pl-0 mt-2 flex items-center">
  <label className="text-xxxs font-bold text-black mr-2">Service Type:</label>
  <div className="ml-28">
  <Select
    options={[
      { value: "Provincial Bus", label: "Provincial Bus" },
      { value: "City Bus", label: "City Bus" },
      { value: "Jeepney Class 2", label: "Jeepney Class 2" },
      { value: "UV Express Class 3", label: "UV Express Class 3" },
      { value: "Airline", label: "Airline" },
      { value: "Tricycle", label: "Tricycle" },
      { value: "Ship", label: "Ship" },
    ]}
    value={
      addedData.serviceType
        ? { value: addedData.serviceType, label: addedData.serviceType }
        : null
    }
    onChange={handleFieldChange}
    styles={customStyles}
  />
  </div>
</div>

{/* Code Field */}
<div className="mt-1 flex items-center">
  <label className="text-xxxs font-bold text-black mr-2">Total Units:</label>
  <input
    type="text"
    value={addedData.totalUnits}
    onChange={(e) =>
      setAddedData({ ...addedData, code: e.target.value })
    }
    className="ml-[7.50rem] px-1 border border-gray-300 rounded-md text-xxxs w-[7.70rem] h-5"
  />
</div>

        {/* Status Field */}
        <div className="mt-2 flex items-center">
          <label className="text-xxxs font-bold text-black mr-2">Status:</label>
          <div>
            <label className="ml-[6.60rem] inline-flex items-center text-xxxs space-x-1">
              <input
                type="radio"
                value="Active"
                checked={addedData.status === "Active"}
                onChange={() =>
                  setAddedData({ ...addedData, status: "Active" })
                }
                className="form-radio"
              />
              <span className="ml-2">Active</span>
            </label>
            <label className="inline-flex items-center ml-2 text-xxxs space-x-1">
              <input
                type="radio"
                value="Inactive"
                checked={addedData.status === "Inactive"}
                onChange={() =>
                  setAddedData({ ...addedData, status: "Inactive" })
                }
                className="form-radio"
              />
              <span className="ml-2">Inactive</span>
            </label>
          </div>
        </div>

        <div className="flex justify-end mt-2 -mr-2">
          <button className="border border-gray-500 text-xxxs font-bold text-gray-700 py-1 px-4 rounded-md" onClick={handleDeleteModal}>
            DELETE
          </button>
          <button className="ml-2 bg-blue-800 text-xxxs font-bold text-white py-1 px-4 rounded-md mr-2" onClick={handleSaveChanges}>
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddDetailsAction;
