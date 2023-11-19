import React from "react";
import BotCard from './BotCard';

const BotCollection = ({ bots, selectBot }) => (
    <div>
        {bots.map(bot => <BotCard key={bot.id} bot{bot} selectBot{selectBot} />)}
    </div>
);


export default BotCollection;