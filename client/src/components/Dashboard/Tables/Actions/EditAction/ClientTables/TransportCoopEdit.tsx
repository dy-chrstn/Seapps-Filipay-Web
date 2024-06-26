import React, { useState } from "react";
import { FaImage } from "react-icons/fa6";
import { BiSolidFilePdf } from "react-icons/bi";
import Select from "react-select";

interface EditDetailsActionProps {
  rowData: any;
  onClose: () => void;
}

const EditDetailsAction: React.FC<EditDetailsActionProps> = ({ rowData, onClose }) => {
  const [editedData, setEditedData] = useState<any>(rowData); 

  const handleFieldChange = (selectedOption: any) => {
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

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
    }
  };

  const handleRemoveLogo = () => {

    setEditedData((prevData: any) => ({
      ...prevData,
      logo: "", 
    }));
  };

  const handleViewLogo = () => {
  };

const customStyles = {
    control: (provided: any) => ({
      ...provided,
      minHeight: '18px',
      height: '18px',
      fontSize: "10.5px",
      border: "1px solid #d1d5db",
      width: "161px", 

    }),
    input: (provided: any) => ({
      ...provided,
      margin: '-10%',
      
    }),
    indicatorSeparator: () => ({
      display: 'none'
      
    }),
    indicatorsContainer: (provided: any) => ({
      ...provided,
      height: '17px',
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
    dropdownIndicator: (base: any)=> ({
      ...base,
      color: "#00558d", 

    })
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="absolute bg-gray-800 opacity-50 w-full h-full"></div>
      <div className="relative bg-white p-4 rounded-lg z-10">
        <div className="flex items-center">
          <h2 className="text-xxs font-bold mr-auto text-blue-800">Edit Details</h2>
          <div className="flex space-x-2">
            <button className="text-sm font-semibold text-gray-500 hover:text-gray-700">-</button>
            <button className="text-sm font-semibold text-red-500 hover:text-red-700" onClick={handleDeleteModal}>×</button>
          </div>
        </div>

        <div className="pl-0 mt-1">
          {/* Logo Actions */}
          <div className="mb-3 flex items-center">
            <label className="text-xxxs font-bold text-black">Logo:</label>
            <div className="ml-28 flex items-center">
              <FaImage className="text-gray-400 text-[1.30rem]" />
              <label className="text-blue-400 cursor-pointer mr-2 ml-2 text-xxxs" onClick={handleViewLogo}>View</label>
              <label className="text-blue-400 cursor-pointer mr-2 text-xxxs" htmlFor="logoUpload">Upload</label>
              <input id="logoUpload" type="file" name="logo" onChange={handleLogoUpload} className="hidden" />
              <label className="text-gray-500 cursor-pointer text-xxxs" onClick={handleRemoveLogo}>Remove</label>
            </div>
          </div>

          {/* Transport Cooperative/Corporation Dropdown */}
          <div className="mb-0 flex items-center">
            <label className="text-xxxs font-bold text-black leading-tight">Transport Cooperative/<br/>Corporation:</label>
            <div className="pl-7 mb-2">
            <Select
              options={[
                { value: "Transport Cooperative", label: "Transport Cooperative" },
                { value: "Transport Corperation", label: "Transport Corperation" },
              ]}
              value={editedData.transport ? { value: editedData.transport, label: editedData.transport } : null}
              onChange={handleFieldChange}
              styles={customStyles} 
            />
            </div>
          </div>


         {/* Code Field */}
<div className="mt-1 flex items-center">
  <label className="text-xxxs font-bold text-black mr-2">Code:</label>
  <input 
    type="text" 
    value={editedData.code} 
    onChange={(e) => setEditedData({ ...editedData, code: e.target.value })} 
    className=" ml-[86px] px-1 border border-gray-300 rounded-md text-xxxs w-44 h-5" 
  />
</div>

{/* Email Address Field */}
<div className="mt-2 flex items-center">
  <label className="text-xxxs font-bold text-black mr-2">Email Address:</label>
  <input 
    type="text" 
    value={editedData.email} 
    onChange={(e) => setEditedData({ ...editedData, email: e.target.value })} 
    className="ml-11 px-1 py-1 border text-sky-600 border-gray-300 rounded-md text-xxxs w-44 h-5" 
  />
</div>

{/* Route Field */}
<div className="mt-2 flex items-center">
  <label className="text-xxxs font-bold text-black mr-2">Route:</label>
  <input 
    type="text" 
    value={editedData.route} 
    onChange={(e) => setEditedData({ ...editedData, route: e.target.value })} 
    className="ml-20 px-2 py-1 border border-gray-300 rounded-md text-xxxs w-44 h-5" 
  />
</div>

{/* Date Field */}
<div className="mt-2 flex items-center">
  <label className="text-xxxs font-bold text-black mr-2">Date:</label>
  <input
    type="date"
    value={editedData.date}
    onChange={(e) => setEditedData({ ...editedData, date: e.target.value })}
    className="ml-[183px] px-0 py-1 border border-gray-400 rounded-md text-xxxs w-20"
  />
</div>


{/* Chairman Field */}
<div className="mt-2 flex items-center">
  <label className="text-xxxs font-bold text-black mr-2">Chairman:</label>
  <input 
    type="text" 
    value={editedData.chairman} 
    onChange={(e) => setEditedData({ ...editedData, chairman: e.target.value })} 
    className="ml-16 px-2 py-1 border border-gray-400 rounded-md text-xxxs w-44 h-5" 
  />
</div>

<div className="">
          {/* PDF FILES */}
          <div className="mt-4 flex items-center">
            <label className="text-xxxs font-bold text-black">CDA Certification:</label>
            <div className="ml-[3.8rem] flex items-center">
              <BiSolidFilePdf className="text-gray-400 text-[1.75rem]" />
              <label className="text-blue-500 cursor-pointer mr-2 ml-2 text-xxxs" onClick={handleViewLogo}>View</label>
              <label className="text-blue-500 cursor-pointer mr-2 text-xxxs" htmlFor="logoUpload">Upload</label>
              <input id="logoUpload" type="file" name="logo" onChange={handleLogoUpload} className="hidden" />
              <label className="text-gray-600 cursor-pointer text-xxxs" onClick={handleRemoveLogo}>Remove</label>
            </div>
          </div>
        </div>

        <div className="mt-1.5 flex items-center">
            <label className="text-xxxs font-bold text-black">SEC Certification:</label>
            <div className="ml-16 flex items-center">
              <BiSolidFilePdf className="text-gray-400 text-[1.75rem]" />
              <label className="text-blue-500 cursor-pointer mr-2 ml-2 text-xxxs" onClick={handleViewLogo}>View</label>
              <label className="text-blue-500 cursor-pointer mr-2 text-xxxs" htmlFor="logoUpload">Upload</label>
              <input id="logoUpload" type="file" name="logo" onChange={handleLogoUpload} className="hidden" />
              <label className="text-gray-600 cursor-pointer text-xxxs" onClick={handleRemoveLogo}>Remove</label>
            </div>
          </div>


          <div className="mt-1.5 flex items-center">
            <label className="text-xxxs font-bold text-black">Articles and <br/> By Laws:</label>
            <div className="ml-[5.5rem] flex items-center">
              <BiSolidFilePdf className="text-gray-400 text-[1.75rem]" />
              <label className="text-blue-500 cursor-pointer mr-2 ml-2 text-xxxs" onClick={handleViewLogo}>View</label>
              <label className="text-blue-500 cursor-pointer mr-2 text-xxxs" htmlFor="logoUpload">Upload</label>
              <input id="logoUpload" type="file" name="logo" onChange={handleLogoUpload} className="hidden" />
              <label className="text-gray-600 cursor-pointer text-xxxs" onClick={handleRemoveLogo}>Remove</label>
            </div>
          </div>

          
          <div className="mt-1.5 flex items-center">
            <label className="text-xxxs font-bold text-black">Business Permit:</label>
            <div className="ml-[4.25rem] flex items-center">
              <BiSolidFilePdf className="text-gray-400 text-[1.75rem]" />
              <label className="text-blue-500 cursor-pointer mr-2 ml-2 text-xxxs" onClick={handleViewLogo}>View</label>
              <label className="text-blue-500 cursor-pointer mr-2 text-xxxs" htmlFor="logoUpload">Upload</label>
              <input id="logoUpload" type="file" name="logo" onChange={handleLogoUpload} className="hidden" />
              <label className="text-gray-600 cursor-pointer text-xxxs" onClick={handleRemoveLogo}>Remove</label>
            </div>
          </div>

          <div className="mt-1.5 flex items-center">
            <label className="text-xxxs font-bold text-black">Bank Certification:</label>
            <div className="ml-[3.59rem] flex items-center">
              <BiSolidFilePdf className="text-gray-400 text-[1.75rem]" />
              <label className="text-blue-500 cursor-pointer mr-2 ml-2 text-xxxs" onClick={handleViewLogo}>View</label>
              <label className="text-blue-500 cursor-pointer mr-2 text-xxxs" htmlFor="logoUpload">Upload</label>
              <input id="logoUpload" type="file" name="logo" onChange={handleLogoUpload} className="hidden" />
              <label className="text-gray-600 cursor-pointer text-xxxs" onClick={handleRemoveLogo}>Remove</label>
            </div>
          </div>


          <div className="mt-1.5 flex items-center">
            <label className="text-xxxs font-bold text-black">Board Resolution:</label>
            <div className="ml-[3.85rem] flex items-center">
              <BiSolidFilePdf className="text-gray-400 text-[1.75rem]" />
              <label className="text-blue-500 cursor-pointer mr-2 ml-2 text-xxxs" onClick={handleViewLogo}>View</label>
              <label className="text-blue-500 cursor-pointer mr-2 text-xxxs" htmlFor="logoUpload">Upload</label>
              <input id="logoUpload" type="file" name="logo" onChange={handleLogoUpload} className="hidden" />
              <label className="text-gray-600 cursor-pointer text-xxxs" onClick={handleRemoveLogo}>Remove</label>
            </div>
          </div>

          <div className="mt-1.5 flex items-center">
            <label className="text-xxxs font-bold text-black">Fare Matrix:</label>
            <div className="ml-[5.45rem] flex items-center">
              <BiSolidFilePdf className="text-gray-400 text-[1.75rem]" />
              <label className="text-blue-500 cursor-pointer mr-2 ml-2 text-xxxs" onClick={handleViewLogo}>View</label>
              <label className="text-blue-500 cursor-pointer mr-2 text-xxxs" htmlFor="logoUpload">Upload</label>
              <input id="logoUpload" type="file" name="logo" onChange={handleLogoUpload} className="hidden" />
              <label className="text-gray-600 cursor-pointer text-xxxs" onClick={handleRemoveLogo}>Remove</label>
            </div>
          </div>



        {/* Status Field */}
        <div className="mt-1 flex items-center">
  <label className="text-xxxs font-bold text-black mr-2">Status:</label>
  <div>
    <label className="ml-[6.60rem] inline-flex items-center text-xxxs space-x-1">
      <input
        type="radio"
        value="approved"
        checked={editedData.status === 'approved'}
        onChange={() => setEditedData({ ...editedData, status: 'approved' })}
        className="form-radio"
      />
      <span className="ml-2">Approved</span>
    </label>
    <label className="inline-flex items-center ml-2 text-xxxs space-x-1">
      <input
        type="radio"
        value="disapproved"
        checked={editedData.status === 'disapproved'}
        onChange={() => setEditedData({ ...editedData, status: 'disapproved' })}
        className="form-radio"
      />
      <span className="ml-2">Disapproved</span>
    </label>
    
  </div>
</div>

        <div className="flex justify-end mt-2">
        <button className="border border-gray-500 text-xxxs font-bold text-gray-700 py-1 px-4 rounded-md" onClick={handleDeleteModal}>DELETE</button>
          <button className="ml-2 hover:bg-blue-600 transition-colors duration-300 bg-blue-800 text-xxxs font-bold text-white py-1 px-4 rounded-md mr-2" onClick={handleSaveChanges}>SAVE</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default EditDetailsAction;
