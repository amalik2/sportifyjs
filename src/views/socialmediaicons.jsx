import React, { Component } from 'react';
import logo from '../content/Logo.png';
import './socialmediaicons.css';

/**
 * Displays social media icons on the screen
 */
export class SocialMediaIcons extends Component {
	
	render() {
		return (
			<div>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
				<button className="fa fa-facebook"></button>
				<button className="fa fa-twitter"></button>
			</div>
		);
	}
	
}