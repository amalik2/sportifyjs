import React, { Component } from 'react';

import {searchIcon} from "../content/Logo.png";
import './searchbar.css';

/**
 * Displays a search bar that allows the user to search for something on the site
 */
 // TODO: search icon image
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
	 * Handles the user changing the text in the search field
	 * @param event - the input change event that invoked this function
	 */
	handleInputChange = (event) => {
		this.setState({
			input: event.target.value
		});
	}
	
	/**
	 * Handles the user pressing a key
	 * @param event - the key press event that invoked this function
	 */
	handleKeyPress = (event) => {
		if (event.key === "Enter"){
			this.state.onSubmit(this.state.input);
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
			<div>
				<img src={searchIcon} alt="Search Icon" className="SearchIcon" />
				<input className="MainSearchBar" type="text" name="search" placeholder="Search..." value={this.state.input}
					onInput={this.handleInputChange} onKeyPress={this.handleKeyPress} />
			</div>
		);
	}
	
}