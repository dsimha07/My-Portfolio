

function SkillTrack(props){

    const getOffset = (percent) => {
    const totalLength = 220;
    return ((100 - percent) / 100) * totalLength;
    };

    return(
        <div className="col-md-6">
            <div className="br-box">
                <svg className="progress noselect" x="0px" y="0px" viewBox="0 0 80 80">
                    <path
                        className="track"
                        d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0"
                    />
                    <path
                        className="fill"
                        d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0"
                        style={{ strokeDashoffset: `-${getOffset(props.percentage)}`, strokeDasharray:220}}
                    />
                    <text className="value" x="50%" y="58%">
                        {props.percentage}%
                    </text>
                </svg>
                <h3>{props.skillName}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default SkillTrack;