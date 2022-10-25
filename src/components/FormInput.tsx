import { Box, TextField, Typography } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type FormInputProps = {
  name: string;
  label: string;
};

export const FormInput = ({ name, label }: FormInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <Box display="flex" flexDirection="column">
            <TextField
              error={Boolean(fieldState.error)}
              label={label}
              helperText={fieldState.error?.message}
              {...field}
            />
          </Box>
        );
      }}
    />
  );
};
