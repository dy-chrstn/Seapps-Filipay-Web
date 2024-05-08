import React, { useState, useMemo, useEffect } from "react";
import { useTable, useSortBy,  Column } from "react-table";
import { FaSort, FaSortUp, FaSortDown, FaEdit, FaPlus, FaSearch } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import MessageAction from '../Actions/messageAction';
import * as XLSX from "xlsx";
import "./Table.css";
import AddDetailsAction from '../Actions/AddAction/ClientTables/DistributorAdd';
import EditDetailsAction from '../Actions/EditAction/ClientTables/DistributorEdit';


interface Row {
  id: number;
  name: string;
  accountNumber: string;
  email: string;
  mobileNumber: string;
  address: string;
  photoID: string;
  selfieVerification: string;
  businessPermit: string;
}
const DistributorTable: React.FC = () => {

  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [showEditModal, setShowEditModal] = useState(false); 
  const [showAddModal, setShowAddModal] = useState(false); 
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);


  const toggleModal = (row: any) => {
    setSelectedRow(row.original);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  
  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = parseInt(e.target.value, 10); 

    if (currentPage === 1 && itemsPerPage === 5 && selectedValue === 8) {
      setCurrentPage(0); // Reset to page 1
    }

    setItemsPerPage(selectedValue); // Update the state with the selected value
  };



  const handleChangeSearch = () => {
    setSearchTerm(searchTerm);
};


const handleEdit = (row: any) => {
  setSelectedRow(row.original);
  setShowEditModal(true); 
};

const toggleEditModal = (row: any) => {
  setSelectedRow(row.original);
  setShowEditModal(true);
};

const closeEditModal = () => {
  setShowEditModal(false);
};

const handleAdd = () => {
  setShowAddModal(true);
};


  const clearFilters = () => {
    setSearchTerm("");
  };
  
  const [data] = useState([
    {
      id: 1,
      name: "",
      accountNumber: "",
      email: "",
      mobileNumber: "",
      address: "",
      photoID: "",
      selfieVerification: "",
      businessPermit: "",
    },
    {
      id: 2,
      name: "",
      accountNumber: "",
      email: "",
      mobileNumber: "",
      address: "",
      photoID: "",
      selfieVerification: "",
      businessPermit: "",
    },
    {
      id: 3,
      name: "",
      accountNumber: "",
      email: "",
      mobileNumber: "",
      address: "",
      photoID: "",
      selfieVerification: "",
      businessPermit: "",
    },
    {
      id: 4,
      name: "",
      accountNumber: "",
      email: "",
      mobileNumber: "",
      address: "",
      photoID: "",
      selfieVerification: "",
      businessPermit: "",
    },
    {
      id: 5,
      name: "",
      accountNumber: "",
      email: "",
      mobileNumber: "",
      address: "",
      photoID: "",
      selfieVerification: "",
      businessPermit: "",
    },
    {
      id: 6,
      name: "",
      accountNumber: "",
      email: "",
      mobileNumber: "",
      address: "",
      photoID: "",
      selfieVerification: "",
      businessPermit: "",
    },
    {
      id: 7,
      name: "",
      accountNumber: "",
      email: "",
      mobileNumber: "",
      address: "",
      photoID: "",
      selfieVerification: "",
      businessPermit: "",
    },
    {
      id: 8,
      name: "",
      accountNumber: "",
      email: "",
      mobileNumber: "",
      address: "",
      photoID: "",
      selfieVerification: "",
      businessPermit: "",
    },
    {
      id: 9,
      name: "",
      accountNumber: "",
      email: "",
      mobileNumber: "",
      address: "",
      photoID: "",
      selfieVerification: "",
      businessPermit: "",
    },
    {
      id: 10,
      name: "",
      accountNumber: "",
      email: "",
      mobileNumber: "",
      address: "",
      photoID: "",
      selfieVerification: "",
      businessPermit: "",
    },
  ]);

  const [filteredData, setFilteredData] = useState(data);
  

  useEffect(() => {
    const filtered = data.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.accountNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.mobileNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
  const fileName = 'DistributorTable.xlsx';
  
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
        Header: () => <div>ACCOUNT/<br/>NUMBER</div>,
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
        Header: "ADDRESS",
        accessor: "address",
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
          <TiMessages className = "message-icon" onClick={() => toggleModal(row)} /> 
            <FaEdit onClick={() => handleEdit(row)}  className = "edit-icon" />
          </div>
        ),
        disableSortBy: true, 
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
      <div className="datepickers mr-10 flex text-xs space-x-3">
          <div className=" ml-auto">
        <div className="search-container flex items-center mt-4">
        <input
          type="text"
          placeholder="Filter in Records..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="h-7 border border-gray-300 rounded-[.2rem] py-1 px-2 w-full caret-black foc"
        />
        <FaSearch
          className="absolute right-[7.2rem] lg:right-[12.60rem] 2xl:right-[20.4rem] top-[8.60rem] transform -translate-y-1/2"
          size={17}
          color="#00558d"
        />
        </div>
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
          <button className="hover:bg-blue-600 transition-colors duration-300 bg-blue-500 rounded-md h-7 px-1 text-white font-semibold text-xs flex items-center -mr-10 "  onClick={handleExcelDownload} >
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
          className="table-fixed divide-y overflow-x-auto divide-gray-200 text-xs ml-0 sm:ml-7 mt-5 bg-blue-900 overflow-auto">
          <thead className="text-white">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
  <th
    {...column.getHeaderProps(column.canSort ? column.getSortByToggleProps() : {})}
    className="py-1 text-center" style={{ minWidth: column.minWidth, width: column.width }}
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
                className="border px-1 py-1.5 td-truncate"
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
      <div className="flex justify-end -mt-5">
        <button className="flex items-center text-blue-900  hover:text-blue-600 transition-colors duration-300" onClick={handleAdd}> 
      <FaPlus className="text-blue-900 text-xxs cursor-pointer hover:text-blue-600 transition-colors duration-300" />
      <span className="ml-1 text-xxs font-bold">Add</span>
    </button>
  </div>

 {/* Modal for AddDetailsAction */}
 {showAddModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div className="absolute bg-gray-800 opacity-50 w-full h-full"></div>
          <div className="relative bg-white p-4 rounded-lg z-10">
            <AddDetailsAction onClose={() => setShowAddModal(false)} />
          </div>
        </div>
      )}
    </div>
    

    
  );
};

export default DistributorTable;
