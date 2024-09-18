import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Products from "../../components/products/Products";

const Home = () => {
  const loc = useLocation();
  return (
    <>
      <Header />
      <div>
        {loc.pathname === "/" && (
          <>
            <Hero />
            <Products />
          </>
        )}
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Home;
