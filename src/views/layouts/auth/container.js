import { useEffect } from "react";

// react-router-dom components
import { useLocation } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// Material Dashboard 2 React components
import MDBox from "./../../../components/MDBox/index";

// Material Dashboard 2 React context
import { useMaterialUIController, setLayout } from "../../../context/index";

function LayoutContainer({ background, image, children }) {
  const [, dispatch] = useMaterialUIController();
  const { pathname } = useLocation();

  useEffect(() => {
    setLayout(dispatch, "page");
  }, [pathname]);

  return (
    <MDBox
      position="absolute"
      width="100%"
      minHeight="100vh"
      sx={{
        backgroundImage: ({
          functions: { linearGradient, rgba },
          palette: { gradients },
        }) =>
          image &&
          `${linearGradient(
            rgba(gradients.dark.main, 0.6),
            rgba(gradients.dark.state, 0.6)
          )}, url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </MDBox>
  );
}

// Setting default values for the props for PageLayout
LayoutContainer.defaultProps = {
  background: "default",
};

// Typechecking props for the PageLayout
LayoutContainer.propTypes = {
  background: PropTypes.oneOf(["white", "light", "default"]),
  children: PropTypes.node.isRequired,
};

export default LayoutContainer;
