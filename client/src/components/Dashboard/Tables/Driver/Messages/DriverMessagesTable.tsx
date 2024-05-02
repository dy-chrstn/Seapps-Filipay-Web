import React, { useState, useMemo, useEffect } from "react";
import { useTable, useSortBy, Column } from "react-table";
import { FaSort, FaSortUp, FaSortDown, FaEdit, FaSearch } from "react-icons/fa";
import MessageAction from '../../../Tables/Actions/messageAction';
import { IoMdDownload } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import * as XLSX from "xlsx";
import Select, { ActionMeta, StylesConfig } from "react-select";
import { GiTrashCan } from "react-icons/gi";

interface Row {
  id: number;
  Name: string;
  EmailAddress: string;
  Concern: string;
  Remarks: string;
}

const DriverMessagesTable: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);

  const toggleModal = (row: any) => {
    setSelectedRow(row.original);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

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

    setItemsPerPage(selectedValue); 
  };

  const handleEnterButton = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === "Enter"){
      handleChangeSearch()
      return
    }
  }
  const handleChangeSearch = () => {
      setSearchTerm(searchString);
  };
  
  const handleFilterRecords = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value)
    setSearchTerm("")
  }

  const [data] = useState<Row[]>([
    {
      id: 1,
      Name: "",
      EmailAddress: "",
      Concern: "",
      Remarks: "Completed",
    },
    {
      id: 2,
      Name: "",
      EmailAddress: "",
      Concern: "",
      Remarks: "In Progress",
    },
    {
      id: 3,
      Name: "",
      EmailAddress: "",
      Concern: "",
      Remarks: "Completed",
    },
    {
      id: 4,
      Name: "",
      EmailAddress: "",
      Concern: "",
      Remarks: "In Progress",
    },
    {
      id: 5,
      Name: "",
      EmailAddress: "",
      Concern: "",
      Remarks: "Completed",
    },
    {
      id: 6,
      Name: "",
      EmailAddress: "",
      Concern: "",
      Remarks: "In Progress",
    },
    {
      id: 7,
      Name: "",
      EmailAddress: "",
      Concern: "",
      Remarks: "Completed",
    },
    {
      id: 8,
      Name: "",
      EmailAddress: "",
      Concern: "",
      Remarks: "In Progress",
    },
    {
      id: 9,
      Name: "",
      EmailAddress: "",
      Concern: "",
      Remarks: "Completed",
    },
    {
      id: 10,
      Name: "",
      EmailAddress: "",
      Concern: "",
      Remarks: "In Progress",
    },

  ]);

  const [filteredData, setFilteredData] = useState<Row[]>(data);

  useEffect(() => {
    const filtered = data.filter((item) => {
      if (filterBy === "all") {
        return true; // Show all items if "all" is selected
      } else {
        return item.Remarks.toLowerCase() === filterBy.toLowerCase()
        item.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.EmailAddress.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.Concern.toLowerCase().includes(searchTerm.toLowerCase());
      }
    });
    setFilteredData(filtered);
  }, [searchTerm, filterBy, data]);

  //filter Records
  useEffect(() => {
    const filtered = data.filter((item) => {
      return (
        item.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.EmailAddress.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.Concern.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.Remarks.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredData(filtered);
  }, [searchTerm, data]);

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
        Header: "CONCERN",
        accessor: "Concern",
      },
      {
        Header: "REMARKS",
        accessor: "Remarks",
        Cell: ({ value }) => (
          <div
            className={`px-1 py-1 ${
              value === "Completed" ? "text-[#2D9CDB] font-bold" : "text-black font-bold"
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
            <TiMessages onClick={() => toggleModal(row)} /> <FaEdit />{" "}
            <GiTrashCan size={24} color="black" className="flex-shrink-0 mt-[-2%]" />
          </div>
        ),
      },
    ],
    []
  );

  const uniqueRemarks = useMemo(() => Array.from(new Set(data.map((item) => item.Remarks))), [data]);

  const filterOptions = useMemo(
    () => [
      { value: "all", label: "All" },
      ...uniqueRemarks.map((remark) => ({
        value: remark,
        label: remark,
      })),
    ],
    [uniqueRemarks]
  );
  

  const customStyles: StylesConfig = {
    control: (provided) => ({
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

  const [dropdownValue, setDropdownValue] = useState<{ value: string; label: string } | null>(null);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable<Row>(
    {
      columns,
      data: filteredData, // Use filtered data here
    },
    useSortBy
  );

  const handleExcelDownload = () => {
    const fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileName = "Driver_Messages.xlsx";

    // Convert data to XLS format
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const dataBlob = new Blob([excelBuffer], { type: fileType });
    const url = URL.createObjectURL(dataBlob);

    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
  };

  return (
    <div className="w-tableWidth mx-auto">
      <div className=" mx-auto mt-2 2xl:mt-8 transparent-caret ">
        <div className="datepickers mr-5 flex text-xs space-x-3">
          <div className="from-datepicker  ml-auto"></div>
          <div className=" ml-3 mt-4">
          <Select
        options={filterOptions}
        placeholder="Filter by remarks"
        value={dropdownValue}
        onChange={(newValue: any, actionMeta: ActionMeta<any>) => {
          if (newValue && newValue.value !== "all") {
            setFilterBy(newValue.value);
          } else {
            setFilterBy("all");
          }
          setDropdownValue(newValue); // Update dropdown value
        }}
  styles={customStyles}
/>
          </div>

          <div className="search-container w-[30%] flex items-center mt-4">
          <input
            type="text"
            placeholder="Filter in Records..."
            value={searchString}
            onChange={handleFilterRecords}
            onKeyDown={handleEnterButton}
            className="h-7 border border-gray-500 rounded-[.2rem] py-1 px-2 w-full caret-black" />
          <FaSearch
            onClick={handleChangeSearch}
            className = "absolute right-[8rem] lg:right-[9rem] 2xl:right-[10.7rem]"
           size = {17} 
           color = "#00548C"/>
        </div>
          <div className="flex-row mt-4">
            {" "}
            <button
              className="bg-blue-500 rounded-md h-7 px-1 text-white font-semibold text-xs flex items-center -mr-10 "
              onClick={handleExcelDownload}
            >
              Download <IoMdDownload className="ml-1" />
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
          className="table-fixed divide-y divide-gray-200 text-xs ml-0 sm:ml-7 mt-5 bg-blue-900 overflow-auto w-full"
        >
          <thead className="text-white ">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="py-4 2xl:py-4 text-left text-[.70rem] 2xl:text-[.90rem]"
                  >
                    <div className="flex items-center justify-center px-1">
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
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className={`border-b border-gray-200 ${row.index % 2 === 0 ? "bg-white" : "bg-gray-100"
                    } hover:bg-gray-300`}
                >
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="border px-1.5 py-2 td-truncate"
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="flex justify-start ml-6 mt-4 text-xs">
          {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }, (_, index) => (
            <button
              key={index}
              className={`px-2 py-1 mx-1 rounded ${
                currentPage === index ? "bg-gray-300 text-gray-900" : "bg-white"
                }`}
              onClick={() => setCurrentPage(index)}
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
    </div>
  );
};

export default DriverMessagesTable;
