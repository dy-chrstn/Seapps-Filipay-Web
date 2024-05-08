import React, { useState, useMemo, useEffect } from "react";
import { useTable, useSortBy, Column } from "react-table";
import { FaSort, FaSortUp, FaSortDown, FaEdit, FaPlus, FaSearch } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import * as XLSX from "xlsx";
import "./Table.css";
import { Device } from "../../../../interface/client";
import ClipLoader from "react-spinners/ClipLoader";
import vehicleApi from "../../../../api/vehicle";
import coopApi from "../../../../api/coop";
import AddDetailsAction from '../Actions/AddAction/ClientTables/DeviceAdd';

const DeviceTable: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [showAddModal, setShowAddModal] = useState(false); 


  const toggleModal = (row: any) => {
    setSelectedRow(row.original);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleAdd = () => {
    setShowAddModal(true);
  };

  const [searchTerm, setSearchTerm] = useState<string>("");

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [deviceData, setDeviceData] = useState<Device[]>([]);

  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = parseInt(e.target.value, 10);

    if (currentPage === 1 && itemsPerPage === 5 && selectedValue === 8) {
      setCurrentPage(0); // Reset to page 1
    }

    setItemsPerPage(selectedValue); // Update the state with the selected value
  };

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const clearFilters = () => {
    setSearchTerm("");
  };

  const [filteredData, setFilteredData] = useState(deviceData);

  useEffect(() => {
    const filtered = deviceData.filter((item) => {
      return (
        item.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.validator.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.status.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredData(filtered);
  }, [searchTerm, deviceData]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const existingCoop = await coopApi.findCoop("6628a5f85df2bbc1b7c8d704");
        if (!existingCoop) {
          console.log("Coop not found");
          return;
        }

        const response = await vehicleApi.findVehicles("6628a5f85df2bbc1b7c8d704");

        console.log("Vehicles:", response);

        setDeviceData(response.response);
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      }
    }

    fetchVehicles();
    
  });

  // Calculate pagination indexes
  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredData.length);
  const displayedData = useMemo(
    () => filteredData.slice(startIndex, endIndex),
    [filteredData, startIndex, endIndex]
  );

  // Calculate total number of pages
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  // Function to handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleExcelDownload = () => {
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileName = "DeviceTable.xlsx";

    // Convert data to XLS format
    const ws = XLSX.utils.json_to_sheet(deviceData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const dataBlob = new Blob([excelBuffer], { type: fileType });
    const url = URL.createObjectURL(dataBlob);

    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
  };

  const columns: Column<Device>[] = useMemo(
    () => [
      {
        Header: "DEVICE NUMBER",
        accessor: "code",
        width: 250,
        minWidth: 30,
        maxWidth: 150,
      },
      {
        Header: "TYPE",
        accessor: "validator",
        width: 250,
        minWidth: 10,
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
              value === "ACTIVE"
                ? "text-blue-900 font-bold"
                : "text-gray-400 font-bold"
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
            <FaEdit />
          </div>
        ),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<Device>(
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
            <div className="search-container flex items-center mt-4">
            <input
          type="text"
          placeholder="Filter in Records..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="h-7 border border-gray-300 rounded-[.2rem] py-1 px-2 w-full caret-black foc"
        />
        <FaSearch
          className="absolute right-[7.2rem] lg:right-[20.5rem] 2xl:right-[10.4rem] top-[8.60rem] transform -translate-y-1/2"
          size={17}
          color="#00558d"
        />
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
              <button
                className="hover:bg-blue-600 transition-colors duration-300 bg-blue-500 rounded-md h-7 px-1 text-white font-semibold text-xs flex items-center -mr-10 "
                onClick={handleExcelDownload}
              >
                Download <IoMdDownload className="ml-1" />
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
            <label
              htmlFor="itemsPerPage"
              className="pl-2 text-xs text-gray-700"
            >
              result per page
            </label>
          </div>
        </div>

        <div className="mx-auto">
          <table
            {...getTableProps()}
            className="table-fixed divide-y divide-gray-200 text-xxs ml-0 sm:ml-10 mt-5 bg-blue-900 overflow-auto"
          >
            <thead className="text-white">
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(
                        column.canSort ? column.getSortByToggleProps() : {}
                      )}
                      className="py-3 text-left"
                      style={{ minWidth: column.minWidth, width: column.width }}
                    >
                      <div className="flex items-center justify-center">
                        {column.render("Header")}
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <FaSortDown color={"#2F80ED"} />
                          ) : (
                            <FaSortUp color={"#2F80ED"} />
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
              {rows.length === 0 ? (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="border px-28 py-2 bg-white"
                  >
                    {rows.length === 0 ? <ClipLoader color="#2F80ED" size={20} /> : "No records found"}
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
                          <td {...cell.getCellProps()} className="border">
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
        </div>

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

      <div className="flex justify-end -mt-1">
        <button className="hover:text-blue-600 transition-colors duration-300 flex items-center text-blue-900" onClick={handleAdd}> 
      <FaPlus className="hover:text-blue-600 transition-colors duration-300 text-blue-900 text-xxs cursor-pointer" />
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

export default DeviceTable;
