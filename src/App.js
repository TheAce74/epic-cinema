import "./App.css";
import SignInSide from "./Pages/SignIn";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import TermsOfService from "./Pages/TermsOfServices";
import Layout from "./Components/Layout";
import DescriptionPage from "./Pages/DescriptionPage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
      <Route
        path="/log_in"
        element={
          <Layout>
            <SignInSide />
          </Layout>
        }
      />
      <Route
        path="/sign_up"
        element={
          <Layout>
            <SignUp />
          </Layout>
        }
      />
      <Route
        path="/terms-of-service"
        element={
          <Layout>
            <TermsOfService />
          </Layout>
        }
      />
      <Route
        path="/description-page"
        element={
          <Layout>
            <DescriptionPage />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
