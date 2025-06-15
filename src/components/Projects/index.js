import { Component } from 'react';
import Header from '../Header';
import './index.css';

class Projects extends Component {
    render() {
        const projects1 = [
            {
                title: 'App store ',
                description: 'The interface allows users to browse apps by category, search for apps, and view app details like name, rating, and icon. It’s designed with a clean, responsive layout for a smooth user experience across devices',
    
                liveDemo: 'https://kalyan1432.ccbp.tech/'
            },
            {
                title: 'Artificial Intelligence',
                description: 'Built an intelligent chat assistant using AI models, inspired by platforms like Hugging Face and ChatGPT,It understands natural language, generates human-like responses, and can assist users in real-time conversations',
                
                liveDemo: 'https://pavankalyan183.ccbp.tech/'
            },
            {
                title: 'Food order App',
                description: 'Developed a user-friendly food ordering app where users can browse menus, add items to cart, and place orders,It features real-time price updates, category filters, and a clean, responsive design for smooth navigation',
                
                liveDemo: 'https://pavan9390223549.ccbp.tech/'
            },
            {
                title: 'Tourism Website',
                description: 'Created a responsive tourism website using HTML, CSS, and JavaScript to showcase travel destinations, packages, and memorable experiences,It includes interactive sections like image galleries, destination highlights, and contact forms for booking inquiries',
                
                liveDemo: 'https://kalyan185.ccbp.tech/'
            },
            {
                title: 'Coin Toss Game',
                description: 'This is the application, which generates the random number between 1 to 100 and add to the current number then shows the resultant number is even or odd.',
               
                liveDemo: 'https://kalyan70.ccbp.tech/'
            },
            {
                title: 'Countries and Capitals',
                description: 'This is the small application, tells like countries and capitals in some countries',
                
                liveDemo: 'https://kalyan69.ccbp.tech/'
            },
            {
                title: 'Money Manager App',
                description: 'This is the application, which generates the random number between 1 to 100 and add to the current number then shows the resultant number is even or odd.',
                
                liveDemo: 'https://kalyan72.ccbp.tech/'
            },
            {
                title: 'Emoji Game',
                description: 'This is the application, which generates the random number between 1 to 100 and add to the current number then shows the resultant number is even or odd.',
                
                liveDemo: 'https://pavankalyan184.ccbp.tech/'
            },
            {
                title: 'Projects',
                description: 'This is the application, i can do several project like static, dynamic and responsive',
                
                liveDemo: 'https://kalyan68.ccbp.tech/'
            },
            {
                title: 'Destination Search',
                description: 'Implemented a smart destination search feature that helps users quickly find travel spots by name, category, or region It enhances user experience with instant suggestions, filters, and smooth navigation across the tourism website',
                liveDemo: 'https://kalyan93902.ccbp.tech/'
            },
             {
                title: 'Inspirational Quotes',
                description: 'Like Dr. A.P.J. Abdul Kalam believed, dreams are not what you see in sleep, but what keeps you awake and motivated to act. Every small effort.',
                liveDemo: 'https://kalyan190.ccbp.tech/'
            },
             {
                title: 'Stop Watch',
                description: 'Developed a simple and efficient Stop App that helps users control and manage timers or halt ongoing tasks with a single tap. Ideal for productivity or focus-based apps, it features clean UI, responsive buttons, and instant stop functionality for smooth user experience.',
                
                liveDemo: 'https://pavankalyan186.ccbp.tech/'
            },
            {
                title: 'Digital Timer',
                description: 'Created a digital timer app that allows users to set, start, and stop countdowns with ease. It features a clean, user-friendly interface with real-time countdown display, alarm notifications, and customizable time intervals for various uses like workouts, cooking, or reminders.',
                liveDemo: 'https://pavankalyan185.ccbp.tech/'
            },
            {
                title: 'Comments app',
                description: 'Built a dynamic Comments App using React where users can add, like, and delete comments in real-time',
                
                liveDemo: 'https://pavankalyan185.ccbp.tech/'
            },
             {
                title: 'Wikipedia',
                description: 'Developed a simple Wikipedia-style web app that allows users to search and read articles on various topics. It features a clean layout, easy navigation, and a search functionality to quickly find information, providing a user-friendly knowledge resource.',
                liveDemo: 'https://kalyan200.ccbp.tech/'
            },
            {
                title: 'Guessing Game',
                description: '🎲 Number Guessing Game Created a fun guessing game where the player tries to guess a random number between 1 and 100. The game gives hints like “too high” or “too low” to help the player find the correct number with as few attempts as possible.',
                liveDemo: 'https://kalyan187.ccbp.tech/'
            },
            {
                title: 'Countries Population',
                description: '🌍 Population Finder App — Developed an app that lets users search countries and see their population data instantly.',
                liveDemo: 'https://kalyan195.ccbp.tech/'
            },
             {
                title: 'Intresting factors about the Numbers',
                description: 'Numbers from 1 to 100 have many fascinating properties. Some are prime numbers, divisible only by 1 and themselves, like 2, 3, 5, and 97. Others are perfect squares such as 16 and 81, formed by multiplying a number by itself.',
                liveDemo: 'https://kalyan196.ccbp.tech/'
            },
        ]


        return (
            <div className='main-container'>
                <Header />
                <div className='projects-container'>
                    <h2 className='projects-heading'>My Projects</h2>
                    <div className='projects-grid'>
                        {projects1.map((project, index) => (
                            <div key={index} className='project-card'>
                                <h3 className='project-title'>{project.title}</h3>
                                <p className='project-description'>{project.description}</p>
                                <div className='project-links'>
                                    <a href={project.liveDemo} target='_blank' rel='noopener noreferrer' className='project-link'>Live Demo</a>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Projects;
