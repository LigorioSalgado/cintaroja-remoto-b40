import React from 'react';


function CardGif(props) {

    return (
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 card-deck my-5">
            <div className="card bg-dark text-white">
                <img className="card-img" alt="" src={props.url} />
                <h5 className="card-title">{props.title}</h5>
            </div>
        </div>
    )
}

export default CardGif