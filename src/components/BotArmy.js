import React from "react";
import BotCard from "./BotCard";

const BotArmy = ({ army, releaseBot }) => (
    <div>
        {army.map(bot => <BotCard key={bot.id} bot={bot} selectBot={releaseBot} />)}
    </div>
);

export BotArmy;