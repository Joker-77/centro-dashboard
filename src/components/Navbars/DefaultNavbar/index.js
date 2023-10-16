import { useState, useEffect } from "react";

// react-router components
import { Link, useNavigate } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "../../MDBox/index";
import MDInput from "../../MDInput/index";
import MDButton from "../../MDButton/index";
import MDTypography from "../../MDTypography/index";
import breakpoints from "../../../assets/theme/base/breakpoints";
import Paper from "@mui/material/Paper";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import TuneIcon from "@mui/icons-material/Tune";
// Material Dashboard 2 React context
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";
import Menu from "@mui/material/Menu";
import {
  useMaterialUIController,
  setMiniSidenav,
} from "../../../context/index.js";
import { navbarMobileMenu, navbarIconButton } from "./styles";
import { useAuthDispatch } from "../../../context/Auth/index";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationItem from "../../Items/NotificationItem";
import { logout } from "../../../context/Auth";

function DefaultNavbar({ transparent, light, action }) {
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, transparentNavbar, darkMode, direction } = controller;
  const authDispatch = useAuthDispatch();
  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  const iconsStyle = ({
    palette: { dark, white, text },
    functions: { rgba },
  }) => ({
    color: () => {
      let colorValue = light || darkMode ? white.main : dark.main;
      if (transparentNavbar && !light) {
        colorValue = darkMode ? rgba(text.main, 0.6) : text.main;
      }
      return colorValue;
    },
  });
  const handleCloseMenu = () => setOpenMenu(false);
  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const openMobileNavbar = ({ currentTarget }) => {
    setMobileNavbar(currentTarget.parentNode);
  };
  const closeMobileNavbar = () => setMobileNavbar(false);
  const logoutUser = async () => {
    await logout(authDispatch);
    navigate("/authentication/sign-in");
  };
  useEffect(() => {
    // A function that sets the display state for the DefaultNavbarMobile.
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.sm) {
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
  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      anchorReference={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      sx={{ mt: 2 }}
    >
      <NotificationItem
        onClick={logoutUser}
        icon={<LogoutIcon />}
        title={direction == "rtl" ? `تسجيل الخروج` : `logout`}
      />
    </Menu>
  );
  return (
    <Container
      maxWidth={false}
      sx={({
        palette: { transparent, transparentColor, background },
        functions: { rgba },
        breakpoints,
      }) => ({
        [breakpoints.down("md")]: {
          paddingRight: "0 !important",
          paddingLeft: "0 !important",
        },
        [breakpoints.up("md")]: {
          paddingRight: "0 !important",
          paddingLeft: "0 !important",
        },
      })}
    >
      <MDBox
        borderRadius="0"
        shadow={transparent ? "none" : "md"}
        color={light ? "white" : "dark"}
        display="flex"
        height="3em"
        alignItems="center"
        position="absolute"
        zIndex={3}
        sx={({
          palette: { transparent: transparentColor, white, background },
          functions: { rgba },
          breakpoints,
        }) => ({
          backgroundColor: transparent
            ? transparentColor.main
            : rgba(darkMode ? background.sidenav : white.main, 0.8),
          backdropFilter: transparent ? "none" : `saturate(200%) blur(30px)`,
          [breakpoints.down("md")]: {
            width: "100%",
            marginLeft: "0",
          },
          [breakpoints.up("md")]: {
            width: "calc(84.5% - 0px)",
            marginLeft: "11.75em",
          },
        })}
      >
        <MDBox
          component={Link}
          to="/"
          //py={transparent ? 2 : 2}
          lineHeight={0.2}
          p={{ md: "13px", xs: "5px" }}
          ml={{ md: 4, xs: 0.5 }}
          style={{ backgroundColor: "#e2e9ed", borderRadius: "10px" }}
        >
          <NotificationsIcon />
        </MDBox>
        <MDBox
          component={Link}
          to="/"
          //py={transparent ? 2 : 2}
          lineHeight={0.2}
          p={{ md: "13px", xs: "5px" }}
          mx={{ md: 2, xs: 1 }}
          style={{ backgroundColor: "#e2e9ed", borderRadius: "10px" }}
        >
          <MessageIcon />
        </MDBox>
        <MDBox
          py={transparent ? 2 : 2}
          lineHeight={1}
          p={{ xs: 0, lg: 2 }}
          ml={2}
          sx={({
            palette: { transparent: transparentColor, white, background },
            functions: { rgba },
            breakpoints,
          }) => ({
            display: "flex",
            alignItems: "center",
            backgroundColor: transparent
              ? transparentColor.main
              : rgba(darkMode ? background.sidenav : white.main, 0.8),
            backdropFilter: transparent ? "none" : `saturate(200%) blur(30px)`,
            [breakpoints.down("md")]: {
              borderRadius: "10px",
              marginLeft: "0.5em",
              width: "84%",
            },
            [breakpoints.up("md")]: {
              borderRadius: "10px",
              width: "70%",
              padding: 0,
            },
            [breakpoints.up("lg")]: {
              borderRadius: "10px",
              marginLeft: "0.5em",
              width: "30%",
            },
          })}
        >
          <IconButton
            style={{ position: "absolute", zIndex: "9999" }}
            type="button"
            sx={{ p: "10px" }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
          <MDInput
            placeholder="ابحث هنا..."
            style={{
              width: "100%",
            }}
            InputProps={{
              style: {
                paddingRight: 40,
                borderTopLeftRadius: "0",
                borderBottomLeftRadius: "0",
                backgroundColor: "#e2e9ed",
              },
            }}
            onChange={() => {}}
          />
          <IconButton
            color="primary"
            sx={{ p: "10px" }}
            aria-label="directions"
            style={{ position: "relative", left: "2em" }}
          >
            <TuneIcon style={{ color: "grey" }} />
          </IconButton>
          <MDButton
            style={{
              position: "relative",
              left: "3.85em",
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              padding: "1.15em",
            }}
            color="primary"
          >
            ابحث
          </MDButton>
        </MDBox>
        <MDBox
          component={Link}
          to="/"
          lineHeight={0.15}
          display="flex"
          p={{ md: "13px" }}
          ml={{ md: "auto" }}
          mr={{ md: "3em" }}
          sx={({
            palette: { transparent: transparentColor, white, background },
            functions: { rgba },
            breakpoints,
          }) => ({
            display: "flex",
            alignItems: "center",
            backgroundColor: transparent
              ? transparentColor.main
              : rgba(darkMode ? background.sidenav : white.main, 0.8),
            backdropFilter: transparent ? "none" : `saturate(200%) blur(30px)`,
            [breakpoints.down("md")]: {
              backgroundColor: "#e2e9ed",
              borderRadius: "10px",
              marginLeft: "0.5em",
              width: "30%",
              display: "none",
            },
            [breakpoints.up("md")]: {
              borderRadius: "10px",
              width: "100%",
            },
            [breakpoints.up("lg")]: {
              backgroundColor: "#e2e9ed",
              borderRadius: "10px",
              width: "24%",
            },
          })}
        >
          <PersonIcon />
          <MDTypography
            display="flex"
            alignItems="center"
            ml={2}
            lineHeight={0}
            fontSize={15}
          >
            محمد مصطفى علي
          </MDTypography>
        </MDBox>
        <MDBox
          display={{ xs: "inline-block", lg: "none" }}
          lineHeight={0}
          py={1.5}
          pl={1.5}
          color="inherit"
          sx={({ breakpoints }) => ({
            [breakpoints.down["md"]]: {
              marginLeft: "1em !important",
            },
          })}
          onClick={openMobileNavbar}
        >
          <AccountCircleIcon
            size="small"
            color="inherit"
            aria-controls="notification-menu"
            aria-haspopup="true"
            variant="contained"
            onClick={handleOpenMenu}
          />
          {renderMenu()}
        </MDBox>
        <MDBox
          display={{ xs: "inline-block", lg: "none" }}
          lineHeight={0}
          py={1.5}
          pl={1.5}
          color="inherit"
          sx={({ breakpoints }) => ({
            [breakpoints.down["md"]]: {
              marginLeft: "1em !important",
            },
          })}
          onClick={openMobileNavbar}
        >
          <IconButton
            size="small"
            disableRipple
            color="inherit"
            sx={navbarMobileMenu}
            onClick={handleMiniSidenav}
          >
            {miniSidenav ? (
              <MenuIcon sx={iconsStyle} fontSize="medium" />
            ) : (
              <CloseIcon sx={iconsStyle} fontSize="medium" />
            )}
          </IconButton>
        </MDBox>
      </MDBox>
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
