import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import Header from '../../../../components/admin/header';
import Menu from '../../../../components/admin/Menu/menu';
import MiniMenu from '../../../../components/admin/Menu/miniMenu';
import SummaryReportTable from '../../../../components/Dashboard/Tables/Rider/SummaryReportTable';
import BackButton from '../../../../components/admin/backbutton'; // Adjust the import path as needed

const SummaryReport: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // Access the navigate function

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const back = () => {
    navigate('/Rider/RideHistory'); // Function to navigate to Ride History
  };

  return (
    <div className="w-screen h-screen">
      <Header title="Summary Report (Ride History)" onClick={openMenu} /> 
      <div className="absolute top-1">
        <BackButton onClick={back} />
      </div>
      {menuOpen ? <Menu /> : <MiniMenu />}
      <div className="flex flex-col flex-grow">
        <SummaryReportTable />
      </div>
    </div>
  );
};

export default SummaryReport;
