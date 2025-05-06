import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Components from "./Components/components"; // main/home component
import Contact from "./Components/Contact";
import TermsPrivacy from "./Components/TermsPrivacy";
import Admin from "./Components/admin";
import ScrollToTop from "./Components/ScrollToTop";
import { Outlet } from "react-router-dom";
import { StoreInfoProvider } from "./context/SourceInfoContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  return (
    <div>
      <Header />

      <div style={{ padding: "" }}>
        <Outlet /> {/* This renders the content for each route */}
      </div>
      <Footer />
    </div>
  );
};
const App = () => {
  return (
    <StoreInfoProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Components />} />
            <Route path="contact" element={<Contact />} />
            <Route path="terms-privacy" element={<TermsPrivacy />} />
            <Route path="/admin" element={<Admin />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer position="top-right" />
    </StoreInfoProvider>
  );
};

export default App;
