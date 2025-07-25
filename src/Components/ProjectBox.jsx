

function ProjectBox(props) {
    return (
        <div className="col-lg-6 " data-aos = "zoom-in-up" data-aos-duration = "1000" data-aos-delay ="300" data-aos-easing = "ease-out-cubic" >
            <div className="br-project-box" >
                <h3>{props.title}</h3>
                <div className="texts">
                    <span>{props.subTitle1} | {props.subTitle2}</span>
                </div>
                <p>{props.description}</p>
                <div className="br-info">
                    <div className="portfolio-img">
                        <a href={props.imgLoc} target="_blank" rel="noopener noreferrer">
                            <img src={props.imgLoc} alt={props.title} style={{ width: '100%', borderRadius: '10px' }} />
                        </a>
                    </div>
                    <div className="br-detail">
                        <ul>
                            <li>{props.date}</li>
                            <li>{props.tech}</li>
                            <li>{props.type}</li>
                            <li>
                                URL: <a href={props.url} target="_blank" rel="noopener noreferrer">
                                    {props.url}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}



// function ProjectBox(props){
//     return(
//         <div className="col-lg-6 css-1vscx9z">
//             <div className="br-project-box">
//                 <h3>{props.title}</h3>
//                 <div className="texts">
//                     <span>{props.subTitle1} </span>
//                     "|"
//                     <span>{props.subTitle2}</span>
//                 </div>
//                 <p>{props.description}</p>
//                 <div className="br-info">
//                     <div className="portfolio-img">
//                         <a href={props.imgLoc}></a>
//                     </div>
//                     <div className="br-detail">
//                         <ul>
//                             <li>{props.date}</li>
//                             <li>{props.tech}</li>
//                             <li>{props.type}</li>
//                             <li>URL : <a href={props.url}></a></li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


export default ProjectBox;