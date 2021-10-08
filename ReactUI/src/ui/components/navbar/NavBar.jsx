import React from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	makeStyles,
	Switch,
	Avatar,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { withStyles } from "@material-ui/core/styles";

const drawerWidth = 240;
const useStyle = makeStyles((theme) => ({
	offset: theme.mixins.toolbar,
	appBar: {
		backgroundColor: "#5c93d6",
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
	const AntSwitch = withStyles((theme) => ({
		root: {
			width: 28,
			height: 16,
			padding: 0,
			display: "flex",
		},
		switchBase: {
			padding: 2,
			color: theme.palette.grey[500],
			"&$checked": {
				transform: "translateX(12px)",
				color: theme.palette.common.white,
				"& + $track": {
					opacity: 1,
					backgroundColor: theme.palette.primary.main,
					borderColor: theme.palette.primary.main,
				},
			},
		},
		thumb: {
			width: 12,
			height: 12,
			boxShadow: "none",
		},
		track: {
			border: `1px solid ${theme.palette.grey[500]}`,
			borderRadius: 16 / 2,
			opacity: 1,
			backgroundColor: theme.palette.common.white,
		},
		checked: {},
	}))(Switch);

	return (
		<div className={classes.root}>
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<Typography variant="h4" className={classes.title} noWrap>
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
