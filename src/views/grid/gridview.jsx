import React, { Component } from 'react';

import {GridRow} from './gridrow';

/**
 * Displays arbitrary React components in a grid
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
	
	/**
	 * Calculates how many rows are required to display the specified number of items
	 * @param {int} itemCount - number of items to display
	 * @return {int} the number of rows that are needed to display the items
	 */
	getRowsForCount(itemCount) {
		return Math.ceil(itemCount / this.state.columns);
	}
	
	render() {
		
		const rows = [];
		const length = this.state.items.length;
		for (let i = 0; i < length; ++i){
			if (this.getRowsForCount(i + 1) > rows.length){
				rows.push([]);
			}
			rows[rows.length - 1].push(this.state.items[i]);
		}
		
		return (
			<div>
				{
					rows.map((row, index) => {
						return (<GridRow items={row} key={index} />)
					})
				}
			</div>
		);
	}
	
}