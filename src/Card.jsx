import React from "react"
import './index.css'


function Card(props) {
   return(
    <>
    <div className="cards">
        <div className="card">
            <img src={props.imgSrc} alt="Pic" className="card-image" />
            <div className="card-info">
                <span className="card-category">{props.title}</span>
                <h2 className="card-title">{props.vname}</h2>
                <a href={props.link} target="blank">
                    <button>Watch Now</button>
                </a>
            </div>

        </div>

    </div>
</>
   )

}
export default Card;