import React from 'react';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			age : ''
		}
	}
	update(e){
		this.setState( {
			age  : this.refs.age.value,
			name : this.refs.name.value
		} );
	}
	render(){
		return(
			<div>
				<span>Hi {this.props.name} <Ashok /> </span>
				<span>{this.state.age}</span>
				<input ref="age" type="text" onChange={this.update.bind(this)} />
				<input ref="name"type="text" onChange={this.update.bind(this)} />
				<span>{this.state.name}</span>
			</div>
		)
	}
} 
const Ashok = () => <div>Welcome to React</div>



export default App;