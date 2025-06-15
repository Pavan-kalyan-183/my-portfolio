import { Component } from 'react';
import Header from '../Header';
import './index.css';

class About extends Component {
    render() {
        return (
            <div className='main-container'>
                <Header />
                <div className='about-container'>
                    <h2 className='about-heading'>About Me</h2>
                    <p className='about-summary'>
                                I am a final year B.Tech student at Vasireddy Venkatadri Institute of Technology, Guntur, passionate about full-stack development. My journey demonstrates strong technical skills, problem-solving ability, and a commitment to creating scalable, efficient, and user-friendly web applications. I am eager to leverage modern technologies and frameworks to build impactful digital solutions.                    </p>
                    <div className='academic-journey'>
                        <h3 className='journey-heading'>Academic Journey</h3>
                        <ul className='journey-list'>
                            <li><strong>Native Place:</strong> Sanikavaram</li>
                            <li><strong>B.tech: </strong>Ongoing in Guntur</li> 
                            <li><strong>Inter: </strong> Completed in Guntur.</li>
                             <li><strong>EAPCET Rank: </strong> Secured 20K and joined VVIT through counseling.</li>
                            <li><strong>10: </strong> Completed in Sanikavaram.</li>                            
                        </ul>
                    </div>
                    <div className='interests-section'>
                        <h3 className='interests-heading'>Interests and Aspirations</h3>
                        <p className='about-summary'>
                            I am highly passionate about full-stack development and continuously strive to improve my skills. Currently, I am seeking internship opportunities to apply my knowledge and contribute to impactful projects.
                        </p>
                    </div>
                    <div className='cta-container'>
                        <button className='cta-button' onClick={() => window.open('https://www.linkedin.com', '_blank')}>Connect with Me</button>
                        <button className='cta-button' onClick={() => window.open('/certificates/pavanResume.pdf')}>Check Resume</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
