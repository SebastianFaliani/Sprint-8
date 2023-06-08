import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import PropTypes from "prop-types";

export const Layout = ({ children }) => {
      return (
            <>
                  <Header />
                  <div id="wrapper">
                        <Sidebar />
                        <div id="content-wrapper" className="d-flex flex-column">
                              <div id="content">{children}</div>

                              <Footer autor={"Ferretería Pico&Pala"} />
                        </div>
                  </div>
            </>
      );
};

Layout.propTypes = {
      children: PropTypes.object.isRequired,
};
