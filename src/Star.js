import React from 'react';
import PropTypes from 'prop-types';
import './Style.css';

const Star = ({selected=false, onRate=f=>f}) => (
    <div className={
        (selected) ?
        "star selected":
        "star"
    } 
        onClick={onRate}
    />
);

Star.propTypes = {
    selected : PropTypes.bool
};

export default Star;

