import React from "react";

const BotSpecs = ({ bot, selectBot, addBotToArmy }) => (
  <div className="bot-card">
    <h2>{bot.name}</h2>
    <img src={bot.avatar_url} alt={bot.name} />
    <button onClick={() => selectBot(bot)}>View Details</button>
    <button onClick={() => addBotToArmy(bot)}>Enlist</button>
  </div>
);

export default BotSpecs;

