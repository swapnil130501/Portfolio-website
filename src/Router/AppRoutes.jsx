import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import { projects } from "../data/projectData";
import PorjectsPage from "../pages/ProjectsPage";
import AboutPage from "../pages/AboutPage";

export default function AppRoutes() {
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<PorjectsPage data={projects}/>} />
          <Route path="/about" element={<AboutPage />}/>
        </Routes>
      </Layout>
  );
}