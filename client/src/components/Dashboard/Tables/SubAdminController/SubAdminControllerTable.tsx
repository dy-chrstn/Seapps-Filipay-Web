import React, { useState, useMemo, useEffect } from "react";
import { useTable, useSortBy,  Column } from "react-table";
import { FaSort, FaSortUp, FaSortDown, FaEdit, FaPlus, FaSearch } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import MessageAction from '../../Tables/Actions/messageAction';
import "react-datepicker/dist/react-datepicker.css";
// import "./DriverMessages.css";
import "react-calendar/dist/Calendar.css";
import { GiTrashCan } from "react-icons/gi";
import * as XLSX from "xlsx";
import '../Actions/actions.css'
import EditDetailsAction from "../Actions/EditAction/ClientTables/TransportCoopEdit";
import { DeleteTemplate } from "../Actions/EditAction/DeleteTemplate";
import { EditSubAdmin } from "../Actions/EditAction/SubAdmin/EditSubAdmin";

interface Row {
  id: number;
  Name: string;
  EmailAddress: string,
  Role: string,
}
const  SubAdminControllerTable: React.FC = () => {

  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [showEditModal, setShowEditModal] = useState(false); 
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false); 

//   const handleRemoveRecipient = () => {
//     setSelectedRow((prevRow: any) => ({
//       ...prevRow,
//       email: "" 
//     }));
//   };

const handleEdit = (row: any) => {
  setSelectedRow(row.original);
  setShowEditModal(true); 
};

const handleDelete = (row: any) => {
  setSelectedRow(row.original);
  setShowDeleteModal(true); 
};
  const closeModal = () => {
    setShowModal(false);
  };

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
  //   setSearchTerm("");
  // };
  
  const [data] = useState([
    {
      id: 1,
      Name: "",
      EmailAddress:"",
      Role:"Admin",
    },
    {
      id: 2,
      Name: "",
      EmailAddress:"",
      Role:"Sub-Admin",
    },
    {
      id: 3,
      Name: "",
      EmailAddress:"",
      Role:"Sub-Admin",
    },
    {
      id: 4,
      Name: "",
      EmailAddress:"",
      Role:"Sub-Admin",
    },
    {
      id: 5,
      Name: "",
      EmailAddress:"",
      Role:"Admin",
    },
    {
      id: 6,
      Name: "",
      EmailAddress:"",
      Role:"Admin",
    },
    {
      id: 7,
      Name: "",
      EmailAddress:"",
      Role:"Admin",
    },
    {
      id: 8,
      Name: "",
      EmailAddress:"",
      Role:"Admin",
    },
    {
      id: 9,
      Name: "",
      EmailAddress:"",
      Role:"Sub-Admin",
    },
    {
      id: 10,
      Name: "",
      EmailAddress:"",
      Role:"Sub-Admin",
    },
      
  ]);

  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const filtered = data.filter((item) => {
      return (
        item.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.EmailAddress.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.Role.toLowerCase().includes(searchTerm.toLowerCase())
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
    const fileName = 'Admin/Sub-Admin_Controller.xlsx';
    
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
      accessor: "Name",
    },
    {
      Header: "EMAIL ADDRESS",
      accessor: "EmailAddress",
    },
    {
      Header: "ROLE",
      accessor: "Role",
      Cell: ({ value }) => (
        <div className="flex justify-center items-center text-sm font-bold text-blue-900">
          {value}
        </div>
      ),
    },
      {
        Header: "ACTION",
        Cell: ({row}) => (
          <div className="flex justify-center items-center space-x-3 text-lg text-buttonDarkTeal">
            <FaEdit className = "edit-icon" onClick={() => handleEdit(row)} /> 
            <GiTrashCan className=" trash-icon flex-shrink-0 mt-[-2%]" onClick={() => handleDelete(row)}
            color="black" size={24}
            />
          </div>
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
    <div className="w-tableWidth mx-auto pr-32">
      <div className=" mx-auto mt-2 2xl:mt-8 transparent-caret ">
      <div className="datepickers mr-2 flex text-xs space-x-3 justify-end">
        <div className="search-container w-[20%] flex items-center mt-4">
          <input
            type="text"
            placeholder="Filter in Records..."
            value={searchString}
            onChange={handleFilterRecords}
            onKeyDown={handleEnterButton}
            className="h-7 border border-gray-500 rounded-[.2rem] py-1 px-2 w-full caret-black" />
          <FaSearch
            onClick={handleChangeSearch}
            className = "absolute right-[15rem] md:right-[15.5rem] lg:right-[16rem] xl:right-[16.2rem] 2xl:right-[18.2rem]"
           size = {17} 
           color = "#00548C"/>
        </div>
        <div className="flex-row mt-4">
          {" "}
          <button className="bg-blue-500 rounded-md h-7 px-1 text-white font-semibold text-xs flex items-center -mr-10 "  onClick={handleExcelDownload} >
            Download <IoMdDownload className="ml-1"/>
          </button>
        </div>
        </div>


  <div className="flex pl-7 flex-row">
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
          className="table-fixed divide-y divide-gray-200 text-xs ml-0 sm:ml-7 mt-5 bg-blue-900 overflow-auto w-full ">
          <thead className="text-white ">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="py-4 2xl:py-4 text-left text-[.70rem] 2xl:text-[.90rem]"
                  >
                    <div className="flex items-center justify-center">
                      {column.render("Header")}
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <FaSortDown />
                        ) : (
                          <FaSortUp />
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
          <tbody {...getTableBodyProps()} className="text-center text-[.75rem] 2xl:text-[.90rem]">
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
                className="border border-gray-400 px-1.5 py-2"
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
              <EditSubAdmin
                // rowData={selectedRow}
                onClose={() => setShowEditModal(false)}
              />
            </div>
          </div>
        )}
      {showDeleteModal && selectedRow && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
            <div className="absolute bg-gray-800 opacity-50 w-full h-full"></div>
            <div className="relative bg-white p-4 rounded-lg z-10">
            <DeleteTemplate
              onClose={() => setShowDeleteModal(false)}
              />
            </div>
          </div>
        )}


      </div>
  <div className="flex justify-end -mt-5 text-blue-900">
    <div className="flex items-center ml-20">
      <span className="text-xxs font-bold mr-1">Add</span>
      <FaPlus className="text-blue-900 text-xxs cursor-pointer" />
    </div>
  </div>
</div>

    

    
  );
};

export default SubAdminControllerTable;
