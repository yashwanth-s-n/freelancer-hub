import React from 'react';

const About = () => {
    return (
        <div style={styles.container}>
            <h1>About Freelancer Hub</h1>
            <p>
                Freelancer Hub is a platform designed to connect freelancers with clients looking for skilled professionals 
                to work on various projects. Whether you're a web developer, graphic designer, writer, or digital marketer, 
                you can showcase your skills, apply for jobs, and get paid for your work.
            </p>
            <h2>Features</h2>
            <ul>
                <li>Profile management for freelancers and clients</li>
                <li>Job posting and application system</li>
                <li>Search and filter for freelancers and jobs</li>
                <li>Freelancers  can apply for jobs esily</li>
                <li>Ratings and reviews for completed projects</li>
            </ul>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        maxWidth: '800px',
        margin: 'auto',
        textAlign: 'left',
    }
};

export default About;
