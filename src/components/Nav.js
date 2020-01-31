import piggy from '../porco.png'
import React from 'react'

function Nav (props) {

		return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
			<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
			<hr></hr>
			<button onClick={props.toggleGreased}> {props.greased ? "Show All" : "Show Greased"} </button> 
			<label>
				Choose Sort:
				<select value={props.sort} onChange={(e) => props.changeSort(e.target.value)}>
					<option value="no sort">No Sort</option>
					<option value="name">Name</option>
					<option value="weight">Weight</option>
				</select>
			</label>
		</div>
	)
	
	
}

export default Nav
