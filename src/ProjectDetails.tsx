import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link, useParams } from 'react-router-dom';
import { projectsData } from './data';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id ?? ''));
  const [markdownContent, setMarkdownContent] = useState('Loading...');

  useEffect(() => {
    if (project) {
      fetch(project.description)
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch description');
          }
          return response.text();
        })
        .then(text => setMarkdownContent(text))
        .catch(error => {
          console.error('Error fetching description:', error);
          setMarkdownContent('Failed to load description. Please try again later.');
        });
    }
  }, [project]);

  if (!project) return <div className="container mx-auto p-4 text-center">Project not found</div>;

  return (
    <div className="mx-auto p-4 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-xl overflow-hidden shadow-lg">
        <div className="relative h-96">
          <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
          <h1 className="absolute bottom-4 left-4 text-4xl font-bold text-white">{project.name}</h1>
        </div>
        <div className="p-6">
          <div className="flex space-x-4 mb-6">
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-300">
              GitHub Repo
            </a>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition duration-300">
              Live Demo
            </a>
          </div>
          <div className="prose max-w-none">
            <ReactMarkdown>{markdownContent}</ReactMarkdown>
          </div>
          <Link to="/" className="inline-block mt-6 text-blue-500 hover:text-blue-700 transition duration-300">
            ← Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;