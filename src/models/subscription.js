import './queryable';

/**
 * Represents a user's subscription to a channel
 */
export default class Subscription extends Queryable {

	/**
	 * Constructs a new Subscription object
	 * @param {Date} date - the subscription start date
	 * @param {UniqueId} uid - unique ID of the channel to subscribe to
	 */
	constructor(date, uid) {
		super();
		
		this.date = date;
		
		// {UniqueId} IDs of the channel that was subscribed to
		this.uid = uid
	}
	
	/**
	 * @return {Date} the date this match occurred at
	 */
	getDate() {
		return this.date;
	}
	
	/**
	 * Sets the date this match occurred at
	 * @param {Date} date - the date this match occurred at
	 */
	setDate(date) {
		this.date = date;
	}
	
}