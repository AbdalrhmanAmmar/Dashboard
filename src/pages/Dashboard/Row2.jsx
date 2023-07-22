import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Line from "./../LineChart/Line";
import { DownloadDoneOutlined, DownloadOutlined } from "@mui/icons-material";

function Row2() {
  const theme = useTheme();
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1} mt={3}>
      <Paper sx={{ maxWidth: 700, flexGrow: 1 }}>
        <Stack direction={"row"} flexWrap={"wrap"} justifyContent={'space-between'} alignItems={'center'}>
          <Box>
            <Typography
              color={theme.palette.secondary.main}
              mb={1}
              mt={2}
              ml={4}
              variant="h6"
            >
              Revenue Generated
            </Typography>
            <Typography variant="body2" ml={4}>
              $59,348.32
            </Typography>
          </Box>
          <Box>
            <IconButton sx={{ mr: 3 }}>
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Stack>
        <Line isDashboard={true} />
      </Paper>
      <Box sx={{ height: 350, flexGrow: 1 }}>
        <Typography
          color={theme.palette.secondary.main}
          fontWeight={"bold"}
          p={1.2}
          variant="h6"
        >
          React Transactions
        </Typography>
      </Box>
    </Stack>
  );
}

export default Row2;
