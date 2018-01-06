export class Queryable {

	/**
	 * Constructs a new Queryable object
	 * @param {UniqueId} id - the object's unique ID in the database
	 */
	constructor(id){
		this.id = id;
	}
	
	/**
	 * @return {UniqueId} the object's unique ID in the database
	 */
	getId(){
		return this.id;
	}

}