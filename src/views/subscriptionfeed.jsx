import React, { Component } from 'react';

import {GridView} from './grid/gridview';
import {ChannelPreview} from './channelpreview';
import {Channel} from '../models/channel';

/**
 * Displays previews of all channels that the user is subscribed to
 */
export class SubscriptionFeed extends Component {
	
	/**
	 * Constructs a new SubscriptionFeed object
	 * @param props - Contains:
	 * @param {User!} user - the currently signed in user
	 */
	constructor(props) {
		super(props);
		this.state = {
			user: props.user
		};
	}
	
	render() {
		return (
			<GridView items={
				this.state.user.getSubscribedChannels().map((channel) => {
					return <ChannelPreview channel={channel} key={channel.getName()} />
				})
			} columns={6} />
		);
	}
	
}