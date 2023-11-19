import React, { Component } from 'react';
import BotCollection from './components/BotCollection';
import BotArmy from './components/BotArmy';
import BotSpecs from './components/BotSpecs';
import SortBot from './components/SortBot';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bots: [],
      army: [],
      selectedBot: null
    };

    // Binding the function
    this.addBotToArmy = this.addBotToArmy.bind(this);
  }

  componentDidMount() {
    // Fetching the bots data from the JSON server and setting it to state
    fetch('http://localhost:3000/bots')
      .then(Response => Response.json())
      .then(bots => this.setState({ bots }));
  }

  addBotToArmy(bot) {
    // Checking if the army already includes a bot from the same class
    if (!this.state.army.some(b => b.bot_class === bot.bot_class)) {
      this.setState(prevState => ({
        army: [...prevState.army, bot],
        //Removing the bot from the BotCollection
        bots: prevState.bots.filter(b => b.id !== bot.id)
      }));
    }
  }

  releaseBot = (bot) => {
    this.setState(prevState => ({
      army: prevState.army.filter(b => b.id !== bot.id),
      // Adding the bot back to the BotCollection
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
    //Setting the selected bot
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
        <SortBot sortBots={this.sortBot} filterBots={this.filterBots} />
        {this.state.selectedBot ? (
        <BotSpecs bot={this.state.selectedBot} selectBot={this.selectBot} addBotToArmy={this.addBotToArmy} />
        ) : (
        <BotCollection bots={this.state.bots} selectBot={this.selectBot} />
        )}
        <BotArmy army={this.state.army} releaseBot={this.releaseBot} />
      </div>
    );
  }
}

export default App;