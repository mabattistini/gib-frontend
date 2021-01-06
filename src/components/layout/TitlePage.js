import React from "react";
import Helmet from "react-helmet";

function TitlePage(props) {
    return (
        <Helmet titleTemplate="Guib - %s">
            <title>{props.title}</title>
        </Helmet>
    )
}

export default TitlePage
