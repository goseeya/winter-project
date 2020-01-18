import React from 'react';

import classes from './DuckImage.css';
import DuckImage from '../../assets/duck.jpg';

const duckImage = (props) => (
  <div className={classes.DuckImage}>
    <img src={DuckImage} className={classes.DuckImg} />
  </div>
);

export default duckImage;
