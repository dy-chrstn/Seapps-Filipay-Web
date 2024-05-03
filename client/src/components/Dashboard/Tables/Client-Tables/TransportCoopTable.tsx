import React, { useState, useMemo, useEffect } from "react";
import { useTable, useSortBy,  Column } from "react-table";
import { FaSort, FaSortUp, FaSortDown, FaEdit, FaPlus } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import MessageAction from '../Actions/messageAction';
import EditDetailsAction from '../Actions/EditAction/ClientTables/TransportCoopEdit';
import * as XLSX from "xlsx";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Table.css";
import "react-calendar/dist/Calendar.css";


interface Row {
  id: number;
  logo: string;
  transpocoop: string;
  code: string;
  email: string;
  route: string;
  chairman: string;
  cda: string;
  sec: string;
  articles: string;
  businessPermit: string;
  bank: string;
  resolution: string;
  fare: string;
  date: string;
  status: string;
}
const TransportCoopTable: React.FC = () => {

  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false); 
  const [selectedRow, setSelectedRow] = useState<any>(null);

  const handleEdit = (row: any) => {
    setSelectedRow(row.original);
    setShowEditModal(true); 
  };
  

  const toggleModal = (row: any) => {
    setSelectedRow(row.original);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const toggleEditModal = (row: any) => {
    setSelectedRow(row.original);
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
  };

  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [filterBy, setFilterBy] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  
  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = parseInt(e.target.value, 10); 

    if (currentPage === 1 && itemsPerPage === 5 && selectedValue === 8) {
      setCurrentPage(0); // Reset to page 1
    }

    setItemsPerPage(selectedValue); // Update the state with the selected value
  };


  // const filterOptions = [
  //   { value: "all", label: "All" },
  //   { value: "Transport Cooperative", label: "Transport Cooperative" },
  //   { value: "Transport Corperation", label: "Transport Corporation" },
  // ];

  const handleChangeFilterBy = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterBy(event.target.value);
  };

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const clearFilters = () => {
    setFromDate(null);
    setToDate(null);
    setFilterBy("all");
    setSearchTerm("");
  };
  
  const [data] = useState([
    {
      id: 1,
      logo: "",
      transpocoop: "Transport Corperation",
      code: "TC001",
      email: "coop1@example.com",
      route: "Route 1",
      chairman: "John Doe",
      cda: " ",
      sec: "",
      articles: "",
      businessPermit: "",
      bank: "",
      resolution: "",
      fare: "₱25",
      date: "2024-04-02",
      status: "Disapproved",
    },
    {
      id: 2,
      logo: "",
      transpocoop: "Transport Cooperative",
      code: "TC002",
      email: "coop2@example.com",
      route: "Route 2",
      chairman: "John Doe",
      cda: " ",
      sec: "",
      articles: "",
      businessPermit: "",
      bank: "",
      resolution: "",
      fare: "₱30",
      date: "2024-04-01",
      status: "Approved",
    },
    {
      id: 3,
      logo: "",
      transpocoop: "Transport Cooperative",
      code: "TC003",
      email: "coop3@example.com",
      route: "Route 3",
      chairman: "John Doe",
      cda: " ",
      sec: "",
      articles: "",
      businessPermit: "",
      bank: "",
      resolution: "",
      fare: "₱40",
      date: "2024-04-05",
      status: "Approved",
    },
    {
      id: 4,
      logo: "",
      transpocoop: "Transport Cooperative",
      code: "TC004",
      email: "coop1@example.com",
      route: "Route 4",
      chairman: "John Doe",
      cda: " ",
      sec: "",
      articles: "",
      businessPermit: "",
      bank: "",
      resolution: "",
      fare: "₱25",
      date: "2024-04-04",
      status: "Disapproved",
    },
    {
      id: 5,
      logo: "",
      transpocoop: "Transport Cooperative",
      code: "TC005",
      email: "coop1@example.com",
      route: "Route 5",
      chairman: "John Doe",
      cda: " ",
      sec: "",
      articles: "",
      businessPermit: "",
      bank: "",
      resolution: "",
      fare: "₱30",
      date: "2024-04-06",
      status: "Approved",
    },
    {
      id: 6,
      logo: "",
      transpocoop: "Transport Cooperative",
      code: "TC006",
      email: "coop1@example.com",
      route: "Route 6",
      chairman: "John Doe",
      cda: " ",
      sec: "",
      articles: "",
      businessPermit: "",
      bank: "",
      resolution: "",
      fare: "₱40",
      date: "2024-04-06",
      status: "Approved",
    },
    {
      id: 7,
      logo: "",
      transpocoop: "Transport Cooperative",
      code: "TC007",
      email: "coop1@example.com",
      route: "Route 7",
      chairman: "John Doe",
      cda: " ",
      sec: "",
      articles: "",
      businessPermit: "",
      bank: "",
      resolution: "",
      fare: "₱35",
      date: "2024-04-02",
      status: "Approved",
    },
    {
      id: 8,
      logo: "",
      transpocoop: "Transport Cooperative",
      code: "TC008",
      email: "coop1@example.com",
      route: "Route 8",
      chairman: "John Doe",
      cda: "",
      sec: "",
      articles: "",
      businessPermit: "",
      bank: "",
      resolution: "",
      fare: "₱28 ",
      date: "2024-04-06",
      status: "Disapproved",
    },
    {
      id: 9,
      logo: "",
      transpocoop: "Transport Cooperative",
      code: "TC009",
      email: "coop1@example.com",
      route: "Route 9",
      chairman: "John Doe",
      cda: " ",
      sec: "",
      articles: "",
      businessPermit: "",
      bank: "",
      resolution: "",
      fare: "₱33",
      date: "2024-04-03",
      status: "Approved",
    },
    {
      id: 10,
      logo: "",
      transpocoop: "Transport Cooperative",
      code: "TC010",
      email: "coop1@example.com",
      route: "Route 10",
      chairman: "John Doe",
      cda: " ",
      sec: "",
      articles: "",
      businessPermit: "",
      bank: "",
      resolution: "",
      fare: "₱26",
      date: "2024-04-05",
      status: "Disapproved",
    },
  ]);

  const [filteredData, setFilteredData] = useState(data);
  
  useEffect(() => {
    const filtered = data.filter((item) => {
      if (filterBy === "all") {
        return true;
      } else {
        return item.transpocoop === filterBy;
      }
    });
    setFilteredData(filtered);
  }, [filterBy, data]);

  useEffect(() => {
    const filtered = data.filter((item) => {
      const itemDate = new Date(item.date);
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
        item.transpocoop.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.route.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.chairman.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.cda.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.sec.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.articles.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.businessPermit.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.bank.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.resolution.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.fare.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
  const fileName = 'Transport_Cooperative.xlsx';
  
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
        Header: "LOGO",
        accessor: "logo",
        
      },
      {
        Header: () => <div>TRANSPORT COOPERATIVE/<br/>CORPORATION</div>,
        accessor: "transpocoop",
      },
      {
        Header: "CODE",
        accessor: "code",
      },
      {
        Header: () => <div>EMAIL<br/>ADDRESS</div>,
        accessor: "email",
      },
      {
        Header: "ROUTE",
        accessor: "route",
      },
      {
        Header: "CHAIRMAN",
        accessor: "chairman",
      },
      {
        Header: "CDA Certification",
        accessor: "cda",
      },
      {
        Header: "SEC Certification",
        accessor: "sec",
      },
      {
        Header: "ARTICLES & BY LAWS",
        accessor: "articles",
      },
      {
        Header: "BUSINESS PERMIT",
        accessor: "businessPermit",
      },
      {
        Header: "BANK CERTIFICATION",
        accessor: "bank",
      },
      {
        Header: "BOARD RESOLUTION",
        accessor: "resolution",
      },
      {
        Header: "FARE MATRIX",
        accessor: "fare",
      },
      {
        Header: "DATE",
        accessor: "date",
      },
      {
        Header: "STATUS",
        accessor: "status",
        Cell: ({ value }) => (
          <div
            className={`px-1 py-1 td-truncate ${
              value === "Approved" ? "text-green-500 font-bold" : "text-red-500 font-bold"
            }`}
          >
            {value}
          </div>
        ),
      },
      

      {
        Header: "ACTION",
        Cell: ({ row }) => (
          <div className="flex justify-center items-center space-x-3 text-lg text-buttonDarkTeal">
            <TiMessages onClick={() => toggleModal(row)} /> 
            <FaEdit onClick={() => handleEdit(row)} /> 
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
      <div className=" mx-auto mt-10 transparent-caret ">
      <div className="datepickers mr-10 flex text-xxs space-x-3">
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

        <div className="search-container flex items-center mt-4">
          <input
            type="text"
            placeholder="Filter in Records..."
            value={searchTerm}
            onChange={handleChangeSearch}
            className="h-7 border border-gray-300 rounded-md py-1 px-2 " />
        </div>


        <div className="clearfilter relative flex items-center mt-4">
        <button
              className=" border border-buttonDarkTeal rounded-md p-1 h-7 text-buttonDarkTeal font-semibold text-xxs"
              onClick={clearFilters}
            >
              Clear Filters
            </button>
        </div>
        <div className="flex-row mt-4">
          {" "}
          <button className="bg-blue-500 rounded-md h-7 px-1 text-white font-semibold text-xxs flex items-center -mr-10 "  onClick={handleExcelDownload} >
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
          className="table-fixed divide-y overflow-x-auto divide-gray-200 text-xxs ml-0 sm:ml-6 mt-5 bg-blue-900">
          <thead className="text-white">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
  <th
    {...column.getHeaderProps(column.canSort ? column.getSortByToggleProps() : {})}
    className="py-1 px-1 2xl:py-5 text-center text-[.60rem] 2xl:text-[.90rem]"
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
                className="border px-1 td-truncate"
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

      </div>
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

export default TransportCoopTable;
