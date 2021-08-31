import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const postData = () => {
		fetch("/signUp", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	};

	return (
		<div className="login">
			<div className="card auth-card">
				<h2>Instagram</h2>
				<input
					type="text"
					placeholder="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					type="text"
					placeholder="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					placeholder="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button onClick={postData} className="btn " type="submit" name="action">
					Sign Up
				</button>
				<h5>
					Already have an account ?
					<Link to="/signIn" style={{ color: "red !important" }}>
						Sign In
					</Link>
				</h5>
			</div>
		</div>
	);
};

export default SignIn;
