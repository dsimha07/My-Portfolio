

function TimelineItem(props){
    return(
        <li className="timeline-item" data-aos = "fade-up" data-aos-duration ="2000" data-aos-delay ="400">
            <div className="timeline-info">
                <span>{props.date}</span>
            </div>
            <div className="timeline-content">
                <h5 className="timeline-title">
                    {props.title}
                    <span className="sub">- {props.subtitle}</span>
                </h5>
                <p>{props.description}</p>
            </div>
        </li>
    );
}

export default TimelineItem;