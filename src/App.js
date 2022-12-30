import React, { Component } from 'react';
import Display from './components/Display';
import Button from './components/Button';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			display: '0',
			firstInput: '',
			secondInput: '',
			operator: '',
		};
	}
	// Add numbers to display

	displayNumbers = (value) => {
		this.setState({ display: this.state.display + value });
		if (this.state.display === '0') {
			this.setState({
				display: value,
			});
		}
	};

	// Display Operators
	displayOperators = (value) => {
		this.setState({
			firstInput: this.state.display,
			operator: value,
			display: '',
		});
	};
	// Delete last entry
	clearLastEntry = () => {
		this.setState({
			display: this.state.display.slice(0, -1),
		});
	};

	// Delete all numbers
	clearAll = () => {
		this.setState({
			display: '0',
			firstInput: '',
			secondInput: '',
			operator: '',
		});
	};

	// Invert plus/minus operators
	plusMinus = () => {
		this.setState({ display: parseFloat(this.state.display) * -1 });
	};

	// Percent operations
	percentage = () => {
		this.setState({ display: parseFloat(this.state.display) / 100 });
	};

	// Allow decimal numbers
	addDecimal = (value) => {
		if (this.state.display.indexOf('.') === -1) {
			this.setState({ display: this.state.display + value });
		}
	};

	// Operations
	calculate = () => {
		this.setState(
			{
				secondInput: this.state.display,
			},
			() => {
				const { firstInput, secondInput, operator } = this.state;

				switch (operator) {
					case '+':
						this.setState({
							display: parseFloat(firstInput) + parseFloat(secondInput),
						});
						break;
					case '-':
						this.setState({
							display: parseFloat(firstInput) - parseFloat(secondInput),
						});
						break;
					case '*':
						this.setState({
							display: parseFloat(firstInput) * parseFloat(secondInput),
						});
						break;
					case '/':
						this.setState({
							display: parseFloat(firstInput) / parseFloat(secondInput),
						});
						break;
					default:
						break;
				}
			}
		);
	};

	render() {
		return (
			<div className='calculator'>
				<Display>{Number(this.state.display).toLocaleString()}</Display>
				<div className='row'>
					<Button clickHandler={this.clearAll}>C</Button>
					<Button clickHandler={this.clearLastEntry}>CE</Button>
					<Button clickHandler={this.plusMinus}>+/-</Button>
					<Button clickHandler={this.percentage}>%</Button>
				</div>
				<div className='row'>
					<Button clickHandler={this.displayNumbers}>7</Button>
					<Button clickHandler={this.displayNumbers}>8</Button>
					<Button clickHandler={this.displayNumbers}>9</Button>
					<Button clickHandler={this.displayOperators}>*</Button>
				</div>
				<div className='row'>
					<Button clickHandler={this.displayNumbers}>4</Button>
					<Button clickHandler={this.displayNumbers}>5</Button>
					<Button clickHandler={this.displayNumbers}>6</Button>
					<Button clickHandler={this.displayOperators}>-</Button>
				</div>

				<div className='row'>
					<Button clickHandler={this.displayNumbers}>1</Button>
					<Button clickHandler={this.displayNumbers}>2</Button>
					<Button clickHandler={this.displayNumbers}>3</Button>
					<Button clickHandler={this.displayOperators}>+</Button>
				</div>

				<div className='row'>
					<Button clickHandler={this.addDecimal}>.</Button>
					<Button clickHandler={this.displayNumbers}>0</Button>
					<Button clickHandler={this.calculate}>=</Button>
					<Button clickHandler={this.displayOperators}>/</Button>
				</div>
			</div>
		);
	}
}

export default App;
