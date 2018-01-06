import React, { Component } from 'react';

import '../App.css';
import './homepage.css';

import {SubscriptionFeed} from './subscriptionfeed';

/**
 * Displays the home page of the application
 */
export class HomePage extends Component {
	
	/**
	 * Constructs a new HomePage object
	 * @param props - Contains:
	 * @param {User} user - the currently signed in user (can be null)
	 */
	constructor(props) {
		super(props);
		this.state = {
			user: props.user
		};
	}
	
	// TODO: no user --> positioning of text and button should be bottom of the page
	render() {
		if (this.state.user){
			return (
				<div>
					<p className="HomePageBottomTextList">Subscribed Channels</p>
					<SubscriptionFeed user={this.state.user} />
				</div>
			);
		} else {
			return (
				<div className="HomePageBottom">
					<ul className="HomePageBottomTextList">
						<li className="HomePageBottomText">It's game time.</li>
						<li className="HomePageBottomText">Never miss a game again.</li>
					</ul>
					<button className="SButton">Join free for a month.</button>
				</div>
			);
		}
	}
	
}