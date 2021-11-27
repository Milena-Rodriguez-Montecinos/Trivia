import React from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	makeStyles,
	Avatar,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";

const drawerWidth = 240;
const useStyle = makeStyles((theme) => ({
	offset: theme.mixins.toolbar,
	appBar: {
		backgroundColor: "#8993eb",
		[theme.breakpoints.up("sm")]: {
			width: "100%",
			marginLeft: drawerWidth,
			zIndex: 1201,
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
	},
	title: {
		flexGrow: 1,
	},
}));

const NavBar = (props) => {
	const classes = useStyle();

	return (
		<div className={classes.root}>
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<Typography variant="h2" className={classes.title}  noWrap>
						MultiTrivia
					</Typography>
					<div>
						<Avatar
							className={classes.AccountCircle}
							edge="end"
							color="inherit"
							src={props.imageURL}
						>
							<AccountCircle />
						</Avatar>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default NavBar;
