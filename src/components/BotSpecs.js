// BotSpecs.js

import React from 'react';
import EnlistButton from './EnlistButton';

function BotSpecs({ bot, selectBot, addBotToArmy }) {
  return (
    <div className="bot-card">
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={bot.name} />
      <button onClick={() => selectBot(bot)}>View Details</button>
      <EnlistButton bot={bot} addBotToArmy={() => addBotToArmy(bot)} />
    </div>
  );
}

export default BotSpecs;



