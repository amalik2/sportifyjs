/**
 * Represents a unique ID that any object in the database can have
 */
export class UniqueID {

	/**
	 * Constructs a new UniqueID object
	 */
	constructor() {
		generate();
	}
	
	/**
	 * Generates a new unique ID
	 */
	generate() {
		// TODO: generate
		this.uid = "";
	}
	
	/**
	 * @return {String} the representation of this unique ID
	 */
	getId() {
		return this.uid;
	}
	
	/**
	 * Sets the value of this unique ID
	 * @param {String} uid - the new value of this unique ID
	 */
	setId(uid) {
		this.uid = uid;
	}
}