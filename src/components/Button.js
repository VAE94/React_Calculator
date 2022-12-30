import React, { Component } from 'react';

class Button extends Component {
	// Function for adding a certain style to specific buttons

	isOperator = (value) => {

		return (
			!isNaN(value) ||
			value === '.' ||
			value === '=' ||
			value === 'CE' ||
			value === 'C' ||
			value === '+/-'
		);
	};

	// Function for adding a certain style to specific buttons
	isOtherOperator = (value) => {
		return value === 'CE' || value === 'C' || value === '+/-';
	};

	render() {
		return (
			// Container for buttons
			<button
				className={`button ${
					this.isOperator(this.props.children) ? '' : 'operator'
				} ${this.isOtherOperator(this.props.children) ? 'other-operator' : ''}`}
				onClick={() => this.props.clickHandler(this.props.children)}
			>
				{this.props.children}
			</button>
		);
	}
}

export default Button;
