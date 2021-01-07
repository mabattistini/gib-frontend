import React from "react";

import Logo from '../../img/logo.png'

function HeaderStdLanding() {
    return (
        <div className="header--standard header--standard-landing" id="header--standard">
            <div className="container">
                <div className="header--standard-wrap">
                    <a href="#" className="logo">
                        <div className="img-wrap">
                            <img loading="lazy" src={Logo} alt="Guib"/>
                        </div>

                    </a>

                    <a href="#" className="open-responsive-menu js-open-responsive-menu">
                        <svg className="olymp-menu-icon">
                            <use xlinkHref="#olymp-menu-icon"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default  HeaderStdLanding