import React from 'react';
import Helmet from 'react-helmet'

import FixedSidebarLeft from "../components/FixedSidebarLeft";
import FixedSidebarLeftResponsive from "../components/FixedSidebarLeftResponsive";
import FixedSidebarRight from "../components/FixedSidebarRight";
import FixedSidebarRightResponsive from "../components/FixedSidebarRightResponsive";
import HeaderBP from "../components/HeaderBP";
import HeaderBPResponsive from "../components/HeaderBPResponsive";
import HeaderSpace from "../components/HeaderSpace";
import Content from "../components/profile/Content";
import MainContent from "../components/profile/MainContent";



function App() {
    return (
        <div className="App">
            <Helmet title="teste" />
           <FixedSidebarLeft/>
           <FixedSidebarLeftResponsive/>
           <FixedSidebarRight/>
           <FixedSidebarRightResponsive/>
           <HeaderBP/>
           <HeaderBPResponsive/>
           <HeaderSpace/>
           <Content/>
           <MainContent/>
        </div>
    )

}

export default App
