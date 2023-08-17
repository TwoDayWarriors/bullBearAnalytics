import React from 'react';
// import './card.css'

const Card = ({ title, amount, description, showMore, onToggleDescription }) => {
  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">
        <h4 className="card-title">{amount}</h4>
        <button
  type="button"
  className={`btn btn-light ${showMore ? 'btn-secondary' : ''}`}
  onClick={onToggleDescription}
>
  {showMore ? 'Show Less' : 'More Info'}
</button>


        {showMore && <p className="card-text">{description}</p>}
      </div>
    </div>
  );
};

export default Card;
