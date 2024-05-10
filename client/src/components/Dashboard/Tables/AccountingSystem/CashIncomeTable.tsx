import React, { useState, useMemo, useEffect } from "react";
import { useTable, useSortBy,  Column } from "react-table";
import {FaEdit, FaPlus, FaSearch } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import MessageAction from '../Actions/messageAction';
import * as XLSX from "xlsx";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import EditDetailsAction from "../Actions/EditAction/AccountingSystemTables/CashIncomeEdit";
import './AccountingSystem.css'
import "react-calendar/dist/Calendar.css";


interface Row {
  id: number;
  DriverName: string;
  VehicleCode: string,
  Origin: string;
  Destination: string;
  Cash: string;
  FareIncome: string;
  Total: string;
}
const CashIncomeTable: React.FC = () => {

  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [showEditModal, setShowEditModal] = useState(false); 
  

  const closeEditModal = () => {
    setShowEditModal(false);
  };

  const handleEdit = (row: any) => {
    setSelectedRow(row.original);
    setShowEditModal(true); 
  };
  
  const closeModal = () => {
    setShowModal(false);
  };

  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [filterBy, setFilterBy] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchString, setSearchString] = useState<string>("")

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  
  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = parseInt(e.target.value, 10); 

    if (currentPage === 1 && itemsPerPage === 5 && selectedValue === 8) {
      setCurrentPage(0); // Reset to page 1
    }

    setItemsPerPage(selectedValue); // Update the state with the selected value
  };


//   const filterOptions = [
//     { value: "all", label: "All" },
//     { value: "Transport Cooperative", label: "Transport Cooperative" },
//     { value: "Transport Corperation", label: "Transport Corporation" },
//   ];

  const handleChangeFilterBy = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterBy(event.target.value);
  };

  const handleEnterButton = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === "Enter"){
      handleChangeSearch()
      return
    }
  }
  const handleChangeSearch = () => {

      if(searchString === "Non-Regular"){
        setSearchTerm("Non-regular");
        return
      }
      setSearchTerm(searchString);
  };

  const handleFilterRecords = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value)
    setSearchTerm("")
  }


  // const clearFilters = () => {
  //   setFromDate(null);
  //   setToDate(null);
  //   setFilterBy("all");
  //   setSearchTerm("");
  // };
  
  const [data] = useState([
    {
      id: 1,
      DriverName: "",
      VehicleCode:"",
      Origin: "",
      Destination: "",
      Cash: "",
      FareIncome: "",
      Total: "",
    },
    {
      id: 2,
      DriverName: "",
      VehicleCode:"",
      Origin: "",
      Destination: "",
      Cash: "",
      FareIncome: "",
      Total: "",
    },
    {
      id: 3,
      DriverName: "",
      VehicleCode:"",
      Origin: "",
      Destination: "",
      Cash: "",
      FareIncome: "",
      Total: "",
    },
    {
      id: 4,
      DriverName: "",
      VehicleCode:"",
      Origin: "",
      Destination: "",
      Cash: "",
      FareIncome: "",
      Total: "",
    },
    {
      id: 5,
      DriverName: "",
      VehicleCode:"",
      Origin: "",
      Destination: "",
      Cash: "",
      FareIncome: "",
      Total: "",
    },
    {
      id: 6,
      DriverName: "",
      VehicleCode:"",
      Origin: "",
      Destination: "",
      Cash: "",
      FareIncome: "",
      Total: "",
    },
    {
      id: 7,
      DriverName: "",
      VehicleCode:"",
      Origin: "",
      Destination: "",
      Cash: "",
      FareIncome: "",
      Total: "",
    },
    {
      id: 8,
      DriverName: "",
      VehicleCode:"",
      Origin: "",
      Destination: "",
      Cash: "",
      FareIncome: "",
      Total: "",
    },
    {
      id: 9,
      DriverName: "",
      VehicleCode:"",
      Origin: "",
      Destination: "",
      Cash: "",
      FareIncome: "",
      Total: "",
    },
    {
      id: 10,
      DriverName: "",
      VehicleCode:"",
      Origin: "",
      Destination: "",
      Cash: "",
      FareIncome: "",
      Total: "",
    },
    {
      id: 11,
      DriverName: "",
      VehicleCode:"",
      Origin: "",
      Destination: "",
      Cash: "",
      FareIncome: "",
      Total: "",
    }
  ]);

  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const filtered = data.filter((item) => {
      return (
        item.DriverName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.VehicleCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.Origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.Destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.Cash.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.FareIncome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.Total.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredData(filtered);
  }, [searchTerm, data]);

  // Calculate pagination indexes
  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredData.length);
  const displayedData = useMemo(() => filteredData.slice(startIndex, endIndex), [filteredData, startIndex, endIndex]);

  // Calculate total number of pages
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  // Function to handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };


  
const handleExcelDownload = () => {
  const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileName = 'Cash_Income.xlsx';
  
  // Convert data to XLS format
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
  const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  const dataBlob = new Blob([excelBuffer], {type: fileType});
  const url = URL.createObjectURL(dataBlob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  link.click();
};


const columns: Column<Row>[] = useMemo(
  () => [
      {
        Header: "DRIVER NAME",
        accessor: "DriverName",
        
      },
      {
        Header: "VEHICLE CODE",
        accessor: "VehicleCode",
      },
      {
        Header: "ORIGIN",
        accessor: "Origin",
      },
      {
        Header: "DESTINATION",
        accessor: "Destination",
      },
      {
        Header: "CASH",
        accessor: "Cash",
      },
      {
        Header: "FARE INCOME",
        accessor: "FareIncome",
      },
      {
        Header: "TOTAL",
        accessor: "Total",
      },
      {
        Header: "ACTION",
        Cell: ({row}) => (
          <>
           <div className="flex justify-center items-center space-x-3 text-lg text-buttonDarkTeal">
           <FaEdit className = "edit-icon" onClick={() => handleEdit(row)} />
            </div>
          </>
        ),
      },
      
    ],
    []
  );



  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable<Row>(
    {
      columns,
      data: displayedData,
    },
    useSortBy
  );
 

  return (
    <div className="w-tableWidth mx-auto">
      <div className=" mx-auto mt-2 2xl:mt-8 transparent-caret ">
      <div className="datepickers mr-4 flex text-xs space-x-3">
          <div className="from-datepicker ml-auto">
            <label>From:<br/></label>
            <DatePicker
              placeholderText="MM/DD/YYYY"
              showIcon
              toggleCalendarOnIconClick
              selected={fromDate}
              onChange={(date) => setFromDate(date)}
              className="border border-gray-300 rounded-md py-1 focus:outline-none w-28"
            />

          </div>
          <div className="to-datepicker">
            <label>To:<br/></label>
            <DatePicker
              placeholderText="MM/DD/YYYY"
              showIcon
              toggleCalendarOnIconClick
              selected={toDate}
              onChange={(date) => setToDate(date)}
              className="border border-gray-300 rounded-md py-1 focus:outline-none w-28"
              minDate={fromDate} 
            />
          </div>
          <div className=" ml-3">
          <select
            id="filter"
            name="filter"
            className="mt-4 w-fit py-1 px-1 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-xs"
                   value={filterBy}
        onChange={handleChangeFilterBy} >
            <option value="all">All</option>
            <option value="Transport Cooperative">Transport Cooperative</option>
            <option value="Transport Corperation">Transport Corporation</option>
          </select>
        </div>
        <div className="search-container w-[20%] flex items-center mt-4">
        <input
          type="text"
          placeholder="Filter in Records..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="h-7 border border-gray-300 rounded-[.2rem] py-1 px-2 w-full caret-black foc"
        />
        <FaSearch
          className="absolute right-[7.2rem] lg:right-[9.1rem] 2xl:right-[10.4rem] top-[8.30rem] transform -translate-y-1/2"
          size={17}
          color="#00558d"
        />
        </div>
        <div className="flex-row mt-4">
          {" "}
          <button className="bg-blue-500 rounded-md h-7 px-1 text-white font-semibold text-xs flex items-center -mr-10 "  onClick={handleExcelDownload} >
            Download <IoMdDownload className="ml-1"/>
          </button>
        </div>
    


        </div>


  <div className="flex pl-10 flex-row">
  <div className="flex flex-row items-center">
  <label htmlFor="itemsPerPage" className="  text-xs text-gray-700">
    Show:
  </label>
  <select
    id="itemsPerPage"
    name="itemsPerPage"
    className=" w-auto border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-xs"
    onChange={handleItemsPerPageChange} 
    value={itemsPerPage.toString()} // Bind selected value
  >
    <option value="5">5</option>
    <option value="8">8</option>
    <option value="10">10</option>
  </select>
  <label htmlFor="itemsPerPage" className="pl-2 text-xs text-gray-700">
    result per page
  </label>
</div>
</div>

        <table
          {...getTableProps()}
          className="table-fixed divide-y divide-gray-200 text-xs ml-0 sm:ml-7 mt-5 bg-blue-900 overflow-auto w-full">
          <thead className="text-white">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="py-4 2xl:py-4 text-left text-[.50rem] lg:text-[.60rem] 2xl:text-[.70rem]"
                  >
                    <div className="flex items-center justify-center px-1">
                      {column.render("Header")}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="text-center  text-[.75rem] 2xl:text-[.90rem]">
  {displayedData.length === 0 ? (
    <tr>
      <td colSpan={columns.length} className="text-center py-4 font-medium bg-white">
        No results found
      </td>
    </tr>
  ) : (
    rows.map((row) => {
      prepareRow(row);
      return (
        <>
        <tr
          {...row.getRowProps()}
          className={`border-b border-gray-200 ${
            row.index % 2 === 0 ? "bg-white" : "bg-gray-100"
          } hover:bg-gray-300`}
        >
          {row.cells.map((cell) => {
            return (
              <>
              <td
                {...cell.getCellProps()}
                className="border-t border-l border-gray-400 border-r px-1.5 py-2 td-truncate text-black font-medium"
              >
                {cell.render("Cell")}
              
              </td>
              </>
            );
          })}
        </tr>
        </> 
      );
    })
  )}
</tbody>
{displayedData.length === 10 && (
  <tfoot className="">
     <tr>
      {columns.map((column, columnIndex) => (
        <td
          key={column.id}
          className={`text-right pr-4 py-4 font-bold text-[.90rem] text-[#00548C] border-t border-b border-gray-400
          ${columnIndex === 0 ? `border-l border-gray-400 bg-white`
          : columnIndex === 4 ? `bg-blue-300 border-l border-t border-b border-gray-400 ` 
          : columnIndex === 5 ? `bg-blue-300 border-t border-l border-gray-400` 
          : columnIndex === 6 ? `bg-blue-300 border-r border-t border-l border-gray-400` 
          : `bg-white`}`}
        >
          {columnIndex === 3 ? "TOTAL" : ""}
        </td>
      ))}
    </tr>
  </tfoot>
)}
        </table>

        
        <div className="flex justify-start ml-6 mt-4 text-xs">
        {Array.from({ length: pageCount }, (_, index) => (
          <button
            key={index}
            className={`px-2 py-1 mx-1 rounded ${
              currentPage === index ? "bg-gray-300 text-gray-900" : "bg-white"
            }`}
            onClick={() => handlePageChange(index)}
          >
            {index + 1}
          </button>
        ))}

      </div>
      {showModal && selectedRow && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div className="absolute bg-gray-800 opacity-50 w-full h-full"></div>
          <div className="relative bg-white p-4 rounded-lg z-10">
          <MessageAction
            recipient={selectedRow.email}
            onClose={closeModal}
          />
          </div>
        </div>
      )}

      {showEditModal && selectedRow && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
            <div className="absolute bg-gray-800 opacity-50 w-full h-full"></div>
            <div className="relative bg-white p-4 rounded-lg z-10">
              <EditDetailsAction
                rowData={selectedRow}
                onClose={closeEditModal}
              />
            </div>
          </div>
        )}


      </div>
      <div className="flex justify-end -mt-5 text-blue-900">
        <div className="flex items-center">
          <FaPlus className="text-blue-900 text-xxs cursor-pointer" />
          <span className="ml-1 text-xxs font-bold">Add</span>
        </div>      
</div>

    </div>
    

    
  );
};

export default CashIncomeTable;
