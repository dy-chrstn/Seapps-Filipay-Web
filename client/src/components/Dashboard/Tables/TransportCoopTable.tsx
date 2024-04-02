import { useState } from 'react';
import { FaSort, FaSortUp, FaSortDown, FaEdit } from "react-icons/fa";
import { TiMessages } from 'react-icons/ti';
import { MdOutlineSearch } from "react-icons/md";

const TransportCoopTable = () => {
  const [sortOrder, setSortOrder] = useState<{
    column: string | null;
    ascending: boolean;
  }>({
    column: null,
    ascending: true,
  });

  const [searchQuery, setSearchQuery] = useState<string>(''); 

  const handleSort = (column: string) => {
    if (sortOrder.column === column) {
      if (sortOrder.ascending) {
        setSortOrder({ column, ascending: false });
      } else {
        // Reset sorting to default state after the third click
        setSortOrder({ column: null, ascending: true });
      }
    } else {
      setSortOrder({ column, ascending: true });
    }
  };

  const renderSortingIcon = (column: string) => {
    if (sortOrder.column === column) {
      if (sortOrder.ascending) {
        return <FaSortUp />;
      } else {
        return <FaSortDown />;
      }
    }
    return <FaSort />;
  };

  // Placeholder data for the table body
  const data = [
    { email: ' ', route: '', chairman: '', cda: '', sec: '', articles: '', bank: '', resolution: '', fare: '', date: '', status: 'Approved' },
    { email: ' ', route: '', chairman: '', cda: '', sec: '', articles: '', bank: '', resolution: '', fare: '', date: '', status: 'Approved' },
    { email: ' ', route: '', chairman: '', cda: '', sec: '', articles: '', bank: '', resolution: '', fare: '', date: '', status: 'Disapproved' },
  ];

  return (
    <div className="container mx-auto mt-5">

      <div className="flex ml-12 flex-row ">
        <div className="flex-4 items-center">
          <label htmlFor="fromDate" className="block text-xs text-gray-700">From:</label>
          <input type="date" id="fromDate" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs" />
        </div>

        <div className="flex-4 ml-4">
          <label htmlFor="toDate" className="block text-xs text-gray-700">To:</label>
          <input type="date" id="toDate" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs" />
        </div>

        <div className="flex-4 ml-4">
          <select id="filter" name="filter" className="mt-6 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs">
            <option value="all">Transport Cooperative</option>
            <option value="Sample1">Sample 1</option>
            <option value="Sample2">Sample 2</option>
          </select>
        </div>

        <div className="flex-4 ml-4 mt-5">
        <input
      type="text"
      id="search"
      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"
      placeholder="Filter in Records..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />


      </div>
      </div>
      

      <table className="table-auto border-collapse w-auto mt-5 mx-auto text-xs text-left">
        <thead>
          <tr className="bg-blue-900 text-white font-normal">
            <th className="border px-2 py-2" onClick={() => handleSort('email')}>
              <div className="flex items-center">
                Email Address {renderSortingIcon('email')}
              </div>
            </th>
            <th className="border px-2 py-2" onClick={() => handleSort('route')}>
              <div className="flex items-center">
                Route {renderSortingIcon('route')}
              </div>
            </th>
            <th className="border px-2 py-2" onClick={() => handleSort('chairman')}>
              <div className="flex items-center">
                Chairman {renderSortingIcon('chairman')}
              </div>
            </th>
            <th className="border px-2 py-2" onClick={() => handleSort('cda')}>
              <div className="flex items-center">
                CDA <br/>Certification {renderSortingIcon('cda')}
              </div>
            </th>
            <th className="border px-2 py-2" onClick={() => handleSort('sec')}>
              <div className="flex items-center">
                SEC <br/> Certification {renderSortingIcon('sec')}
              </div>
            </th>
            <th className="border px-2 py-2" onClick={() => handleSort('articles')}>
              <div className="flex items-center">
                Articles <br/> and By Laws {renderSortingIcon('articles')}
              </div>
            </th>
            <th className="border px-2 py-2" onClick={() => handleSort('bank')}>
              <div className="flex items-center">
                Bank<br/> Certification {renderSortingIcon('bank')}
              </div>
            </th>
            <th className="border px-2 py-2" onClick={() => handleSort('resolution')}>
              <div className="flex items-center">
                Board<br/> Resolution {renderSortingIcon('resolution')}
              </div>
            </th>
            <th className="border px-2 py-2" onClick={() => handleSort('fare')}>
              <div className="flex items-center">
                Fare Metrix {renderSortingIcon('fare')}
              </div>
            </th>
            <th className="border px-2 py-2" onClick={() => handleSort('date')}>
              <div className="flex items-center">
                Date {renderSortingIcon('date')}
              </div>
            </th>
            <th className="border px-2 py-2" onClick={() => handleSort('status')}>
              <div className="flex items-center">
                Status {renderSortingIcon('status')}
              </div>
            </th>
            <th className="border px-2 py-2">
              <div className="flex items-center">
                Action 
              </div>
            </th>
          </tr>
        </thead>
        <tbody className='font-extrabold'>
          {data.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white' }>
              
              <td className="border px-2 py-2">{row.email}</td>
              <td className="border px-2 py-2">{row.route}</td>
              <td className="border px-2 py-2">{row.chairman}</td>
              <td className="border px-2 py-2">{row.cda}</td>
              <td className="border px-2 py-2">{row.sec}</td>
              <td className="border px-2 py-2">{row.articles}</td>
              <td className="border px-2 py-2">{row.bank}</td>
              <td className="border px-2 py-2">{row.resolution}</td>
              <td className="border px-2 py-2">{row.fare}</td>
              <td className="border px-2 py-2">{row.date}</td>
              <td className={`border px-2 py-2 ${row.status === 'Approved' ? 'text-green-500' : 'text-red-500'}`}>{row.status}</td>
              <td className="border px-2 py-2">
                <div className="flex items-center space-x-3 text-lg text-buttonDarkTeal">
                  <TiMessages /> <FaEdit /> 
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransportCoopTable;
