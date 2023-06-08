import styles from "./index.module.css";

export const Footer = ({ autor }) => {
      return (
            <>
                  {/* <!-- Footer --> */}
                  <footer className={`sticky-footer ${styles.grisClaro}`}>
                        <div className="container my-auto">
                              <div className={`copyright text-center my-auto ${styles.bordo}`}>
                                    <span>Copyright &copy; {autor} 2023</span>
                              </div>
                        </div>
                  </footer>
                  {/* <!-- End of Footer --> */}
            </>
      );
};
