
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      {/* Header Section */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24 bg-portfolio-secondary">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-portfolio-gray max-w-3xl">
            Engineering student with a passion for technology, design, and creating impactful solutions.
          </p>
        </div>
      </section>

      {/* Biography Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                My <span className="gradient-text">Journey</span>
              </h2>
              <p className="text-portfolio-gray mb-4">
                I'm Hussain Sitamouwala, a first-year engineering student pursuing Electronics and Computer Science.
                My academic journey has been driven by my fascination with technology and its potential to solve real-world problems.
              </p>
              <p className="text-portfolio-gray mb-4">
                During my first year, I've actively participated in hackathons and led group projects, which has helped me develop 
                both technical skills and leadership abilities. I'm particularly interested in web development, programming, and cybersecurity.
              </p>
              <p className="text-portfolio-gray mb-4">
                My goal is to build a career that combines innovative engineering solutions with impactful design, creating 
                technologies that make a positive difference in people's lives.
              </p>
            </div>
            <div className="bg-portfolio-secondary p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <div className="mb-6">
                <h4 className="text-xl font-medium gradient-text">Electronics and Computer Science Engineering</h4>
                <p className="text-portfolio-gray">First Year Student</p>
                <p className="text-portfolio-gray italic">2023 - Present</p>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 mt-8">Achievements</h3>
              <ul className="list-disc list-inside text-portfolio-gray space-y-2">
                <li>Participated in regional hackathons</li>
                <li>Led multiple group projects</li>
                <li>Developed weather application with integrated API</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-portfolio-secondary">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <div className="bg-portfolio-primary p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Programming Languages</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-portfolio-gray">C/C++</span>
                    <span className="text-portfolio-accent">90%</span>
                  </div>
                  <div className="w-full bg-portfolio-secondary rounded-full h-2">
                    <div className="bg-portfolio-accent h-2 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-portfolio-gray">Python</span>
                    <span className="text-portfolio-accent">85%</span>
                  </div>
                  <div className="w-full bg-portfolio-secondary rounded-full h-2">
                    <div className="bg-portfolio-accent h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-portfolio-gray">Data Structures</span>
                    <span className="text-portfolio-accent">80%</span>
                  </div>
                  <div className="w-full bg-portfolio-secondary rounded-full h-2">
                    <div className="bg-portfolio-accent h-2 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Web Development */}
            <div className="bg-portfolio-primary p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Web Development</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-portfolio-gray">HTML/CSS</span>
                    <span className="text-portfolio-accent">85%</span>
                  </div>
                  <div className="w-full bg-portfolio-secondary rounded-full h-2">
                    <div className="bg-portfolio-accent h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-portfolio-gray">JavaScript</span>
                    <span className="text-portfolio-accent">75%</span>
                  </div>
                  <div className="w-full bg-portfolio-secondary rounded-full h-2">
                    <div className="bg-portfolio-accent h-2 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-portfolio-gray">React</span>
                    <span className="text-portfolio-accent">70%</span>
                  </div>
                  <div className="w-full bg-portfolio-secondary rounded-full h-2">
                    <div className="bg-portfolio-accent h-2 rounded-full" style={{ width: "70%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cybersecurity */}
            <div className="bg-portfolio-primary p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Cybersecurity</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-portfolio-gray">Network Security</span>
                    <span className="text-portfolio-accent">75%</span>
                  </div>
                  <div className="w-full bg-portfolio-secondary rounded-full h-2">
                    <div className="bg-portfolio-accent h-2 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-portfolio-gray">Security Principles</span>
                    <span className="text-portfolio-accent">80%</span>
                  </div>
                  <div className="w-full bg-portfolio-secondary rounded-full h-2">
                    <div className="bg-portfolio-accent h-2 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-portfolio-gray">Ethical Hacking</span>
                    <span className="text-portfolio-accent">65%</span>
                  </div>
                  <div className="w-full bg-portfolio-secondary rounded-full h-2">
                    <div className="bg-portfolio-accent h-2 rounded-full" style={{ width: "65%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Future <span className="gradient-text">Goals</span>
            </h2>
            <p className="text-portfolio-gray max-w-2xl mx-auto">
              As I continue my engineering journey, I'm excited about these future objectives:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-portfolio-secondary p-6 rounded-lg text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-portfolio-accent/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-portfolio-accent">01</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Specialization</h3>
              <p className="text-portfolio-gray">
                Deepen my knowledge in cybersecurity and advanced software development techniques
              </p>
            </div>
            
            <div className="bg-portfolio-secondary p-6 rounded-lg text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-portfolio-accent/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-portfolio-accent">02</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-portfolio-gray">
                Develop innovative solutions to real-world problems through technology and design
              </p>
            </div>
            
            <div className="bg-portfolio-secondary p-6 rounded-lg text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-portfolio-accent/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-portfolio-accent">03</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Collaboration</h3>
              <p className="text-portfolio-gray">
                Work with diverse teams on impactful projects and contribute to open-source communities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="section-padding bg-portfolio-secondary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Want to know <span className="gradient-text">more?</span>
          </h2>
          <p className="text-portfolio-gray max-w-2xl mx-auto mb-8">
            Download my resume for a complete overview of my skills, education, and experience.
          </p>
          <a 
            href="/hussain_sitamouwala_resume.pdf" 
            className="px-8 py-3 bg-portfolio-accent text-white font-medium rounded-md hover:bg-opacity-80 transition-all inline-block"
            download="Hussain_Sitamouwala_Resume.pdf"
          >
            Download Resume
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
