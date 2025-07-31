'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const roles = [
    'Senior Frontend Engineer',
    'UI/UX Design Lead', 
    'React & Next.js Expert',
    'Team Lead & Mentor'
  ];

  const skills = [
    { name: 'React (16-19.1)', level: 98, color: 'bg-blue-500' },
    { name: 'TypeScript', level: 95, color: 'bg-blue-600' },
    { name: 'Next.js (12-15.4)', level: 95, color: 'bg-black dark:bg-white' },
    { name: 'Tailwind CSS', level: 92, color: 'bg-cyan-500' },
    { name: 'JavaScript (ES6+)', level: 98, color: 'bg-yellow-500' },
    { name: 'UI/UX Design', level: 90, color: 'bg-purple-600' },
    { name: 'React Native', level: 85, color: 'bg-green-600' },
    { name: 'Team Leadership', level: 88, color: 'bg-red-500' },
  ];

  const projects = [
    {
      title: 'equipX.com',
      description: 'Enterprise marketplace platform built with React and Next.js, serving high-traffic enterprise clients',
      tech: ['React', 'Next.js', 'TypeScript', 'Vercel'],
      link: 'https://equipx.com'
    },
    {
      title: 'EquipNow Mobile App',
      description: 'React Native mobile application for equipment management and marketplace functionality',
      tech: ['React Native', 'TypeScript', 'Mobile-First Design'],
      link: '#'
    },
    {
      title: '99DPF.com',
      description: 'Diesel parts & service portal with optimized performance and Core Web Vitals improvements',
      tech: ['React', 'Next.js', 'Performance Optimization', 'SEO'],
      link: 'https://99dpf.com'
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
            <span className="inline-block transition-all duration-300 transform">
              {roles[currentRole]}
            </span>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Senior Frontend Engineer & UI/UX Design Lead with 6+ years of experience building 
            scalable web applications. Leading distributed teams and delivering high-traffic 
            platforms used by enterprise clients.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-full font-semibold text-lg hover:from-green-700 hover:to-blue-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-purple-500/25" 
              onClick={() => window.location.href = '#projects'}>
              View My Work
            </button>
            <button className="px-8 py-4 border-2 border-green-500 rounded-full font-semibold text-lg hover:bg-green-500/10 transform hover:scale-105 transition-all" onClick={() => window.location.href = '#contact'}>
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
      <section className="py-20 px-4" id="projects">
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

      {/* Experience Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="space-y-12">
            {/* Acumedia Corporation */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-green-400 mb-2">Senior Frontend Engineer & UI/UX Design Lead</h3>
                  <h4 className="text-xl text-gray-300 mb-2">Acumedia Corporation</h4>
                </div>
                <div className="text-gray-400 font-semibold">July 2018 – Present</div>
              </div>
              <ul className="text-gray-300 space-y-3 leading-relaxed">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">▸</span>
                  <span>Led & scaled a 5-person distributed frontend team, mentoring junior + mid-level devs and driving a 30% reduction in defects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">▸</span>
                  <span>Architected three high-traffic products: equipX.com, EquipNow mobile app, and 99DPF.com using React, React Native, Next.js, and TypeScript</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">▸</span>
                  <span>Optimized performance (LCP ↓ 40%, TTI ↓ 50%) resulting in 4× improvement in Core Web Vitals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">▸</span>
                  <span>Implemented CI/CD pipelines reducing release cycle from 3 days to &lt; 2 hours</span>
                </li>
              </ul>
            </div>

            {/* T-Mobile */}
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">Retail Store Manager</h3>
                  <h4 className="text-xl text-gray-300 mb-2">T-Mobile</h4>
                </div>
                <div className="text-gray-400 font-semibold">January 2015 - July 2018</div>
              </div>
              <ul className="text-gray-300 space-y-3 leading-relaxed">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">▸</span>
                  <span>Led team to consistently achieve monthly goals through coaching and training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">▸</span>
                  <span>Successfully launched new store to profitability within six months</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">▸</span>
                  <span>Achieved top sales in accessories and mobile internet devices in H2 2017</span>
                </li>
              </ul>
            </div>
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
              I&apos;m a Senior Frontend Engineer & UI/UX Design Lead at Acumedia Corporation with over 6 years 
              of experience building and scaling web applications. I lead a distributed team of 5 developers, 
              mentoring junior and mid-level developers while establishing coding standards and best practices.
            </p>
            <p>
              I&apos;ve architected and delivered three high-traffic products including equipX.com, EquipNow mobile app, 
              and 99DPF.com using modern technologies like React, Next.js, and TypeScript. My focus on performance 
              optimization has resulted in 40% improvement in LCP and 50% improvement in TTI across our platforms.
            </p>
            <p>
              I hold a BS in Computer Engineering from Cal Poly Pomona (2021) and am passionate about creating 
              exceptional user experiences through the intersection of engineering and design.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 text-center">
            <h3 className="text-2xl font-bold text-purple-400 mb-2">Bachelor of Science in Computer Engineering</h3>
            <h4 className="text-xl text-gray-300 mb-4">California State Polytechnic University, Pomona</h4>
            <div className="text-gray-400 font-semibold text-lg">2017 - 2021</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4" id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Interested in working together? Let&apos;s discuss your next project and how I can help 
            bring your vision to life with modern web technologies and user-centered design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="mailto:espino.eddie@gmail.com"
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-full font-semibold text-lg hover:from-green-700 hover:to-blue-700 transform hover:scale-105 transition-all shadow-lg"
            >
              espino.eddie@gmail.com
            </a>
            <a 
              href="https://linkedin.com/in/eduardo-j-espino"
              className="px-8 py-4 border-2 border-blue-500 rounded-full font-semibold text-lg hover:bg-blue-500/10 transform hover:scale-105 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
                        <a 
              href="https://github.com/eddie-acumedia"
              className="px-8 py-4 border-2 border-gray-500 rounded-full font-semibold text-lg hover:bg-gray-500/10 transform hover:scale-105 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              Professional Git
            </a>
            <a 
              href="https://github.com/edfrommathclass"
              className="px-8 py-4 border-2 border-gray-500 rounded-full font-semibold text-lg hover:bg-gray-500/10 transform hover:scale-105 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              Personal Git
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
