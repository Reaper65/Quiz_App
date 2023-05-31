import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";

function WrapperLayout() {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default WrapperLayout;
