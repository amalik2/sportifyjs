import React, { Component } from 'react';

import './menubutton.css';

/**
 * Displays a button on the screen as part of the main menu
 */
export class MenuButton extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			text: props.text,
			onClick: props.onClick
		}
	}
	
	onClick = (event) => {
		this.state.onClick(event.target.value);
	}
	
	render() {
		return (
			<button className="menu" onClick={this.onClick} value={this.state.text}>{this.state.text}</button>
		);
	}
	
}