import React, { Component } from 'react';
import './App.css';
import Profile from './Profile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
  	  userAvatar:'',
      username:'',
      repos:0,
      searchVal:'',
      loading:true
  }
  	this.getUser = this.getUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange= this.handleChange.bind(this);
  }

  render() {
    return (
    	<div className="App">
      <p>Inputted value: {this.state.searchVal}</p>
        <form id="form" onSubmit={this.handleSubmit} onChange={this.handleChange} value={this.state.searchVal}>
          <input type="text" ref={(node) => {this.input=node}}/>
          <input type="submit" />
        </form>
        {this.state.loading && <div><h1>Request a User</h1></div>}
        {!this.state.loading && <Profile username={this.state.username} userAvatar={this.state.userAvatar} repos={this.state.repos} /> }
      </div>
  		)
    }
    
  handleSubmit(e) {
  	e.preventDefault();
 		this.getUser(this.state.searchVal) 
  }  
  
  handleChange(e) {
  	this.setState({
    	searchVal:e.target.value
    })
  }
    
  getUser(input){
  	return fetch(`https://api.github.com/users/${input}`)
    .then(resBuffer=>{
    	return resBuffer.json();
    })
    .then(res=>{
    	this.setState({
      	userAvatar:res.avatar_url,
        username:res.name,
        repos:res.public_repos,
        loading:false
      })
    })
    .catch(console.log);
  }
  
}
   

export default App;
