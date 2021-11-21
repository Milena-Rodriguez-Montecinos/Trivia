import React from "react";
import SideBar from "../../modules/sidebar/SideBar";
import Information from "../../modules/information/Information";

const InformationPage = (props) => {
	return <SideBar page={Information} imageURL={props.imageURL} />;
};

export default InformationPage;
