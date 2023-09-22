// Material Dashboard 2 React base styles
import colors from "../../base/colors";
import borders from "../../base/borders";
import boxShadows from "../../base/boxShadows";

// Material Dashboard 2 React helper functions
import pxToRem from "../../functions/pxToRem";

const { grey, white } = colors;
const { borderRadius } = borders;
const { tabsBoxShadow } = boxShadows;

const tabs = {
  styleOverrides: {
    root: {
      position: "relative",
      backgroundColor: "white",
      borderRadius: borderRadius.xl,
      minHeight: "unset",
      padding: pxToRem(4),
    },

    flexContainer: {
      height: "100%",
      position: "relative",
      zIndex: 10,
    },

    fixed: {
      overflow: "unset !important",
      overflowX: "unset !important",
    },

    vertical: {},
    // indicator: {
    //   backgroundColor: "white",
    //   height: "100%",
    //   width: "25% !important",
    //   borderBottom: "2px solid #FF8900",
    //   transition: "all 500ms ease",
    // },
  },
};

export default tabs;
