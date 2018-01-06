import './queryable';

import {MAX_MATCH_RATING} from '../constants/ratings';
import {calculateRating} from '../utilities/numberutilities';

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
	 * @return {Date} the date this match occurred at
	 */
	getDate() {
		return this.date;
	}
	
	/**
	 * Adds a rating to this match
	 * @param {Number!} rating - the user's rating for the match (out of X, where X is the highest rating available)
	 */
	rate(rating) {
		ratingSum += rating;
		++timesRated;
	}
	
	/**
	 * @return {Number} the match's average user rating
	 */
	getAverageRating() {
		return calculateRating(this.ratingSum, this.timesRated, MAX_MATCH_RATING);
	}
	
	/**
	 * @return {Number} the number of times the match was viewed
	 */
	getTimesViewed() {
		return this.timesViewed;
	}
	
	/**
	 * @return {String} the URL this match was uploaded to
	 */
	getURL(){
		return this.url;
	}
	
}