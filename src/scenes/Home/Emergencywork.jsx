import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import axios from "axios";

const EmergencyWork = () => {
  const theme = useTheme();
  const [data, setData] = useState([]);

  useEffect(() => {
    // Replace with your backend endpoint
    axios.get("https://your-backend-endpoint.com/emergency-work")
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <TableContainer component={Paper} sx={{ marginTop: "20px", backgroundColor: theme.palette.background.paper }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Location</TableCell>
            <TableCell>Problem</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <a href={`#/location/${row.location}`} style={{ color: theme.palette.text.primary }}>
                  {row.location}
                </a>
              </TableCell>
              <TableCell>
                <a href={`#/problem/${row.problem}`} style={{ color: theme.palette.text.primary }}>
                  {row.problem}
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmergencyWork;
