import React, { useState } from 'react';
import Toggle from '../../../../../toggle/toggle';

export const Toggles: React.FC<{}> = () => {
  const [toggleAll, setToggleAll] = useState<boolean>(false);
  const [toggles, setToggles] = useState<boolean[]>(Array(26).fill(false));

  const toggleLabels = [
    { rightLabel: "Transport Cooperatives", leftLabel: "Messages-Rider" },
    { rightLabel: "Vehicle Service", leftLabel: "Cash In" },
    { rightLabel: "Vehicle", leftLabel: "Transaction History" },
    { rightLabel: "Distributor", leftLabel: "Messages - Distributor" },
    { rightLabel: "Retailer", leftLabel: "Fare Income" },
    { rightLabel: "Drivers List", leftLabel: "Load Sales" },
    { rightLabel: "Time Tracker", leftLabel: "Card Sales" },
    { rightLabel: "Sales", leftLabel: "Email Template" },
    { rightLabel: "Transaction History - Driver", leftLabel: "Privacy Policy" },
    { rightLabel: "Messages - Driver", leftLabel: "Admin/Sub-Admin Controller" },
    { rightLabel: "Riders List", leftLabel: "Admin Activity" },
    { rightLabel: "Wallet", leftLabel: "Support" },
    { rightLabel: "Ride History", leftLabel: "" },
  ];

  const handleToggleChange = (index: number) => {
    const newToggles = [...toggles];
    newToggles[index] = !newToggles[index];
    setToggles(newToggles);
  };

  return (
    <>
      <div className='flex flex-row justify-end w-full gap-2 items-center'>
        <span className='text-xs font-bold'>Toggle All</span>
        <Toggle value={toggleAll} onChange={() => {
          const newToggleState = !toggleAll;
          setToggleAll(newToggleState);
          setToggles(Array(26).fill(newToggleState));
        }} />
      </div>
      <div className='flex flex-col gap-2 w-full mt-4'>
        {toggleLabels.map((item, index) => (
          <div key={index} className='flex flex-row gap-7 items-center w-full'>
            {item.rightLabel && (
              <div className='flex flex-row w-full justify-between items-center'>
                <span className='md:text-[.6rem] 2xl:text-xs font-bold'>{item.rightLabel}</span>
                <Toggle value={toggles[index * 2]} onChange={() => handleToggleChange(index * 2)} />
              </div>
            )}
            {item.leftLabel && (
              <div className='flex flex-row w-full justify-between items-center'>
                <span className='md:text-[.6rem] 2xl:text-xs font-bold'>{item.leftLabel}</span>
                <Toggle value={toggles[index * 2 + 1]} onChange={() => handleToggleChange(index * 2 + 1)} />
              </div>
            )}
            {/* dummy */}
            {item.leftLabel === "" && (
              <div className='flex flex-row w-full justify-between items-center'/>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
