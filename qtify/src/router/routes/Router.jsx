import { Route, Routes, Navigate } from "react-router-dom";
import { HomePage } from "../../pages";
import { Layout } from "../../layouts";

const defaultNavigate = <Navigate to="/" replace />;

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={defaultNavigate} />
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
