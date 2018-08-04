import React from "react";
import "./Nav.css";

const Nav = props => <div id='nav'><div className="title">{props.children}</div><div className='message'><a className='userMessage'>{props.userMessage}</a></div><div>Score: <a className='currentScore'>{props.currentScore}</a> <a className='topScore'>Highscore: {props.topScore}</a></div></div>;

export default Nav;
