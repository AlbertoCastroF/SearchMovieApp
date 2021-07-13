import React from "react";

function MovieCard(props) {
  return (
    <div className="card">
      <img className="card--image" src={props.poster} />
      <div className="card--content">
        <h3 className="card--title">{props.title}</h3>
        <p>
          <small>RELEASE DATE: {props.rd}</small>
        </p>
        <p>
          <small>RATING: {props.rating}</small>
        </p>
        <p className="card--desc">{props.overview}</p>
      </div>
    </div>
  );
}

export default MovieCard;
