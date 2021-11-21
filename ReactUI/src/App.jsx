import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InformationPage from "./ui/pages/Information/InformationPage";
import AhorcadoPage from "./ui/pages/Ahorcado/ahorcadoPage";
import CrucigramaPage from "./ui/pages/Crucigrama/crucigramaPage";
import PreguntadosPage from "./ui/pages/Preguntados/preguntadosPage"
import RompecabezasPage from "./ui/pages/Rompecabezas/rompecabezasPage"
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
					path="/informacion"
					component={(props) => (
						<InformationPage imageURL={userInfo.imageUrl} />
					)}
				/>
				<Route
					exact
					path="/ahorcado"
					component={(props) => (
						<AhorcadoPage
							isLogin={isLogin}
							history={props.history}
							imageURL={userInfo.imageUrl}
						/>
					)}
				/>
				<Route
					exact
					path="/crucigrama"
					component={(props) => (
						<CrucigramaPage
							isLogin={isLogin}
							history={props.history}
							imageURL={userInfo.imageUrl}
						/>
					)}
				/>
				<Route
					exact
					path="/preguntados"
					component={(props) => (
						<PreguntadosPage
							isLogin={isLogin}
							history={props.history}
							imageURL={userInfo.imageUrl}
						/>
					)}
				/>
				<Route
					exact
					path="/rompecabezas"
					component={(props) => (
						<RompecabezasPage
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
