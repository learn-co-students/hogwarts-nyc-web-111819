import piggy from "../porco.png";
import React from "react";

const Nav = (props) => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <hr />
      <div>
        <div className="ui middle aligned text menu">
          <div className="header item">Sort By</div>
			<a onClick={(event) => props.changeFilter(event.target.innerText)} className="item">Name</a>
			<a onClick={(event) => props.changeFilter(event.target.innerText)} className="item">Weight</a>
			<a onClick={(event) => props.changeFilter(event.target.innerText)} className="item">Greased</a>
			<button onClick={props.resetView} className="item right">Reset Hidden Item</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
