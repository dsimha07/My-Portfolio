function SecHeading(props){
    return(
        <div className="section-title">
            <h2>
                {props.title1}
                <span> &nbsp;{props.title2}</span>
            </h2>
            <div className="light-title">{props.bgText}</div>
        </div>
    );
}

export default SecHeading;