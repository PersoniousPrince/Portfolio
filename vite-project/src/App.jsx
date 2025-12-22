import React, { useState } from 'react';

const App = () => {
    const name = "PRINCE JONES";
    const indication ="Website Still In Development";
    const title = "Applied Physics & Computational Strategist";
    const projects = [
        {
            id: 1,
            title: "Autonomous Ferrofluid Management System",
            description: "Developed conceptual models for magnetic non-contact fluid control in microgravity, integrating Vector Calculus and computational design to minimize energy consumption in orbital environments.",
            skills: ["Vector Calculus", "Computational Modeling", "React/Tailwind"]
        },
    ];

    const Hero = () => (
        <header className="py-20 lg:py-32 text-center max-w-4xl mx-auto">
             <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-4">
                {indication}
            </p>
            <p className="text-xl font-light text-indigo-400 uppercase tracking-widest mb-4">
                {title}
            </p>
            <h1 className="text-7xl lg:text-8xl font-extrabold text-white leading-none tracking-tighter">
                {name}
            </h1>
            <div className="mt-8 flex justify-center space-x-6 text-lg font-medium">
                <a href="#projects" className="text-gray-400 hover:text-indigo-400 transition duration-300">
                    Projects
                </a>
                <a href="https://github.com/PersoniousPrince" target="_blank" className="text-gray-400 hover:text-indigo-400 transition duration-300">
                    GitHub
                </a>
                <a href="mailto:pj738071@gmail.com" target="_blank" className="text-gray-400 hover:text-indigo-400 transition duration-300">
                    Email
                </a>
            </div>
        </header>
    );

    const ProjectSection = () => (
        <section id="projects" className="max-w-4xl mx-auto py-24 border-t border-gray-800">
            <h2 className="text-4xl font-bold text-white mb-16 tracking-tight">
                Flagship Research
            </h2>
            <div className="space-y-16">
                {projects.map(project => (
                    <div key={project.id} className="p-8 lg:p-10 bg-slate-800/50 rounded-2xl border border-slate-700 hover:border-indigo-500 transition duration-500">
                        <h3 className="text-3xl font-semibold text-indigo-400 mb-4">{project.title}</h3>
                        <p className="text-lg font-light leading-relaxed text-gray-300 mb-6">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {project.skills.map(skill => (
                                <span key={skill} className="text-xs font-mono px-3 py-1 bg-indigo-900/50 text-indigo-300 rounded-full">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );

    return (
        <div
          className="min-h-screen text-gray-100"
          style={{
            backgroundColor: '#0F172A',
            background: 'radial-gradient(at 5% 95%, rgba(67, 56, 202, 0.2) 0%, transparent 50%), radial-gradient(at 95% 5%, rgba(30, 64, 175, 0.3) 0%, transparent 50%), #0F172A',
          }}
        >
            <div className="mx-auto p-4 lg:p-8">
                <Hero />
                <ProjectSection />

                <footer className="py-16 text-center text-sm font-light text-gray-500 border-t border-gray-800 mt-20">
                    Built by Prince Jones with React and Tailwind CSS.
                </footer>
            </div>
        </div>
    );
};

export default App;
