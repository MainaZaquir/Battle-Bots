import React from "react";

const SortBot = ({ sortBots, filterBots }) => (
    <div>
        <button onClick={() => sortBots('health')}>Sort by Health</button>
        <button onClick={() => sortBots('damage')}>Sort by Damage</button>
        <button onClick={() => sortBots('armor')}>Sort by Armor</button>
        <button onClick={() => sortBots('name')}>Sort by Name</button>
        <button onClick={() => filterBots('Support')}>Filter by Support</button>
    </div>
);

export default SortBot;