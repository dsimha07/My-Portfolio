import SecHeading from "./SecHeading";
import TimelineItem from "./TimelineItem";
import "./About.css";
import "./Resume.css";

const timelineData2 = [
    {
        date: "April 19, 2025",
        title: "AWS Certified Cloud Practioner",
        subtitle: "AWS",
        description: "Demonstrated understanding of cloud concepts, billing, security, and AWS services. Certified in foundational-level cloud fluency."
    },
    {
        date: "March 15, 2025",
        title: "Full-stack Web development Bootcamp",
        subtitle: "Udemy",
        description: "Built real-world web apps using HTML, CSS, JavaScript, Node.js, React, Express, and PostgreSQL. Covered both frontend and backend development."
    },
    {
        date: "June 1, 2023",
        title: "Introduction to Java and DSA",
        subtitle: "Coding Ninjas",
        description: "Learned object-oriented programming, recursion, arrays, and algorithms using Java. Practiced solving coding problems using data structures."
    }
];

const timelineData = [
    {
        date: "August 02, 2020 - 2024",
        title: "B.Tech in Electrical and Electronics Engineering",
        subtitle: "Mahindra University",
        description: "Gained a strong foundation in electronics, embedded systems, and programming. Completed a smart farming project using sensors and machine learning."
    },
    {
        date: "March 30, 2018 - 2020",
        title: "High School Education",
        subtitle: "FIITJEE Junior College",
        description: "Focused on core sciences and mathematics. Prepared rigorously for engineering entrance exams with strong academic performance."
    },
    {
        date: "June1, 2016 - 2018",
        title: "Secondary Education",
        subtitle: "Sikhara High School",
        description: "Completed foundational academic coursework. Excelled in science and technology subjects with early interest in computing."
    }
];



function Resume(){
    return(
        <div>
            <section id="experience" className="br-experience padding-tb-50 sec-bg">
                <div className="container">
                    <div className="row">
                        <SecHeading title1 = "My" title2 = "Resume" bgText = "Achievements" />
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="br-ex-box education m-b-991">
                                <h4>Education</h4>
                                <ul className="timeline">
                                    {timelineData.map((item,index) =>(
                                        <TimelineItem
                                            key ={index}
                                            date = {item.date}
                                            title = {item.title}
                                            subtitle = {item.subtitle}
                                            description = {item.description}
                                         />
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="experience br-ex-box">
                                <h4>Certifications</h4>
                                <ul className="timeline">
                                    {timelineData2.map((item,index) =>(
                                        <TimelineItem
                                            key ={index}
                                            date = {item.date}
                                            title = {item.title}
                                            subtitle = {item.subtitle}
                                            description = {item.description}
                                         />
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Resume;