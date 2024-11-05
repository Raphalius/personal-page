import React, { useState } from 'react';
import './Experience.css';

export default function Experience() {
    const [selectedProject, setSelectedProject] = useState(null);
    const projects = [
        {
            name: 'Project A',
            description: 'This is a short description of Project A. It is here for testing purposes, actual descriptions will be different. This is a short description of Project A. It is here for testing purposes, actual descriptions will be different.',
            languages: ['JavaScript', 'Python'],
            frameworks: ['React', 'Django'],
            skills: ['Frontend', 'Backend']
        },
        {
            name: 'Project B',
            description: 'Description of Project B',
            languages: ['TypeScript', 'Java'],
            frameworks: ['Angular', 'Spring Boot'],
            skills: ['Full Stack', 'API Design']
        }
    ];

    const allLanguages = [...new Set(projects.flatMap(project => project.languages))];
    const allFrameworks = [...new Set(projects.flatMap(project => project.frameworks))];
    const allSkills = [...new Set(projects.flatMap(project => project.skills))];

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    const getItemStyle = (item, category) => {
        const positive = { opacity: 1, backgroundColor: '#007200' };
        const negative = { opacity: 0.2, backgroundColor: 'gray' }
        if (!selectedProject || selectedProject[category].includes(item))
            return positive;
        return negative;
    }

    return (
        <div className="experience-container">
            <div className="left-column">
                {projects.map((project, index) => (
                    <div key={index} className="project-item" 
                    style={{ opacity: selectedProject && selectedProject.name !== project.name ? 0.2 : 1 }} 
                    onClick={() => handleProjectClick(project)}>
                        <h3>{project.name}</h3>
                        <p className='small-font'>{project.description}</p>
                    </div>
                ))}
            </div>
            <div className="right-column">
                <div className="languages-section">
                    <h4>Languages:</h4>
                    <div className="list-container">
                        {allLanguages.map((language, idx) => (
                            <div key={idx} className="list-item small-font"
                                style={getItemStyle(language, 'languages')}>{language}</div>
                        ))}
                    </div>
                </div>
                <div className="frameworks-section">
                    <h4>Frameworks:</h4>
                    <div className="list-container">
                        {allFrameworks.map((framework, idx) => (
                            <div key={idx} className="list-item small-font"
                                style={getItemStyle(framework, 'frameworks')}>{framework}</div>
                        ))}
                    </div>
                </div>
                <div className="skills-section">
                    <h4>Skills:</h4>
                    <div className="list-container">
                        {allSkills.map((skill, idx) => (
                            <div key={idx} className="list-item small-font"
                                style={getItemStyle(skill, 'skills')}>{skill}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
