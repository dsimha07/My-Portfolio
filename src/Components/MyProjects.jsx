import "./About.css";
import "./MyProjects.css";
import SecHeading from "./SecHeading";
import ProjectBox from "./ProjectBox";

const projectData = [
    {
        title:"Personalized News Aggregator App",
        subTitle1: "Real Time Headlines",
        subTitle2: "Personal Project",
        description: "Built a full-stack app scraping real-time headlines using Cheerio. Node.js backend served categorized news via APIs; React frontend displayed dynamic, filterable headlines.",
        imgLoc:"/assets/images/image3.jpg",
        date: "Date: April 2025 – June 2025",
        tech: "Tech: React.js, Node.js, Express.js, REST API",
        type: "Type: Full-Stack | Web Scraping ",
        url: "https://yourname.github.io",
    },
    {
        title:"My Blog App",
        subTitle1: "Modern UI",
        subTitle2: "Responsive Design",
        description: "Full-stack blog platform with CRUD, authentication, and PostgreSQL.Users can create, edit, and manage blogs; built with React, Node.js, and secured with Google OAuth.",
        imgLoc:"/assets/images/image2.jpg",
        date: "Date: March 2025 - May 2025",
        tech: "Tech: Node.js, Express.js, PostgreSQL, EJS, OAuth ",
        type: "Type: Full-Stack | Blog Platform | Auth + CRUD",
        url: "https://yourname.github.io",
    },
    {
        title:"My portfolio - Resume",
        subTitle1: "Modern UI",
        subTitle2: "Responsive Design",
        description: "Built a responsive personal portfolio using React.js and Bootstrap. Developed sections like Projects, About, and Contact with smooth navigation and clean UI components. JavaScript handled client-side logic and dynamic behavior.",
        imgLoc:"/assets/images/image1.jpg",
        date: "Date: March 2024",
        tech: "Tech: React.js, javaScript, BootStrap",
        type: "Type: Professional Showcase",
        url: "https://yourname.github.io",
    },
    {
        title:"Online Examination System",
        subTitle1: "Full Stack",
        subTitle2: "Responsive Design",
        description: "A secure, scalable web-based platform for schools and institutions to conduct online multiple-choice exams with role-based access for administrators and students.",
        imgLoc:"/assets/images/image1.jpg",
        date: "Date: March 2025 - June 2025",
        tech: "Tech: React.js, Node.js, Express.js, PostgresSQL",
        type: "Type: Enterprise-Level Application",
        url: "https://yourname.github.io",
    }
];


function MyProjects(){
    return(
        <div>
            <section id="portfolio" className="br-portfolio padding-tb-50">
                <div className="container">
                    <div className="row">
                        <SecHeading title1 = "My" title2 = "Projects" bgText = "Portfolio" />
                        <div className="col-md-12 col-sm-12" style={{transform: "scale(1)", transition: "transform 0.3s ease-out"}}>
                            <div className="portfolio-content-items">
                                <div className="row m-b-minus-30px">
                                    {projectData.map((item,index) =>(
                                        <ProjectBox 
                                            key ={index}
                                            title = {item.title}
                                            subTitle1 = {item.subTitle1}
                                            subTitle2 = {item.subTitle2}
                                            description = {item.description}
                                            imgLoc = {item.imgLoc}
                                            date = {item.date}
                                            tech ={item.tech}
                                            type = {item.type}
                                            url = {item.url}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    

                </div>
            </section>
        </div>
    );
}

export default MyProjects;