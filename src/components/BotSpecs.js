import React from "react";

const BotSpecs = ({ bot, addBotToArmy }) => (
    <div>
        <img src={bot.avatar_url} alt={bot.name} />
        <h2>{bot.name}</h2>
        <p>{bot.bot_class}</p>
        <button onClick={() => addBotToArmy(bot)}>Enlist Bot</button>
    </div>
);

export default BotSpecs