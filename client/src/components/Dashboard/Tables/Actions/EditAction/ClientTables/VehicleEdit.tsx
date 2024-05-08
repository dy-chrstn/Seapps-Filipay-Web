import React, { useState } from "react";
import Select from "react-select";
import { Range } from "react-range";

interface EditDetailsActionProps {
  onClose: () => void;
}

const EditDetailsAction: React.FC<EditDetailsActionProps> = ({ onClose }) => {
  const [editedData, seteditedData] = useState<any>({
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
    seteditedData((prevData: any) => ({
      ...prevData,
      serviceType: selectedOption.value,
    }));
  };

  const handleTransportChange = (selectedOption: any) => {
    seteditedData((prevData: any) => ({
      ...prevData,
      transport: selectedOption.value,
    }));
  };

  const handleMaxAmountChange = (values: number[]) => {
    seteditedData((prevData: any) => ({
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
      fontSize: "0.78rem",
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
          <h2 className="text-[0.78rem] font-bold mr-auto text-blue-800">
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

        {/* Type Field */}
        <div className="mt-2 flex items-center">
          <label className="text-[0.68rem] font-bold text-black mr-2">
            Type:
          </label>
          <div className="ml-[9.50rem] text-[0.68rem]">
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
                editedData.serviceType
                  ? {
                      value: editedData.serviceType,
                      label: editedData.serviceType,
                    }
                  : null
              }
              onChange={handleServiceTypeChange}
              styles={customStyles}
            />
          </div>
        </div>

        {/* TC Field */}
        <div className="mt-3 flex items-center">
          <label className="text-[0.68rem] font-bold text-black mr-2 ">
            Transport Cooperative/
            <br />
            Corporation:{" "}
          </label>

          <div className="ml-[1.90rem] mb-2">
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
                editedData.transport
                  ? { value: editedData.transport, label: editedData.transport }
                  : null
              }
              onChange={handleTransportChange}
              styles={customTransportStyles}
            />
          </div>
        </div>

        {/* Validator Fields*/}
        <div className="mt-2 flex items-center">
          <label className="text-[0.68rem] font-bold text-black mr-2">
            TPS 530T <br />
            (Passenger Validator)
          </label>
          <input
            type="text"
            value={editedData.validator}
            onChange={(e) =>
              seteditedData({ ...editedData, validator: e.target.value })
            }
            className="ml-[2.20rem] px-1 border border-gray-300 rounded-md text-[0.68rem] w-[9.70rem] h-5"
          />
        </div>

        <div className="mt-2 flex items-center">
          <label className="text-[0.68rem] font-bold text-black mr-2">
            TPS 900/320 <br />
            (Driver's Monitor)
          </label>
          <input
            type="text"
            value={editedData.monitor}
            onChange={(e) =>
              seteditedData({ ...editedData, monitor: e.target.value })
            }
            className="ml-[3.20rem] px-1 border border-gray-300 rounded-md text-[0.68rem] w-[9.70rem] h-5"
          />
        </div>

        <div className="mt-3 flex items-center">
          <label className="text-[0.68rem] font-bold text-black mr-2">
            Maker
          </label>
          <input
            type="text"
            value={editedData.maker}
            onChange={(e) =>
              seteditedData({ ...editedData, maker: e.target.value })
            }
            className="ml-[6.90rem] px-1 border border-gray-300 rounded-md text-[0.68rem] w-[9.70rem] h-5"
          />
        </div>

        {/* Max Amount Field*/}
        <div className="mt-3 flex items-center">
          <label className="text-[0.68rem] font-bold text-black mr-2">
            Max Amount (Php)
          </label>
          <div className="ml-[2.60rem] mt-2 flex flex-col items-center relative">
            <div className="">
              <Range
                step={1}
                min={0}
                max={10000}
                values={[editedData.maxAmount]}
                onChange={handleMaxAmountChange}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "3px",
                      width: "9rem",
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
                <span className="text-xxs ">10k</span>
              </div>
              <input
                type="text"
                inputMode="numeric"
                value={editedData.maxAmount}
                onChange={(e) =>
                  seteditedData({
                    ...editedData,
                    maxAmount: parseInt(e.target.value) || 0,
                  })
                }
                style={{
                  position: "absolute",
                  top: "62%",
                  left: "85px",
                  transform: "translate(-50%, -50%)",
                  width: "2.2rem",
                  height: "1rem",
                  fontSize: "11.5px",
                  color: "#333",
                }}
              />
            </div>
          </div>
        </div>

        {/* Numbers Fields*/}
        <div className="mt-3 flex items-center">
          <label className="text-[0.68rem] font-bold text-black mr-2">
            Plate Number
          </label>
          <input
            type="text"
            value={editedData.plateNumber}
            onChange={(e) =>
              seteditedData({ ...editedData, plateNumber: e.target.value })
            }
            className="ml-[4.0rem] px-1 border border-gray-300 rounded-md text-[0.68rem] w-[9.70rem] h-5"
          />
        </div>

        <div className="mt-3 flex items-center">
          <label className="text-[0.68rem] font-bold text-black mr-2">
            Chassis Number
          </label>
          <input
            type="text"
            value={editedData.chassisNumber}
            onChange={(e) =>
              seteditedData({ ...editedData, chassisNumber: e.target.value })
            }
            className="ml-[3.30rem] px-1 border border-gray-300 rounded-md text-[0.68rem] w-[9.70rem] h-5"
          />
        </div>

        <div className="mt-3 flex items-center">
          <label className="text-[0.68rem] font-bold text-black mr-2">
            Engine Number
          </label>
          <input
            type="text"
            value={editedData.engineNumber}
            onChange={(e) =>
              seteditedData({ ...editedData, engineNumber: e.target.value })
            }
            className="ml-[3.30rem] px-1 border border-gray-300 rounded-md text-[0.68rem] w-[9.70rem] h-5"
          />
        </div>

        {/* Distance Travelled */}
        <div className="mt-4 flex items-center">
          <label className="text-[0.68rem] font-bold text-black mr-2">
            Distance Travelled <br/> (Km)
          </label>
          <div className="ml-[2.90rem] mt-2 flex flex-col items-center relative">
            <div className="">
              <Range
                step={1}
                min={0}
                max={10000}
                values={[editedData.distanceTravelled]}
                onChange={(values) =>
                  seteditedData({ ...editedData, distanceTravelled: values[0] })
                }
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "3px",
                      width: "9rem",
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
                <span className="text-xxs ">0</span>
                <span className="text-xxs mr-22">10k</span>
              </div>
              <input
                type="text"
                inputMode="numeric"
                value={editedData.distanceTravelled}
                onChange={(e) =>
                  seteditedData({
                    ...editedData,
                    distanceTravelled: parseInt(e.target.value) || 0,
                  })
                }
                style={{
                  position: "absolute",
                  top: "60%",
                  left: "85px",
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
