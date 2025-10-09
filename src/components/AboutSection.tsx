'use client';

import React from 'react';

const AboutSection = () => {
  const timelineItems = [
    {
      id: 1,
      date: 'Coming Soon',
      title: 'Coming Soon',
      description: 'Coming Soon',
      icon: 'briefcase',
      color: 'bg-purple-500'
    },
    {
      id: 2,
      date: 'Coming Soon',
      title: 'Coming Soon',
      description: 'Coming Soon',
      icon: 'code',
      color: 'bg-blue-500'
    },
    {
      id: 3,
      date: '2024 - present',
      title: 'Bachelor of Science in Computer Science, University of Auckland',
      description: 'Covers programming, algorithms, software development, computer systems, and data analysis. Builds strong problem-solving, analytical, and technical skills applicable to areas such as artificial intelligence, cybersecurity, and software engineering.',
      icon: 'academic',
      color: 'bg-green-500'
    }
    
  ];

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'briefcase':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 00-2 2H8a2 2 0 00-2-2V6m8 0H8m0 0v-.5A2.5 2.5 0 0110.5 3h3A2.5 2.5 0 0116 5.5V6" />
          </svg>
        );
      case 'code':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case 'academic':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Tech Arsenal */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 sticky top-24">
              <h3 className="text-xl font-bold text-blue-400 mb-6">Tech Arsenal</h3>

              <div className="space-y-6">
                {/* Frontend Mastery */}
                <div>
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Frontend Mastery</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white">React</span>
                      <div className="w-24 bg-gray-700 rounded-full h-2">
                        <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '90%' }} />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white">Next.js</span>
                      <div className="w-24 bg-gray-700 rounded-full h-2">
                        <div className="bg-gray-400 h-2 rounded-full" style={{ width: '85%' }} />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white">TypeScript</span>
                      <div className="w-24 bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }} />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white">Tailwind CSS</span>
                      <div className="w-24 bg-gray-700 rounded-full h-2">
                        <div className="bg-teal-500 h-2 rounded-full" style={{ width: '95%' }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Backend Expertise */}
                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-3">Backend Expertise</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white">Node.js</span>
                      <div className="w-24 bg-gray-700 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }} />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white">Python</span>
                      <div className="w-24 bg-gray-700 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '80%' }} />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white">Java</span>
                      <div className="w-24 bg-gray-700 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: '75%' }} />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white">GraphQL</span>
                      <div className="w-24 bg-gray-700 rounded-full h-2">
                        <div className="bg-pink-500 h-2 rounded-full" style={{ width: '75%' }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI & Cloud */}
                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">AI & Cloud</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white">OpenAI GPT-4</span>
                      <div className="w-24 bg-gray-700 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: '80%' }} />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white">AWS</span>
                      <div className="w-24 bg-gray-700 rounded-full h-2">
                        <div className="bg-orange-500 h-2 rounded-full" style={{ width: '75%' }} />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white">Docker</span>
                      <div className="w-24 bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '80%' }} />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white">MongoDB</span>
                      <div className="w-24 bg-gray-700 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-yellow-400 mb-4">Certifications</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-lg border border-blue-500/20">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">CS</span>
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">Coming Soon</div>
                      <div className="text-gray-400 text-xs">Professional Certificate</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg border border-blue-600/20">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">CS</span>
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">Coming Soon</div>
                      <div className="text-gray-400 text-xs">Professional Certificate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-green-500" />

              {/* Timeline items */}
              <div className="space-y-12">
                {timelineItems.map((item, index) => (
                  <div key={item.id} className="relative flex items-start space-x-6">
                    {/* Timeline marker */}
                    <div className={`flex-shrink-0 w-16 h-16 ${item.color} rounded-full flex items-center justify-center text-white shadow-lg border-4 border-gray-900`}>
                      {getIcon(item.icon)}
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
                      <div className="text-sm text-purple-400 font-medium mb-2">{item.date}</div>
                      <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
