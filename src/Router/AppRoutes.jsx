import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import { projects } from "../data/projectData";
import PorjectsPage from "../pages/ProjectsPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import BlogPage from "../pages/BlogPage";
import BlogDetail from "../components/BlogDetail";

export default function AppRoutes() {
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<PorjectsPage data={projects}/>} />
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/contact" element={<ContactPage />}/>
          <Route path="/blogs" element={<BlogPage />}/>
          <Route path="/blogs/:slug" element={<BlogDetail />} />
        </Routes>
      </Layout>
  );
}