import React, { useState, useMemo, useEffect } from "react";
import { useTable, useSortBy,  Column } from "react-table";
import { FaSort, FaSortUp, FaSortDown, FaEdit, FaPlus } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import MessageAction from '../Actions/messageAction';
import * as XLSX from "xlsx";
import "./Table.css";


interface Row {
  id: number;
  name: string;
  distributor: string;
  accountNumber: string;
  email: string;
  mobileNumber: string;
  photoID: string;
  selfieVerification: string;
  businessPermit: string;
}
const RetailerTable: React.FC = () => {

  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);


  const toggleModal = (row: any) => {
    setSelectedRow(row.original);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };


  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterBy, setFilterBy] = useState<string>("all");


  const [currentPage, setCurrentPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  
  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = parseInt(e.target.value, 10); 

    if (currentPage === 1 && itemsPerPage === 5 && selectedValue === 8) {
      setCurrentPage(0); // Reset to page 1
    }

    setItemsPerPage(selectedValue); // Update the state with the selected value
  };

  const filterOptions = [
    { value: "all", label: "All" },
    { value: "Distributor", label: "Distributor" },
    { value: "Distributor 1", label: "Distributor 1" },
  ];

  const handleChangeFilterBy = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterBy(event.target.value);
  };


  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setFilterBy("all");

  };
  
  const [data] = useState([
    {
      id: 1,
      name: "",
      distributor: "",
      accountNumber: "",
      email: "",
      mobileNumber: "",
      photoID: "",
      selfieVerification: "",
      businessPermit: "",
    },
    {
      id: 2,
      name: "",
      distributor: "",
      accountNumber: "",
      email: "",
      mobileNumber: "",
      photoID: "",
      selfieVerification: "",
      businessPermit: "",
    },
    {
      id: 3,
      name: "",
      distributor: "",
      accountNumber: "",
      email: "",
      mobileNumber: "",
      photoID: "",
      selfieVerification: "",
      businessPermit: "",
    },
    {
      id: 4,
      name: "",
      distributor: "",
      accountNumber: "",
      email: "",
      mobileNumber: "",
      photoID: "",
      selfieVerification: "",
      businessPermit: "",
    },
    {
      id: 5,
      name: "",
      distributor: "",
      accountNumber: "",
      email: "",
      mobileNumber: "",
      photoID: "",
      selfieVerification: "",
      businessPermit: "",
    },
    {
      id: 6,
      name: "",
      distributor: "",
      accountNumber: "",
      email: "",
      mobileNumber: "",
      photoID: "",
      selfieVerification: "",
      businessPermit: "",
    },
    {
      id: 7,
      name: "",
      distributor: "",
      accountNumber: "",
      email: "",
      mobileNumber: "",
      photoID: "",
      selfieVerification: "",
      businessPermit: "",
    },
    {
      id: 8,
      name: "",
      distributor: "",
      accountNumber: "",
      email: "",
      mobileNumber: "",
      photoID: "",
      selfieVerification: "",
      businessPermit: "",
    },
    {
      id: 9,
      name: "",
      distributor: "",
      accountNumber: "",
      email: "",
      mobileNumber: "",
      photoID: "",
      selfieVerification: "",
      businessPermit: "",
    },
    {
      id: 10,
      name: "",
      distributor: "",
      accountNumber: "",
      email: "",
      mobileNumber: "",
      photoID: "",
      selfieVerification: "",
      businessPermit: "",
    },
  ]);

  const [filteredData, setFilteredData] = useState(data);
  
  useEffect(() => {
    const filtered = data.filter((item) => {
      if (filterBy === "all") {
        return true;
      } else {
        return item.distributor === filterBy;
      }
    });
    setFilteredData(filtered);
  }, [filterBy, data]);

  useEffect(() => {
    const filtered = data.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.distributor.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.accountNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.mobileNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.photoID.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.selfieVerification.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.businessPermit.toLowerCase().includes(searchTerm.toLowerCase()) 
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
  const fileName = 'RetailerTable.xlsx';
  
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
        width: 250,
        minWidth: 30,
        maxWidth: 150,
        
      },
      {
        Header: "DISTRIBUTOR",
        accessor: "distributor",
        width: 250,
        minWidth: 30,
        maxWidth: 150,
      },
      {
        Header: "ACCOUNT NUMBER",
        accessor: "accountNumber",
        width: 250,
        minWidth: 30,
        maxWidth: 150,
      },
      {
        Header: "EMAIL ADDRESS",
        accessor: "email",
        width: 250,
        minWidth: 30,
        maxWidth: 150,
      },
      {
        Header: "MOBILE NUMBER",
        accessor: "mobileNumber",
        width: 250,
        minWidth: 30,
        maxWidth: 150,
      },
      {
        Header: "PHOTO ID",
        accessor: "photoID",
        width: 250,
        minWidth: 30,
        maxWidth: 150,
      },
      {
        Header: () => <div>SELFIE/<br/>VERIFICATION</div>,
        accessor: "selfieVerification",
        width: 250,
        minWidth: 30,
        maxWidth: 150,
      },
      {
        Header: () => <div>BUSINESS/<br/>PERMIT</div>,
        accessor: "businessPermit",
        width: 250,
        minWidth: 30,
        maxWidth: 150,
      },

      {
        Header: "ACTION",
        width: 250,
        minWidth: 30,
        maxWidth: 150,
        Cell: ({ row }) => (
          <div className="flex justify-center items-center space-x-3 text-lg text-buttonDarkTeal">
            <TiMessages onClick={() => toggleModal(row)} /> <FaEdit />
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
      <div className=" mx-auto mt-8 transparent-caret ">
      <div className="mr-10 flex text-xs space-x-3">
          <div className=" ml-auto">
       
        <div className="search-container flex items-center mt-4">
          <input
            type="text"
            placeholder="Filter in Records..."
            value={searchTerm}
            onChange={handleChangeSearch}
            className="h-7 border border-gray-300 rounded-md py-1 px-2 " />
        </div>
        </div>
        <div className=" ml-3">
          <select
            id="filter"
            name="filter"
            className="mt-4 w-fit py-1 px-1 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-xs"
                   value={filterBy}
        onChange={handleChangeFilterBy} >
            <option value="all">All</option>
            <option value="Distributor">Distributor</option>
            <option value="Distributor 1">Distributor 1</option>
          </select>
        </div>

        <div className="clearfilter relative flex items-center mt-4">
        <button
              className=" border border-buttonDarkTeal rounded-md p-1 h-7 text-buttonDarkTeal font-semibold text-xs"
              onClick={clearFilters}
            >
              Clear Filters
            </button>
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
          className="table-fixed divide-y overflow-x-auto divide-gray-200 text-xs ml-0 sm:ml-7 mt-5 bg-blue-900">
          <thead className="text-white">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
  <th
    {...column.getHeaderProps(column.canSort ? column.getSortByToggleProps() : {})}
    className="py-2 px-1 text-left" style={{ minWidth: column.minWidth, width: column.width }}
  >
    <div className="flex items-center justify-center">
      {column.render("Header")}
      {column.canSort && (
        <>
          {column.isSorted ? (
            column.isSortedDesc ? (
              <FaSortDown />
            ) : (
              <FaSortUp />
            )
          ) : (
            <FaSort />
          )}
        </>
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
                className="border px-4 py-1.5 pl-10 td-truncate"
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

export default RetailerTable;
