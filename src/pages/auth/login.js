import React from 'react'
import Helmet from "react-helmet";
import { useTranslation } from "react-i18next";


import TitlePage from "../../components/layout/TitlePage";
import Metas from "../../components/layout/Metas";
import CssPage from "../../components/layout/CssPage";
import JsPage from "../../components/layout/JsPage";
import HeaderStdLanding from '../../components/landing/HeaderStdLanding'
import Container from "../../components/landing/Container";
import WindowPopupRestorePass from "../../components/landing/WindowPopupRestorePass";
import WindowPopupMainSearch from "../../components/landing/WindowPopupMainSearch";


function LoginPage() {
    const { t } = useTranslation();

    return (
        <div>
            <TitlePage title={t('landing.title')}/>
            <Metas/>
            <CssPage/>
            <JsPage/>
            <Helmet>
                <body className="landing-page" />
            </Helmet>
            <div className="content-bg-wrap"/>
            <HeaderStdLanding/>
            <div className="header-spacer--standard"/>
            <Container/>
            <WindowPopupRestorePass/>
            <WindowPopupMainSearch/>
        </div>
    )
}

export default LoginPage
