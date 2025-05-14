import { useState } from 'react';
import { Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'ParkEase',
    category: 'Mobile App',
    description: 'An innovative solution for urban parking problems. ParkEase helps users find, book, and pay for parking spots in busy areas, saving time and reducing traffic congestion.',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Google Maps API'],
    status: 'In Progress',
    githubLink: 'https://github.com/CodeWithHusain/ParkEase.git',
    demoLink: '#'
  },
  {
    id: 2,
    title: 'Weather App',
    category: 'Web Development',
    description: 'A responsive weather application that provides real-time weather updates, forecasts, and interactive maps. Integrated with a weather API for accurate data.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
    status: 'Completed',
    githubLink: 'https://github.com/CodeWithHusain/SkyView_Weather.git',
    demoLink: '#'
  },
  {
    id: 3,
    title: 'Encryption Tool',
    category: 'Cybersecurity',
    description: 'A command-line tool that implements various encryption algorithms to secure text messages and files. Includes both symmetric and asymmetric encryption methods.',
    technologies: ['Python', 'Cryptography', 'CLI'],
    status: 'Completed',
    githubLink: '#',
    demoLink: '#'
  },
  {
    id: 4,
    title: 'Task Manager',
    category: 'Web Development',
    description: 'A full-stack task management application with user authentication, task categorization, priorities, and deadline tracking features.',
    technologies: ['React', 'Express', 'MongoDB', 'JWT'],
    status: 'Completed',
    githubLink: '#',
    demoLink: '#'
  }
];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  const categories = ['All', ...new Set(projects.map(project => project.category))];

  return (
    <div>
      {/* Header Section */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24 bg-portfolio-secondary">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl text-portfolio-gray max-w-3xl">
            Explore my projects and see how I bring ideas to life through code and design.
          </p>
        </div>
      </section>

      {/* Project Filter */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  filter === category
                    ? 'bg-portfolio-accent text-white'
                    : 'bg-portfolio-secondary text-portfolio-gray hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-portfolio-secondary rounded-xl overflow-hidden">
                <div className="h-64 bg-portfolio-primary flex items-center justify-center">
                  <span className="text-portfolio-gray">Project Screenshot</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <span className={`text-sm px-3 py-1 rounded-full ${
                      project.status === 'Completed' ? 'bg-green-900/30 text-green-400' : 'bg-yellow-900/30 text-yellow-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-portfolio-gray mb-6">
                    {project.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="text-lg font-medium mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-portfolio-primary px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.githubLink}
                      className="flex items-center gap-2 px-4 py-2 bg-portfolio-primary text-portfolio-white rounded-md hover:bg-portfolio-accent transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                    <a
                      href={project.demoLink}
                      className="px-4 py-2 border border-portfolio-gray text-portfolio-white rounded-md hover:border-portfolio-accent hover:text-portfolio-accent transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub CTA Section */}
      <section className="section-padding bg-gradient-to-r from-portfolio-purple/20 to-portfolio-accent/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            More Projects on <span className="gradient-text">GitHub</span>
          </h2>
          <p className="text-portfolio-gray max-w-2xl mx-auto mb-8">
            Check out my GitHub profile for more projects, contributions, and code samples.
          </p>
          <a
            href="#"
            className="flex items-center gap-2 px-6 py-3 bg-portfolio-accent text-white font-medium rounded-md hover:bg-opacity-80 transition-all mx-auto w-fit"
          >
            <Github size={20} />
            Visit My GitHub
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
