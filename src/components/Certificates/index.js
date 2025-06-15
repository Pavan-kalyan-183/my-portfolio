import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Header from "../Header";
import './index.css'
const photos = [
  { src: "/certificates/database.png", alt: "Certificate 1" },
  {src: "/certificates/static.jpg", alt: "Certificate 14" },
  { src: "/certificates/flexbox.jpg", alt: "Certificate 2" },
  { src: "/certificates/gen Ai.jpg", alt: "Certificate 3" },
  { src: "/certificates/js.jpg", alt: "Certificate 4" },
  { src: "/certificates/nxt code completion.jpg", alt: "Certificate 5" },
  { src: "/certificates/nxt code.jpg", alt: "Certificate 6" },
  { src: "/certificates/nxtcode2.jpg", alt: "Certificate 7" },
  { src: "/certificates/parnxt.jpg", alt: "Certificate 8" },
  { src: "/certificates/pcnxt.jpg", alt: "Certificate 9" },
  { src: "/certificates/python1.png", alt: "Certificate 10" },
  {src: "/certificates/python2.png", alt: "Certificate 11" } ,
  {src: "/certificates/spardha (2).jpg", alt: "Certificate 12" },
  {src: "/certificates/spardha.jpg", alt: "Certificate 13" },
  {src: "/certificates/ethical.jpg", alt: "Certificate 14" },
  {src: "/certificates/ethical com.jpg", alt: "Certificate 15" },
  {src: "/certificates/data part.jpg", alt: "Certificate 16" },
  {src: "/certificates/data com.jpg", alt: "Certificate 17" },
];

const workshops = [ 
  {
    name : 'Ethical Hacking Mega Workshop', 
    organized_By : 'NxtWave', 
    date : '5-10-2023',
    skills:'General Concepts of Gen Ai',
    participation : '/certificates/ethical.jpg',
    projectCompletion : "/certificates/ethical com.jpg"
  }, 
  {
    name : 'Data Analytics Mega Workshop', 
    organized_By : 'NxtWave', 
    date : '31-01-2024',
    skills:'Learn the things about Data Analyst and using the tool Power BI',
    participation : '/certificates/data part.jpg',
    projectCompletion : "/certificates/data com.jpg"
  },  
   
  {
    name : 'UI/UX Mega Workshop 2.o', 
    organized_By : 'NxtWave', 
    date : '22-10-2024',
    skills:'UI/UX Fundamentals , Figma Expertise ',
    participation : '/certificates/parnxt.jpg',
    projectCompletion : "/certificates/pcnxt.jpg"
  }, 
  {
    name : 'Gen AI Mega Workshop', 
    organized_By : 'NxtWave', 
    date : '18-09-2024',
    skills:'General Concepts of Gen Ai, LLMs',
    participation : '/certificates/gen Ai.jpg', 
    projectCompletion : "/certificates/ai com.jpg"
  
  },
]


const Certificates = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="certificate-main-container">
        <Header />
      <h2 className="cer-heading">My Certifications</h2>
      <div className="certificates-container gap-4">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo.src}
            alt={photo.alt}
            className="certificate-image"
            onClick={() => {
              setCurrentIndex(index);
              setOpen(true);
            }}
          />
        ))}
      </div>
      <h1>Workshops</h1>
      <ul className="workshop-unordered-list">
      {
        workshops.map((eachWorkShop, index)=>{
          return <li key = {index} className="certificate-box-list">
              <h2>{eachWorkShop.name}</h2>
              <p><strong>Organized by:</strong>{eachWorkShop.organized_By}</p>
              <p><strong>Date:</strong> {eachWorkShop.date}</p>
              <p><strong>Skills Learned:</strong>{eachWorkShop.skills}</p>
              
              <div className="certificates">
                      <img src={eachWorkShop.participation} className="certificate" alt="Participation Certificate"/>
                      <img src={eachWorkShop.projectCompletion}  className="certificate" alt="Project Completion Certificate"/>
              </div>
          </li>
        })
      }
    </ul>
    
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={photos}
        index={currentIndex}
      />
    </div>
  );
};

export default Certificates;
