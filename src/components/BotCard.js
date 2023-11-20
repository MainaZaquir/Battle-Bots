import React from 'react';
import EnlistButton from './EnlistButton';

const BotCard = ({ bot, selectBot, addBotToArmy }) => (
  <div className="bot-card" onClick={() => selectBot(bot)}>
    <img src={bot.avatar_url} alt={bot.name} />
    <h2>{bot.name}</h2>
    <p>{bot.bot_class}</p>
    <EnlistButton bot={bot} addBotToArmy={addBotToArmy} />
  </div>
);

export default BotCard;

