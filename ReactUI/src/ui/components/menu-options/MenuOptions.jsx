import React from "react";
import {
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import ExtensionIcon from '@mui/icons-material/Extension';
import SchoolIcon from '@mui/icons-material/School';
import AppsIcon from '@mui/icons-material/Apps';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';

const useStyles = makeStyles((theme) => ({
	toolbar: theme.mixins.toolbar,
	colors: {
		backgroundColor: "#3a4651",
		color: "#fff",
	},
	positionText: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	menuText: {
		margin: theme.spacing(0),
	},
	box: {
		position: "fixed",
	},
}));

const MenuOptions = () => {
	const classes = useStyles();
	const testContent = [
		{
			title: ("Informacion"),
			icon: <HomeIcon style={{ color: "#5fbaab",  fontSize: 40 }} />,
			path: "/informacion",
		},

		{
			title: ("Crucigrama"),
			icon: <AppsIcon style={{ color: "#965fba",  fontSize: 40  }} />,
			path: "/Crucigrama",
		},		

		{
			title: ("Rompecabezas"),
			icon: <ExtensionIcon style={{ color: "#bd9179",  fontSize: 40 }} />,
			path: "/Puzzle",
		},

		{
			title: ("Preguntados"),
			icon: <SchoolIcon style={{ color: "#756cf0",  fontSize: 40  }} />,
			path: "/Preguntados",
		},

		{
			title: ("Ahorcado"),
			icon: <DirectionsRunIcon style={{ color: "#ab534b",  fontSize: 40  }} />,
			path: "/Ahorcado",
		}
	];

	return (
		<div className={classes.colors}>
			<div className={`${classes.toolbar} ${classes.positionText}`}>
				<h3 className={classes.menuText}>Menu</h3>
			</div>
			<Divider />
			<List>
				{testContent.map((item) => (
					<ListItem
						button
						key={item.title}
						component={Link}
						to={item.path}
					>
						<ListItemIcon>{item.icon}</ListItemIcon>
						<ListItemText primary={item.title} />
					</ListItem>
				))}
			</List>
		</div>
	);
};

export default MenuOptions;
