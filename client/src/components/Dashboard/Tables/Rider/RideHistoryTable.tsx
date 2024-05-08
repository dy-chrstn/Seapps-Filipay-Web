import React, { useState, useMemo, useEffect } from "react";
import { useTable, useSortBy,  Column } from "react-table";
import { FaSort, FaSortUp, FaSortDown, FaEdit, FaSearch } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import * as XLSX from "xlsx";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-calendar/dist/Calendar.css";
import Select, { MultiValue, ActionMeta, StylesConfig } from "react-select";
import { useNavigate } from 'react-router-dom';
import './Rider.css'
import EditDetailsAction from "../Actions/EditAction/ClientTables/TransportCoopEdit";

interface Row {
  id: number;
  name: string;
  referenceCode: string;
  cardSN: string;
  passengerValidator: string;
  driversMonitor: string;
  origin: string;
  destination: string;
  maximumFee: string;
  rideFee: string;
  travelDistance: string;
  endDate: string;
  startDate: string;
  fare: string;
  status: string;
}

interface CustomOption {
    value: string;
    label: string;
  }


const RideHistoryTable: React.FC = () => {

  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [selectedOptions, setSelectedOptions] = useState<CustomOption[] | null>(null);
  const [selectedSingleOption, setSelectedSingleOption] = useState<CustomOption | null>(null);
  const [showEditModal, setShowEditModal] = useState(false); 
  

  const closeEditModal = () => {
    setShowEditModal(false);
  };

  const handleEdit = (row: any) => {
    setSelectedRow(row.original);
    setShowEditModal(true); 
  };


  const navigate = useNavigate();

  const navigatePage = (path: string) => {
    navigate(path);
  };
  

  const handleViewSummaryReport = () => {
    navigate('/Menu/SubPages/RiderSubPages/SummaryReport');
  };
  
  const toggleModal = (row: any) => {
    setSelectedRow(row.original);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchString, setSearchString] = useState<string>("")

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);

 const options: CustomOption[] = [
    { value: "SND", label: "SND" },
    { value: "SNR", label: "SNR" },
    { value: "All", label: "All Transactions" }
  ];

  const singleOptions: CustomOption[] = [
    { value: "Transport Cooperative", label: "Transport Cooperative" },
    { value: "Transport Corporation", label: "Transport Corporation" }
  ];


   const customStyles: StylesConfig<CustomOption, true> = {
    control: (provided, state) => ({
      ...provided,
      minHeight: '28px',
      height: '28px',
      
    }),
    valueContainer: (provided, state) => ({
        ...provided,
        padding: '0 5px'
        
      }),
      input: (provided, state) => ({
      ...provided,
      margin: '0px',
      
    }),
    indicatorSeparator: state => ({
      display: 'none',
      
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height: '26px',
    }),
    dropdownIndicator: base => ({
        ...base,
        color: "#00558d", // Custom colour
        
      })
  };

  const customSingleSelectStyles: StylesConfig<CustomOption, false> = {
    control: (provided, state) => ({
      ...provided,
      minHeight: '28px',
      height: '28px',
      
    }),
    valueContainer: (provided, state) => ({
        ...provided,
        padding: '0 5px'
        
      }),
      input: (provided, state) => ({
      ...provided,
      margin: '0px',
      
    }),
    indicatorSeparator: state => ({
      display: 'none',
      
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height: '26px',
    }),
    dropdownIndicator: base => ({
        ...base,
        color: "#00558d", // Custom colour
        
      })
  };

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = parseInt(e.target.value, 10); 

    if (currentPage === 1 && itemsPerPage === 5 && selectedValue === 8) {
      setCurrentPage(0); // Reset to page 1
    }

    setItemsPerPage(selectedValue); // Update the state with the selected value
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
  
  const [data] = useState([
    {
      id: 1,
      name: "",
      referenceCode: "",
      cardSN: "SNR",
      passengerValidator: "",
      driversMonitor: "",
      origin: "",
      destination: "",
      maximumFee: "",
      rideFee: "",
      travelDistance: "",
      endDate: "",
      startDate: "",
      fare: "",
      status: "Completed",
    },
    {
      id: 2,
      name: "",
      referenceCode: "",
      cardSN: "SND",
      passengerValidator: "",
      driversMonitor: "",
      origin: "",
      destination: "",
      maximumFee: "",
      rideFee: "",
      travelDistance: "",
      endDate: "",
      startDate: "",
      fare: "",
      status: "In Progress",
    },
    {
      id: 3,
      name: "",
      referenceCode: "",
      cardSN: "",
      passengerValidator: "",
      driversMonitor: "",
      origin: "",
      destination: "",
      maximumFee: "",
      rideFee: "",
      travelDistance: "",
      endDate: "",
      startDate: "",
      fare: "",
      status: "Completed",
    },
    {
      id: 4,
      name: "",
      referenceCode: "",
      cardSN: "",
      passengerValidator: "",
      driversMonitor: "",
      origin: "",
      destination: "",
      maximumFee: "",
      rideFee: "",
      travelDistance: "",
      endDate: "",
      startDate: "",
      fare: "",
      status: "Completed",
    },
    {
      id: 5,
      name: "",
      referenceCode: "",
      cardSN: "",
      passengerValidator: "",
      driversMonitor: "",
      origin: "",
      destination: "",
      maximumFee: "",
      rideFee: "",
      travelDistance: "",
      endDate: "",
      startDate: "",
      fare: "",
      status: "In-Progress",
    },
    {
      id: 6,
      name: "",
      referenceCode: "",
      cardSN: "",
      passengerValidator: "",
      driversMonitor: "",
      origin: "",
      destination: "",
      maximumFee: "",
      rideFee: "",
      travelDistance: "",
      endDate: "",
      startDate: "",
      fare: "",
      status: "Completed",
    },
    {
      id: 7,
      name: "",
      referenceCode: "",
      cardSN: "",
      passengerValidator: "",
      driversMonitor: "",
      origin: "",
      destination: "",
      maximumFee: "",
      rideFee: "",
      travelDistance: "",
      endDate: "",
      startDate: "",
      fare: "",
      status: "In Progress",
    },
    {
      id: 8,
      name: "",
      referenceCode: "",
      cardSN: "",
      passengerValidator: "",
      driversMonitor: "",
      origin: "",
      destination: "",
      maximumFee: "",
      rideFee: "",
      travelDistance: "",
      endDate: "",
      startDate: "",
      fare: "",
      status: "Completed",
    },
    {
      id: 9,
      name: "",
      referenceCode: "",
      cardSN: "",
      passengerValidator: "",
      driversMonitor: "",
      origin: "",
      destination: "",
      maximumFee: "",
      rideFee: "",
      travelDistance: "",
      endDate: "",
      startDate: "",
      fare: "",
      status: "Completed",
    },
    {
      id: 10,
      name: "",
      referenceCode: "",
      cardSN: "",
      passengerValidator: "",
      driversMonitor: "",
      origin: "",
      destination: "",
      maximumFee: "",
      rideFee: "",
      travelDistance: "",
      endDate: "",
      startDate: "",
      fare: "",
      status: "In Progress",
    },
  ]);

  const [filteredData, setFilteredData] = useState<Row[]>([]);
  
  useEffect(() => {
    filterDataByCardSN();
  }, [selectedOptions]);

  const filterDataByCardSN = () => {
    if (!selectedOptions || selectedOptions.length === 0 || selectedOptions.some(option => option.value === "All")) {
      setFilteredData(data);
    } else {
      const filtered = data.filter(item => selectedOptions.some(option => option.value === item.cardSN));
      setFilteredData(filtered);
    }
  };

  useEffect(() => {
    const filtered = data.filter((item) => {
      const itemDate = new Date(item.startDate);
      const formattedFromDate = new Date(
        fromDate ? fromDate.getFullYear() : 0,
        fromDate ? fromDate.getMonth() : 0,
        fromDate ? fromDate.getDate() : 1
      );
      const formattedToDate = new Date(
        toDate ? toDate.getFullYear() : 9999,
        toDate ? toDate.getMonth() : 11,
        toDate ? toDate.getDate() + 1 : 1
      );
      return itemDate >= formattedFromDate && itemDate < formattedToDate;
    });
    setFilteredData(filtered);
  }, [fromDate, toDate, data]);

  useEffect(() => {
    const filtered = data.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.referenceCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.cardSN.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.passengerValidator.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.driversMonitor.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.maximumFee.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.rideFee.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.travelDistance.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.endDate.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.startDate.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.status.toLowerCase().includes(searchTerm.toLowerCase()) 



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
  const fileName = 'RideHistoryTable.xlsx';
  
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
          Header: "NAME",
          accessor: "name",
          width: 350,
          minWidth: 30,
          maxWidth: 150,
          
        },
        {
          Header: () => <div>REFERENCE<br/>CODE</div>,
          accessor: "referenceCode",
          width: 350,
          minWidth: 30,
          maxWidth: 150,
        },
        {
          Header: "CARD SN",
          accessor: "cardSN",
          width: 250,
          minWidth: 30,
          maxWidth: 150,
        },
        {
            Header: () => <div>PASSENGER'S<br/>VALIDATOR</div>,
            accessor: "passengerValidator",
            width: 250,
            minWidth: 30,
            maxWidth: 150,
          },
        {
          Header: () => <div>DRIVER'S<br/>MONITOR</div>,
          accessor: "driversMonitor",
          width: 250,
          minWidth: 30,
          maxWidth: 150,
        },
        {
            Header: "ORIGIN",
            accessor: "origin",
          width: 250,
          minWidth: 30,
          maxWidth: 150,
        },
        {
          Header: "DESTINATION",
          accessor: "destination",
          width: 250,
          minWidth: 30,
          maxWidth: 150,
        },
        {
          Header: () => <div>MAXIMUM<br/>FEE</div>,
          accessor: "maximumFee",
          width: 250,
          minWidth: 30,
          maxWidth: 150,
        },
        {
          Header: "RIDE FEE",
          accessor: "rideFee",
          width: 250,
          minWidth: 30,
          maxWidth: 150,
        },
        {
        Header: () => (<div>TRAVEL DISTANCE <br /> (IN KM)</div>),            
         accessor: "travelDistance",
          width: 250,
          minWidth: 30,
          maxWidth: 150,
        },
        {
          Header: "END DATE",
          accessor: "endDate",
          width: 250,
          minWidth: 30,
          maxWidth: 150,
        },
        {
          Header: "START DATE",
          accessor: "startDate",
          width: 250,
          minWidth: 30,
          maxWidth: 150,
        },
        {
            Header: "STATUS",
            accessor: "status",
            width: 250,
            minWidth: 30,
            maxWidth: 150,
            Cell: ({ value }) => (
                <div
                  className={`px-1 py-1 ${
                    value === "Completed" ? "text-buttonDarkTeal font-bold" : "text-gray-700 font-bold"
                  }`}
                >
                  {value}
                </div>
              ),
          },
  
        {
          Header: "ACTION",
          width: 250,
          minWidth: 30,
          maxWidth: 150,
          Cell: ({ row }) => (
            <div className="flex justify-center items-center space-x-3 text-lg text-buttonDarkTeal">
              <FaEdit className = "edit-icon" onClick={() => handleEdit(row)} />{" "}
            </div>
          ),
          disableSortBy: true, // Disable sorting for this column
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
      <div className=" mx-auto mt-8 transparent-caret ml-5">
      <div className="datepickers mr-10 flex text-xxs space-x-3 items-center justify-end">
            <label>From:<br/></label>
              <DatePicker
                placeholderText="MM/DD/YYYY"
                showIcon
                toggleCalendarOnIconClick
                selected={fromDate}
                onChange={(date) => setFromDate(date)}
                className="border border-gray-300 rounded-md py-1 focus:outline-none w-28"
              />
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
              <Select
                options={options}
                isMulti
                placeholder="Filter by Card SN"
                value={selectedOptions}
                onChange={(newValue: MultiValue<CustomOption>, actionMeta: ActionMeta<CustomOption>) => {
                  setSelectedOptions(newValue as CustomOption[]);
                }}
                styles={customStyles} 
              />
              <Select
                options={singleOptions}
                placeholder="Transport Cooperative"
                value={selectedSingleOption}
                onChange={(newValue: CustomOption | null) => setSelectedSingleOption(newValue)}
                styles={customSingleSelectStyles}
              />
              <div className="search-container w-[20%] flex items-center">
                <input
                  type="text"
                  placeholder="Filter in Records..."
                  value={searchString}
                  onChange={handleFilterRecords}
                  onKeyDown={handleEnterButton}
                  className="h-7 border border-gray-500 rounded-[.2rem] py-1 px-2 w-full caret-black" />
                <FaSearch
                  onClick={handleChangeSearch}
                  className = "absolute right-[7.2rem] lg:right-[8.2rem] 2xl:right-[10.4rem]"
                size = {17} 
                color = "#00548C"/>
              </div>

              
              <div className="flex-row">
                {" "}
                <button className="bg-blue-500 rounded-md h-7 px-1 text-white font-semibold text-xs flex items-center -mr-10  hover:bg-blue-600 transition-colors duration-300"  onClick={handleExcelDownload} >
                  Download <IoMdDownload className="ml-1"/>
                </button>
              </div>
        </div>


  <div className="flex pl-8 flex-row">
  <div className="flex flex-row items-center">
  <label htmlFor="itemsPerPage" className="  text-xxs text-gray-700">
    Show: &nbsp;
  </label>
  <select
    id="itemsPerPage"
    name="itemsPerPage"
    className=" w-auto border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-xxs"
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
          className="table-fixed divide-y overflow-x-auto divide-gray-200 text-xs ml-0 sm:ml-7 mt-5 bg-blue-900">
          <thead className="text-white">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
  <th
    {...column.getHeaderProps(column.canSort ? column.getSortByToggleProps() : {})}
    className="py-1 text-center text-[.70rem] 2xl:text-[.90rem]" style={{ minWidth: column.minWidth, width: column.width }}
  >
   <div className="flex items-center justify-center">
                      {column.render("Header")}
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <FaSortDown color={"#2F80ED"} />
                        ) : (
                          <FaSortUp color={"#2F80ED"}/>
                        )
                      ) : (
                        <FaSort />
                      )}
                    </div>
                  </th>
))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="text-center">
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
        <tr
          {...row.getRowProps()} 
          className={`border-b border-gray-200 ${
            row.index % 2 === 0 ? "bg-white" : "bg-gray-100"
          } hover:bg-gray-300`}
        >
          {row.cells.map((cell) => {
            return (
              <td
                {...cell.getCellProps()}
                className="border border-sky-900 px-1 py-1 td-truncate"
              >
                {cell.render("Cell")}
              </td>
            );
          })}
        </tr>
      );
    })
  )}
</tbody>

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
      </div>

      <div className="flex justify-end -mt-5 text-blue-900">
  <div className="flex items-center">
    <button
      className="bg-blue-500 rounded-md h-7 px-1 text-white font-semibold text-xs flex items-center cursor-pointer hover:bg-blue-600 transition-colors duration-300"
      onClick={() => navigatePage('/Menu/SubPages/RiderSubPages/SummaryReport')}>
      View Summary Report
    </button>
  </div>
</div>
    </div>
    

    
  );
};

export default RideHistoryTable;
