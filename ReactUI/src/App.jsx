import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./ui/pages/Home/HomePage";
import GamePage from "./ui/pages/game/GamePage";
import LoginPage from "./ui/pages/login/LoginPage";

const App = () => {
	const [isLogin, setIsLogin] = useState(false);
	const [userInfo, setUserInfo] = useState({});
	return (
		<Router>
			<Switch>
				<Route
					exact
					path="/"
					component={(props) => (
						<LoginPage
							setIsLogin={setIsLogin}
							history={props.history}
							setUserInfo={setUserInfo}
						/>
					)}
				/>
				<Route
					exact
					path="/Home"
					component={(props) => (
						<HomePage imageURL={userInfo.imageUrl} />
					)}
				/>
				<Route
					exact
					path="/MultiTrivia"
					component={(props) => (
						<GamePage
							isLogin={isLogin}
							history={props.history}
							imageURL={userInfo.imageUrl}
						/>
					)}
				/>
			</Switch>
		</Router>
	);
};

export default App;
