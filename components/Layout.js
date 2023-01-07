import Footer from "./footer/Footer";
import Header from "./header/Header";
import { useRouter } from "next/router";

const Layout = ({ children, backgroundColor }) => {
  const router = useRouter();
  return (
    <div>
      {router.pathname === "/menu" ? null : (
        <div className="">
          <div className="">
            <Header />
          </div>
        </div>
      )}
      <div>{children}</div>
      {router.pathname === "/menu" ? null : (
        <div className="footer-container  ">
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Layout;
