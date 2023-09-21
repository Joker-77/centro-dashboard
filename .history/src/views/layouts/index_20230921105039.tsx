import { useEffect } from "react";

// react-router-dom components
import { useLocation } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// Material Dashboard 2 React components
import MDBox from "./../../components/MDBox/index";

// Material Dashboard 2 React context
import { useMaterialUIController, setLayout } from "../../context/index";
interface IPageLayoutProps {
  background: string;
  children: React.Node[];
}
const PageLayout: React.FC<IPageLayoutProps> = ({ background, children }) => {
  const [, dispatch] = useMaterialUIController();
  const { pathname } = useLocation();

  useEffect(() => {
    setLayout(dispatch, "page");
  }, [pathname]);

  return (
    <MDBox
      width="100vw"
      height="100%"
      minHeight="100vh"
      bgColor={background}
      sx={{ overflowX: "hidden" }}
    >
      {children}
    </MDBox>
  );
};

// PageLayout.defaultProps = {
//   background: "default",
// };

// PageLayout.propTypes = {
//   background: PropTypes.oneOf(["white", "light", "default"]),
//   children: PropTypes.node.isRequired,
// };

export default PageLayout;
