export class Bill {

	/**
	 * Constructs a new Bill object
	 * @param {Date} date - the first day of the billing cycle for this bill
	 * @param {Number} cost - the cost issued to the receiver of this bill
	 * @param {UniqueID} channelId - unique ID of the channel that this bill was issued from
	 */
	constructor(date, cost, channelId){
		this.date = date;
		this.cost = cost;
		this.channelId = channelId;
	}
	
	/**
	 * @return {Date} the first day of the billing cycle for this bill
	 */
	getDate(){
		return this.date;
	}
	
	/**
	 * Sets the first day of the billing cycle for this bill
	 * @param {Date} date - the first day of the billing cycle for this bill
	 */
	setDate(date){
		this.date = date;
	}
	
	/**
	 * @return {Number} the cost of this bill owed by the receiver
	 */
	getCost(){
		return this.cost;
	}
	
	/**
	 * Sets the cost of this bill owed by the receiver
	 * @param {Number} cost - the cost of this bill owed by the receiver
	 */
	setCost(cost){
		this.cost = cost;
	}
	
	/**
	 * @return {UniqueId} the unique ID of the channel that issued this bill
	 */
	getChannelId(){
		return this.channelId;
	}
	
}