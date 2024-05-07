import { Routes, Route } from "react-router-dom";
import { HomePage, LoginPage, SignUpPage, PortfolioPage } from "../pages";
import { AuthLayout, MainLayout } from "../layouts";

export default function RoutesInicio() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Route>
      </Routes>
    </>
  );
}
