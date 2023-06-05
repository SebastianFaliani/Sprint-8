import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./index.module.css";

export const SidebarLogo = ({ logo, brand }) => {
  return (
    <Link
      className={`d-flex align-items-center justify-content-center ${styles.alto}`}
      to={"/"}
    >
      <div className={`sidebar-brand-icon ${styles.ancho}`}>
        <img className={`w-100 ${styles.redondo}`} src={logo} alt={brand} />
      </div>
    </Link>
  );
};

SidebarLogo.propTypes = {
  logo: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
};
