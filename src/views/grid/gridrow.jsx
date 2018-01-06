import React, { Component } from 'react';

/**
 * A row containing a horizontal list of React components
 */
export class GridRow extends Component {
	
	/**
	 * Constructs a new GridRow object
	 * @param props - Contains:
	 * @param {[Component]} items - list of all components to display in the grid
	 */
	constructor(props) {
		super(props);
		this.state = {
			items: props.items,
		}
	}
	
	render() {
		return (
			<div>
				{
					this.state.items
				}
			</div>
		);
	}
	
}