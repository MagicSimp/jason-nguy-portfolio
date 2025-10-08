'use client';

import React from 'react';

const TechnologiesSection = () => {
  const technologies = {
    languages: [
      { name: 'JavaScript', level: 50 },
      { name: 'TypeScript', level: 30 },
      { name: 'Python', level: 75 },
      { name: 'Java', level: 25 },
      { name: 'C++', level: 10 }
    ],
    frontend: [
      { name: 'React', level: 45 },
      { name: 'Next.js', level: 24 },
      { name: 'Angular', level: 5 },
      { name: 'Tailwind CSS', level: 65 }
    ],
    backend: [
      { name: 'Node.js', level: 55 },
      { name: 'Python', level: 85 },
      { name: 'Java', level: 35 },
      { name: 'GraphQL', level: 85 }
    ],
    devops: [
      { name: 'AWS', level: 85 },
      { name: 'Docker', level: 0 },
      { name: 'MongoDB', level: 30 },
      { name: 'PostgreSQL', level: 70 }
    ]
  };

  const ProgressBar = ({ name, level }: { name: string; level: number }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-yellow-400 font-medium text-lg">{name}</span>
        <span className="text-yellow-400 font-medium text-lg">{level}%</span>
      </div>
      <div className="w-full bg-gray-700/30 rounded-full h-2">
        <div
          className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-400 transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );

  const TechCategory = ({ title, items }: { title: string; items: { name: string; level: number }[] }) => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-pink-400 mb-8">{title}</h3>
      <div>
        {items.map((tech, index) => (
          <ProgressBar key={index} {...tech} />
        ))}
      </div>
    </div>
  );

  return (
    <section id="technologies" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Technologies I Work With
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Cutting-edge tools and frameworks for building the future
          </p>
        </div>

        {/* Technologies Grid - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 lg:gap-16">
          <TechCategory
            title="Languages"
            items={technologies.languages}
          />
          <TechCategory
            title="Frontend"
            items={technologies.frontend}
          />
          <TechCategory
            title="Backend"
            items={technologies.backend}
          />
          <TechCategory
            title="DevOps & Cloud"
            items={technologies.devops}
          />
        </div>

        {/* Tech Arsenal Overview */}
        <div className="mt-16 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-3xl p-8 border border-purple-500/20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Tech Arsenal</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-blue-400 mb-3">Frontend Mastery</h4>
              <div className="space-y-2">
                <div className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm inline-block mr-2 mb-2">React</div>
                <div className="bg-gray-500/20 text-gray-300 px-3 py-1 rounded-full text-sm inline-block mr-2 mb-2">Next.js</div>
                <div className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm inline-block mr-2 mb-2">TypeScript</div>
                <div className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-sm inline-block mr-2 mb-2">Tailwind CSS</div>
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-green-400 mb-3">Backend Expertise</h4>
              <div className="space-y-2">
                <div className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm inline-block mr-2 mb-2">Node.js</div>
                <div className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm inline-block mr-2 mb-2">Python</div>
                <div className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm inline-block mr-2 mb-2">Java</div>
                <div className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm inline-block mr-2 mb-2">GraphQL</div>
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-purple-400 mb-3">AI & Cloud</h4>
              <div className="space-y-2">
                <div className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm inline-block mr-2 mb-2">OpenAI GPT-4</div>
                <div className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm inline-block mr-2 mb-2">AWS</div>
                <div className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm inline-block mr-2 mb-2">Docker</div>
                <div className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm inline-block mr-2 mb-2">MongoDB</div>
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-yellow-400 mb-3">Certifications</h4>
              <div className="space-y-2">
                <div className="bg-gradient-to-r from-blue-500/20 to-green-500/20 text-blue-300 px-3 py-1 rounded-full text-sm inline-block mr-2 mb-2">AWS - Amazon (Coming soon)</div>
                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 px-3 py-1 rounded-full text-sm inline-block mr-2 mb-2">(Coming soon)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
