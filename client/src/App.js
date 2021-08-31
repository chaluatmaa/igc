import { useEffect, createContext, useReducer, useContext } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/screens/Home";
import SignIn from "./components/screens/SignIn";
import Profile from "./components/screens/Profile";
import SignUp from "./components/screens/SignUp";
import CreatePost from "./components/screens/CreatePost";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useHistory,
} from "react-router-dom";
import { initialiState, reducer } from "./reducers/userReducer";

export const userContext = createContext();

const Routing = () => {
	const history = useHistory();
	const { state, dispatch } = useContext(userContext);

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user"));
		dispatch({ type: "USER", payload: user });
		console.log(user);
		if (user) {
			history.push("/");
		} else {
			history.push("/signIn");
		}
	}, [history]);

	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/profile" exact component={Profile} />
			<Route path="/signIn" exact component={SignIn} />
			<Route path="/signUp" exact component={SignUp} />
			<Route path="/create" exact component={CreatePost} />
		</Switch>
	);
};

function App() {
	const [state, dispatch] = useReducer(reducer, initialiState);

	return (
		<userContext.Provider value={{ state, dispatch }}>
			<Router>
				<Navbar />
				<Routing />
			</Router>
		</userContext.Provider>
	);
}

export default App;
