import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";

function Root() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes> 
    </Layout>
  );
}

export default Root;