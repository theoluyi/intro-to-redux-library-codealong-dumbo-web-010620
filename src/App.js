import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
	handleOnClick = event => {
		this.props.increaseCount();
		// where does app get passed props?
	};

	render() {
		return (
			<div className="App">
				<button onClick={this.handleOnClick}>Click</button>
				<p>{this.props.items.length}</p>
			</div>
		);
	}
} // end of app component!!!

// separate function!
const mapStateToProps = state => {
	return {
		items: state.items
	};
};
// separate function!!
const mapDispatchToProps = dispatch => {
	return {
		increaseCount: () => dispatch({ type: 'INCREASE_COUNT' })
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
