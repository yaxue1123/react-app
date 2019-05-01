import React, { Component } from "react";

// interface
// columns: array
// sortColumn: obj
// onSort: function

class TableHeader extends Component {
  // logic to determine the sort order.
  raiseSort = path => {
    const sortColumn = { ...this.props.sortColumn };

    // click twice on the same col to reverse sorting.
    // click the first time will ascend at default.
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }

    this.props.onSort(sortColumn);
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(column => (
            <th
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
