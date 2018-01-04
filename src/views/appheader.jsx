import React, { Component } from 'react';
import logo from '../content/Logo.png';
import './appheader.css';

import {SocialMediaIcons} from './socialmediaicons';
import {MenuButton} from './menubutton';
import {SearchBar} from './searchbar';

/**
 * Displays the header that is common across all site pages
 */
export class AppHeader extends Component {
	
	/**
	 * Constructs a new AppHeader object
	 * @param props - Contains:
	 * @param {[String]} menuButtons - text to display on each menu button
	 * @param {void(int)} menuClicked - callback function that handles a menu button being pressed
	 */
	constructor(props) {
		super(props);
		this.state = {
			
			// [String] text for each menu button
			menuButtons: props.menuButtons,
			
			// void(int) callback function that handles a menu button being pressed
			menuClicked: props.menuClicked
		};
	}
	
	/**
	 * Handles one of the buttons being clicked
	 * @param {String} text - the text on the clicked button
	 */
	buttonClicked = (text) => {
		const index = this.state.menuButtons.indexOf(text);
		this.state.menuClicked(index);
	}
	
	render() {
		return (
			<div>
				<img src={logo} className="AppLogo" alt="Sportify Logo" />
				<SocialMediaIcons className="TopBarSocialIcons" />
				<br />
				<br />
				<hr />
				<ul>
					{
						this.state.menuButtons.map((text, index) => {
							return (
								<li>
									<MenuButton text={text} onClick={this.buttonClicked} key={text} />
								</li>
							)
						})
					}
				</ul>
				<SearchBar onSubmit={null} />
			</div>
		);
	}
	
}