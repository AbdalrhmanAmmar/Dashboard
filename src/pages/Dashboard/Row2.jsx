import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Line from "./../LineChart/Line";
import { DownloadOutlined } from "@mui/icons-material";
import { Transactions } from "./data";

function Row2() {
  const theme = useTheme();
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1} mt={3}>
      <Paper sx={{ maxWidth: 700, flexGrow: 1 }}>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
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
      <Box sx={{ height: 350, flexGrow: 1, overflow: "auto" }}>
        <Typography
          color={theme.palette.secondary.main}
          fontWeight={"bold"}
          p={1.2}
          variant="h6"
        >
          React Transactions
        </Typography>

        {Transactions.map((item) => {
          return (
            <Paper
              sx={{
                mt: 0.4,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box p={1.2} >
                <Typography variant="body1">{item.txId}</Typography>
                <Typography variant="body2">{item.user} </Typography>
              </Box>
              <Typography variant="body1">{item.date} </Typography>

              <Typography
                borderRadius={1.4}
                p={1}
                bgcolor={theme.palette.error.main}
                color={theme.palette.getContrastText(theme.palette.error.main)}
                variant="body2"
              >
                ${item.cost}
              </Typography>
            </Paper>
          );
        })}
      </Box>
    </Stack>
  );
}

export default Row2;
