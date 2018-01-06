import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {AppHeader} from './views/appheader';
import {HomePage} from './views/homepage';
import {User} from './models/user';

const MENU_BUTTONS = ["Home", "How It Works", "Pricing", "Channels", "My Account"];

class App extends Component {
	
	constructor(props){
		super(props);
		
		this.state = {
			// {int} index of the current page in MENU_BUTTONS
			menuIndex: 0,
			
			// {User} the signed in user (null if there is none)
			user: null
		};
	}
	
	/**
	 * Handles the user clicking an option in the menu button
	 * @param {int} index - index of the item they clicked on in the list of buttons
	 */
	menuClicked = (index) => {
		this.setState({
			menuIndex: index
		});
	}
	
	/**
	 * @return what to render on the current page
	 */
	getCurrentPageRender = () => {
		const index = this.state.menuIndex;
		
		if (index === 0) {			// home
			return (
				<HomePage user={this.state.user} />
			);
		} else if (index === 1) {	// how it works
			return (
				<p>H</p>
			);
		} else if (index === 2) {	// pricing
			return (
				<p>PR</p>
			);
		} else if (index === 3) {	// channels
			return (
				<p>CH</p>
			);
		} else if (index === 4) {	// my account
			return (
				<p>MYACC</p>
			);
		} else {					// shouldn't happen
			return <p></p>;
		}
	}
	
	render() {
		return (
			<div className="App">
				<AppHeader menuButtons={MENU_BUTTONS} menuClicked={this.menuClicked} />
				<br />
				{
					this.getCurrentPageRender()
				}
			</div>
		);
	}
}

export default App;
