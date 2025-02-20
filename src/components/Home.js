import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; // Import Navbar from the separate file
import './Home.css';

const Home = () => {
  const jobs = [
    {
      "id": 1,
      "title": "Web Developer",
      "company": "Tech Innovators Ltd.",
      "rating": 4.8,
      "salary": "$100/hr",
      "description": "We are looking for a professional web developer with at least 5 years of experience to join our team. The ideal candidate will have experience in front-end and back-end development.",
      "image": "https://static.vecteezy.com/system/resources/thumbnails/005/637/993/small_2x/man-making-work-concept-in-front-of-computer-with-tutorial-free-vector.jpg",
      "category": "Web Development"
    },
    {
      "id": 2,
      "title": "Logo Designer",
      "company": "Creative Solutions Ltd.",
      "rating": 4.9,
      "salary": "$50/hr",
      "description": "We need an experienced logo designer with a strong portfolio. The candidate must have worked with top brands and be proficient in design software.",
      "image": "https://www.shutterstock.com/image-vector/aa-logo-design-white-letter-600nw-2498949063.jpg",
      "category": "Graphic Design"
    },
    {
      "id": 3,
      "title": "SEO Content Writer",
      "company": "SEO Experts Inc.",
      "rating": 4.7,
      "salary": "$30/hr",
      "description": "We are hiring a skilled SEO content writer who specializes in writing SEO-optimized articles to boost web traffic and visibility.",
      "image": "https://www.searchenginejournal.com/wp-content/uploads/2021/08/9-tips-for-creating-your-best-seo-content-this-year-1-612e44a7bd9a9-sej.jpg",
      "category": "Content Writing"
    },
    {
      "id": 4,
      "title": "Mobile App Developer",
      "company": "Tech Solutions LLC",
      "rating": 4.6,
      "salary": "$200/hr",
      "description": "We are looking for an experienced mobile app developer to join our team. Expertise in cross-platform app development is required.",
      "image": "https://media.licdn.com/dms/image/D5612AQHdV7JF7Avgcw/article-cover_image-shrink_720_1280/0/1711964512962?e=2147483647&v=beta&t=1eat3uVu7d4KmWY6OBWadizbvrQDVhHxGhvxgJWv0xI",
      "category": "Web Development"
    },
    {
      "id": 5,
      "title": "Business Card Designer",
      "company": "Design Masters Co.",
      "rating": 4.5,
      "salary": "$40/hr",
      "category": "Graphic Design",
      "description": "Seeking a talented business card designer with a passion for minimalist design. Experience with Adobe Illustrator is a must.",
      "image": "https://a.storyblok.com/f/165154/1280x720/916b746b9b/02_minimalist-business-card-designs.jpg/m/"
    },
    {
      "id": 6,
      "title": "Blog Post Writer",
      "company": "Content Creators Group",
      "rating": 4.9,
      "salary": "$25/hr",
      "category": "Content Writing",
      "description": "Looking for a skilled writer to create engaging blog posts. The ideal candidate should have experience in writing SEO-friendly content.",
      "image": "https://cariadmarketing.com/wp-content/uploads/2022/06/How-to-write-an-amazing-blog-post.jpg"
    },
    {
      "id": 7,
      "title": "Social Media Manager",
      "company": "Digital Marketing Pros",
      "rating": 4.7,
      "salary": "$150/hr",
      "category": "Marketing",
      "description": "We are hiring a social media manager to handle multiple platforms. The candidate should be familiar with advertising tools and analytics.",
      "image": "https://www.fenews.co.uk/wp-content/uploads/2022/01/social-media-1200x800.jpg"
    },
    {
      "id": 8,
      "title": "Branding Specialist",
      "company": "Brand Masters Ltd.",
      "rating": 4.8,
      "salary": "$300/hr",
      "category": "Graphic Design",
      "description": "We need a creative branding specialist to design cohesive brand identities. Experience in developing logos, business cards, and marketing materials is preferred.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUPmE9FBUev6kHCGIb8U8C4M_MbuzbKNrJOQ&s"
    },
    {
      "id": 9,
      "title": "SEO Strategy Consultant",
      "company": "Marketing Experts Group",
      "rating": 4.6,
      "salary": "$80/hr",
      "category": "Marketing",
      "description": "We are looking for an SEO strategist to create and implement effective SEO strategies for our clients.",
      "image": "https://jaro-website.s3.ap-south-1.amazonaws.com/2023/02/How-to-create-an-SEO-strategy-for-businesses.jpg"
    },
    {
      "id": 10,
      "title": "UI/UX Designer",
      "company": "Design Innovators Inc.",
      "rating": 4.7,
      "salary": "$120/hr",
      "category": "Graphic Design",
      "description": "We are looking for a talented UI/UX designer with a keen eye for detail and experience designing for mobile and web platforms.",
      "image": "https://img.freepik.com/free-vector/gradient-style-ui-ux-background_52683-69621.jpg?semt=ais_hybrid://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fui-ux&psig=AOvVaw1wbko6h2SiJaXIZz9Wic43&ust=1733987053960000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPCss6WTn4oDFQAAAAAdAAAAABAE://cdn.dribbble.com/users/113499/screenshots/15242752/media/f356ef3c90350b612a32d63c79de7c3e.png"
    },
    {
      "id": 11,
      "title": "Full Stack Developer",
      "company": "Tech Genius Ltd.",
      "rating": 4.8,
      "salary": "$150/hr",
      "category": "Web Development",
      "description": "We need an experienced full stack developer to work on a range of web applications and services.",
      "image": "https://blog.hrflow.ai/content/images/2020/04/Full-Stack-Developer.jpg"
    },
    {
      "id": 12,
      "title": "Email Marketing Specialist",
      "company": "Email Experts LLC",
      "rating": 4.5,
      "salary": "$75/hr",
      "category": "Marketing",
      "description": "Looking for an email marketing expert to create high-conversion email campaigns.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA3suYcRY0UTMLONzjPOMtellCj-6xQ-he0g&s"
    },
    {
      "id": 13,
      "title": "Data Scientist",
      "company": "Data Wizards Inc.",
      "rating": 4.9,
      "salary": "$250/hr",
      "category": "Data Science",
      "description": "We are looking for an experienced data scientist to analyze large data sets and provide insights.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb6-J98Bb2ZlN2Jbd6BWVDtDw6h3LSaDNNkA&s"
    },
    {
      "id": 14,
      "title": "Video Editor",
      "company": "Creative Media Solutions",
      "rating": 4.6,
      "salary": "$60/hr",
      "category": "Media Production",
      "description": "Hiring a professional video editor to work on promotional and corporate videos.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9yaApL9DTRutrE5fdcfPdIeF3qMuTf7E2NA&s"
    },
    {
      "id": 15,
      "title": "Cloud Engineer",
      "company": "Cloud Innovators Ltd.",
      "rating": 4.7,
      "salary": "$200/hr",
      "category": "IT Services",
      "description": "We are seeking a cloud engineer with experience in AWS and Azure to work on cloud infrastructure projects.",
      "image": "https://www.unosquare.com/wp-content/uploads/2023/10/cloud_engineer.png"
    },
    {
      "id": 16,
      "title": "Graphic Designer",
      "company": "Pixel Perfect Co.",
      "rating": 4.9,
      "salary": "$60/hr",
      "category": "Graphic Design",
      "description": "Looking for a skilled graphic designer with a strong portfolio in both print and digital design.",
      "image": "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/07/ai-graphic-design-vector-art.webp"
    },
    {
      "id": 17,
      "title": "Backend Developer",
      "company": "Code Ninjas LLC",
      "rating": 4.8,
      "salary": "$130/hr",
      "category": "Web Development",
      "description": "We are looking for an experienced backend developer with proficiency in Node.js, Python, and SQL databases to handle server-side development.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFGMnRbWFi5wwKPjGo5Dh3q63vnp2jcSpf2g&s"
    },
    {
      "id": 18,
      "title": "Illustrator",
      "company": "Artistic Creations Inc.",
      "rating": 4.6,
      "salary": "$70/hr",
      "category": "Graphic Design",
      "description": "We need an experienced illustrator for creative projects involving book illustrations, marketing materials, and website imagery.",
      "image": "https://nexacu.com/media/p4ydfxqm/illustration-of-streamlined-workflow-with-adobe-illustrator-tools.jpg"
    },
    {
      "id": 19,
      "title": "Cybersecurity Consultant",
      "company": "Security Experts Co.",
      "rating": 4.8,
      "salary": "$300/hr",
      "category": "IT Services",
      "description": "We are hiring a cybersecurity consultant to assess and enhance our network security infrastructure and prevent potential threats.",
      "image": "https://flatironschool.com/wp-content/uploads/2023/09/Resized-blog-thumbnail-35.jpg"
    },
    {
      "id": 20,
      "title": "Video Animator",
      "company": "Animation Studios Ltd.",
      "rating": 4.7,
      "salary": "$90/hr",
      "category": "Media Production",
      "description": "We are looking for a talented animator to create 2D and 3D animations for a range of projects, including commercials and educational videos.",
      "image": "https://5.imimg.com/data5/SELLER/Default/2021/8/SF/BZ/GM/61161024/animation-video.jpg"
    },
    {
      "id": 21,
      "title": "Technical Writer",
      "company": "Tech Docs LLC",
      "rating": 4.5,
      "salary": "$50/hr",
      "category": "Content Writing",
      "description": "We need a technical writer with experience in software documentation and user guides.",
      "image": "https://www.innovatia.net/hubfs/AdobeStock_314219795.jpeg"
    },
    {
      "id": 22,
      "title": "Mobile Game Developer",
      "company": "Fun Games Studio",
      "rating": 4.9,
      "salary": "$250/hr",
      "category": "Web Development",
      "description": "We are looking for an experienced mobile game developer with expertise in Unity or Unreal Engine.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq6Mhg5QzxFVDbE6sGIK2HhLqjfoq1Vo0KzA&s"
    },
    {
      "id": 23,
      "title": "Podcast Producer",
      "company": "Audio Masters",
      "rating": 4.6,
      "salary": "$100/hr",
      "category": "Media Production",
      "description": "We are hiring a podcast producer to handle recording, editing, and distribution for various podcast projects.",
      "image": "https://www.podcastengineers.com/wp-content/uploads/2024/05/Why-Having-a-Great-Podcast-Producer-Pays-Off-scaled-800x0-c-default.jpg"
    },
    {
      "id": 24,
      "title": "DevOps Engineer",
      "company": "Cloudworks Inc.",
      "rating": 4.8,
      "salary": "$180/hr",
      "category": "IT Services",
      "description": "Looking for a DevOps engineer to manage and automate infrastructure and application deployments.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9KtlkJ_pmgv0krj_eX3LcecZHr7mdKmuVnA&s"
    },
  
  ];

  const categories = ["All", "Web Development", "Graphic Design", "Content Writing", "Marketing", "Media Production", "IT Services", "Data Science"];

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredJobs = jobs.filter(job => 
    (selectedCategory === 'All' || job.category === selectedCategory) &&
    (job.title.toLowerCase().includes(search.toLowerCase()) || job.company.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="home-container">
      <Navbar /> {/* Navbar component is now imported */}
      <h1>Freelancers Hub</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for services"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>Search</button>
      </div>

      {/* Job Categories */}
      <div className="categories">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={selectedCategory === category ? 'active-category' : ''}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Job Listings */}
      <div className="job-grid">
        {filteredJobs.map((job) => (
          <Link to={`/job/${job.id}`} key={job.id} className="job-card">
            <img src={job.image} alt={job.title} />
            <div className="job-info">
              <h3>{job.title}</h3>
              <p>By {job.company}</p>
              <div className="job-meta">
                <span>⭐ {job.rating}</span>
                <span>{job.salary}</span>
              </div>
              <button className="view-job-btn">View Job</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;

