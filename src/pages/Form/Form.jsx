import { Box, Button, MenuItem, Stack, TextField } from "@mui/material";

const currencies = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manager",
    label: "Manager",
  },
  {
    value: "User",
    label: "User",
  },
];

function Form() {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      noValidate
      autoComplete="off"
    >
      <Stack direction={"row"} sx={{ gap: 2 }}>
        <TextField
          sx={{ flex: 1 }}
          id="filled-basic"
          label="First name"
          variant="filled"
        />
        <TextField
          sx={{ flex: 1 }}
          id="filled-basic"
          label="Last Name"
          variant="filled"
        />
      </Stack>

      <TextField id="filled-basic" label="Email" variant="filled" />
      <TextField id="filled-basic" label="Contact Number" variant="filled" />
      <TextField id="filled-basic" label="Address1" variant="filled" />
      <TextField id="filled-basic" label="Address2" variant="filled" />
      <TextField
        variant="filled"
        id="outlined-select-currency"
        select
        label="Select"
        defaultValue="User"
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Box sx={{ textAlign: "right" }}>
        <Button
          type="submit"
          sx={{ textTransform: "capitalize" }}
          variant="contained"
        >
          Create New User
        </Button>
      </Box>
    </Box>
  );
}

export default Form;
