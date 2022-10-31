import "../styles/WorkCard.css";
import React from 'react';

const WorkCard = (props) => {
  return (
    <div className="project-card">
            <img src={props.imgsrc} alt="img"></img>
            <h2 className="project-title">{props.title}</h2>
            <div className="project-details">
              <div className="para">
                <p>{props.text}</p>
              </div>
                <div className="pro-btns">
                    <a href={props.view} className="btn">VIEW</a>
                    <a href={props.source} className="btn">SOURCE</a>
                </div>
            </div>
        </div>
  )
}

export default WorkCard
