import React, { useEffect, useState } from 'react';
import { useTable } from 'react-table';
import { AssessmentService } from '../../services/AssessmentService';

export const AssessmentList = () => {
  const [ assessments, setAssessments ] = useState([]);

  useEffect(() => {
    const fetchAssessments = async () => {
      setAssessments(await AssessmentService.getList());
    };
    fetchAssessments();
  }, []);

  // Define columns for react-table
  const columns = React.useMemo(
    () => [
      {
        Header: `ID`,
        accessor: `id`, // accessor is the "key" in the data
      },
      {
        Header: `Name`,
        accessor: `catName`,
      },
      // Add more columns as needed
      {
        Header: `Date of Birth`,
        accessor: `catDateOfBirth`, // Assuming 'dob' is the key for the date of birth in your data
      },
      {
        Header: `Risk Level`,
        accessor: `riskLevel`, // Assuming 'dob' is the key for the date of birth in your data
      },
    ],
    []
  );

  // Use the useTable Hook to send the columns and data to build the table
  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    prepareRow,
    rows,
  } = useTable({ columns, data: assessments });

  // Render the UI for your table
  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup =>
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column =>
                <th {...column.getHeaderProps()}>{column.render(`Header`)}</th>)}
            </tr>)}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => <td {...cell.getCellProps()}>{cell.render(`Cell`)}</td>)}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
