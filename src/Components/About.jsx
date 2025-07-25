import SecHeading from "./SecHeading";
import SkillProgress from "./SkillProgress";
import AboutDetail from "./AboutDetail";
import "./About.css";

function About(){
    return (
        <div>
            <section id="about" className=" br-about padding-tb-50">
                <div className="container">
                    <div className="row">
                        <SecHeading title1 = "About" title2 = "Me" bgText = "About"/>
                        <SkillProgress />
                        <AboutDetail />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;