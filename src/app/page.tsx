'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const roles = [
    'Frontend Developer',
    'React Specialist', 
    'UI/UX Enthusiast',
    'Problem Solver'
  ];

  const skills = [
    { name: 'React', level: 95, color: 'bg-blue-500' },
    { name: 'TypeScript', level: 90, color: 'bg-blue-600' },
    { name: 'Next.js', level: 88, color: 'bg-black dark:bg-white' },
    { name: 'Tailwind CSS', level: 92, color: 'bg-cyan-500' },
    { name: 'JavaScript', level: 95, color: 'bg-yellow-500' },
    { name: 'Node.js', level: 80, color: 'bg-green-600' },
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Modern React-based shopping platform with real-time updates',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative workspace with drag-and-drop functionality',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      link: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Responsive portfolio with smooth animations and dark mode',
      tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      link: '#'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className={`text-center z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-green-500 to-cyan-400 bg-clip-text text-transparent">
            Eduardo Espino
          </h1>
          <div className="text-2xl md:text-3xl font-semibold mb-8 h-10">
            <span className="inline-block transition-all duration-500 transform">
              {roles[currentRole]}
            </span>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences with modern web technologies.
            Passionate about clean code, innovative solutions, and user-centric design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-full font-semibold text-lg hover:from-green-700 hover:to-blue-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-purple-500/25">
              View My Work
            </button>
            <button className="px-8 py-4 border-2 border-green-500 rounded-full font-semibold text-lg hover:bg-green-500/10 transform hover:scale-105 transition-all">
              Contact Me
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="group">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-lg">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`h-full ${skill.color} rounded-full transition-all duration-1000 delay-${index * 100}`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 border border-slate-700 hover:border-purple-500/50 group">
                <h3 className="text-xl font-bold mb-3 group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="text-lg text-gray-300 leading-relaxed space-y-6">
            <p>
              I&apos;m a passionate frontend developer with a keen eye for design and a love for creating 
              seamless user experiences. With expertise in modern React ecosystem and a strong 
              foundation in web technologies, I bring ideas to life through code.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to 
              open source projects, or sharing knowledge with the developer community. I believe 
              in continuous learning and staying up-to-date with the latest industry trends.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Ready to bring your next project to life? Let&apos;s connect and create something amazing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="mailto:eduardo@example.com"
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-full font-semibold text-lg hover:from-green-700 hover:to-blue-700 transform hover:scale-105 transition-all shadow-lg"
            >
              Send Email
            </a>
            <a 
              href="https://linkedin.com/in/eduardoespino"
              className="px-8 py-4 border-2 border-blue-500 rounded-full font-semibold text-lg hover:bg-blue-500/10 transform hover:scale-105 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/edfrommathclass"
              className="px-8 py-4 border-2 border-gray-500 rounded-full font-semibold text-lg hover:bg-gray-500/10 transform hover:scale-105 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Eduardo Espino. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
