 import React from 'react';
import ColorItem from './color-item';

const App = () => {
  const colors = ['#F08080', '#9FE2BF', '#CCCCFF', '#800080', '#808080'];

  const setColor = (color) => {
    document.documentElement.style.setProperty('--bg-color', color);
    console.log(color);
    // You can perform additional actions with the selected color
  };

  return (
    <div className="App">
      <div className="color-switcher">
        <button>
          <i className="ri-settings-2-fill"></i>
        </button>
        <h1 className="heading">Select A Color</h1>
        <div className="color-list">
          {colors.map((color, idx) => (
            <ColorItem key={idx} setColor={setColor} color={color} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;


