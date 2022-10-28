import "../styles/WorkCard.css";
import React from 'react'
import { NavLink } from "react-router-dom";

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
                    <NavLink to={props.view} className="btn">VIEW</NavLink>
                    <NavLink to="google.com" className="btn">SOURCE</NavLink>
                </div>
            </div>
        </div>
  )
}

export default WorkCard
