import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HomePage,
  LoginPage,
  SignUpPage,
  HeaderPage,
  MainPage,
  FooterPage,
  HomeWebLeonPage,
} from "../pages";
import { AuthLayout, MainLayout, PageWebLayout } from "../layouts";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageWebLayout />}>
          <Route path="/" element={<HomeWebLeonPage />} />
          <Route path="/header" element={<HeaderPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/footer" element={<FooterPage />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
