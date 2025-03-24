import Footer from "./footer";
import Navbar from "./navbar";
function Layout(props) {
  const { children } = props;

  return (
    <div className="main max-w-[1920px] w-full mx-auto ">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;