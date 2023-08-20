import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
// import './card.css'

const Card = ({ title, amount, description, showMore, onToggleDescription, navToNewPage }) => {
  return (
    <div className="card" onClick={()=> navToNewPage(title)}>
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

// Define prop types
Card.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showMore: PropTypes.bool.isRequired,
  onToggleDescription: PropTypes.func.isRequired,
};

export default Card;
