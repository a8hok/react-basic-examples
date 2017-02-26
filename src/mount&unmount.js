import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			val : 0
		}
		this.update = this.update.bind(this);
	}
	update(e) {
		this.setState({
			val : this.state.val + 1
		});
	}
	componentWillMount() {
		console.log('mounted');
	}
	componentDidMount() {
		console.log('unmounted');
	}
	render() {
		return(
			<div>
				<button onClick={this.update}>{this.state.val}</button>
			</div>
		)
	}
}

// Wrapper component.
class Wrapper extends React.Component {
	mount() {
		console.log('mount');
		ReactDom.render( <App />, document.getElementById('container'));
	}	
	unmount() {
		ReactDom.unmountComponentAtNode( document.getElementById('container') );
		console.log('unmount');
	}
	render() {
		return(
			<div>
				<button onClick={this.mount}>mount</button>
				<button onClick={this.unmount}>unmount</button>
				<div id="container"></div>
			</div>
			
		)
	}
}
export default Wrapper;