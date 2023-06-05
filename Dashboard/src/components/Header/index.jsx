import styles from "./index.module.css";

export const Header = ({userName = "Admin"}) => {
  return (
    <>
      {/* <!-- Topbar --> */}
      <nav className={`navbar navbar-expand navbar-dark topbar mb-4 static-top shadow ${styles.bordo}`}/* "navbar navbar-expand navbar-dark bg-dark topbar mb-4 static-top shadow " */>
        {/* <!-- Sidebar Toggle (Topbar) --> */}

        {/* <!-- Topbar Navbar --> */}
        <ul className="navbar-nav ml-auto">
         
          <div className="topbar-divider d-none d-sm-block"></div>

          {/* <!-- Nav Item - User Information --> */}
          <li className={`nav-item ${styles.avatarLogoContainer}`}>
              <i
                className={`fas fa-user ${styles.userLogo}`}
              ></i>
              <span className="small text-center">
                {userName}
              </span>
          </li>
        </ul>
      </nav>
      {/* <!-- End of Topbar --> */}
    </>
  );
};