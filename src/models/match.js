import './queryable';

/**
 * Represents a match that a league has uploaded to a channel
 */
export default class Match extends Queryable {

	/**
	 * Constructs a new Match object
	 * @param {Date} date - the date the match occurred at
	 * @param {String} url - the youtube URL of the match
	 */
	constructor(date, url) {
		super();
		
		// {Date} the date this match occurred at
		this.date = date;
		
		// {String} the youtube URL of this match
		this.url = url;
		
		// {int} number of times this channel has been rated by users
		this.timesRated = 0;
		
		// {Number} sum of all the ratings that users have given this channel
		this.ratingSum = 0.0;
		
		// {Number} total number of times users have viewed this channel
		this.timesViewed = 0;
	}
	
	/**
	 * @return {String} the channel's unique name
	 */
	getName() {
		return this.name;
	}
	
	/**
	 * Sets the channel's unique name
	 * @param {String} name - the channel's unique name
	 */
	setName(name) {
		this.name = name;
	}
	
	/**
	 * Gets all matches archived on this channel
	 * @param {void(Match, Match)} sorter - optional function used to sort the matches
	 * @return {[Match]} all of the matches archived on this channel
	 */
	getMatches(sorter) {
		// TODO: get from UID query
		let matches = [];
		
		if (sorter !== undefined) {
			matches.sort(sorter);
		}
		
		return matches;
	}
	
	/**
	 * Gets all matches that are currently live on this channel
	 * @return {[Livestream]} all of the matches currently live on this channel
	 */
	getLiveMatches() {
		// TODO: get from UID query
		return [];
	}
	
	/**
	 * @return {String} the category this channel falls under
	 */
	getCategory() {
		return this.category;
	}
	
	/**
	 * Adds a new match to the channel
	 * @param {Match!} match - the match to add
	 */
	uploadMatch(match) {
		this.matches.push(match.getId());
	}
	
	/**
	 * Starts a new livestream on the channel
	 * @param {Livestream!} match - the livestream to start
	 */
	startLivestream(match) {
		this.livestreams.push(match.getId());
	}
	
	/**
	 * Ends a livestream, and archives it so that it is viewable anytime
	 * @param {Livestream!} livestream - the currently active livestream to archive on the system
	 */
	archiveLivestream(livestream){
		// TODO: remove from this.livestreams
		
		this.matches.push(livestream.getId());
	}
	
}