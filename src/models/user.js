import {Queryable} from './queryable';

import {removeFromArray} from "../utilities/arrayutilities";

import {Bill} from './bill';
import {Subscription} from './subscription';
import {Channel} from './channel';

/**
 * Represents anyone who has an account on the platform
 */
export class User extends Queryable {

	/**
	 * Constructs a new User object
	 * @param {String} name - the user's unique name
	 */
	constructor(name) {
		super();
		
		this.name = name;
		
		// {[UniqueId]} IDs of all bills issued to this user
		this.bills = [];
		
		// {[UniqueId]} IDs of all subscriptions this user has
		this.subscriptions = [];
	}
	
	/**
	 * @return {String} the user's unique name
	 */
	getName() {
		return this.name;
	}
	
	/**
	 * Sets the user's unique name
	 * @param {String} name - the user's unique name
	 */
	setName(name) {
		this.name = name;
	}
	
	/**
	 * @return {[Bill]} all bills this user has received, sorted in descending order by date
	 */
	getBillingHistory() {
		// TODO: return bills through UID query
		let bills = [];
		bills.sort((one, two) => {
			return one.getDate() < two.getDate();
		});
		return bills;
	}
	
	/**
	 * @return {[Channel]} all channels this user is currently subscribed to
	 */
	getSubscribedChannels(){
		// TODO: return channels through UID query
		return this.subscriptions;
	}
	
	/**
	 * Unsubscribes from the specified channel
	 * @param {Channel!} channel - the channel to unsubscribe from
	 */
	unsubscribeFrom(channel){
		// TODO: unsubscribe
		removeFromArray(this.subscriptions, channel.getId());
	}
	
	/**
	 * Subscribes the user to the specified channel
	 * @param {Channel!} channel - the channel to subscribe to
	 */
	subscribeTo(channel){
		// TODO: subscribe
		this.subscriptions.push(channel.getId());
	}
	
}