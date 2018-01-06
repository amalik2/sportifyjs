import React, { Component } from 'react';

/**
 * Displays previews of all channels that the user is subscribed to
 */
export class ChannelPreview extends Component {
	
	/**
	 * Constructs a new ChannelPreview object
	 * @param props - Contains:
	 * @param {Channel!} channel - the channel to preview
	 */
	constructor(props) {
		super(props);
		this.state = {
			channel: props.channel
		};
	}
	
	// TODO
	render() {
		return (
			<p>channel</p>
		);
	}
	
}