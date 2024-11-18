import React, { useState, useRef } from 'react';
import { useScrollHighlight } from './Utils';
import './Career.css';

export default function Career() {
    const careerItems = [
        { startDate: '2022-05-01', name: 'VISA', position: 'Software Engineer', description: 'Worked on various projects including web applications and APIs.' },
        { startDate: '2021-09-01', name: 'SAMSUNG', position: 'Junior Developer', description: 'Assisted in developing and testing frontend components.' },
        { startDate: '2020-01-01', name: 'RedCompass Labs', position: 'Backend Developer', description: 'Gained experience in backend development and database management.' },
        { startDate: '2019-01-01', name: 'RedCompass Labs', position: 'Backend Developer', description: 'Gained experience in backend development and database management.' },
        { startDate: '2018-01-01', name: 'RedCompass Labs', position: 'Intern', description: 'Gained experience in backend development and database management.' },
    ];

    const sortedItems = careerItems.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);


    useScrollHighlight(containerRef, setActiveIndex);

    return (
        <div className="career-container">
            <div ref={containerRef} className="career-list-container">
                <div className="career-padding-height"></div>

                {sortedItems.map((item, index) => (
                    <div
                        key={index}
                        className={`career-item ${index === activeIndex ? 'active' : 'inactive'}`}
                        onClick={() => {
                            const itemElement = document.querySelectorAll('.career-item')[index];
                            itemElement.scrollIntoView({
                                behavior: 'smooth',
                                block: 'center',
                            })
                        }}
                    >
                        <div className="career-date-bullet">
                            <p className="career-date">
                                {new Date(item.startDate).toLocaleDateString('en-US', { month: 'numeric', year: 'numeric' })}
                            </p>
                            <span className="career-bullet">•</span>
                        </div>
                        <div className="career-details">
                            <div className="career-name-position">
                                <strong className="career-name">{item.name}</strong>
                                <span className="career-position">{item.position}</span>
                            </div>
                            <p className="career-description">{item.description}</p>
                        </div>
                    </div>
                ))}
                <div className="career-padding-height-bottom"></div>
            </div>
        </div>
    );
}
