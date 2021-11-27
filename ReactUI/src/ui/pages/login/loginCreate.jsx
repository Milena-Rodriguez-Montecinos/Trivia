import {
	makeStyles,
	Paper,
	CssBaseline,
	Typography,
	TextField,
	Button,
	Grid,
} from "@material-ui/core";
import "./LoginPage.css";
import Link from '@material-ui/core/Link';
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';

const LoginCreate = (props) => {
	const classStyles = makeStyles((theme) => ({
		paper: {
			marginTop: theme.spacing(5),
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
		},
		font: {
			color: "#11a0bd",
		},
		title: {
			flexGrow: 1
		},
		button: {
			margin: theme.spacing(1),
		  },
	}));
	const classes = classStyles();
	const marginTop = { marginTop: 5 }

	return (
		<div>
			<Grid container className={'loginContainer'}>
				<Grid item xs={12}>
					<CssBaseline />
					<Paper className={`${classes.paper} paperLogin`}>
                        <Breadcrumbs aria-label="breadcrumb">
							<Link color="inherit" href="/" >
								Iniciar Sesion
							</Link>
						<Typography color="textPrimary"></Typography>
						</Breadcrumbs>
						<Breadcrumbs aria-label="breadcrumb">
							<Link color="inherit" href="/Create">
								Registrarse
							</Link>
						</Breadcrumbs>
						<h1 className={`snifferTitle`}>MultiTrivia</h1>
						<form className={classes.form} noValidate></form>
						<Typography
							component="h1"
							variant="h5"
							className={classes.font}
						>
							Crear Cuenta
						</Typography>
						<form>
							<TextField fullWidth label='Nombre Completo' placeholder="Ingresa tu Nombre" />
							<TextField fullWidth label='Correo electrónico' placeholder="Ingresa tu correo electrónico"/>
							<FormControl component="fieldset" style={marginTop}>
								<FormLabel component="legend">Genero</FormLabel>
								<RadioGroup aria-label="genero" name="genero" style={{ display: 'initial' }}>
									<FormControlLabel value="Femenino" control={<Radio />} label="Femenino" />
									<FormControlLabel value="Masculino" control={<Radio />} label="Masculino" />
									<FormControlLabel value="-" control={<Radio />} label="Prefiero no decirlo" />
								</RadioGroup>
							</FormControl>
							<TextField fullWidth label='Contrasena' placeholder="Ingresa tu contrasena"/>
							<TextField fullWidth label='Confirma tu contrasena' placeholder="Vuelve a ingresar tu contrasena"/>
							<FormControlLabel
								control={<Checkbox name="checkedA" />}
								label="Acepto los terminos y condiciones"
							/>
							<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.button}
							onClick={() => props.history.push("/informacion")}
							>
								Confirmar
							</Button> 
               			 </form>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
};

export default LoginCreate;
