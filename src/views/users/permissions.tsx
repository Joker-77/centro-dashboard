// @ts-nocheck
import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import MDTypography from "../../components/MDTypography/index";

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

const permissions = [
  {
    id: 10,
    name: "permission",
    slug: "permission",
    type: "permission",
    created_at: "2021-11-15T08:30:08.000Z",
    updated_at: "2021-11-15T08:30:08.000Z",
  },
];

export default function Permissions() {
  const [permissionName, setPermissionName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    console.log(value);

    const filterdValue = value.filter(
      (item) => permissionName.findIndex((o) => o.id === item.id) >= 0
    );

    let duplicatesRemoved = value.filter((item, itemIndex) =>
      value.findIndex((o, oIndex) => o.id === item.id && oIndex !== itemIndex)
    );

    // console.log(duplicatesRemoved);

    // let map = {};

    // for (let list of value) {
    //   map[Object.values(list).join('')] = list;
    // }
    // console.log('Using Map', Object.values(map));

    let duplicateRemoved = [];

    value.forEach((item) => {
      if (duplicateRemoved.findIndex((o) => o.id === item.id) >= 0) {
        duplicateRemoved = duplicateRemoved.filter((x) => x.id === item.id);
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
    <>
      <MDTypography
        id="perm"
        variant="caption"
        sx={{ width: 300, mt: 1, ml: 2 }}
      >
        صلاحيات العضو
      </MDTypography>
      <FormControl
        sx={{ width: 300, mt: 1, ml: 2 }}
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
            width: 280,
          }}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.map((x) => x.name).length > 3)
              return selected.map((x) => x.name).length;
            else return selected.map((x) => x.name).join(",");
          }}
          MenuProps={MenuProps}
        >
          {permissions.map((variant) => (
            <MenuItem key={variant.id} value={variant}>
              <Checkbox
                checked={
                  permissionName.findIndex((item) => item.id === variant.id) >=
                  0
                }
              />
              <ListItemText primary={variant.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
