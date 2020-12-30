import React from "react";

import Logo from './../img/logo.png'

function FixedSiderbarLeftResponsive() {
    return (
        <React.Fragment>
            <div className="fixed-sidebar fixed-sidebar-responsive">

                <div className="fixed-sidebar-left sidebar--small" id="sidebar-left-responsive">
                    <a href="#" className="logo js-sidebar-open">
                        <img loading="lazy" src={Logo} alt="Olympus"/>
                    </a>

                </div>

                <div className="fixed-sidebar-left sidebar--large" id="sidebar-left-1-responsive">
                    <a href="#" className="logo">
                        <div className="img-wrap">
                            <img loading="lazy" src={Logo} alt="Olympus"/>
                        </div>
                        <div className="title-block">
                            <h6 className="logo-title">olympus</h6>
                        </div>
                    </a>

                    <div className="mCustomScrollbar" data-mcs-theme="dark">

                        <div className="control-block">
                            <div className="author-page author vcard inline-items">
                                <div className="author-thumb">
                                    <img alt="author" src="img/author-page.jpg" className="avatar"/>
                                        <span className="icon-status online"/>
                                </div>
                                <a href="02-ProfilePage.html" className="author-name fn">
                                    <div className="author-title">
                                        James Spiegel <svg className="olymp-dropdown-arrow-icon">
                                        <use xlinkHref="#olymp-dropdown-arrow-icon"/>
                                    </svg>
                                    </div>
                                    <span className="author-subtitle">SPACE COWBOY</span>
                                </a>
                            </div>
                        </div>

                        <div className="ui-block-title ui-block-title-small">
                            <h6 className="title">MAIN SECTIONS</h6>
                        </div>

                        <ul className="left-menu">
                            <li>
                                <a href="#" className="js-sidebar-open">
                                    <svg className="olymp-close-icon left-menu-icon">
                                        <use xlinkHref="#olymp-close-icon"/>
                                    </svg>
                                    <span className="left-menu-title">Collapse Menu</span>
                                </a>
                            </li>
                            <li>
                                <a href="mobile-index.html">
                                    <svg className="olymp-newsfeed-icon left-menu-icon" data-toggle="tooltip"
                                         data-placement="right" data-original-title="NEWSFEED">
                                        <use xlinkHref="#olymp-newsfeed-icon"/>
                                    </svg>
                                    <span className="left-menu-title">Newsfeed</span>
                                </a>
                            </li>
                            <li>
                                <a href="Mobile-28-YourAccount-PersonalInformation.html">
                                    <svg className="olymp-star-icon left-menu-icon" data-toggle="tooltip"
                                         data-placement="right" data-original-title="FAV PAGE">
                                        <use xlinkHref="#olymp-star-icon"/>
                                    </svg>
                                    <span className="left-menu-title">Fav Pages Feed</span>
                                </a>
                            </li>
                            <li>
                                <a href="mobile-29-YourAccount-AccountSettings.html">
                                    <svg className="olymp-happy-faces-icon left-menu-icon" data-toggle="tooltip"
                                         data-placement="right" data-original-title="FRIEND GROUPS">
                                        <use xlinkHref="#olymp-happy-faces-icon"/>
                                    </svg>
                                    <span className="left-menu-title">Friend Groups</span>
                                </a>
                            </li>
                            <li>
                                <a href="Mobile-30-YourAccount-ChangePassword.html">
                                    <svg className="olymp-headphones-icon left-menu-icon" data-toggle="tooltip"
                                         data-placement="right" data-original-title="MUSIC&PLAYLISTS">
                                        <use xlinkHref="#olymp-headphones-icon"/>
                                    </svg>
                                    <span className="left-menu-title">Music & Playlists</span>
                                </a>
                            </li>
                            <li>
                                <a href="Mobile-31-YourAccount-HobbiesAndInterests.html">
                                    <svg className="olymp-weather-icon left-menu-icon" data-toggle="tooltip"
                                         data-placement="right" data-original-title="WEATHER APP">
                                        <use xlinkHref="#olymp-weather-icon"/>
                                    </svg>
                                    <span className="left-menu-title">Weather App</span>
                                </a>
                            </li>
                            <li>
                                <a href="Mobile-32-YourAccount-EducationAndEmployement.html">
                                    <svg className="olymp-calendar-icon left-menu-icon" data-toggle="tooltip"
                                         data-placement="right" data-original-title="CALENDAR AND EVENTS">
                                        <use xlinkHref="#olymp-calendar-icon"/>
                                    </svg>
                                    <span className="left-menu-title">Calendar and Events</span>
                                </a>
                            </li>
                            <li>
                                <a href="Mobile-33-YourAccount-Notifications.html">
                                    <svg className="olymp-badge-icon left-menu-icon" data-toggle="tooltip"
                                         data-placement="right" data-original-title="Community Badges">
                                        <use xlinkHref="#olymp-badge-icon"/>
                                    </svg>
                                    <span className="left-menu-title">Community Badges</span>
                                </a>
                            </li>
                            <li>
                                <a href="Mobile-34-YourAccount-ChatMessages.html">
                                    <svg className="olymp-cupcake-icon left-menu-icon" data-toggle="tooltip"
                                         data-placement="right" data-original-title="Friends Birthdays">
                                        <use xlinkHref="#olymp-cupcake-icon"/>
                                    </svg>
                                    <span className="left-menu-title">Friends Birthdays</span>
                                </a>
                            </li>
                            <li>
                                <a href="Mobile-35-YourAccount-FriendsRequests.html">
                                    <svg className="olymp-stats-icon left-menu-icon" data-toggle="tooltip"
                                         data-placement="right" data-original-title="Account Stats">
                                        <use xlinkHref="#olymp-stats-icon"/>
                                    </svg>
                                    <span className="left-menu-title">Account Stats</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <svg className="olymp-manage-widgets-icon left-menu-icon" data-toggle="tooltip"
                                         data-placement="right" data-original-title="Manage Widgets">
                                        <use xlinkHref="#olymp-manage-widgets-icon"/>
                                    </svg>
                                    <span className="left-menu-title">Manage Widgets</span>
                                </a>
                            </li>
                        </ul>

                        <div className="ui-block-title ui-block-title-small">
                            <h6 className="title">YOUR ACCOUNT</h6>
                        </div>

                        <ul className="account-settings">
                            <li>
                                <a href="#">

                                    <svg className="olymp-menu-icon">
                                        <use xlinkHref="#olymp-menu-icon"/>
                                    </svg>

                                    <span>Profile Settings</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <svg className="olymp-star-icon left-menu-icon" data-toggle="tooltip"
                                         data-placement="right" data-original-title="FAV PAGE">
                                        <use xlinkHref="#olymp-star-icon"/>
                                    </svg>

                                    <span>Create Fav Page</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <svg className="olymp-logout-icon">
                                        <use xlinkHref="#olymp-logout-icon"/>
                                    </svg>

                                    <span>Log Out</span>
                                </a>
                            </li>
                        </ul>

                        <div className="ui-block-title ui-block-title-small">
                            <h6 className="title">About Olympus</h6>
                        </div>

                        <ul className="about-olympus">
                            <li>
                                <a href="#">
                                    <span>Terms and Conditions</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>FAQs</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>Careers</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>Contact</span>
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}

export default FixedSiderbarLeftResponsive