import React, { Component } from 'react';

/**
 * Displays the home page of the application
 */
export class HomePage extends Component {
	
	/**
	 * Constructs a new AppHeader object
	 * @param props - Contains:
	 * @param {User} user - the currently signed in user (can be null)
	 */
	constructor(props) {
		super(props);
		this.state = {
			user: props.user
		};
	}
	
	// TODO: if signed in, <SubscriptionFeed user={this.state.user}
	// TODO: button style -> green background with slight rounding + white text
	// TODO: no user --> positioning of text and button should be bottom of the page
	render() {
		if (this.state.user){
			return (
				<div>
					
				</div>
			);
		} else {
			return (
				<div>
					<h1>It's game time.</h1>
					<h2>Never miss a game again.</h2>
					<button>Join free for a month.</button>
				</div>
			);
		}
	}
	
}