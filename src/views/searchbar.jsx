import React, { Component } from 'react';

import './menubutton.css';

/**
 * Displays a search bar that allows the user to search for something on the site
 */
 // TODO: CSS + input text
export class SearchBar extends Component {
	
	/**
	 * Constructs a new SearchBar object
	 * @param props - Contains:
	 * @param {void(String)} onSubmit - callback function for handling the user's search query
	 */
	constructor(props) {
		super(props);
		this.state = {
			
			// {void(String)} search handling callback function
			onSubmit: props.onSubmit,
			
			// {String} the current input text in the search bar
			input: ""
		}
	}
	
	/**
	 * Handles the user submitting their search request
	 */
	onSubmit = () => {
		this.state.onSubmit(this.state.input);
	}
	
	render() {
		return (
			<button onClicked={this.onSubmit}>...</button>
		);
	}
	
}