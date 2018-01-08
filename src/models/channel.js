import {Queryable} from './queryable';

import {MAX_CHANNEL_RATING} from '../constants/ratings';
import {calculateRating} from '../utilities/numberutilities';

/**
 * Represents a channel that a league has on the platform
 */
export class Channel extends Queryable {

	/**
	 * Constructs a new Channel object
	 * @param {String} name - the channel's unique name
	 * @param {String} category - what sports category this channel falls under
	 */
	constructor(name, category) {
		super();
		
		// {String} unique channel name
		this.name = name;
		
		// {String} what sports category this channel falls under
		this.category = category;
		
		// {[UniqueId]} list of archived matches
		this.matches = [];
		
		// {[UniqueId]} list of currently live matches
		this.livestreams = [];
		
		// {int} number of times this channel has been rated by users
		this.timesRated = 0;
		
		// {Number} sum of all the ratings that users have given this channel
		this.ratingSum = 0.0;
		
		// {Number} total number of times users have viewed this channel
		this.timesViewed = 0;
	}
	
	/**
	 * Adds a rating to this channel
	 * @param {Number!} rating - the user's rating for the channel (out of X, where X is the highest rating available)
	 */
	rate(rating) {
		this.ratingSum += rating;
		++this.timesRated;
	}
	
	/**
	 * @return {Number} the channel's average user rating
	 */
	getAverageRating() {
		return calculateRating(this.ratingSum, this.timesRated, MAX_CHANNEL_RATING);
	}
	
	/**
	 * @return {Number} the number of times the channel was viewed
	 */
	getTimesViewed() {
		return this.timesViewed;
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