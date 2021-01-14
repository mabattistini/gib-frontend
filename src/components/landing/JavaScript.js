import React from 'react'
import Helmet from "react-helmet";

function JavaScriptLandig(props) {
    return (
        <Helmet>
            <script>{`
            function login(email, password) {
                axios.post('/user', {email: email, password: password})
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
            `}
            </script>
        </Helmet>
    )
}


module.exports = JavaScriptLandig
