import React from "react";

const SortBot = ({ sortBots, filterBots }) => (
  <div>
    <div>
      <button onClick={() => sortBots('health')}>Sort by Health</button>
      <button onClick={() => sortBots('damage')}>Sort by Damage</button>
      <button onClick={() => sortBots('armor')}>Sort by Armor</button>
    </div>
    <div>
      <button onClick={() => filterBots('Support')}>Filter by Support</button>
      <br></br>
      <button onClick={() => filterBots('Medic')}>Filter by Medic</button> <br></br>
      <button onClick={() => filterBots('Assault')}>Filter by Assault</button> <br></br>
      <button onClick={() => filterBots('Defender')}>Filter by Defender</button>
</div>
 
  </div>
);

export default SortBot;
