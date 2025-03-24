import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
import { useEffect } from "react";

function Root() {
  useEffect(() => {
    const images = document.querySelectorAll('img:not([loading])');
    images.forEach(img => {
      img.setAttribute('loading', 'lazy');
    });
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes> 
    </Layout>
  );
}

export default Root;
