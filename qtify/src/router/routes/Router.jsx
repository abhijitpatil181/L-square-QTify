import { Route, Routes, Navigate } from "react-router-dom";
import { HomePage } from "../../pages";

const defaultNavigate = <Navigate to="/homepage" replace />;

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={defaultNavigate} />
        <Route path="homepage" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default Router;
