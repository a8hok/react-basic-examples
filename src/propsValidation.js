import React from 'react';

class App extends React.Component {
	render() {
		return(
			<Text/>
		)
	}
}

const Text = (props) =>
	<span>{props.txt}</span>

// Text.propTypes = {
// 	txt : React.PropTypes.string.isRequired
// }

Text.propTypes = {
	txt(props,propName,component) {
		if(!(propName in props)) {
			return new Error(`oops missing ${propName}`)
		}
	}
}
export default App; 