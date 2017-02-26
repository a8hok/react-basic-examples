import React from 'react';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			eventName : "click"
		}
		this.update = this.update.bind(this);
	}
	update(e){
		this.setState( {
			eventName : e.type
		} );
	}
	render() {
		return(
			<div> 
				<textarea onKeyPress={this.update} onClick={this.update} onBlur={this.update}/>
				<h1> {this.state.eventName} </h1>
			</div>
			
		)
	}
}

export default App;