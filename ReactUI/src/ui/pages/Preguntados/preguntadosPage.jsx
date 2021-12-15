import React from "react";
import SideBar from "../../modules/sidebar/SideBar";
import Preguntados from "../../modules/preguntados/preguntados";

const PreguntadosPage = (props) => {

	
	return <SideBar page={Preguntados} imageURL={props.imageURL} />;
};

export default PreguntadosPage;
