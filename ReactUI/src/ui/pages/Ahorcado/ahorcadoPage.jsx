import React from "react";
import SideBar from "../../modules/sidebar/SideBar";
import Ahorcado from "../../modules/ahorcado/ahorcado";

const AhorcadoPage = (props) => {
	return <SideBar page={Ahorcado} imageURL={props.imageURL} />;
};

export default AhorcadoPage;
