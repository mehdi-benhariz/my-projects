
import { Link } from 'react-router-dom';
import { projectsData, expertiseData } from './data';

const ProjectList = () => {
  return (
    
    <div className="mx-auto bg-gray-100 min-h-screen w-full">
      <header className="fixed flex h-16  bg-gray-100 justify-between items-center py-6 px-4 shadow-xl p-2 w-full mx-auto" style={{ zIndex: 99 }}>
        <div className="text-2xl font-bold">MEHDI BEN HARIZ</div>
        <button className="bg-transparent border border-purple-600 text-purple-600 py-2 px-4 rounded hover:bg-purple-600 hover:text-white transition duration-300">
          Contact Me
        </button>
      </header>
      <div className="mx-auto p-12 bg-gray-100 min-h-screen w-full">
      <div className="my-16">
        
            <h2 className="text-xl font-medium mb-2 text-gray-600">My Skills</h2>
            <h1 className="text-4xl font-bold mb-8">My Expertise</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertiseData.map((item, index) => (
            <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* <h1 className="my-4 text-4xl font-bold mb-8 text-center text-gray-800">My Projects Showcase 😎</h1> */}
      <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-medium mb-2 text-gray-600">Recent Projects</h2>
            <h1 className="text-4xl font-bold mb-8">My Portfolio</h1>
          </div>

          <div className="flex justify-center">
            <a
              href="https://github.com/mehdi-benhariz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 text-white py-3 px-6 rounded-lg flex items-center hover:bg-purple-700 transition duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="white" viewBox="0 0 24 24">
                <path d="M12 .297C5.375.297 0 5.672 0 12.297c0 5.289 3.438 9.773 8.205 11.387.6.111.82-.26.82-.577v-2.172c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.084 1.837 1.238 1.837 1.238 1.07 1.832 2.809 1.302 3.495.995.107-.774.418-1.302.76-1.602-2.665-.307-5.466-1.334-5.466-5.931 0-1.312.468-2.383 1.236-3.223-.123-.307-.535-1.54.118-3.21 0 0 1.008-.323 3.301 1.23.957-.267 1.984-.399 3.003-.404 1.02.005 2.048.137 3.006.404 2.29-1.553 3.297-1.23 3.297-1.23.656 1.67.244 2.903.12 3.21.771.84 1.237 1.911 1.237 3.223 0 4.608-2.805 5.62-5.476 5.921.43.373.816 1.105.816 2.229v3.301c0 .319.216.694.825.577C20.565 22.07 24 17.586 24 12.297 24 5.672 18.627.297 12 .297z" />
              </svg>
              Visit My Github
            </a>
          </div>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <div key={project.id} className="group relative bg-white rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl w-full">
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">{project.name}</h2>
              <div className="flex justify-between items-center">
                <Link
                  to={`/project/${project.id}`}
                  className="text-blue-500 font-semibold hover:text-blue-700 transition-colors duration-300"
                >
                  View Details
                </Link>
                <div className="flex space-x-2">
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='py-6'>

        <h2 className="text-3xl font-bold mb-8 text-center">Contact me</h2>
        <form className="max-w-lg mx-auto">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input type="text" placeholder="First Name" className="w-full px-3 py-2 border rounded" />
            <input type="text" placeholder="Last Name" className="w-full px-3 py-2 border rounded" />
          </div>
          <input type="email" placeholder="Email" className="w-full px-3 py-2 border rounded mb-4" />
          <input type="text" placeholder="Subject" className="w-full px-3 py-2 border rounded mb-4" />
          <textarea placeholder="Your Message" rows={4} className="w-full px-3 py-2 border rounded mb-4"></textarea>
          <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </div>
    </div>

  );
};

export default ProjectList;