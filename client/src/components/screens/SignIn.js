import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { userContext } from "../../App";

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { state, dispatch } = useContext(userContext);
	const history = useHistory();

	const postData = () => {
		fetch("/signIn", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);

				localStorage.setItem("token", data.token);
				localStorage.setItem("user", JSON.stringify(data.user));
				dispatch({ type: '"USER', payload: data.user });
				history.push("/");
			});
	};

	return (
		<div className="login">
			<div className="card auth-card">
				<h2>Instagram</h2>
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
					Login
				</button>
			</div>
		</div>
	);
};

export default SignIn;
