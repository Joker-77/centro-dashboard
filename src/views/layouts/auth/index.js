/* eslint-disable no-unused-vars */
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "../../../components/MDBox/index";

// Material Dashboard 2 React example components
import LayoutContainer from "./container";

function AuthLayout({ image, children }) {
  return (
    <LayoutContainer image={image}>
      <Grid
        container
        spacing={1}
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        {children}
      </Grid>
    </LayoutContainer>
  );
}

// Typechecking props for the BasicLayout
AuthLayout.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default AuthLayout;
