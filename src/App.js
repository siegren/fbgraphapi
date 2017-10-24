import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import graph from 'fb-react-sdk'
class App extends Component {
  handlePost(){

graph.setAccessToken('EAABzbKPFusgBAGJz4dvK7kRfWPxZBDZAYelmhFXGFWSN5ZCy6e9ARpqFgbKsuyjrudmLuTU91wXdAbnmTtXGxGriIM9amAdUMMkaJQ5gDmZCre1pYE1uEZBNwSj9oZAAOhT7TVFS0Dxvl0gimhcVtZBwWqIPKAWAd2P3qYz0PoOaUbY0rQRWifoZBDjLjUqVS8tmqFOiG0aaAQZDZD');
var msg = {
  message: this.post.value
}
var graphObject = graph
  .post("me/feed",  msg, function(err, res) {
    console.log(res); // { id: '4', name: 'Mark Zuckerberg'... } 
  });

  }
  render() {
    return (
      <div>
          <textarea ref={(textarea) => {this.post = textarea; }} />
          <button onClick = { () => this.handlePost() }>Post</button>
      </div>
    );
  }
}

export default App;
