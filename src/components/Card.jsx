import React from "react";
const Card = (props) => (
<div className="p-4">
<img src={`/img/${props.image}`} alt={props.name} />
<h3 className="card-title">{props.name}</h3>
<p className="card-description">{props.description}</p>
<span className="card-price">{props.price}</span>
</div>
);
export default Card;