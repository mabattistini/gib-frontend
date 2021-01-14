import React from 'react';
import Helmet from 'react-helmet'

// Layout
import TitlePage from "../components/layout/TitlePage";
import Metas from "../components/layout/Metas";
import CssPage from "../components/layout/CssPage";


// componentes da pagina
import FixedSidebarLeft from "../components/FixedSidebarLeft";
import FixedSidebarLeftResponsive from "../components/FixedSidebarLeftResponsive";
import FixedSidebarRight from "../components/FixedSidebarRight";
import FixedSidebarRightResponsive from "../components/FixedSidebarRightResponsive";
import HeaderBP from "../components/HeaderBP";
import HeaderBPResponsive from "../components/HeaderBPResponsive";
import HeaderSpace from "../components/HeaderSpace";
import Content from "../components/profile/Content";
import MainContent from "../components/profile/MainContent";
import JsPage from "../components/layout/JsPage";


function App() {
    return (
        <div className="App">
            <TitlePage title="Personal Page"/>
            <Metas/>
            <CssPage/>
            <JsPage/>
            <Helmet>
                <body className="teste page-has-left-panels page-has-right-panels" />
            </Helmet>


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
