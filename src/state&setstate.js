import React from 'react';

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			name : "Arun"
		}
	}
	update(e) {
		this.setState ( {
			name : e.target.value
		} )
	}
	render() {
		return(
			<div>
				<input type="text" onChange={this.update.bind(this)}/>
				<span>{this.state.name}</span>
				<div>{this.props.name}</div>
			</div>
		) 
	}
}

export default App;