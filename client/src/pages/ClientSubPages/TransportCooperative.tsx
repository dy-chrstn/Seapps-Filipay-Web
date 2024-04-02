import React from 'react';
import Header from '../../components/Dashboard/header';
import Menu from '../../components/Dashboard/Menu/menu';
import TransportCoopTable from '../../components/Dashboard/Tables/TransportCoopTable';

const TransportCooperative = () => {
  return (
    <div className="w-screen h-screen">
        <Header title="Transport Cooperative" />
      <div className="flex-row flex">

      <Menu/>
      <div className='flex flex-col flex-grow'>
      <TransportCoopTable />
      </div>
      </div>
      </div>
  );
};

export default TransportCooperative;
