import React from 'react';

class App extends React.Component {
	render() {
		return(
			<Parent>
				<div className="childA"></div>
				<div className="childB"></div>
			</Parent>
		)
	}
}

class Parent extends React.Component {
	render() {
		let items = React.Children
			.forEach(this.props.children, child => console.log(this.props.className));
		console.log(items);
		return null;
	}
}

export default App;