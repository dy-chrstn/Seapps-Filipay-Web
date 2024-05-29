import React, { useState } from 'react'
import '../../messageAction.css'
import { Toggles } from './Toggles'

interface EditSubAdminProps {
  onClose: () => void
}

export const EditSubAdmin: React.FC<EditSubAdminProps> = ({ onClose }) => {


  const [adminType, setAdminType] = useState<string>("")

    return (
      <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center">
       <div className="bg-white w-[40%] h-[90%] rounded-lg shadow-lg ">
         <div className="flex justify-between items-center px-4 py-2 bg-gray-200 rounded-t-lg">
           <h2 className="text-xs font-bold text-blue-700">Edit</h2>
           <div className="flex space-x-2">
             <button className="text-sm font-semibold text-gray-500 hover:text-gray-700">-</button>
             <button className="text-sm font-semibold text-red-500 hover:text-red-700" onClick={onClose}>×</button>
           </div>
         </div>
         <div className="relative p-4 h-[90%] overflow-y-auto">
           <div className="mb-4 flex items-center gap-10">
             <label className="text-xs font-bold text-black mr-2">Admin Type:</label>
             <select 
             value={adminType} 
             onChange={(event) => setAdminType(event.target.value)} 
             className="p-1 border border-gray-300 rounded text-xs outline-none"
             >
                <option value="">Select</option>
                <option value="superadmin">Sub Admin</option>
                <option value="editor">Admin</option>
              </select>
           </div>
           <div className="mb-4 flex items-center gap-[3.5rem]">
             <label className="text-xs font-bold text-black mr-2">Name:</label>
             <input type="text" className="w-full sm:w-1/2 text-sm border caret-black ml-3 border-gray-300 rounded-md py-0 px-2 focus:outline-none focus:border-blue-500" />
           </div>
           <div className="mb-4 flex items-center">
             <label className="text-xs font-bold text-black mr-2">Company Name:</label>
             <input type="text" className="w-full sm:w-1/2 text-sm border caret-black ml-3 border-gray-300 rounded-md py-0 px-2 focus:outline-none focus:border-blue-500" />
           </div>
           <div className="mb-4 flex items-center  gap-[3.7rem]">
             <label className="text-xs font-bold text-black mr-2">Email:</label>
             <input type="text" className="w-full sm:w-1/2 text-sm border caret-black ml-3 border-gray-300 rounded-md py-0 px-2 focus:outline-none focus:border-blue-500" />
           </div>
              {/* All toggles */}
            <Toggles/>

          {/* buttons */}
           <div className="w-full mt-4 mb-2">
             <div className="flex flex-row gap-3 justify-end">
               <button 
               className="text-black text-xs font-semibold deleteButton"
               >Clear</button >
               <button 
               onClick={onClose}
               className="px-4 py-2 rounded-md text-white text-xs font-semibold submitButton bg-buttonDarkTeal "
               >Save</button >
             </div>
           </div>
         </div>
       </div>
     </div>
    )
}


interface AddSubAdminProps {
  onClose: () => void
}

export const AddSubAdmin: React.FC<AddSubAdminProps> = ({ onClose }) => {


  const [adminType, setAdminType] = useState<string>("")

    return (
      <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center">
       <div className="bg-white w-[40%] h-[90%] rounded-lg shadow-lg ">
         <div className="flex justify-between items-center px-4 py-2 bg-gray-200 rounded-t-lg">
           <h2 className="text-xs font-bold text-blue-700">Add</h2>
           <div className="flex space-x-2">
             <button className="text-sm font-semibold text-gray-500 hover:text-gray-700">-</button>
             <button className="text-sm font-semibold text-red-500 hover:text-red-700" onClick={onClose}>×</button>
           </div>
         </div>
         <div className="relative p-4 h-[90%] overflow-y-auto">
           <div className="mb-4 flex items-center gap-10">
             <label className="text-xs font-bold text-black mr-2">Admin Type:</label>
             <select 
             value={adminType} 
             onChange={(event) => setAdminType(event.target.value)} 
             className="p-1 border border-gray-300 rounded text-xs outline-none"
             >
                <option value="">Select</option>
                <option value="superadmin">Sub Admin</option>
                <option value="editor">Admin</option>
              </select>
           </div>
           <div className="mb-4 flex items-center gap-[3.5rem]">
             <label className="text-xs font-bold text-black mr-2">Name:</label>
             <input type="text" className="w-full sm:w-1/2 text-sm border caret-black ml-3 border-gray-300 rounded-md py-0 px-2 focus:outline-none focus:border-blue-500" />
           </div>
           <div className="mb-4 flex items-center">
             <label className="text-xs font-bold text-black mr-2">Company Name:</label>
             <input type="text" className="w-full sm:w-1/2 text-sm border caret-black ml-3 border-gray-300 rounded-md py-0 px-2 focus:outline-none focus:border-blue-500" />
           </div>
           <div className="mb-4 flex items-center  gap-[3.7rem]">
             <label className="text-xs font-bold text-black mr-2">Email:</label>
             <input type="text" className="w-full sm:w-1/2 text-sm border caret-black ml-3 border-gray-300 rounded-md py-0 px-2 focus:outline-none focus:border-blue-500" />
           </div>
              {/* All toggles */}
            <Toggles/>

          {/* buttons */}
           <div className="w-full mt-4 mb-2">
             <div className="flex flex-row gap-3 justify-end">
               <button 
               className="text-black text-xs font-semibold deleteButton"
               >Clear</button >
               <button 
               onClick={onClose}
               className="px-4 py-2 rounded-md text-white text-xs font-semibold submitButton bg-buttonDarkTeal "
               >Save</button >
             </div>
           </div>
         </div>
       </div>
     </div>
    )
}