import React from 'react';

const EnlistButton = ({ bot, addBotToArmy }) => (
  <button onClick={() => addBotToArmy(bot)} style={{ cursor: 'pointer', color: 'blue' }}>
    Enlist
  </button>
);

export default EnlistButton;

