import React from 'react';
import BotCard from './BotCard';

const BotCollection = ({ bots, selectBot, addBotToArmy }) => (
  <div className="bot-collection">
    {bots.map(bot => (
      <BotCard key={bot.id} bot={bot} selectBot={selectBot} addBotToArmy={addBotToArmy} />
    ))}
  </div>
);

export default BotCollection;




