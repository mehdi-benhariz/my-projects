import { Link, useParams } from 'react-router-dom';
import { projectsData } from './data';


const ProjectDetails = () => {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === parseInt(id ?? ""));
  
    if (!project) return <div>Project not found</div>;
  
    return (
      <div className="container mx-auto p-4">
        <div className="border rounded-lg overflow-hidden shadow-lg">
          <img src={project.photo} alt={project.name} className="w-full h-64 object-cover" />
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-2">{project.name}</h1>
            <p className="text-gray-600 mb-4">{new Date(project.date).toLocaleDateString()}</p>
            <p className="text-lg mb-4">{project.description}</p>
            <div className="flex space-x-4 mb-4">
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded">
                GitHub Repo
              </a>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded">
                Live Demo
              </a>
            </div>
            <Link to="/" className="text-blue-500 hover:underline">
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    );
  };

export default ProjectDetails;
  