/**
 * Get whether two dates are on the same day or not
 * @param {Date} one the first date to compare
 * @param {Date} two the second date to compare
 * @return {boolean} whether the two dates on the same day
 */
export function isSameDate(one, two){
	
	if (one == null || two == null)
		return false;
	
	const newOne = new Date(one.getYear(), one.getMonth(), one.getDay());
	const newTwo = new Date(two.getYear(), two.getMonth(), two.getDay());
	
	return !(newOne.getTime() < newTwo.getTime()) && !(newTwo.getTime() < newOne.getTime());
}

/**
 * Get whether the first date is before the second one or not, without taking into account time
 * @param {Date} one the first date to compare
 * @param {Date} two the second date to compare
 * @return {boolean} whether the first date is before the second one
 */
export function isBefore(one, two){
	
	if (one == null || two == null)
		return false;
	
	const newOne = new Date(one.getYear(), one.getMonth(), one.getDay());
	const newTwo = new Date(two.getYear(), two.getMonth(), two.getDay());
	
	return newOne.getTime() < newTwo.getTime();
}

/**
 * Get the specified date as a string, in the form: MMMM dd, YYYY
 * @param {Date} date the date to convert to a string (not null)
 * @return {boolean} the date as a string
 */
export function formatDate(date){
	
	const monthNames = [
		"January", "February", "March",
		"April", "May", "June", "July",
		"August", "September", "October",
		"November", "December"
	  ];

	return monthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
}

/**
 * Get whether the specified date is valid or not
 * @param {Date} date the date to check the validity of
 * @return {boolean} whether the date is valid or not
 */
export function isValid(date){
	if (!date)
		return false;
	
	return !isNaN(date.getTime());
}