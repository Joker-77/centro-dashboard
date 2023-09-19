import { useState, useEffect } from "react";

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "../../MDBox/index";
import MDInput from "../../MDInput/index";
import MDButton from "../../MDButton/index";

// Material Dashboard 2 React example components
import DefaultNavbarLink from "./DefaultNavbarLink";
import DefaultNavbarMobile from "./DefaultNavbarMobile";

// Material Dashboard 2 React base styles
import breakpoints from "../../../assets/theme/base/breakpoints";
import Paper from "@mui/material/Paper";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import IconButton from "@mui/material/IconButton";
import TuneIcon from "@mui/icons-material/Tune";
// Material Dashboard 2 React context
import { useMaterialUIController } from "../../../context/index";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
function DefaultNavbar({ transparent, light, action }) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  const openMobileNavbar = ({ currentTarget }) =>
    setMobileNavbar(currentTarget.parentNode);
  const closeMobileNavbar = () => setMobileNavbar(false);

  useEffect(() => {
    // A function that sets the display state for the DefaultNavbarMobile.
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }

    /** 
     The event listener that's calling the displayMobileNavbar function when 
     resizing the window.
    */
    window.addEventListener("resize", displayMobileNavbar);

    // Call the displayMobileNavbar function to set the state with the initial value.
    displayMobileNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", displayMobileNavbar);
  }, []);

  return (
    <Container>
      <MDBox
        //py={1}
        //px={{ xs: 4, sm: transparent ? 2 : 3, lg: transparent ? 0 : 2 }}
        //my={3}
        //ml={8}
        width={{ md: "calc(97.5% - 0px)", xs: "100%" }}
        marginLeft={{ md: "142px", xs: "0" }}
        borderRadius="0"
        // borderRadius="lg"
        shadow={transparent ? "none" : "md"}
        color={light ? "white" : "dark"}
        display="flex"
        height="3em"
        // justifyContent="space-between"
        alignItems="center"
        position="absolute"
        left={0}
        zIndex={3}
        sx={({
          palette: { transparent: transparentColor, white, background },
          functions: { rgba },
        }) => ({
          backgroundColor: transparent
            ? transparentColor.main
            : rgba(darkMode ? background.sidenav : white.main, 0.8),
          backdropFilter: transparent ? "none" : `saturate(200%) blur(30px)`,
        })}
      >
        <MDBox
          component={Link}
          to="/"
          //py={transparent ? 2 : 2}
          lineHeight={0.2}
          p={{ md: "13px" }}
          ml={1}
          style={{ backgroundColor: "lightgrey", borderRadius: "10px" }}
        >
          <NotificationsIcon />
        </MDBox>
        <MDBox
          component={Link}
          to="/"
          //py={transparent ? 2 : 2}
          lineHeight={0.2}
          p={{ md: "13px" }}
          ml={1}
          style={{ backgroundColor: "lightgrey", borderRadius: "10px" }}
        >
          <MessageIcon />
        </MDBox>
        <MDBox
          component={Link}
          to="/"
          py={transparent ? 2 : 2}
          lineHeight={1}
          p={{ xs: 0, lg: 2 }}
          ml={1}
          width="30%"
        >
          <Paper
            component="form"
            sx={{
              //p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: ,
            }}
          >
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <MDInput placeholder="ابحث هنا..." style={{ width: "100%" }} />
            <IconButton
              color="primary"
              sx={{ p: "10px" }}
              aria-label="directions"
            >
              <TuneIcon style={{ color: "grey" }} />
            </IconButton>
          </Paper>
        </MDBox>
        {action &&
          (action.type === "internal" ? (
            <MDBox display={{ xs: "none", lg: "inline-block" }}>
              <MDButton
                component={Link}
                to={action.route}
                variant="gradient"
                color={action.color ? action.color : "info"}
                size="small"
              >
                {action.label}
              </MDButton>
            </MDBox>
          ) : (
            <MDBox display={{ xs: "none", lg: "inline-block" }}>
              <MDButton
                component="a"
                href={action.route}
                target="_blank"
                rel="noreferrer"
                variant="gradient"
                color={action.color ? action.color : "info"}
                size="small"
                sx={{ mt: -0.3 }}
              >
                {action.label}
              </MDButton>
            </MDBox>
          ))}
        <MDBox
          display={{ xs: "inline-block", lg: "none" }}
          lineHeight={0}
          py={1.5}
          pl={1.5}
          color="inherit"
          sx={{ cursor: "pointer" }}
          onClick={openMobileNavbar}
        >
          <Icon fontSize="default">{mobileNavbar ? "close" : "menu"}</Icon>
        </MDBox>
      </MDBox>
      {mobileView && (
        <DefaultNavbarMobile open={mobileNavbar} close={closeMobileNavbar} />
      )}
    </Container>
  );
}

// Setting default values for the props of DefaultNavbar
DefaultNavbar.defaultProps = {
  transparent: false,
  light: false,
  action: false,
};

// Typechecking props for the DefaultNavbar
DefaultNavbar.propTypes = {
  transparent: PropTypes.bool,
  light: PropTypes.bool,
  action: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      type: PropTypes.oneOf(["external", "internal"]).isRequired,
      route: PropTypes.string.isRequired,
      color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
        "light",
      ]),
      label: PropTypes.string.isRequired,
    }),
  ]),
};

export default DefaultNavbar;
