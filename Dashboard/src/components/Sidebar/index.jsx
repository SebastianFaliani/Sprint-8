//import { Link } from "react-router-dom";

import { NavItem } from "./components/NavItem";
import styles from "./index.module.css";

const TITLE = "Dashboard Ferretería";

export const Sidebar = () => {
      return (
            <>
                  {/* <!-- Sidebar --> */}
                  <ul className={`navbar-nav sidebar sidebar-dark accordion ${styles.bordo}`} id="accordionSidebar">
                        {/* <!-- Sidebar - Brand --> */}

                        {/* <!-- Divider --> */}
                        <hr className="sidebar-divider my-0" />

                        {/* <!-- Nav Item - Dashboard --> */}
                        <li className="nav-item active">
                              <a className="nav-link" href="/">
                                    <i className="fas fa-fw fa-tachometer-alt"></i>
                                    <span>{TITLE}</span>
                              </a>
                        </li>

                        {/* <!-- Divider --> */}
                        <hr className="sidebar-divider" />

                        {/* <!-- Heading --> */}
                        <div className="sidebar-heading">Administrar</div>

                        {/* <!-- Nav Items --> */}

                        <NavItem href="/productos" icon="fa-solid fa-screwdriver-wrench" name="ABM - Productos" />
                        <NavItem href="/usuarios" icon="fa-solid fa-users" name="ABM - Usuarios" />

                        {/* <!-- Divider --> */}
                        <hr className="sidebar-divider d-none d-md-block" />
                  </ul>
                  {/* <!-- End of Sidebar --> */}
            </>
      );
};
