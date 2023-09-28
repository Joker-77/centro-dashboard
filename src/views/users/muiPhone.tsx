import {
  BaseTextFieldProps,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import {
  CountryIso2,
  defaultCountries,
  FlagEmoji,
  parseCountry,
  usePhoneInput,
} from "react-international-phone";

export interface MUIPhoneProps extends BaseTextFieldProps {
  value: string;
  onChange: (phone: string) => void;
}

export const MuiPhone: React.FC<any> = ({ value, ...props }) => {
  const { phone, handlePhoneValueChange, inputRef, country, setCountry } =
    usePhoneInput({
      defaultCountry: "us",
      value,
      countries: defaultCountries,
      onChange: (data) => {
        props.onChange(data.phone);
      },
    });

  return (
    <TextField
      variant="outlined"
      placeholder=""
      value={phone}
      onChange={handlePhoneValueChange}
      type="tel"
      sx={{
        width: "75%",
        "& .MuiOutlinedInput-root": {
          backgroundColor: "#fff",
        },
        "& .MuiFormHelperText-root": {
          color: "red",
          backgroundColor: "#f0f2f5",
        },
        "& .MuiOutlinedInput-root.MuiInputBase-colorPrimary": {},
      }}
      inputRef={inputRef}
      InputProps={{
        startAdornment: (
          <InputAdornment
            position="start"
            style={{
              marginRight: "2px",
              marginLeft: "0px",
            }}
          >
            <Select
              MenuProps={{
                style: {
                  top: "4em",
                  left: "-1em",
                },
                transformOrigin: {
                  vertical: "top",
                  horizontal: "left",
                },
              }}
              sx={{
                width: "max-content",
                // Remove default outline (display only on focus)
                fieldset: {
                  display: "none",
                },

                '&.Mui-focused:has(div[aria-expanded="false"])': {
                  fieldset: {
                    display: "block",
                  },
                },
                // Update default spacing
                ".MuiSelect-select": {
                  padding: "8px",
                  paddingRight: "24px !important",
                },
                svg: {
                  right: 0,
                },
              }}
              value={country}
              onChange={(e) => {
                setCountry(e.target.value as CountryIso2);
              }}
              renderValue={(value) => (
                <FlagEmoji iso2={value} style={{ display: "flex" }} />
              )}
            >
              {defaultCountries.map((c) => {
                const country = parseCountry(c);
                return (
                  <MenuItem key={country.iso2} value={country.iso2}>
                    <FlagEmoji
                      iso2={country.iso2}
                      style={{ marginRight: "8px" }}
                    />
                    <Typography marginRight="8px">{country.name}</Typography>
                    <Typography color="gray">+{country.dialCode}</Typography>
                  </MenuItem>
                );
              })}
            </Select>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};
