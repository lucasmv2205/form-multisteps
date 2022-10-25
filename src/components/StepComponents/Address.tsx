import { Box, Typography } from "@mui/material";
import { FormInput } from "../FormInput";

export const Address = () => {
  return (
    <Box marginY={10}>
      <Typography variant="h6">Address</Typography>

      <Box display="flex" flexDirection="column" gap={2} marginTop={3}>
        <FormInput name="street" label="Street" />
        <FormInput name="streetNumber" label="Street Number" />
        <FormInput name="city" label="City" />
      </Box>
    </Box>
  );
};
