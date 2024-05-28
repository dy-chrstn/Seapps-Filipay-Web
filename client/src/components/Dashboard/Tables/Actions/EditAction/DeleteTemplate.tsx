import React from 'react';

interface DeleteTemplateProps {
    onClose: () => void;
}

export const DeleteTemplate: React.FC<DeleteTemplateProps> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
            <div className="relative bg-white p-4 rounded-lg max-w-md w-full z-10 flex flex-col justify-center">
                <div className="flex items-center justify-between">
                    <h2 className="text-xs sm:text-sm font-bold text-blue-800">
                        Delete Template
                    </h2>
                    <div className="flex space-x-2">
                        <button className="text-sm font-semibold text-gray-500 hover:text-gray-700">
                            -
                        </button>
                        <button
                            className="text-sm font-semibold text-red-500 hover:text-red-700"
                            onClick={onClose}
                        >
                            ×
                        </button>
                    </div>
                </div>
               <span className='2xl:text-sm sm:text-[.7rem] self-center mt-4'>Are you sure you want to delete this file? Click DELETE to proceed.</span>

                <div className="mt-2">
                    <div className="flex justify-end mt-4">
                        <button
                            className="2xl:text-sm sm:text-[.7rem] font-bold text-gray-700 py-1 px-4 rounded-md"
                            onClick={onClose}
                        >
                            CANCEL
                        </button>
                        <button
                            className=" 2xl:text-sm sm:text-[.7rem] ml-2 hover:bg-blue-600 transition-colors duration-300 bg-blue-800 font-bold text-white py-1 px-4 rounded-md mr-2"
                            onClick={onClose}
                        >
                            DELETE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
