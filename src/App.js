import React, { Component } from 'react';
import BotCollection from './components/BotCollection';
import BotArmy from './components/BotArmy';
import BotSpecs from './components/BotSpecs';
import SortBot from './components/SortBot';

class App extends Component {
  state = {
    bots: [],
    army: [],
    selectedBot: null
  };

  componentDidMount() {
    // Fetching the bots data from teh JSON server and setting it to state
    fetch('http://localhost:3000/bots')
      .then(Response => Response.json())
      .then(bots => this.setState({ bots }));
  }

  addBotToArmy = (bot) => {
    // Checking if teh army already includes a bot from the same class
    if (!this.state.army.some(b => b.bot_class === bot.bot_class)) {
      this.setState(prevState => ({
        army: [...prevState.army, bot],
        //Removing the bot from the BotCollection
        bots: prevState.bots.filter(b => b.id !== bot.id)
      }));
    }
  };

  releaseBot = (bot) => {
    this.setState(prevState => ({
      army: prevState.army.filter(b => b.id !== bot.id),
      // Adding the bot back to teh BotCollection
      bots: [...prevState.bots, bot]
    }));
  };

  dischargeBot = (bot) => {
    //Discharging the bot
    // eslint-disable-next-line no-template-curly-in-string
    fetch('http://localhost:3000/bots/${bot.id}', { method: 'DELETE' })
      .then(() => {
        this.setState(prevState => ({
          bots: prevState.bots.filter(b => b.id !== bot.id),
          army: prevState.army.filter(b => b.id !== bot.id)
        }));
      });
  };

  selectBot = (bot) => {
    //Setting the  selcted bot
    this.setState({ selectedBot: bot });
  };

  sortBot = (criteria) => {
    //Sorting the bots
    this.setState(prevState => ({
      bots: prevState.bots.sort((a, b) => b[criteria] - a[criteria])
    }));
  };

  filterBots = (botClass) => {
    //Filtering the bots
    this.setState(prevState => ({
      bots: prevState.bots.filter(bot => bot.bot_class === botClass)
    }));
  };

  render() {
    return (
      <div>
        <SortBot sortBots={this.sortBots} filterBots={this.filterBots} />
        {this.state.selectedBot ? (
          <BotSpecs bot={this.state.selectedBot} addBotToArmy={this.addBotToArmy} />
        ) : (
          <BotCollection bots={this.state.bots} selectBot={this.selectBot} />
        )}
        <BotArmy army={this.state.army} releaseBot={this.releaseBot} />
      </div>
    );
  }
}

export default App;