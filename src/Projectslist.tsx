
import { Link } from 'react-router-dom';
import { projectsData } from './data';

const ProjectList = () => {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <div key={project.id} className="border rounded-lg overflow-hidden shadow-lg">
              <img src={project.photo} alt={project.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{project.name}</h2>
                <p className="text-sm text-gray-600">{new Date(project.date).toLocaleDateString()}</p>
                <p className="text-sm text-gray-600 mt-2 truncate">{project.description}</p>
                <Link to={`/project/${project.id}`} className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default ProjectList;