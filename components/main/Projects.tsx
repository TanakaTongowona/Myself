import React from 'react';
import ProjectCard from '../sub/ProjectCard';

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20 '
     id ="projects"
     >   
       <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
        My Projects
       </h1>
       <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
         <ProjectCard
              imgURL='/scrapping.jpg'
              title='Web Scrapping'
              description='Web scraping involve extracting data from websites by parsing HTML and CSS content, fetching specific data points or information, and storing or processing the extracted data. Web scraping employ programming languages like Python, JavaScript, or Ruby, and utilize tools like Beautiful Soup, Scrapy, or Selenium, to navigate and extract data from websites, providing valuable insights and information.'
         
         />
         <ProjectCard
              imgURL='/port.png'
              title='My Portifolio'
              description=' A level 2.2 Data Science and Informatics student at Midlands State University. My curriculum covers machine learning algorithms, statistical analysis, data mining, data warehousing and management, and programming, among other modules. I am seeking an opportunity to hone my practical knowledge in machine learning, AI, and data analytics in a real-world scenario as an intern or junior developer.'
         
         
         />
         <ProjectCard
          imgURL='/anomaly.jpg'
              title='Anomaly detection of illegal drugs and substances'
              description='This system leverages Streamlit and machine learning algorithms to combat illegal drug use and substance abuse. It employs image analysis technique to detect drug-related  and substances in images. Predictive models are then used to alert authorities and provide support resources. This system aims to reduce drug-related harm and promote public safety through early intervention and evidence-based interventions.'
         
         />
         <ProjectCard
              imgURL='/crud.jpg'
              title='CRUD APIs with Node.js, Mongodb, Express'
              description='Refactored and deployed a scalable CRUD API using Node.js, Express, and MongoDB. Improved code maintainability and performance by refactoring existing codebase. Designed and implemented a robust API with end-to-end functionality for creating, reading, updating, and deleting data. Utilized MongoDB for efficient data storage and retrieval. Ensured seamless deployment and scalability using Node.js and Express.'
         
         
         />
         

       </div>
    </div>
  );
}

export default Projects;

