import React from 'react';
import './App.css';
import logo from './logo.png'


class App extends React.Component {
  url = 'https://www.bridgelabz.com/'
	constructor(){
	super()
	this.state = {
	 userName: ''
	  }
   }

  onClick = ($event) => {
  console.log("save buttton is clicked!", $event);
  window.open(this.url, " blank");
  }

  onNameChange = (event) => {
	console.log("value is ", event.target.value);
	const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$')
	this.setState({ userName: event.target.value})
	if(nameRegex.test(event.target.value)){
		this.setState({ nameError: '' })
	}else{
		this.setState({ nameError: 'Name Is Incorrect' })
	}
  }

	render() {
	return (
		<>
	<div>	
	<div>
		<h1> Hello {this.state.userName} From Bridgelabz </h1>
		<img src={logo} onClick={this.onClick}
		alt='The Bridgelabz logo: A Bridge To Employment Through Lab Works' />
	</div>
	<div className='span'>
		<br></br>
		<input onChange = {this.onNameChange} />
		<br></br>
		<span>{this.state.nameError}</span>
	</div>
	<div>
		<h3>At Bridgelabz, we're a community of </h3>
		<li>technologists</li>
		<li>thinkers</li>
		<li>builders</li>
		<p>working together to keep the tech employability of engineers alive and
		accessible, so tech companies worldwide can get contributors and
		creators for technology solutions. we believe this act of human 
		collaboration across an employability platform is essential to individual
		growth and our collective future.</p>
		<br></br>
		<p>To know about us, visit bridgelabz to learn even more about our mission</p>
		<p>i.e employability to all.</p>
	</div>
	</div>
	</>
	);
  }
}

 export default App;


