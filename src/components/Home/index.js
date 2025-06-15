import { Component, use } from 'react';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import Header from '../Header';
import './index.css';
import TechStack from '../TechStack';


class Home extends Component {
    render() {
        const text = "🚀 Pavankalyan Kamisetty | Full-Stack Developer 🔹 Passionate about crafting intuitive, scalable, and user-friendly web applications 🔹 Transforming ideas into functional, high-performance projects with clean, efficient code 🔹 Continuously exploring new technologies & best practices to refine skills 🔹 Dedicated to building impactful digital experiences";

        return (
            <div className='main-container'>
            <Header />         
                <div className='profile-con'>
                    <img
                        src="https://res.cloudinary.com/dqjq9l2np/image/upload/v1749362449/pavan.jpg_hbezty.png"
                        alt="Profile"
                        className='profile'
                    />
                    <div className='text-con'>
                        <h1 className='description'>
                            {text.split("").map((char, index) => (
                                <span key={index} style={{ animationDelay: `${index * 50}ms` }}>{char}</span>
                            ))}
                        </h1>
                        <button className='cta-button' >
                            <Link to = "/projects" className='link-btn'>View My Work</Link>
                        </button>
                    </div>
                </div>
            <TechStack />
            </div>
        );
    }
}

export default Home;


