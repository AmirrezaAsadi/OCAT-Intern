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

  const columns = React.useMemo(() => [
    {
      Header: `ID`,
      accessor: `id`,
    },
    {
      Header: `Name            `,
      accessor: `catName`,
    },
    {
      Header: `Date`,
      accessor: `riskLevel`,
    },
    {
      Header: `Score`,
      accessor: `score`,
    },
  ], []);

  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    prepareRow,
    rows,
  } = useTable({
    columns,
    data: assessments,
  });

  return (
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
              {row.cells.map(cell =>
                <td {...cell.getCellProps()}>{cell.render(`Cell`)}</td>)}

              <td>
                <button onClick={() => handleDelete(row.original.id)}>
                  Delete
                </button>
              </td>
            </tr>
          );

          function handleDelete(id) {
            // Call API to delete assessment by id
          }

        })}
      </tbody>
    </table>
  );
};
