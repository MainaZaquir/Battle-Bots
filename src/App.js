import React, { Component } from 'react';
import BotCollection from './components/BotCollection';
import BotArmy from './components/BotArmy'; 
import BotSpecs from './components/BotSpecs';
import SortBot from './components/SortBot';
import './App.css';

class App extends Component {
  state = {
    bots: [],               // Array to store all bots from the server
    army: [],               // Array to store enlisted bots
    selectedBot: null,      // Keeps track of the bot selected for detailed view
    filteredBots: [],       // Array to store bots based on filters and sorting
  };

  componentDidMount() {
    // Fetching the bots data from the server and initializing state
    fetch('http://localhost:3000/bots')
      .then(response => response.json())
      .then(bots => this.setState({ bots, filteredBots: bots })); 
  }

  addBotToArmy = (bot) => {
    // Enlisting a bot into the army if it's not already enlisted
    if (!this.state.army.some(b => b.bot_class === bot.bot_class)) {
      this.setState(prevState => ({
        army: [...prevState.army, bot],                       // Adding a bot to the army
        bots: prevState.bots.filter(b => b.id !== bot.id),     // Removing a bot from the available bots
        filteredBots: prevState.filteredBots.filter(b => b.id !== bot.id), // Updating the filteredBots as well
      }));
    }
  };

  releaseBot = (bot) => {
    // Releasing a bot from the army
    this.setState(prevState => ({
      army: prevState.army.filter(b => b.id !== bot.id),        // Removing bot from the army
      bots: [...prevState.bots, bot],                          // Add bot back to the available bots
      filteredBots: [...prevState.filteredBots, bot],          // Update filteredBots as well
    }));
  };

  dischargeBot = (bot) => {
    // Discharge a bot permanently by deleting it from the backend and removing it from the frontend
    fetch(`http://localhost:3000/bots/${bot.id}`, { method: 'DELETE' })
      .then(() => {
        this.setState(prevState => ({
          bots: prevState.bots.filter(b => b.id !== bot.id),
          army: prevState.army.filter(b => b.id !== bot.id),
          filteredBots: prevState.filteredBots.filter(b => b.id !== bot.id), // Update filteredBots as well
        }));
      });
  };

  selectBot = (bot) => {
    // Set the selected bot for detailed view
    this.setState({ selectedBot: bot });
  };

  sortBot = (criteria) => {
    // Sort bots based on the selected criteria (health, damage, armor, name)
    this.setState(prevState => ({
      bots: prevState.bots.sort((a, b) => b[criteria] - a[criteria]),
      filteredBots: prevState.filteredBots.sort((a, b) => b[criteria] - a[criteria]), // Update filteredBots as well
    }));
  };

  filterBots = (botClass) => {
    // Filter bots based on the selected bot class
    this.setState(prevState => ({
      filteredBots: prevState.bots.filter(bot => bot.bot_class === botClass),
    }));
  };

  render() {
    return (
      <div>
        {/* Component to handle sorting and filtering */}
        <SortBot sortBots={this.sortBot} filterBots={this.filterBots} />
        
        {/* Conditional rendering based on whether a bot is selected for detailed view */}
        {this.state.selectedBot ? (
          <BotSpecs bot={this.state.selectedBot} selectBot={this.selectBot} addBotToArmy={this.addBotToArmy} />
        ) : (
          <BotCollection bots={this.state.filteredBots} selectBot={this.selectBot} addBotToArmy={this.addBotToArmy} />
        )}
        
        {/* Component to display enlisted bots */}
        <BotArmy army={this.state.army} releaseBot={this.releaseBot} dischargeBot={this.dischargeBot} />
      </div>
    );
  }
}

export default App;
