import React, { useEffect, useState } from "react";
import { Jodit } from "jodit";
import '../../messageAction.css'
import { DeleteTemplate } from "../DeleteTemplate";

interface MessageActionProps {
  onClose: () => void;
}

interface MessageDataProps {
  subject: string;
  message: string;
}

const EditSupport: React.FC<MessageActionProps> = ({ onClose }) => {

  let editor: Jodit
  const [messageData, setMessageData] = useState<MessageDataProps>({
    subject: "",
    message: "",
  })

  const [showDelete, setShowDelete] = useState<boolean>(false)

  
  const handleChangeText = (name: string, event: any) => {
    setMessageData({
      ...messageData,
      [name]: event.target.value 
    })
    return
  }
  console.log("Message", messageData)

  // alert(window.innerWidth)

  useEffect(() => {

    const setEditorHeight = () => {
    
      const height =  window.innerWidth < 1370 ? "270px" : "400px";
      return height
    }; 

    editor = Jodit.make("#editor", {
      "height":  setEditorHeight(),
      "buttons": "bold,italic,underline,strikethrough,eraser,ul,ol,font,fontsize,paragraph,lineHeight,superscript,subscript,classSpan,file,image,video,speechRecognize,spellcheck"
    });

    editor.events.on('change', (content) => {
      setMessageData({
        ...messageData,
        message: content
      })
    });

    return () => {
      
    window.addEventListener('resize', setEditorHeight); // Adjust height on window resize
      editor.destruct(); 
    };
  }, [window.innerWidth]); 


  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center">
     {showDelete && (
       <DeleteTemplate
       onClose={() => setShowDelete(false)}
       />
     )}
      <div className="bg-white w-1/2 h-[90%] rounded-lg shadow-lg">
        <div className="flex justify-between items-center px-4 py-2 bg-gray-200 rounded-t-lg">
          <h2 className="text-xs font-bold text-blue-700">Edit Message ?</h2>
          <div className="flex space-x-2">
            <button className="text-sm font-semibold text-gray-500 hover:text-gray-700">-</button>
            <button className="text-sm font-semibold text-red-500 hover:text-red-700" onClick={onClose}>×</button>
          </div>
        </div>
        <div className="relative p-4 h-[90%]">
          <div className="mb-4 flex items-center">
            <label className="text-xs font-bold text-black mr-2">Subject:</label>
            <input type="text" value={messageData.subject} onChange={(event) => handleChangeText("subject", event)} className="w-full sm:w-1/2 text-sm border caret-black ml-3 border-gray-300 rounded-md py-0 px-2 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4 flex items-center">
            <label className="text-xs font-bold text-black mr-2">Identifier:</label>
            <input type="text" value={messageData.subject} onChange={(event) => handleChangeText("subject", event)} className="w-full sm:w-1/2 text-sm border caret-black ml-3 border-gray-300 rounded-md py-0 px-2 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="flex flex-col h-[100%]">
            <div className="flex flex-row justify-between mb-2">
                <label className="text-xs font-bold text-black ">Text:</label>
                <div className="gap-4 flex flex-row">
                 
                  <select
                    className=" border border-gray-300 bg-whiterounded-md shadow-sm h-7 rounded-md focus:outline-none sm:text-xs"
                    // onChange={handleItemsPerPageChange} 
                    // value={itemsPerPage.toString()} // Bind selected value
                  >
                    <option value="">Add Attachment</option>
                    <option value="Insert Image">Insert Image</option>
                    <option value="Upload Image">Upload Image</option>
                    <option value="Insert Signature">Insert Signature</option>
                    <option value="Upload Signature">Upload Signature</option>
                    <option value="Cash Out Status(Approved)">Cash Out Status(Approved)</option>
                    <option value="Cash Out Status(Dissaproved)">Cash Out Status(Dissaproved)</option>
                    <option value="KYC Update Request">KYC Update Request</option>
                    <option value="Filipay News Letter">Filipay News Letter</option>
                  </select>
                  <select
                    className=" border border-gray-300 bg-whiterounded-md shadow-sm h-7 rounded-md focus:outline-none sm:text-xs"
                    // onChange={handleItemsPerPageChange} 
                    // value={itemsPerPage.toString()} // Bind selected value
                  >
                    <option value="">Email Template</option>
                    <option value="Activation Link">Activation Link</option>
                    <option value="Contact Us">Contact Us</option>
                    <option value="Cash In Status(Approved)">Cash In Status(Approved)</option>
                    <option value="Cash In Status(Dissaproved)">Cash In Status(Dissaproved)</option>
                    <option value="Cash Out Status(Approved)">Cash Out Status(Approved)</option>
                    <option value="Cash Out Status(Dissaproved)">Cash Out Status(Dissaproved)</option>
                    <option value="KYC Update Request">KYC Update Request</option>
                    <option value="Filipay News Letter">Filipay News Letter</option>
                  </select>
                </div>
               
            </div>
            <div 
            className="rounded-md caret-black"
            id="editor" />
          </div>
          <div className="absolute bottom-0 w-[95%]">
            <div className=" absolute flex flex-row bottom-4 right-2 gap-3">
              <button 
              onClick={() => setShowDelete(true)}
              className="text-black text-xs font-semibold deleteButton"
              >Delete</button >
              <button 
              onClick={onClose}
              className="p-3 rounded-md text-white text-xs font-semibold submitButton bg-buttonDarkTeal "
              >Send Message</button >
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditSupport;

