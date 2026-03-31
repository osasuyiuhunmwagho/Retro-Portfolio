import { BrowserRouter, Routes, Route } from "react-router-dom";
import MonitorLayout from "./layouts/MonitorLayout";
import HomeScreen from "./screens/HomeScreen";
import ProjectsPage from "./pages/ProjectsPage";
import ExperiencePage from "./pages/ExperiencePage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MonitorLayout />}>
          <Route index element={<HomeScreen />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="experience" element={<ExperiencePage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
