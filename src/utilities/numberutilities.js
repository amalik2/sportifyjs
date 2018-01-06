/**
 * Calculates the ratio between the two inputs
 * @param {Number!} one - the numerator
 * @param {Number!} two - the denominator
 * @return {Number} the ratio between the two if both inputs are valid, Infinity otherwise
 */
export function calculateRatio(one, two) {
	
	if (!isNaN(one) || !isNaN(two)) {
		return Infinity;
	}
	
	if (one + two === 0){
		return one;
	}
	
	return one / (one + two);
}

/**
 * Calculates a rating based on two inputs
 * @param {Number!} one - the total rating value (numerator)
 * @param {Number!} two - the number of times it was rated (denominator)
 * @param {Number!} max - the maximum rating that is possible
 * @return {Number} the ratio between the two if both inputs are valid, Infinity otherwise
 */
export function calculateRating(one, two, max) {
	
	if (!isNaN(one) || !isNaN(two)) {
		return Infinity;
	}
	
	if (two === 0) {
		return Math.min(one, max);
	}
	
	return one / two;
}