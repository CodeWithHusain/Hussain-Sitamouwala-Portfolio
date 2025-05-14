
import { useState, useEffect } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitStatus, setSubmitStatus] = useState({
    submitted: false,
    success: false,
    message: '',
    isLoading: false
  });

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("QA_vAH4v4DTM76nHz");
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        submitted: true,
        success: false,
        message: 'Please fill out all required fields.',
        isLoading: false
      });
      return;
    }

    try {
      setSubmitStatus({
        ...submitStatus,
        isLoading: true
      });

      // Send email using EmailJS
      const response = await emailjs.send(
        "service_jh85mdo",
        "template_z7vl1m9",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        }
      );

      if (response.status === 200) {
        setSubmitStatus({
          submitted: true,
          success: true,
          message: 'Thank you for your message! I\'ll get back to you soon.',
          isLoading: false
        });
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setSubmitStatus({
            submitted: false,
            success: false,
            message: '',
            isLoading: false
          });
        }, 5000);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus({
        submitted: true,
        success: false,
        message: 'Failed to send message. Please try again later.',
        isLoading: false
      });
    }
  };

  return (
    <div>
      {/* Header Section */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24 bg-portfolio-secondary">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-portfolio-gray max-w-3xl">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Me a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-portfolio-gray mb-2">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-portfolio-secondary border border-portfolio-gray/30 rounded-md px-4 py-3 text-portfolio-white focus:outline-none focus:border-portfolio-accent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-portfolio-gray mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-portfolio-secondary border border-portfolio-gray/30 rounded-md px-4 py-3 text-portfolio-white focus:outline-none focus:border-portfolio-accent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-portfolio-gray mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-portfolio-secondary border border-portfolio-gray/30 rounded-md px-4 py-3 text-portfolio-white focus:outline-none focus:border-portfolio-accent"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-portfolio-gray mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-portfolio-secondary border border-portfolio-gray/30 rounded-md px-4 py-3 text-portfolio-white focus:outline-none focus:border-portfolio-accent resize-none"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={submitStatus.isLoading}
                  className="px-8 py-3 bg-portfolio-accent text-white font-medium rounded-md hover:bg-opacity-80 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitStatus.isLoading ? 'Sending...' : 'Send Message'}
                </button>
                
                {submitStatus.submitted && (
                  <div className={`p-4 rounded-md ${submitStatus.success ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'}`}>
                    {submitStatus.message}
                  </div>
                )}
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="bg-portfolio-secondary p-8 rounded-xl">
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-portfolio-gray mb-8">
                Feel free to reach out to me through any of these channels. I'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-portfolio-accent/20 flex items-center justify-center">
                    <Linkedin size={24} className="text-portfolio-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">LinkedIn</h3>
                    <a href="https://linkedin.com/in/hussain-sitamouwala-a20515333" target="_blank" rel="noopener noreferrer" className="text-portfolio-gray hover:text-portfolio-accent transition-colors">
                      linkedin.com/in/hussain-sitamouwala-a20515333
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-portfolio-accent/20 flex items-center justify-center">
                    <Github size={24} className="text-portfolio-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">GitHub</h3>
                    <a href="https://github.com/CodeWithHusain" target="_blank" rel="noopener noreferrer" className="text-portfolio-gray hover:text-portfolio-accent transition-colors">
                      github.com/CodeWithHusain
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-portfolio-gray/30">
                <h3 className="text-xl font-bold mb-4">Available For:</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-portfolio-primary px-4 py-2 rounded-full text-sm">Freelance Projects</span>
                  <span className="bg-portfolio-primary px-4 py-2 rounded-full text-sm">Collaboration</span>
                  <span className="bg-portfolio-primary px-4 py-2 rounded-full text-sm">Consulting</span>
                  <span className="bg-portfolio-primary px-4 py-2 rounded-full text-sm">Remote Work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="section-padding bg-gradient-to-r from-portfolio-purple/20 to-portfolio-accent/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Want to know more about my <span className="gradient-text">skills?</span>
          </h2>
          <p className="text-portfolio-gray max-w-2xl mx-auto mb-8">
            Download my resume for a complete overview of my education, experience, and skills.
          </p>
          <a href="#" className="px-8 py-3 bg-portfolio-accent text-white font-medium rounded-md hover:bg-opacity-80 transition-all inline-block">
            Download Resume
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
