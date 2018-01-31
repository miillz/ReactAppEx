import React, {Component} from 'react'
import MessageView from './messages'
import MessageList from './message-list';
import './App.css'


//import MessageList from './messages/message-list';

/*

import './App.css'

class App extends Component{

  render(){
    return (<MessageView />)
  }
}

export default App
*/



class App extends Component {
  render(){
    return (
      <MessageList />
    )
  }
}

export default App
