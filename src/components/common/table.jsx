import React, { Component } from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

class Table extends Component {
  render() {
    const { columns, onSort, sortColumn, data } = this.props;
    return (
      <table className="table">
        <TableHeader
          columns={columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody columns={columns} data={data} />
      </table>
    );
  }
}

export default Table;
