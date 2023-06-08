import styles from "./index.module.css";
import { SidebarLogo } from "./componets/Logo";
import Logo from "../../assets/logo.png";

export const Header = ({ userName = "Admin" }) => {
      return (
            <>
                  {/* <!-- Topbar --> */}
                  <nav className={`navbar navbar-expand navbar-dark topbar static-top shadow ${styles.bordo}`}>
                        <SidebarLogo brand="Artistica Dalí" logo={Logo} />
                        {/* <!-- Sidebar Toggle (Topbar) --> */}
                        <div className={`flex`}>
                              <h1 className={`h4 mb-0 ${styles.colorText}`}>Dashboard </h1>
                              <h1 className={`h5 mb-0 ${styles.colorText}`}>Ferretería Pico & Pala</h1>
                        </div>
                        {/* <!-- Topbar Navbar --> */}
                        <ul className="navbar-nav ml-auto">
                              <div className="topbar-divider d-none d-sm-block"></div>

                              {/* <!-- Nav Item - User Information --> */}
                              <li className={`nav-item ${styles.avatarLogoContainer}`}>
                                    <i className={`fas fa-user ${styles.userLogo}`}></i>
                                    <span className="small text-center">{userName}</span>
                              </li>
                        </ul>
                  </nav>
                  {/* <!-- End of Topbar --> */}
            </>
      );
};
