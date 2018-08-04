import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    clickedFriends: [],
    currentScore: 0,
    topScore: 0,
    message: 'click a character to begin'
  };

  handleClick = event => {
    console.log('id', event);
    //CHECK TO SEE IF ID OF CLICKED CHARACTER MATCHES THAT IN 
    if (this.state.clickedFriends.indexOf(event) === -1) {

      console.log('correct guess');

      this.setState({clickedFriends: [...this.state.clickedFriends, event]},
        () => console.log('clickedFriends: ',this.state.clickedFriends));

      this.setState({message: 'Good guess! Click another!'},
        () => console.log('message: ',this.state.message));

      this.setState({currentScore: this.state.currentScore + 1},
        () => console.log('currentScore: ',this.state.currentScore));


    } else {
      console.log('wrong guess');
      if (this.state.currentScore > this.state.topScore) {
        // this.state.topScore = this.state.currentScore,
        this.setState({topScore: this.state.currentScore});
      }
      this.setState({currentScore: 0},
        () => console.log('currentScore: ',this.state.currentScore));
      this.setState({clickedFriends: []},
        () => console.log('clickedFriends: ',this.state.clickedFriends));
      this.setState({message: 'You already guessed that character! Start over!'},
        () => console.log('message: ',this.state.message));
    }

    this.state.friends.sort(() => Math.random() - 0.5)

  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Nav
         userMessage={this.state.message}
         currentScore={this.state.currentScore}
         topScore={this.state.topScore}
         >Clicky Game</Nav>
        <div id='friend-container'>
        {this.state.friends.map(friend => (
          <FriendCard
            handleClick={this.handleClick}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
