import React from "react";
import SideBar from "../../modules/sidebar/SideBar";
import ApolloClient from "../../graphql/App";

const GamePage = (props) => {
	return <SideBar page={ApolloClient} imageURL={props.imageURL} />;
};

export default GamePage;
