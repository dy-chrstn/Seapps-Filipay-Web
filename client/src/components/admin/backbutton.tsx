import React from 'react';

interface BackButtonProps {
  onClick: () => void; // Define onClick prop
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="flex items-center text-sm font-bold text-buttonDarkTeal focus:outline-none ml-20 pt-1">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      <span>Back</span>
    </button>
  );
};

export default BackButton;
