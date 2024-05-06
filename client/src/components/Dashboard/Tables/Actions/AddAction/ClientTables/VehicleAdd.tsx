import React, { useState } from "react";
import Select from "react-select";
import { Range } from "react-range";

interface AddDetailsActionProps {
  onClose: () => void;
}

const AddDetailsAction: React.FC<AddDetailsActionProps> = ({ onClose }) => {
  const [addedData, setAddedData] = useState<any>({
    serviceType: "",
    coopName: "",
    vehicleNumber: "",
    validator: "",
    monitor: "",
    maker: "",
    maxAmount: 0,
    plateNumber: "",
    chassisNumber: "",
    engineNumber: "",
    distanceTravelled: "",
  });

  const handleServiceTypeChange = (selectedOption: any) => {
    setAddedData((prevData: any) => ({
      ...prevData,
      serviceType: selectedOption.value,
    }));
  };

  const handleTransportChange = (selectedOption: any) => {
    // Handler for the second dropdown
    setAddedData((prevData: any) => ({
      ...prevData,
      transport: selectedOption.value,
    }));
  };

  const handleMaxAmountChange = (values: number[]) => {
    setAddedData((prevData: any) => ({
      ...prevData,
      maxAmount: values[0],
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
      fontSize: "0.8rem",
      width: "150px",
      marginTop: "-4px", 
    }),
    option: (provided: any) => ({
      ...provided,
      fontSize: "0.7rem",
      padding: "0.02rem 0.2rem",
      overflow: "hidden",
      textOverflow: "ellipsis", 
    }),
    dropdownIndicator: (base: any) => ({
      ...base,
      color: "#00558d",
    }),
  };

  const customTransportStyles = {
    control: (provided: any) => ({
      ...provided,
      minHeight: "18px",
      height: "18px",
      fontSize: "10.5px",
      border: "1px solid #d1d5db",
      width: "150px",
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
      color: "#00558d", // Custom colour
    }),
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="absolute bg-gray-800 opacity-50 w-full h-full"></div>
      <div className="relative bg-white p-2 rounded-lg z-10 w-[28%]">
        <div className="flex items-center ml-3">
          <h2 className="text-xxs font-bold mr-auto text-blue-800">
            Add Vehicle
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

        <div className="pl-3 mt-2 flex items-center">
          <label className="text-xxxs font-bold text-black mr-2">
            Service Type:
          </label>
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
                { value: "Others", label: "Others" },
              ]}
              value={
                addedData.serviceType
                  ? {
                      value: addedData.serviceType,
                      label: addedData.serviceType,
                    }
                  : null
              }
              onChange={handleServiceTypeChange}
              styles={customStyles}
            />
          </div>
        </div>

        <div className="mt-2 pl-3 flex items-center">
          <label className="text-xxxs font-bold text-black leading-tight">
            Transport Cooperative/
            <br />
            Corporation:
          </label>
          <div className="pl-[2.90rem] mb-2">
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
                addedData.transport
                  ? { value: addedData.transport, label: addedData.transport }
                  : null
              }
              onChange={handleTransportChange}
              styles={customTransportStyles}
            />
          </div>
        </div>

        {/* Passenger Validator Field */}
        <div className="mt-1 pl-3 flex items-center">
          <label className="text-xxxs font-bold text-black mr-2">
            TPS 530T <br />
            (Passenger Validator)
          </label>
          <input
            type="text"
            value={addedData.totalUnits}
            onChange={(e) =>
              setAddedData({ ...addedData, code: e.target.value })
            }
            className="ml-[3rem] px-1 border border-gray-300 rounded-md text-xxxs w-[9.30rem] h-5"
          />
        </div>

        {/* Monitor Field */}
        <div className="mt-1 pl-3 flex items-center">
          <label className="text-xxxs font-bold text-black mr-2">
            TPS 900/320 <br />
            (Driver's Monitor)
          </label>
          <input
            type="text"
            value={addedData.totalUnits}
            onChange={(e) =>
              setAddedData({ ...addedData, code: e.target.value })
            }
            className="ml-[3.90rem] px-1 border border-gray-300 rounded-md text-xxxs w-[9.30rem] h-5"
          />
        </div>

        {/* Maker Field */}
        <div className="mt-1 pl-3 flex items-center">
          <label className="text-xxxs font-bold text-black mr-2">Maker</label>
          <input
            type="text"
            value={addedData.totalUnits}
            onChange={(e) =>
              setAddedData({ ...addedData, code: e.target.value })
            }
            className="ml-[7.20rem] px-1 border border-gray-300 rounded-md text-xxxs w-[9.30rem] h-5"
          />
        </div>

        {/* Max Amount */}
        <div className="mt-4 pl-3 flex items-center">
          <label className="text-xxxs font-bold text-black mr-2 -mt-4">
            Max Amount (Php)
          </label>
          <div className="ml-[3.80rem] mt-2 flex flex-col items-center relative">
            {" "}
            <div style={{ width: "170px" }}>
              <Range
                step={1}
                min={0}
                max={10000}
                values={[addedData.maxAmount]}
                onChange={handleMaxAmountChange}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "3px",
                      width: "80%",
                      backgroundColor: "#01baef",
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "10px",
                      width: "10px",
                      borderRadius: "50%",
                      backgroundColor: "#4e93b9",
                    }}
                  />
                )}
              />
              <div className="flex justify-between mt-1">
                <span className="text-xxs">0</span>
                <span className="text-xxs mr-9">10k</span>
              </div>
              <input
                type="text"
                inputMode="numeric"
                value={addedData.maxAmount}
                onChange={(e) =>
                  setAddedData({
                    ...addedData,
                    maxAmount: parseInt(e.target.value) || 0,
                  })
                }
                style={{
                  position: "absolute",
                  top: "60%",
                  left: "70px",
                  transform: "translate(-50%, -50%)",
                  width: "2.2rem",
                  height: "1rem",
                  fontSize: "11px",
                  color: "#333",
                }}
              />
            </div>
          </div>
        </div>

        {/* Numbers Field */}
        <div className="mt-2 pl-3 flex items-center">
          <label className="text-xxxs font-bold text-black mr-2">
            Plate Number
          </label>
          <input
            type="text"
            value={addedData.totalUnits}
            onChange={(e) =>
              setAddedData({ ...addedData, code: e.target.value })
            }
            className="ml-[5.10rem] px-1 border border-gray-300 rounded-md text-xxxs w-[9.30rem] h-5"
          />
        </div>

        <div className="mt-2 flex pl-3 items-center">
          <label className="text-xxxs font-bold text-black mr-2">
            Chassis Number
          </label>
          <input
            type="text"
            value={addedData.totalUnits}
            onChange={(e) =>
              setAddedData({ ...addedData, code: e.target.value })
            }
            className="ml-[4.50rem] px-1 border border-gray-300 rounded-md text-xxxs w-[9.30rem] h-5"
          />
        </div>

        <div className="mt-2 pl-3 flex items-center">
          <label className="text-xxxs font-bold text-black mr-2">
            Engine Number
          </label>
          <input
            type="text"
            value={addedData.totalUnits}
            onChange={(e) =>
              setAddedData({ ...addedData, code: e.target.value })
            }
            className="ml-[4.60rem] px-1 border border-gray-300 rounded-md text-xxxs w-[9.30rem] h-5"
          />
        </div>



{/* Distance Travelled */}
<div className="mt-4 pl-3 flex items-center">
  <label className="text-xxxs font-bold text-black mr-2 -mt-4">
    Distance Travelled <br/>(Km)
  </label>
  <div className="ml-[4.1rem] flex flex-col items-center relative">
    <div style={{ width: "170px" }}>
      <Range
        step={1}
        min={0}
        max={10000}
        values={[addedData.distanceTravelled]} 
        onChange={(values) => setAddedData({ ...addedData, distanceTravelled: values[0] })} 
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "3px",
              width: "80%",
              backgroundColor: "#01baef",
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "10px",
              width: "10px",
              borderRadius: "50%",
              backgroundColor: "#4e93b9",
            }}
          />
        )}
      />
      <div className="flex justify-between mt-1">
        <span className="text-xxs">0</span>
        <span className="text-xxs mr-9">10k</span>
      </div>
      <input
        type="text"
        inputMode="numeric"
        value={addedData.distanceTravelled}
        onChange={(e) =>
          setAddedData({
            ...addedData,
            distanceTravelled: parseInt(e.target.value) || 0,
          })
        }
        style={{
          position: "absolute",
          top: "60%",
          left: "70px",
          transform: "translate(-50%, -50%)",
          width: "2.2rem",
          height: "1rem",
          fontSize: "11px",
          color: "#333",
        }}
      />
    </div>
  </div>
</div>

        <div className="flex justify-end mt-4 mb-2 mr-4">
          <button
            className="border border-gray-500 text-xxxs font-bold text-gray-700 py-1 px-4 rounded-md"
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
  );
};

export default AddDetailsAction;
