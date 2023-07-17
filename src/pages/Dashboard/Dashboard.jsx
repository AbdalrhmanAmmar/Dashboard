import { Box, Button } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import { DownloadOutlined } from "@mui/icons-material";

function Dashboard() {
  return (
    <div>
      <Box sx={{ textAlign: "end" }}>
        <Button sx={{ padding: "6px 8px", textTransform:"capitalize"}} variant="contained" colot="primary">
          <DownloadOutlined />
          Download Reports
        </Button>
      </Box>
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
}

export default Dashboard;
