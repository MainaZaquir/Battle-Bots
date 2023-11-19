import React from "react";

const BotCard = ({ bot, selectBot, addBotToArmy }) => (
  <div>
    <div className="bot-card" onClick={() => selectBot(bot)}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h2>{bot.name}</h2>
      <p>{bot.bot_class}</p>
    </div>
    <button onClick={() => addBotToArmy(bot)}>Enlist</button>
  </div>
);

export default BotCard;