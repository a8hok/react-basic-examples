import React from  'react';
import ReactDom from 'react-dom';

class App extends React.Component {

	constructor() {
		super();
		this.update = this.update.bind(this);
	}
	// update() {
	// 	this.setState({
	// 		val : this.state.val + 1
	// 	});
	// }
	componentWillReceiveProps(nextProps) {
		console.log(nextProps.val);
	}
	// shouldComponentUpdate(nextProps, nextState) { 
	// 	console.log(nextProps.val);
	// }

	update(){
		ReactDom.render(<App val={this.props.val+1} />, document.getElementById('root'));
	}
	render() {
		return (
				<button onClick={this.update}>{this.props.val}</button>
		)
	}
	// componetDidUpdate(prevProps, PrevState) {
	// 	console.log('prevProbs:${prevProps.val}');
	// }
}

App.defaultProps = {val:0};

export default App;