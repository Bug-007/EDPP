import * as React from 'react';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';

function createData(name, hospital, date) {
  return { name, hospital, date };
}
const rows = [
  createData("A.K. Arjun", "Saint Mary, Lucknow", "12-03-1999"),
  createData("A.K. Arjun", "Saint Mary, Lucknow", "12-03-1999"),
  createData("A.K. Arjun", "Saint Mary, Lucknow", "12-03-1999"),
  createData("A.K. Arjun", "Saint Mary, Lucknow", "12-03-1999"),
  createData("A.K. Arjun", "Saint Mary, Lucknow", "12-03-1999"),
  createData("A.K. Arjun", "Saint Mary, Lucknow", "12-03-1999"),
  createData("A.K. Arjun", "Saint Mary, Lucknow", "12-03-1999"),
  createData("A.K. Arjun", "Saint Mary, Lucknow", "12-03-1999"),
  createData("A.K. Arjun", "Saint Mary, Lucknow", "12-03-1999"),
  createData("A.K. Arjun", "Saint Mary, Lucknow", "12-03-1999"),    
];

export default function TableStickyHeader() {
  return (
    <div >
      <Sheet sx={{ height: "70vh", overflow: "auto", marginTop: "40px", width:"80vw" }}>
        <Table
          aria-label="table with sticky header"
          stickyHeader
          stripe="odd"
          hoverRow
        >
          <thead>
            <tr>
              <th>Doctor Name</th>
              <th>Hospital</th>
              <th style={{
                width:"200px"
              }}>Date&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name}>
                <td>{row.name}</td>
                <td>{row.hospital}</td>
                <td style={{
                width:"50px"
              }}>{row.date}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>
    </div>
  );
}
