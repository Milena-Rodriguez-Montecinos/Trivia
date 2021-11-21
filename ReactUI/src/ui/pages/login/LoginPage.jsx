import {
	makeStyles,
	Paper,
	CssBaseline,
	TextField,
	Button,
	Divider,
	Grid,
} from "@material-ui/core";
import GoogleLogin from "react-google-login";
import { useState } from "react";
import "./LoginPage.css";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";


const Login = (props) => {
	const handleChange = (e) => {
		console.log(e.target.value);
		setBody({
			...body,
			[e.target.name]: e.target.value,
		});
	};

	const logginSuccess = (res) => {
		props.setIsLogin(true);
		props.history.push("/informacion");
		props.setUserInfo(res.profileObj);
	};

	const logginFailure = (res) => {
		console.log("Inicio de sesion fallido:", res);
		props.setIsLogin(false);
	};

	const [body, setBody] = useState({ email: "", password: "" });

	const classStyles = makeStyles((theme) => ({
		paper: {
			marginTop: theme.spacing(10),
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			padding: 40,
		},
		avatar: {
			margin: theme.spacing(1),
			width: theme.spacing(15),
			height: theme.spacing(15),
		},
		form: {
			width: "100%",
			marginTop: theme.spacing(1),
			textAlign: "center",
		},
		font: {
			img: "#11a0bd",
		},
		title: {
			flexGrow: 1,
		},
	}));
	const classes = classStyles();

	return (
		<div>
			<ul className="circles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<Grid container className={`loginContainer`}>
					<Grid item xs={12}>
						<CssBaseline />
						<Paper className={`${classes.paper} paperLogin`}>
							<h1 className={`snifferTitle`}>MULTI TRIVIA</h1>
							<form className={classes.form} noValidate>
								<TextField
									variant="outlined"
									margin="normal"
									required
									fullWidth
									id="Correo Electronico"
									label="Direccion de correo electronico"
									name="Correo electronico"
									autoComplete="correo electronico"
									autoFocus
									value={body.email}
									onChange={handleChange}
								/>
								<TextField
									variant="outlined"
									margin="normal"
									required
									fullWidth
									name="contrasena"
									label="Contrasena"
									type="contrasena"
									id="contrasena"
									autoComplete="current-password"
									value={body.password}
									onChange={handleChange}
								/>
								<br></br>
								<br></br>
								<Button
									type="submit"
									fullWidth
									variant="contained"
									color="primary"
									className={classes.button}
									onClick={() => props.history.push("/informacion")}
								>
									Iniciar Sesion
								</Button>
								<Divider component="li" variant="inset" />{" "}
								<GoogleLogin
									className="googleLogin"
									clientId="726629848709-g7mmqrelcc0fauka4vfimnbl16tvp2q5.apps.googleusercontent.com"
									buttonText="Inicio de sesion"
									onSuccess={logginSuccess}
									onFailure={logginFailure}
									cookiePolicy={"single_host_origin"}
								/>
							</form>
						</Paper>
					</Grid>
				</Grid>
			</ul>
		</div>
	);
};

export default Login;
