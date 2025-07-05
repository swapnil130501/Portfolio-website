import { Route, Routes } from "react-router-dom";
import Projects from "../components/Projects";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import { projects } from "../data/projectData";
import PorjectsPage from "../pages/ProjectsPage";

export default function AppRoutes() {
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<PorjectsPage data={projects}/>} />
        </Routes>
      </Layout>
  );
}