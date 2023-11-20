import React from 'react';

const EnlistedBot = ({ bot, releaseBot, dischargeBot }) => (
  <div className="enlisted-bot">
    <img src={bot.avatar_url} alt={bot.name} />
    <h2>{bot.name}</h2>
    <p>{bot.bot_class}</p>
    <button onClick={() => releaseBot(bot)}>Release</button>
    <button onClick={() => dischargeBot(bot)}>Discharge</button>
  </div>
);

export default EnlistedBot;
