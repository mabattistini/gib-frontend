import React from 'react'
import Helmet from "react-helmet";

function CssPage() {
    return (
        <Helmet>
            <link rel="stylesheet" type="text/css" href="Bootstrap/dist/css/bootstrap.css"/>
            <link rel="stylesheet" type="text/css" href="css/main.css"/>
            <link rel="stylesheet" type="text/css" href="css/fonts.min.css"/>
        </Helmet>
    )
}

export default CssPage
