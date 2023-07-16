import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns, rows } from "./data";
import { Box } from "@mui/material";

function Invoices() {
  return (
      <Box sx={{ height: 650, width: "99%", mx: "auto" }}>
          
          <DataGrid
              checkboxSelection
        slots={{
          toolbar: GridToolbar,
        }}
        rows={rows}
        columns={columns}
      />
    </Box>
  );
}

export default Invoices