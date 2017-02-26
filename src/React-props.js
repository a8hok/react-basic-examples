import React from 'react';

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>React</h1>
				<span>{this.props.name}</span>
			</div>
		)
	}
}

App.propTypes = {
	name : React.PropTypes.string.isRequired
}

App.propsDefault = {
	name : "Arun"
}
export default App;