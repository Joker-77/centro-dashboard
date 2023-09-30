// @ts-nocheck
import React, { useEffect } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import MDTypography from "../../components/MDTypography/index";
import RoleService from "../../services/RoleService";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function Permissions() {
  const [permissions, setPermissions] = React.useState([]);
  const [permissionName, setPermissionName] = React.useState([]);

  React.useEffect(() => {
    RoleService.getAll()
      .then((response) => {
        console.clear();
        console.log(response);
        setPermissions(response);
      })
      .catch((e) => console.error(e));
  }, []);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    console.clear();
    console.log(event.target.value);
    const filterdValue = value.filter(
      (item) => permissionName.findIndex((o) => o === item) >= 0
    );

    let duplicatesRemoved = value.filter((item, itemIndex) =>
      value.findIndex((o, oIndex) => o === item && oIndex !== itemIndex)
    );

    // console.log(duplicatesRemoved);

    // let map = {};

    // for (let list of value) {
    //   map[Object.values(list).join('')] = list;
    // }
    // console.log('Using Map', Object.values(map));

    let duplicateRemoved = [];
    value.forEach((item) => {
      if (duplicateRemoved.findIndex((o) => o === item) >= 0) {
        duplicateRemoved = duplicateRemoved.filter((x) => x === item);
      } else {
        duplicateRemoved.push(item);
      }
    });
    setPermissionName(duplicateRemoved);
  };

  // const handleChange = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   const preventDuplicate = value.filter(
  //     (v, i, a) => a.findIndex((t) => t.id === v.id) === i
  //   );
  //   setPermissionName(
  //     // On autofill we get a the stringified value.
  //     typeof preventDuplicate === 'string'
  //       ? preventDuplicate.split(',')
  //       : preventDuplicate
  //   );
  // };

  return (
    <FormControl
      sx={({ breakpoints }) => ({
        [breakpoints.down("md")]: { width: 215, mt: 1 },
        [breakpoints.up("md")]: { width: 295, mt: 1 },
      })}
      style={{ fontSize: "15px" }}
    >
      <Select
        labelId="permissions"
        id="permissions"
        multiple
        value={permissionName}
        onChange={handleChange}
        style={{
          backgroundColor: "white",
          height: 45,
        }}
        input={<OutlinedInput />}
        renderValue={(selected) => {
          if (selected.map((x) => x).length > 3)
            return selected.map((x) => x).length;
          else return selected.map((x) => x).join(",");
        }}
        MenuProps={MenuProps}
      >
        {permissions.map((variant) => (
          <MenuItem key={variant} value={variant}>
            <Checkbox
              checked={
                permissionName.findIndex((item) => item === variant) >= 0
              }
            />
            <ListItemText primary={variant} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
