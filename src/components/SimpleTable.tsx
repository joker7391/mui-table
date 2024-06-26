
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";


function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const SimpleTable = () => {
  return (
    <TableContainer style={{borderRadius: 8}}>
      <Table >
        <TableHead
          sx={{
            backgroundColor: "#0000FF",
          
          }}
        >
          <TableRow>
            <TableCell style={{ color: "white", fontWeight: "bold" }}>
              Dessert
            </TableCell>
            <TableCell
              style={{ color: "white", fontWeight: "bold" }}
              align="right"
            >
              Calories
            </TableCell>
            <TableCell
              style={{ color: "white", fontWeight: "bold" }}
              align="right"
            >
              Fat&nbsp;(g)
            </TableCell>
            <TableCell
              style={{ color: "white", fontWeight: "bold" }}
              align="right"
            >
              Carbs&nbsp;(g)
            </TableCell>
            <TableCell
              style={{ color: "white", fontWeight: "bold" }}
              align="right"
            >
              Protein&nbsp;(g)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              
            >
              <TableCell
                style={{ backgroundColor: "#808080" }}
                component="th"
                scope="row"
              >
                {row.name}
              </TableCell>
              <TableCell
                style={{ backgroundColor: "#808080", color: "white" }}
                align="right"
              >
                {row.calories}
              </TableCell>
              <TableCell
                style={{ backgroundColor: "#808080", color: "white" }}
                align="right"
              >
                {row.fat}
              </TableCell>
              <TableCell
                style={{ backgroundColor: "#808080", color: "white" }}
                align="right"
              >
                {row.carbs}
              </TableCell>
              <TableCell
                style={{ backgroundColor: "#808080", color: "white" }}
                align="right"
              >
                {row.protein}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SimpleTable;
