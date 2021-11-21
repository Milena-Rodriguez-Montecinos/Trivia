import React from "react";
import SideBar from "../../modules/sidebar/SideBar";
import Crucigrama from "../../modules/crucigrama/crucigrama";

const CrucigramaPage = (props) => {
	return <SideBar page={Crucigrama} imageURL={props.imageURL} />;
};

export default CrucigramaPage;
