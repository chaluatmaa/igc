import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { userContext } from "../App";

const Navbar = () => {
	const { state, dispatch } = useContext(userContext);

	const renderList = () => {
		if (state) {
			return [
				<li>
					<NavLink to="/create">Create Post</NavLink>
				</li>,
				<li>
					<NavLink to="/profile">Profile</NavLink>
				</li>,
			];
		} else {
			return [
				<li>
					<NavLink to="/signIn">Login</NavLink>
				</li>,
				<li>
					<NavLink to="/signUp">Sign Up</NavLink>
				</li>,
			];
		}
	};

	return (
		<div>
			<nav>
				<div className="nav-wrapper white" style={{ color: "black" }}>
					<NavLink to={state ? "/" : "/signIn"} className="brand-logo left">
						Instagram
					</NavLink>
					<ul id="nav-mobile" className="right ">
						{renderList()}
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
