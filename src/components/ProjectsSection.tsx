'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'This Website',
      description: '',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2340&auto=format&fit=crop',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://ecommerce-demo.netlify.app',
      githubUrl: 'https://github.com/jasonguy/ecommerce-platform',
      status: 'in-progress'
    },
    {
      id: 2,
      title: 'Comming Soon',
      description: 'Comming Soon',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2339&auto=format&fit=crop',
      technologies: ['Angular', 'Node.js', 'GraphQL', 'Authentication', 'Apollo Client', 'Express.js'],
      liveUrl: 'https://ai-task-manager.netlify.app',
      githubUrl: 'https://github.com/jasonguy/ai-task-manager',
      status: 'in-progress'
    },
    {
      id: 3,
      title: 'Comming Soon',
      description: 'Comming Soon',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
      technologies: ['Angular', 'Social Media APIs', 'TypeScript', 'Tailwind'],
      liveUrl: 'https://social-analytics.netlify.app',
      githubUrl: 'https://github.com/jasonguy/social-analytics',
      status: 'in-progress'
    },
    {
      id: 4,
      title: 'Comming Soon',
      description: 'Comming Soon',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2532&auto=format&fit=crop',
      technologies: ['React.js', 'Tailwind CSS', 'Recharts', 'Axios', 'SWR', 'Zustand', 'FastAPI', 'MongoDB', 'Python'],
      liveUrl: 'https://crypto-dashboard.netlify.app',
      githubUrl: 'https://github.com/jasonguy/crypto-dashboard',
      status: 'in-progress'
    },
    {
      id: 5,
      title: 'Coming soon',
      description: 'Comming Soon',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2372&auto=format&fit=crop',
      technologies: ['Java', 'Spring Boot', 'Docker', 'Kafka', 'Swagger', 'Microservices'],
      liveUrl: 'https://cloud-platform.netlify.app',
      githubUrl: 'https://github.com/jasonguy/cloud-platform',
      status: 'in-progress'
    },
    {
      id: 6,
      title: 'Comming Soon',
      description: 'Comming Soon',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop',
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Radix UI', 'React Query', 'React Router', 'Framer Motion', 'Recharts'],
      liveUrl: 'https://ai-content-gen.vercel.app',
      githubUrl: 'https://github.com/jasonguy/ai-content-generator',
      status: 'in-progress'
    }
  ];

  const TechBadge = ({ tech }: { tech: string }) => (
    <span className="inline-block bg-purple-500/20 text-purple-300 px-2 py-1 rounded-md text-xs font-medium mr-1 mb-1">
      {tech}
    </span>
  );

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore my collection of innovative projects that showcase my expertise in web development and software development. Each project represents a unique solution to real-world challenges, combining cutting-edge technologies with practical applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />

                {/* Status Badge */}
                {project.status === 'in-progress' && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                    In Progress
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <TechBadge key={techIndex} tech={tech} />
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
