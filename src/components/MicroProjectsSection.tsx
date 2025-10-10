'use client';

import React from 'react';

const MicroProjectsSection = () => {
  const microProjects = [
    {
      id: 1,
      title: 'AI Task Manager',
      description: 'AI-powered platform for smart task organization and productivity optimization.',
      technologies: ['React', 'Node.js'],
      githubUrl: 'https://github.com/MagicSimp',
      liveUrl: 'https://ai-tasks.netlify.app',
      gradient: 'from-purple-500/20 to-pink-500/20',
      border: 'border-purple-500/30'
    },
    {
      id: 2,
      title: 'EventHub',
      description: 'Event management platform with admin dashboard and backend integration.',
      technologies: ['PostgreSQL', 'HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/MagicSimp',
      liveUrl: null,
      gradient: 'from-blue-500/20 to-cyan-500/20',
      border: 'border-blue-500/30'
    },
    {
      id: 3,
      title: 'Weather Forecast',
      description: 'Real-time weather tracking with OpenWeatherMap API and forecast predictions.',
      technologies: ['React', 'CSS', 'Weather API', 'Forecast'],
      githubUrl: 'https://github.com/MagicSimp',
      liveUrl: 'https://weather-app-jasonguy.netlify.app',
      gradient: 'from-green-500/20 to-emerald-500/20',
      border: 'border-green-500/30'
    },
    {
      id: 4,
      title: 'YouTube Analytics Pro',
      description: 'Advanced YouTube analytics comparing video performance metrics with interactive visualizations.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      githubUrl: 'https://github.com/MagicSimp',
      liveUrl: 'https://yt-analytics-pro.vercel.app',
      gradient: 'from-red-500/20 to-orange-500/20',
      border: 'border-red-500/30'
    },
    {
      id: 5,
      title: 'Pomodoro Timer',
      description: 'Customizable Pomodoro timer with productivity stats and focus tracking.',
      technologies: ['React', 'Timer', 'Productivity', 'Stats'],
      githubUrl: 'https://github.com/MagicSimp',
      liveUrl: 'https://pomo-focus-jasonguy.vercel.app',
      gradient: 'from-yellow-500/20 to-amber-500/20',
      border: 'border-yellow-500/30'
    },
    {
      id: 6,
      title: 'AI Job Advisor',
      description: 'Full-stack AI resume analyzer powered by OpenAI GPT-4 with job recommendations and interview prep.',
      technologies: ['React', 'Node.js'],
      githubUrl: 'https://github.com/MagicSimp',
      liveUrl: 'https://yourjobadvisor-jasonguy.netlify.app',
      gradient: 'from-indigo-500/20 to-purple-500/20',
      border: 'border-indigo-500/30'
    }
  ];

  const TechIcon = ({ tech }: { tech: string }) => {
    const getColor = (technology: string) => {
      const colorMap: { [key: string]: string } = {
        'React': 'text-cyan-400',
        'Node.js': 'text-green-400',
        'PostgreSQL': 'text-blue-400',
        'HTML': 'text-orange-400',
        'CSS': 'text-blue-400',
        'JavaScript': 'text-yellow-400',
        'TypeScript': 'text-blue-500',
        'Tailwind CSS': 'text-teal-400',
        'Weather API': 'text-blue-300',
        'Forecast': 'text-blue-300',
        'Timer': 'text-orange-400',
        'Productivity': 'text-green-400',
        'Stats': 'text-purple-400'
      };
      return colorMap[technology] || 'text-gray-400';
    };

    return (
      <div className={`w-6 h-6 rounded-full ${getColor(tech)} bg-current/20 flex items-center justify-center`}>
        <span className="text-xs font-bold">{tech.charAt(0)}</span>
      </div>
    );
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Micro Projects
            </span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {microProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-gradient-to-br ${project.gradient} backdrop-blur-sm rounded-2xl p-6 border ${project.border} hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />

              {/* Content */}
              <div className="relative z-10">
                {/* Header with tech icons */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <TechIcon key={techIndex} tech={tech} />
                    ))}
                  </div>
                  {/* Status indicator */}
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Action Buttons */}
                <div className="flex justify-between items-center">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors group-hover:scale-110 transform duration-300"
                    title="View on GitHub"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full transition-all group-hover:scale-110 transform duration-300"
                      title="View Live Demo"
                    >
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            Want to see more projects? Check out my GitHub for additional work and contributions.
          </p>
          <a
            href="https://github.com/jasonguy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default MicroProjectsSection;