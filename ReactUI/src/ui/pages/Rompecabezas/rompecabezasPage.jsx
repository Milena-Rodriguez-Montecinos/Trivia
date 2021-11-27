import React from "react";
import SideBar from "../../modules/sidebar/SideBar";
import Rompecabezas from "../../modules/rompecabezas/rompecabezas";

const RompecabezasPage = (props) => {
	return <SideBar page={Rompecabezas} imageURL={props.imageURL} />;
};

export default RompecabezasPage;
