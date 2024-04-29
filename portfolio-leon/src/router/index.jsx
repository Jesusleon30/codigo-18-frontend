import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}
