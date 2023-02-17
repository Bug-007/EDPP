import * as React from 'react';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';


function createData(name, hospital, date, accept, reject) {
  return { name, hospital, date, accept, reject };
}
const rows = [
  createData("A.K. Arjun", "Saint Mary, Lucknow", "12-03-1999", <CheckCircleOutlineSharpIcon/>, <CancelSharpIcon/>),
  createData("A.K. Arjun", "Saint Mary, Lucknow", "12-03-1999", <CheckCircleOutlineSharpIcon/>, <CancelSharpIcon/>),
  createData("A.K. Arjun", "Saint Mary, Lucknow", "12-03-1999", <CheckCircleOutlineSharpIcon/>, <CancelSharpIcon/>),
  createData("A.K. Arjun", "Saint Mary, Lucknow", "12-03-1999", <CheckCircleOutlineSharpIcon/>, <CancelSharpIcon/>),
  createData("A.K. Arjun", "Saint Mary, Lucknow", "12-03-1999", <CheckCircleOutlineSharpIcon/>, <CancelSharpIcon/>),
  createData("A.K. Arjun", "Saint Mary, Lucknow", "12-03-1999", <CheckCircleOutlineSharpIcon/>, <CancelSharpIcon/>),
  createData("A.K. Arjun", "Saint Mary, Lucknow", "12-03-1999", <CheckCircleOutlineSharpIcon/>, <CancelSharpIcon/>),
  createData("A.K. Arjun", "Saint Mary, Lucknow", "12-03-1999", <CheckCircleOutlineSharpIcon/>, <CancelSharpIcon/>),
  createData("A.K. Arjun", "Saint Mary, Lucknow", "12-03-1999", <CheckCircleOutlineSharpIcon/>, <CancelSharpIcon/>),
  createData("A.K. Arjun", "Saint Mary, Lucknow", "12-03-1999", <CheckCircleOutlineSharpIcon/>, <CancelSharpIcon/>),
  createData("A.K. Arjun", "Saint Mary, Lucknow", "12-03-1999", <CheckCircleOutlineSharpIcon/>, <CancelSharpIcon/>),
  createData("A.K. Arjun", "Saint Mary, Lucknow", "12-03-1999", <CheckCircleOutlineSharpIcon/>, <CancelSharpIcon/>),
  createData("A.K. Arjun", "Saint Mary, Lucknow", "12-03-1999", <CheckCircleOutlineSharpIcon/>, <CancelSharpIcon/>),
  createData("A.K. Arjun", "Saint Mary, Lucknow", "12-03-1999", <CheckCircleOutlineSharpIcon/>, <CancelSharpIcon/>),
  createData("A.K. Arjun", "Saint Mary, Lucknow", "12-03-1999", <CheckCircleOutlineSharpIcon/>, <CancelSharpIcon/>),
  createData("A.K. Arjun", "Saint Mary, Lucknow", "12-03-1999", <CheckCircleOutlineSharpIcon/>, <CancelSharpIcon/>),
  createData("A.K. Arjun", "Saint Mary, Lucknow", "12-03-1999", <CheckCircleOutlineSharpIcon/>, <CancelSharpIcon/>),
  createData("A.K. Arjun", "Saint Mary, Lucknow", "12-03-1999", <CheckCircleOutlineSharpIcon/>, <CancelSharpIcon/>),
  createData("A.K. Arjun", "Saint Mary, Lucknow", "12-03-1999", <CheckCircleOutlineSharpIcon/>, <CancelSharpIcon/>),
  createData("A.K. Arjun", "Saint Mary, Lucknow", "12-03-1999", <CheckCircleOutlineSharpIcon/>, <CancelSharpIcon/>),
  createData("A.K. Arjun", "Saint Mary, Lucknow", "12-03-1999", <CheckCircleOutlineSharpIcon/>, <CancelSharpIcon/>),
  createData("A.K. Arjun", "Saint Mary, Lucknow", "12-03-1999", <CheckCircleOutlineSharpIcon/>, <CancelSharpIcon/>),
  createData("A.K. Arjun", "Saint Mary, Lucknow", "12-03-1999", <CheckCircleOutlineSharpIcon/>, <CancelSharpIcon/>),
  createData("A.K. Arjun", "Saint Mary, Lucknow", "12-03-1999", <CheckCircleOutlineSharpIcon/>, <CancelSharpIcon/>),
  createData("A.K. Arjun", "Saint Mary, Lucknow", "12-03-1999", <CheckCircleOutlineSharpIcon/>, <CancelSharpIcon/>),
  createData("A.K. Arjun", "Saint Mary, Lucknow", "12-03-1999", <CheckCircleOutlineSharpIcon/>, <CancelSharpIcon/>),

 
  
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
              <th style={{
                width:"100px"
              }}>
                <CheckCircleOutlineSharpIcon sx={{ color: "green" }} />
                &nbsp; Accept
              </th>
              <th style={{
                width:"100px"
              }}>
                <CancelSharpIcon sx={{ color: "red" }} />
                &nbsp;Protein
              </th>
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
                <td style={{
                width:"50px"
              }}>{row.accept}</td>
                <td style={{
                width:"50px"
              }}>{row.reject}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>
    </div>
  );
}
