
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const Home = () => {
  const isMobile = useIsMobile();
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-portfolio-primary opacity-90"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-portfolio-purple/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-portfolio-accent/20 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="text-left animate-fade-in-right">
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
                Hussain <span className="gradient-text">Sitamouwala</span>
              </h1>
              <p className="text-xl md:text-2xl text-portfolio-gray mb-6">
                Electronics & Computer Science Engineer
              </p>
              <p className="text-lg text-portfolio-gray mb-8 max-w-lg">
                Second-year engineering student with expertise in programming, web development, and cybersecurity.
                Passionate about creating innovative solutions through technology.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/hussain_sitamouwala_resume.pdf" 
                  className="px-8 py-3 bg-portfolio-accent text-white font-medium rounded-md hover:bg-opacity-80 transition-all"
                  download="Hussain_Sitamouwala_Resume.pdf"
                >
                  Download Resume
                </a>
                <Link to="/portfolio" className="px-8 py-3 border border-portfolio-gray text-portfolio-white font-medium rounded-md hover:border-portfolio-accent hover:text-portfolio-accent transition-all">
                  View Portfolio
                </Link>
              </div>
            </div>
            
            {/* Profile Image - Made responsive for mobile */}
            <div className={`flex justify-center items-center ${isMobile ? 'mt-6' : 'hidden md:flex'} animate-fade-in-left`}>
              <div className="relative w-full max-w-xs">
                <img 
                  src="https://i.postimg.cc/jd76rTkV/HD-suit-photo-of-hussain-removebg-preview.png"
                  alt="Hussain Sitamouwala"
                  className="w-full h-auto object-contain"
                  loading="eager"
                  onError={(e) => {
                    console.error('Image failed to load');
                    e.currentTarget.src = "/uploads/c8b81de5-e731-4abc-b6e1-b802aab26e05.png";
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-portfolio-gray text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} className="text-portfolio-accent" />
        </div>
      </section>

      {/* Skills Overview Section */}
      <section className="section-padding bg-portfolio-secondary">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Skills <span className="gradient-text">Overview</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Skill Card 1 */}
            <div className="bg-portfolio-primary p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 mb-4 rounded-full bg-portfolio-accent/20 flex items-center justify-center">
                <span className="text-2xl text-portfolio-accent">01</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Programming</h3>
              <p className="text-portfolio-gray">Proficient in C, C++, Python, and Data Structures & Algorithms</p>
            </div>
            
            {/* Skill Card 2 */}
            <div className="bg-portfolio-primary p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 mb-4 rounded-full bg-portfolio-accent/20 flex items-center justify-center">
                <span className="text-2xl text-portfolio-accent">02</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Web Development</h3>
              <p className="text-portfolio-gray">Experience with HTML, CSS, JavaScript, React, and responsive design</p>
            </div>
            
            {/* Skill Card 3 */}
            <div className="bg-portfolio-primary p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 mb-4 rounded-full bg-portfolio-accent/20 flex items-center justify-center">
                <span className="text-2xl text-portfolio-accent">03</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Cybersecurity</h3>
              <p className="text-portfolio-gray">Knowledge of security principles, ethical hacking, and network security</p>
            </div>
            
            {/* Skill Card 4 */}
            <div className="bg-portfolio-primary p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 mb-4 rounded-full bg-portfolio-accent/20 flex items-center justify-center">
                <span className="text-2xl text-portfolio-accent">04</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Leadership</h3>
              <p className="text-portfolio-gray">Led multiple group projects and participated in hackathons</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured <span className="gradient-text">Project</span>
            </h2>
            <Link to="/portfolio" className="text-portfolio-accent hover:underline">
              View All Projects →
            </Link>
          </div>
          
          <div className="bg-portfolio-secondary p-8 rounded-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">ParkEase</h3>
                <p className="text-portfolio-gray mb-6">
                  An innovative solution for urban parking problems. ParkEase helps users find, book,
                  and pay for parking spots in busy areas, saving time and reducing traffic congestion.
                </p>
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-portfolio-primary px-3 py-1 rounded-full text-sm">React</span>
                    <span className="bg-portfolio-primary px-3 py-1 rounded-full text-sm">Node.js</span>
                    <span className="bg-portfolio-primary px-3 py-1 rounded-full text-sm">MongoDB</span>
                    <span className="bg-portfolio-primary px-3 py-1 rounded-full text-sm">Google Maps API</span>
                  </div>
                </div>
                <Link to="/portfolio" className="px-6 py-2 bg-portfolio-accent text-white font-medium rounded-md hover:bg-opacity-80 transition-all inline-block">
                  View Project Details
                </Link>
              </div>
              <div className="bg-portfolio-primary rounded-lg h-64 flex items-center justify-center">
                <span className="text-portfolio-gray">Project Screenshot</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding bg-gradient-to-r from-portfolio-purple/20 to-portfolio-accent/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interested in working <span className="gradient-text">together?</span>
          </h2>
          <p className="text-portfolio-gray max-w-2xl mx-auto mb-8">
            I'm always open to discussing product design work or partnership opportunities.
          </p>
          <Link to="/contact" className="px-8 py-3 bg-portfolio-accent text-white font-medium rounded-md hover:bg-opacity-80 transition-all inline-block">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
