import React, { useState } from "react";
import "./table.css";

const Table = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [dimension, setDimension] = useState("");

  // Function to handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;

    if (name === "startDate") {
      setStartDate(value);
    } else if (name === "endDate") {
      setEndDate(value);
    } else if (name === "dimension") {
      setDimension(value);
    }
  };

  // Table data - replace with your own data
  const tableData = [
    { date: "2023-05-30", dimension: "A", value: 10 },
    { date: "2023-06-01", dimension: "B", value: 15 },
    { date: "2023-06-03", dimension: "C", value: 20 },
    { date: "2023-06-05", dimension: "A", value: 25 },
  ];

  // Apply filters to the table data
  const filteredData = tableData.filter((item) => {
    if (startDate && item.date < startDate) {
      return false;
    }
    if (endDate && item.date > endDate) {
      return false;
    }
    if (dimension && item.dimension !== dimension) {
      return false;
    }
    return true;
  });

  return (
    <div className="border">
      <div className="padd">
        <div>
          <label>Start Date:</label>
          <input
            type="date"
            name="startDate"
            value={startDate}
            onChange={handleFilterChange}
          />
        </div>
        <div>
          <label>End Date:</label>
          <input
            type="date"
            name="endDate"
            value={endDate}
            onChange={handleFilterChange}
          />
        </div>

        <div>
          <label>Dimension:</label>
          <select
            name="dimension"
            value={dimension}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Dimension</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.dimension}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
