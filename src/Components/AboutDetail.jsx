import "./AboutDetail.css";

const aboutInfo = [
  { label: 'Full Name', value: 'Deepak Simha' },
  { label: 'Age', value: '22 year' },
  { label: 'Language', value: 'English, Telugu, Hindi' },
  { label: 'Phone No', value: '+91 9392848728' },
  { label: 'Email', value: 'deepaksimha2003@gmail.com' },
  { label: 'Address', value: 'Rasi Hill Apt, - Lakdikapul - HYD 500004, Telangana.' },
];

function AboutDetail(){
    return(
        <div className="col-lg-6">
            <div className="br-about-detail">
                <h4>Every line of code is a step toward something better.</h4>
            </div>
            <p className="br-text">
                I am a Full Stack Developer with a strong interest in crafting responsive, user-centric web applications. I enjoy turning ideas into functional digital experiences through clean design and efficient development practices.
            </p>
            <p className="br-text">
                As a recent graduate, I’m eager to contribute to real-world projects, collaborate with innovative teams, and continuously grow as a developer in today’s fast-evolving tech space.
            </p>
            <div className="br-about-info">
                <ul className="m-r-30">
                    {aboutInfo.map((item,index) => (
                        <li key={index}>
                            <span className="title">
                                {item.label}
                                <b>:</b>
                            </span>
                            {item.value}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default AboutDetail;