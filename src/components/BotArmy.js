import React from "react";
import EnlistedBot from "./EnlistedBots";

const BotArmy = ({ army, releaseBot, dischargeBot }) => (
  <div className="your-bot-army">
    {army.map(bot => (
      <EnlistedBot key={bot.id} bot={bot} releaseBot={releaseBot} dischargeBot={dischargeBot} />
    ))}
  </div>
);
export default BotArmy;