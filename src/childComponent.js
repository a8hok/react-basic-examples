import React from 'react';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			name : "Ashok"
		};
	}
	update(e) {
		this.setState  ( {
			name : e.target.value
		} );
	}
	render() {
		return (
			<div>
				<span>{this.state.name}</span>
				<Widget update={this.update.bind(this)} />
			</div>
		)
	}
}

// Child Component in a stateless way.

const Widget = (props) =>
	<input type="text" onChange={props.update} />

export default App;