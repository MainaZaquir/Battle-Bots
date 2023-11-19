import React from "react";

const BotCard = ({ bot, selectBot }) => (
    <div onClick={() => selectBot(bot)}>
        <img src={bot.avatar_url} alt={bot.name} />
        <h2>{bot.name}</h2>
        <p>{bot.bot_class}</p>
    </div>
);

export default BotCard;