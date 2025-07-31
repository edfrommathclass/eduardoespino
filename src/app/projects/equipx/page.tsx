'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function EquipXProject() {
  const [activeTab, setActiveTab] = useState('overview');

  const technologies = [
    { name: 'React 18+', description: 'Component-based UI library' },
    { name: 'Next.js 13-15', description: 'Full-stack React framework' },
    { name: 'TypeScript', description: 'Type-safe JavaScript' },
    { name: 'Tailwind CSS', description: 'Utility-first CSS framework' },
    { name: 'Vercel', description: 'Deployment and hosting platform' },
    { name: 'RESTful APIs', description: 'Backend integration' },
    { name: 'Responsive Design', description: 'Mobile-first approach' },
  ];

  const achievements = [
    {
      metric: '40%',
      description: 'Improvement in Largest Contentful Paint (LCP)',
      impact: 'Faster page load times for enterprise users'
    },
    {
      metric: '50%',
      description: 'Reduction in Time to Interactive (TTI)',
      impact: 'Improved user engagement and conversion rates'
    },
    {
      metric: '4×',
      description: 'Overall improvement in Core Web Vitals',
      impact: 'Better SEO rankings and user experience'
    },
    {
      metric: '30%',
      description: 'Reduction in code defects',
      impact: 'Higher code quality through peer reviews'
    }
  ];

  const contributions = [
    {
      title: 'Frontend Architecture',
      description: 'Designed and implemented the complete frontend architecture using React and Next.js, ensuring scalability and maintainability.',
      details: [
        'Established component library and design system',
        'Implemented state management patterns',
        'Created reusable UI components',
        'Set up routing and navigation structure'
      ]
    },
    {
      title: 'Performance Optimization',
      description: 'Led performance optimization initiatives that significantly improved Core Web Vitals and user experience.',
      details: [
        'Implemented code-splitting and lazy loading',
        'Optimized images with Next.js Image component',
        'Added critical CSS inlining',
        'Implemented edge caching strategies'
      ]
    },
    {
      title: 'Team Leadership',
      description: 'Mentored junior developers and established coding standards across the development team.',
      details: [
        'Conducted code reviews and pair programming sessions',
        'Established coding standards and best practices',
        'Created documentation and onboarding materials',
        'Led technical decision-making processes'
      ]
    },
    {
      title: 'CI/CD Implementation',
      description: 'Set up automated deployment pipelines reducing release cycles from days to hours.',
      details: [
        'Configured GitHub Actions workflows',
        'Implemented automated testing pipelines',
        'Set up staging and production environments',
        'Created deployment monitoring and rollback procedures'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black-900 to-slate-900 text-white">
      {/* Header */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Link 
            href="/#projects"
            className="inline-flex items-center text-green-400 hover:text-green-300 mb-8 transition-colors"
          >
            ← Back to Projects
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-green-500 to-cyan-400 bg-clip-text text-transparent">
                equipX.com
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Enterprise marketplace platform serving high-traffic enterprise clients with advanced equipment trading capabilities.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <a 
                  href="https://equipx.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 rounded-full font-semibold hover:from-green-700 hover:to-blue-700 transform hover:scale-105 transition-all"
                >
                  Visit Live Site
                </a>
                <button className="px-6 py-3 border-2 border-green-500 rounded-full font-semibold hover:bg-green-500/10 transform hover:scale-105 transition-all">
                  View Case Study
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <h3 className="text-2xl font-bold mb-4 text-green-400">Project Overview</h3>
                <ul className="space-y-3 text-gray-300">
                  <li><strong>Role:</strong> Senior Frontend Engineer & Lead</li>
                  <li><strong>Duration:</strong> 2022 - Present</li>
                  <li><strong>Team Size:</strong> 5 developers</li>
                  <li><strong>Industry:</strong> Enterprise Equipment Marketplace</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="px-4 mb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center border-b border-slate-700">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'contributions', label: 'My Contributions' },
              { id: 'tech', label: 'Technologies' },
              { id: 'results', label: 'Results' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-green-400 text-green-400'
                    : 'border-transparent text-gray-400 hover:text-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-12">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <h2 className="text-3xl font-bold mb-6 text-blue-400">Project Challenge</h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  EquipX.com needed a complete frontend overhaul to handle enterprise-level traffic and provide 
                  a seamless equipment trading experience. The existing platform suffered from performance issues 
                  and poor user experience that was affecting business growth.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  As the Senior Frontend Engineer and team lead, I was responsible for architecting and implementing 
                  a modern, scalable solution that could handle high-traffic enterprise clients while maintaining 
                  excellent performance and user experience.
                </p>
              </div>

              <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <h2 className="text-3xl font-bold mb-6 text-green-400">Solution Approach</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-cyan-400">Technical Strategy</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Modern React architecture with Next.js</li>
                      <li>• TypeScript for enhanced code quality</li>
                      <li>• Performance-first development approach</li>
                      <li>• Mobile-responsive design system</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-purple-400">Team Management</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Led distributed team of 5 developers</li>
                      <li>• Established coding standards and practices</li>
                      <li>• Implemented peer review processes</li>
                      <li>• Mentored junior and mid-level developers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Contributions Tab */}
          {activeTab === 'contributions' && (
            <div className="space-y-8">
              {contributions.map((contribution) => (
                <div key={contribution.title} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                  <h3 className="text-2xl font-bold mb-4 text-green-400">{contribution.title}</h3>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">{contribution.description}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {contribution.details.map((detail) => (
                      <div key={detail} className="flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">▸</span>
                        <span className="text-gray-300">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Technologies Tab */}
          {activeTab === 'tech' && (
            <div className="space-y-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <h2 className="text-3xl font-bold mb-8 text-blue-400">Technology Stack</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {technologies.map((tech) => (
                    <div key={tech.name} className="bg-slate-700/50 rounded-lg p-6 border border-slate-600">
                      <h3 className="text-lg font-bold mb-2 text-green-400">{tech.name}</h3>
                      <p className="text-gray-300 text-sm">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <h2 className="text-3xl font-bold mb-6 text-purple-400">Architecture Decisions</h2>
                <div className="space-y-4 text-gray-300">
                  <p><strong className="text-white">Next.js Framework:</strong> Chosen for its excellent SEO capabilities, server-side rendering, and built-in performance optimizations.</p>
                  <p><strong className="text-white">TypeScript Integration:</strong> Implemented to reduce bugs, improve developer experience, and enhance code maintainability.</p>
                  <p><strong className="text-white">Component Architecture:</strong> Built reusable component library to ensure consistency and reduce development time.</p>
                  <p><strong className="text-white">Performance Strategy:</strong> Implemented code-splitting, image optimization, and caching strategies for optimal performance.</p>
                </div>
              </div>
            </div>
          )}

          {/* Results Tab */}
          {activeTab === 'results' && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {achievements.map((achievement) => (
                  <div key={achievement.description} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 text-center">
                    <div className="text-4xl font-bold text-green-400 mb-4">{achievement.metric}</div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{achievement.description}</h3>
                    <p className="text-gray-300">{achievement.impact}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <h2 className="text-3xl font-bold mb-6 text-blue-400">Business Impact</h2>
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                  <p>
                    The EquipX.com platform redesign resulted in significant improvements across all key metrics. 
                    The enhanced performance and user experience led to increased user engagement and higher 
                    conversion rates for enterprise clients.
                  </p>
                  <p>
                    By implementing modern development practices and establishing a strong foundation for the 
                    frontend architecture, the platform is now capable of scaling to meet growing business demands 
                    while maintaining excellent performance standards.
                  </p>
                  <p>
                    The project also established best practices for the development team, resulting in more 
                    efficient development cycles and higher code quality across all future projects.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <Link 
            href="/"
            className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold transition-colors"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </footer>
    </div>
  );
}
