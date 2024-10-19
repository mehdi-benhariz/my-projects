import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ProjectList from './Projectslist';
import ProjectDetails from './ProjectDetails';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProjectList />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );}