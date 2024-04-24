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
  servicetype: string,
  totalUnits: string,
}
const VehicleServiceTable: React.FC = () => {

  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);

  
  const handleRemoveRecipient = () => {
    setSelectedRow((prevRow: any) => ({
      ...prevRow,
      email: "" 
    }));
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


  const filterOptions = [
    { value: "all", label: "All" },
    { value: "Transport Cooperative", label: "Transport Cooperative" },
    { value: "Transport Corperation", label: "Transport Corporation" },
  ];

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
      servicetype: "Provincial Bus",
      totalUnits: "1",
 
    },
    {
      id: 2,
      servicetype: "City Bus",
      totalUnits: "2",

    },
    {
      id: 3,
      servicetype: "Jeepney Class 2",
      totalUnits: "3",

    },
    {
      id: 4,
      servicetype: "UV Express Class 3",
      totalUnits: "4",

    },
    {
      id: 5,
      servicetype: "Airline",
      totalUnits: "5",

    },
    {
      id: 6,
          servicetype: "Tricycle",
      totalUnits: "6",

    },
    {
      id: 7,
          servicetype: "Ship",
      totalUnits: "7",

    },
    {
      id: 8,
         servicetype: "UV Express Class 3",
      totalUnits: "8",

    },
    {
      id: 9,
          servicetype: "Provincial Bus",
      totalUnits: "9",

    },
    {
      id: 10,
          servicetype: "City Bus",
      totalUnits: "10",

    },
  ]);

  const [filteredData, setFilteredData] = useState(data);
  
  useEffect(() => {
    const filtered = data.filter((item) => {
      if (filterBy === "all") {
        return true;
      } else {
        return item.servicetype === filterBy;
      }
    });
    setFilteredData(filtered);
  }, [filterBy, data]);


  useEffect(() => {
    const filtered = data.filter((item) => {
      return (
       
        item.servicetype.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.totalUnits.toLowerCase().includes(searchTerm.toLowerCase()) 
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
  const fileName = 'VehicleServiceTable.xlsx';
  
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
        Header: "SERVICE TYPE",
        accessor: "servicetype",
        width: 400,
        minWidth: 30,
        maxWidth: 150


        
      },
      {
        Header: "TOTAL UNITS",
        accessor: "totalUnits",
        width: 400,
        minWidth: 10,
        maxWidth: 150

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
    <div className="mx-auto ml-auto mr-auto transparent-caret">
      <div className="mt-8 ml-auto ">
      <div className="ml-sortMargin">
      <div className="flex text-xs space-x-3">
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
              className=" border border-buttonDarkTeal rounded-md p-1 h-7 text-buttonDarkTeal font-semibold text-xs"
              onClick={clearFilters}
            >
              Clear Filters
            </button>
        </div>
        <div className="flex-row mt-4">
          {" "}
          <button className=" bg-blue-500 rounded-md h-7 px-1 text-white font-semibold text-xs flex items-center -mr-10 "  onClick={handleExcelDownload} >
            Download <IoMdDownload className="ml-1"/>
          </button>
        </div>
    
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
    value={itemsPerPage.toString()} 
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
          className="table-fixed ml-5 divide-y divide-gray-200 text-xs sm:ml-52 mt-5 bg-blue-900 overflow-auto">
          <thead className="text-white">
          {headerGroups.map((headerGroup) => (
  <tr {...headerGroup.getHeaderGroupProps()}>
    {headerGroup.headers.map((column) => (
      <th
        {...column.getHeaderProps(column.canSort ? column.getSortByToggleProps() : {})}
        className="py-3 text-center"   style={{ minWidth: column.minWidth, width: column.width }}

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
          <tbody
  {...getTableBodyProps()}
  className="text-center"
>
  {rows.length === 0 ? (
    <tr>
      <td
        colSpan={columns.length}
        className="border px-28 py-2 bg-white"
      >
        No results found
      </td>
    </tr>
  ) : (
    // If rows exist, render the rows
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
                className="border py-2"
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


        <div className="flex justify-start ml-9 mt-4 text-xs">
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
       </div>
       <div className="flex justify-end -mt-5 text-blue-900">
         <div className="flex mr-36 items-center">
           <FaPlus className="text-blue-900 text-xxs cursor-pointer" />
           <span className="text-xxs font-bold">Add</span>
         </div>
       </div>
     </div>
   );
 };
 
 export default VehicleServiceTable;
