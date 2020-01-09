import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import fire from './config/Fire';
import Login from './Login';
import Home from './Home';
import App1 from './App1.jsx';
import  TodoApp from './TodoList.js'
import './App.css';


const User = ({match}) => {
  return ( <h1>Welcome User {match.params.username}</h1> )
}


class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

  render() {
    return (
    <Router>
      <div className="App">
        {this.state.user ? ( <Home/>) : (<Login />)}
        
        <Route path="/home"  exact render={
          ()=>{
            return (<h1></h1>)
          }
        }/>
        <Route exact path="/about" exact strict render={
          ()=>{
            return (
                <App1 />
            )
          }
        }/>
        <Route exact path="/user/:username" exact strict component={User} render={
          ()=>{
            return (<h1></h1>)
          }
        }/>
        <Route exact path="/portfolio" exact strict render={
          ()=>{
            return (<h1>
              
            </h1>)
          }
        }/>
        <Route exact path="/contact" exact strict render={
          ()=>{
            return (<div>
              <h1>
              Nurai Maratova
            </h1>
            <p><strong>Telephone: </strong>+77072100528</p>
            <p><strong>Email: </strong>nuraimaratova50@gmail.com</p>
            </div>)
          }
        }/>
      </div>
    </Router>
    );
  }
}

export default App;