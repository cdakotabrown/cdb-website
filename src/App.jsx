import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Now from "./pages/Now";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Links from "./pages/Links";
import Contact from "./pages/Contact";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<ProjectDetail />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="now" element={<Now />} />
          <Route path="resume" element={<Resume />} />
          <Route path="about" element={<About />} />
          <Route path="links" element={<Links />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
