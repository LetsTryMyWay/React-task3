import React from 'react';

const ColorItem = ({ color, setColor }) => (
  <div
    onClick={() => setColor(color)}
    className="color-item"
    style={{ backgroundColor: color }}
  ></div>
);

export default ColorItem;
