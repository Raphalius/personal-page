import React, { useState, useRef, useEffect } from "react";
import './Education.css';

export default function Education() {

    const educationItems = [
        { startDate: '2019-10-01', endDate: '2021-12-15', type: 'Masters', name: 'Warsaw School of Economics', specialization: 'Big Data - Data Analysis', description: 'Big Data and Data Analysis at the Warsaw School of Economics (SGH) encompasses a comprehensive study of methods for handling, processing, and interpreting large datasets to support informed economic and business decisions. The field emphasizes both the technical infrastructure necessary for managing big data and the analytical tools required to uncover actionable insights. Core topics include data storage solutions, statistical analysis, machine learning, and data visualization, all applied to practical economic and financial contexts. Through this program, students gain skills in managing data workflows, creating predictive models, and effectively communicating data-driven findings, preparing them for complex analytical roles in today’s data-driven economy.' },
        { startDate: '2015-10-01', endDate: '2019-06-01', type: 'Bachelors', name: 'Warsaw School of Economics', specialization: 'Quantitative Methods in Economy and Information Systems', description: 'Quantitative Methods in Economy and Information Systems at the Warsaw School of Economics (SGH) focuses on the application of mathematical, statistical, and computational techniques to analyze economic phenomena and optimize information systems. This field integrates econometrics, operations research, and data analysis, equipping students with the tools to build predictive models, optimize decision-making processes, and analyze complex systems. By combining quantitative rigor with practical applications in economics and IT, students develop a skill set that supports advanced economic analysis, efficient resource management, and the strategic use of information systems in various business contexts.' },
        { startDate: '2012-09-01', endDate: '2015-06-01', type: 'Highschool', name: 'XXXIII Bilingual Copernicus Highschool in Warsaw', specialization: 'Geo-Math', description: 'The Geo-Math class at XXXIII Copernicus Bilingual High School in Warsaw offers an interdisciplinary curriculum that integrates advanced geography, mathematics, and history in both Polish and English. This program combines quantitative and spatial analysis, focusing on mathematical methods applied to geographic problems and historical patterns. Students engage with geographic information systems (GIS), statistical models, and historical contexts to develop a deep understanding of how data-driven approaches can illuminate geographic and historical dynamics. The bilingual aspect enhances proficiency in academic English, preparing students for further studies in global contexts.' },
    ]

    const sortedItems = educationItems.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);
    const itemRefs = useRef([]);

    useEffect(() => {
        const observerOptions = {
            root: containerRef.current,
            threshold: 0.5, // Trigger when 50% of the item is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = itemRefs.current.indexOf(entry.target);
                    setActiveIndex(index);
                }
            });
        }, observerOptions);

        itemRefs.current.forEach(item => {
            if (item) observer.observe(item);
        });

        return () => {
            itemRefs.current.forEach(item => {
                if (item) observer.unobserve(item);
            });
        };
    }, []);

    return (
        <div className="education-container">
            <div ref={containerRef} className="education-list-container">
                {sortedItems.map((item, index) => (
                    <div
                        key={index}
                        ref={el => itemRefs.current[index] = el}
                        className={`education-item ${index === activeIndex ? 'active' : 'inactive'}`}
                    >
                        <div className="education-details">
                            <p className="education-date">
                                {new Date(item.startDate).toLocaleDateString('en-US', { month: 'numeric', year: 'numeric' })} - {new Date(item.endDate).toLocaleDateString('en-US', { month: 'numeric', year: 'numeric' })}
                            </p>
                            <p className="education-type">
                                {item.type}
                            </p>
                            <strong className="education-name">{item.name}</strong>
                            <span className="education-specialization">{item.specialization}</span>
                            <p className="education-description">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}