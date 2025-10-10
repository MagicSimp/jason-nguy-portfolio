'use client';

import React from 'react';

const CapabilitiesSection = () => {
  const capabilities = [
    {
      id: 1,
      title: 'Full Stack Development',
      description: 'Building complete web applications with React, Node.js, and TypeScript for modern, scalable solutions.',
      gradient: 'from-purple-500/20 to-pink-500/20',
      border: 'border-purple-500/30',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'AI & Machine Learning',
      description: 'Creating AI-powered applications and automation workflows using OpenAI, Python, and advanced ML techniques.',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      border: 'border-blue-500/30',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Cloud Architecture',
      description: 'Designing scalable cloud solutions with AWS, Docker, and microservices for high-performance applications.',
      gradient: 'from-green-500/20 to-emerald-500/20',
      border: 'border-green-500/30',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Database Design',
      description: 'Expert in SQL and NoSQL databases, data modeling, and building robust data-driven applications.',
      gradient: 'from-orange-500/20 to-red-500/20',
      border: 'border-orange-500/30',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Responsive Design',
      description: 'Creating beautiful, accessible user interfaces that work seamlessly across all devices and platforms.',
      gradient: 'from-pink-500/20 to-rose-500/20',
      border: 'border-pink-500/30',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Performance Optimization',
      description: 'Optimizing applications for speed, efficiency, and exceptional user experience through advanced techniques.',
      gradient: 'from-yellow-500/20 to-amber-500/20',
      border: 'border-yellow-500/30',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Core Capabilities
            </span>
          </h2>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={capability.id}
              className={`group relative bg-gradient-to-br ${capability.gradient} backdrop-blur-sm rounded-3xl p-8 border ${capability.border} hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl" />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {capability.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4">
                  {capability.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed">
                  {capability.description}
                </p>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" style={{ padding: '1px' }}>
                <div className={`w-full h-full bg-gradient-to-br ${capability.gradient} rounded-3xl`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-400">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-purple-500" />
            <span className="text-sm font-medium">Crafting digital experiences with passion (still developing capabilities)</span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-purple-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
