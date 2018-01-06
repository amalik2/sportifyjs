import React, { Component } from 'react';

/**
 * Displays arbitrary react components in a grid
 */
export class GridView extends Component {
	
	/**
	 * Constructs a new GridView object
	 * @param props - Contains:
	 * @param {[Component]} items - list of all components to display in the grid
	 * @param {int} columns - number of columns in the grid (i.e. number of items in each row)
	 */
	constructor(props) {
		super(props);
		this.state = {
			items: props.items,
			columns: props.columns
		};
	}
	
	// TODO
	render() {
		return (
			<p></p>
		);
	}
	
}