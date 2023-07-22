import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import Line from "./../LineChart/Line";

function Row2() {
  const theme = useTheme();
  return (
    <Stack direction={"row"}>
      <Paper sx={{ width: "990px" }}>
        <Line />
      </Paper>
      <Box>
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
