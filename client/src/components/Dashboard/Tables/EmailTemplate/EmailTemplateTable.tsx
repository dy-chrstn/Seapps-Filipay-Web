import React, { useState, useMemo, useEffect } from "react";
import { useTable, useSortBy,  Column } from "react-table";
import { FaSort, FaSortUp, FaSortDown, FaEdit, FaPlus, FaSearch } from "react-icons/fa";
import { IoSendSharp } from "react-icons/io5";
import MessageAction from '../../Tables/Actions/messageAction';
import "react-datepicker/dist/react-datepicker.css";
// import "./DriverMessages.css";
import "react-calendar/dist/Calendar.css";
import { GiTrashCan } from "react-icons/gi";


interface Row {
  id: number;
  Subject: string;
  Identifier: string,
}
const  EmailTemplateTable: React.FC = () => {

  const [showModal, setShowModal] = useState(false);
  const [selectedRow] = useState<any>(null);

  
//   const handleRemoveRecipient = () => {
//     setSelectedRow((prevRow: any) => ({
//       ...prevRow,
//       email: "" 
//     }));
//   };

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


//   const filterOptions = [
//     { value: "all", label: "All" },
//     { value: "Transport Cooperative", label: "Transport Cooperative" },
//     { value: "Transport Corperation", label: "Transport Corporation" },
//   ];

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
      Subject: "Activation Link",
      Identifier:"",
    },
    {
      id: 2,
      Subject: "Contact Us",
      Identifier:"",
    },
    {
      id: 3,
      Subject: "Cash In Status (Approved)",
      Identifier:"",
    },
    {
      id: 4,
      Subject: "Cash In Status (Approved)",
      Identifier:"",
    },
    {
      id: 5,
      Subject: "Cash Out Status (Approved)",
      Identifier:"",
    },
    {
      id: 6,
      Subject: "Cash Out Status (Approved)",
      Identifier:"",
    },
    {
      id: 7,
      Subject: "KYC Update Request",
      Identifier:"",
    },
    {
      id: 8,
      Subject: "KYC Newsletter",
      Identifier:"",
    },
    {
      id: 9,
      Subject: "",
      Identifier:"",
    },
    {
      id: 10,
      Subject: "",
      Identifier:"",
    },
      
  ]);

  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const filtered = data.filter((item) => {
      return (
        item.Subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.Identifier.toLowerCase().includes(searchTerm.toLowerCase()) 
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


  



const columns: Column<Row>[] = useMemo(
  () => [
    {
      Header: "SUBJECT",
      accessor: "Subject",
      Cell: ({ value }) => (
        <div className="flex justify-left items-center text-sm pl-8 font-bold text-blue-900">
          {value}
        </div>
      ),
    },
    {
      Header: "IDENTIFIER",
      accessor: "Identifier",
    },
      {
        Header: "ACTION",
        Cell: () => (
          <div className="flex justify-center items-center space-x-3 text-lg text-buttonDarkTeal">
            <IoSendSharp /> <FaEdit /> <GiTrashCan size={24} color="black" className="flex-shrink-0 mt-[-2%]"/>
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
    <div className="w-tableWidth mx-auto mr-20">
      <div className=" mx-auto mt-2 2xl:mt-8 transparent-caret ">
      <div className="datepickers mr-0 flex text-xs space-x-3 justify-end">
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
            className = "absolute right-[5.5rem] lg:right-[7rem] 2xl:right-[8.1rem]"
           size = {17} 
           color = "#00548C"/>
        </div>
        </div>


  <div className="flex pl-0 flex-row">
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
          className="table-fixed divide-y divide-gray-200 text-xs sm:ml-0 mt-5 bg-blue-900 overflow-auto w-full ">
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

        
        <div className="flex justify-start ml-0 mt-4 text-xs">
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

export default EmailTemplateTable;
