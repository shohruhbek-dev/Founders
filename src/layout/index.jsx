import Footer from "./Footer";
import Navbar from "./navbar";


function Layout(props) {
  const { children } = props;

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;