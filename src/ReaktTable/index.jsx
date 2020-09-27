import React, { useState } from "react";
const ASC = "ASC";
const DESC = "DESC";

const RctTableColumns = ({ columns, onSort = () => null }) => {
  return (
    <tr>
      {columns.map((column, index) => (
        <th onClick={() => onSort(column)} key={index}>
          {column}
        </th>
      ))}
    </tr>
  );
};

const sortColumn = (column, data, direction = "ASC") => {
  return [...data].sort((itemA, itemB) => {
    const a = itemA[column].toUpperCase();
    const b = itemB[column].toUpperCase();

    if (a > b) {
      return direction === DESC ? -1 : 1;
    }

    if (a < b) {
      return direction === DESC ? 1 : -1;
    }

    return 0;
  });
};

const RctTable = ({ columns, rows = [] }) => {
  const [data, setData] = useState(rows);
  const [column, setColumn] = useState("");
  const [sortDirection, setSortDirection] = useState(ASC);

  const _sortColumn = (_column) => {
    let _direction = ASC;

    /**
     * Toggle direction
     */
    if (_column === column) {
      _direction = sortDirection === ASC ? DESC : ASC;
      setSortDirection(_direction);
    }
    setColumn(_column);
    setData(sortColumn(_column, data, _direction));
  };

  return (
    <table border="1">
      <thead>
        <RctTableColumns
          onSort={_sortColumn}
          columns={columns}
        ></RctTableColumns>
      </thead>

      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col, colIndex) => (
              <td key={colIndex}>{row[col]}</td>
            ))}
          </tr>
        ))}
      </tbody>

      <tfoot>
        <RctTableColumns
          columns={columns}
          onSort={_sortColumn}
        ></RctTableColumns>
      </tfoot>
    </table>
  );
};

export default RctTable;
