import React, { useState } from "react";
import { BiSolidFilePdf } from "react-icons/bi";
import Flag from '/Img/PhilippinesFlag.png'

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

  const [selectedCheckbox, setSelectedCheckbox] = useState<string>("");
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
            Add Card Sales
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
    
          {/* Date Field */}
          <div className="mt-2 flex items-center ">
            <label className="text-[0.68rem] font-bold text-black mr-2">
              Date
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
            {/* Distributor/Transport Cooperative */}
              <div className=" flex flex-row my-3 justify-between">
                <label className="text-[0.68rem] font-bold text-black mr-2 ">
                  Distributor/Transport Cooperative
                </label>
                <select 
                className="w-[50%] outline-none text-xs"
                name="Select" id="cars">
                  <option value="">Select</option>
                  <option value="Truck">Truck</option>
                  <option value="Jeep">Jeep</option>
                </select>
              </div>
              {/* Account Number */}
              <div className="flex flex-row my-3 items-center justify-between ">
                <label className="text-[0.68rem] font-bold text-black mr-2">
                  Account Number
                </label>
                  <input
                    type="text"
                    className="border border-gray-300 rounded p-2 w-[50%] outline-none text-xs"
                  />
              </div>

             {/* Serial Number */}
             <div className="flex flex-row my-3 items-center justify-between ">
                <label className="text-[0.68rem] font-bold text-black mr-2">
                  Serial Number
                </label>
                <div className="flex flex-row gap-2">
                  <div className="flex flex-row items-center gap-2 justify-end">
                    <label className="text-[.57rem] font-extralight text-gray-700">
                      from
                    </label>
                    <select 
                        className="w-[50%] outline-none text-xs"
                        name="Select" id="cars">
                      <option value="">Search...</option>
                      <option value="Truck"> GSJUDN3GF2Z89CVQ </option>
                      <option value="Jeep">3MW4JZWC6VHGQMK4</option>
                      <option value="Truck"> 5LGTVY48XNLVYA7F  </option>
                      <option value="Jeep">AE86BWULFY7FREQF</option>
                      <option value="Truck"> NZ6LPV62XWB9MD8C </option>
                      <option value="Jeep">UWBHDT7F7NTK3HMK</option>
                      <option value="Jeep">CRJ86DQQHG4YM5JK </option>
                    </select>
                  </div>
                  
                  <div className="flex flex-row justify-end gap-2">
                    <label className="text-[.57rem] font-extralight text-gray-700">
                      to
                    </label>
                    <select 
                        className="w-[50%] outline-none text-xs"
                        name="Select" id="cars">
                      <option value="">Search...</option>
                      <option value="Truck"> GSJUDN3GF2Z89CVQ </option>
                      <option value="Jeep">3MW4JZWC6VHGQMK4</option>
                      <option value="Truck"> 5LGTVY48XNLVYA7F  </option>
                      <option value="Jeep">AE86BWULFY7FREQF</option>
                      <option value="Truck"> NZ6LPV62XWB9MD8C </option>
                      <option value="Jeep">UWBHDT7F7NTK3HMK</option>
                      <option value="Jeep">CRJ86DQQHG4YM5JK </option>
                    </select>
                  </div>
                </div>
                
              </div>

               {/* Card Type */}
             <div className="flex flex-row my-3 items-center justify-between ">
                <label className="text-[0.68rem] font-bold text-black mr-2">
                  CardType
                </label>
                <div className="flex flex-col justify-end items-start w-[30%]">
                  <select 
                      className="w-[100%] outline-none text-xs py-2"
                      name="Select" id="cars">
                    <option value="">Select</option>
                    <option value="Truck"> GSJUDN3GF2Z89CVQ </option>
                    <option value="Jeep">3MW4JZWC6VHGQMK4</option>
                    <option value="Truck"> 5LGTVY48XNLVYA7F  </option>
                    <option value="Jeep">AE86BWULFY7FREQF</option>
                    <option value="Truck"> NZ6LPV62XWB9MD8C </option>
                    <option value="Jeep">UWBHDT7F7NTK3HMK</option>
                    <option value="Jeep">CRJ86DQQHG4YM5JK </option>
                  </select>
                  <div className="flex flex-row gap-2 items-center">
                    <input
                      type="checkbox"
                      id="standard"
                      name="confirm"
                      checked={selectedCheckbox === 'standard'}
                      onChange={() => setSelectedCheckbox('standard')}
                    />
                    <label htmlFor="standard" className="text-[0.68rem] font-normal">
                      Standard
                    </label>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <input
                      type="checkbox"
                      id="discounted"
                      name="confirm"
                      checked={selectedCheckbox === 'discounted'}
                      onChange={() => setSelectedCheckbox('discounted')}
                    />
                    <label htmlFor="discounted" className="text-[0.68rem] font-normal">
                      Discounted
                    </label>
                  </div>
                </div>
              </div>

             {/* number of Cards Sold */}
             <div className="flex flex-row my-3 items-center justify-between ">
                <label className="text-[0.68rem] font-bold text-black mr-2">
                  Number of Cards Sold
                </label>
                <input
                    type="text"
                    className="border border-gray-300 rounded p-2 w-[50%] outline-none text-xs"
                  />
              </div>
              {/* Amount */}
             <div className="flex flex-row my-3 items-center justify-between">
                <label className="text-[0.68rem] font-bold text-black mr-2">
                  Amount
                </label>
                <div className="flex flex-col items-start">
                  <span
                  className="text-[.5rem]"
                  >Currency</span>
                  <div className="flex flex-row border border-gray-300 rounded w-[100%] items-center">
                    <div className="flex flex-col ml-2 justify-center items-center">
                      <label className="text-xs">
                        Php
                      </label>
                      {/* flag */}
                      <img
                        className="h-[.5rem] w-[.8rem] flex-shrink-0"
                        src = {Flag}
                      />
                    </div>
                    <input
                        type="number"
                        placeholder="Php"
                        className="p-2 outline-none text-xs w-full"
                      />
                  </div>
                </div>
              </div>
 
            {/* Status Field */}
            <div className="mt-2 flex items-center justify-between">
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
            <div className="flex flex-row items-center justify-between mt-4">
              <button 
              onClick={() => console.log("Add New Account +")}
              className="text-xs font-bold rounded-md border-gray-700 p-2
                   hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 
                   active:bg-gray-400 transition duration-150 ease-in-out">
                Add New Account +
              </button>
              <div className="flex justify-end">
                <button
                  className="border border-gray-500 text-[0.62rem] font-bold text-gray-700 py-1 px-4 rounded-md
                            hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 
                            active:bg-gray-400 transition duration-150 ease-in-out"
                  onClick={handleDeleteModal}
                >
                  DELETE
                </button>
                <button
                  className="ml-2 bg-blue-800 text-xxxs font-bold text-white py-1 px-4 rounded-md mr-2
                            hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 
                            active:bg-blue-700 transition duration-150 ease-in-out"
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
