import React, { useState } from "react";


interface MessageActionProps {
  onClose: () => void;
  recipient: string;
}

const MessageAction: React.FC<MessageActionProps> = ({ onClose, recipient }) => {
  const [subject, setSubject] = useState("");
  const [editorHtml, setEditorHtml] = useState("");

  const handleEditorChange = (html: string) => {
    setEditorHtml(html);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-1/2 h-96 rounded-lg shadow-lg">
        <div className="flex justify-between items-center px-4 py-2 bg-gray-200 rounded-t-lg">
          <h2 className="text-xs font-bold">New Message</h2>
          <div className="flex space-x-2">
            <button className="text-sm font-semibold text-gray-500 hover:text-gray-700">-</button>
            <button className="text-sm font-semibold text-red-500 hover:text-red-700" onClick={onClose}>×</button>
          </div>
        </div>
        <div className="p-4">
          <div className="mb-4 flex items-center">
            <label className="text-xs font-bold text-black mr-2">Recipient:</label>
            <input type="text" value={recipient} readOnly className="w-full sm:w-1/2 text-sm border border-gray-300 rounded-md py-0 px-2 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4 flex items-center">
            <label className="text-xs font-bold text-black mr-2">Subject:</label>
            <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full sm:w-1/2 text-sm border ml-3 border-gray-300 rounded-md py-0 px-2 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label className="text-xs font-bold text-black">Message:</label>
            <div className="mt-2">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageAction;
