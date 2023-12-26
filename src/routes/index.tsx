import { Route, Routes } from "react-router-dom";
import { LandingScreen, ProductsScreen } from "../screens";

const RoutePath = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingScreen />} />
      <Route path="/products" element={<ProductsScreen />} />
    </Routes>
  );
};

export default RoutePath;
