import React from "react";

const CardPlanets = (props) => {
    const url = props.uid == 1 ? "https://starwars-visualguide.com/assets/img/placeholder.jpg" : "https://starwars-visualguide.com/assets/img/planets/" + props.uid + ".jpg"
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img
                src={"url"}
                className="card-img-top"
                alt="Planet"
            />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
            </div>
        </div>
    );
};

export default CardPlanets;
