import React, {useState, useContext} from "react";
import {useTranslation} from "react-i18next";
import {useHistory} from 'react-router-dom'

import StoreContext from "../Store/Context";

function initialState() {
    return {email: '', password: ''}
}

function login({email, password}) {
    if (email === '' && password === '1234') {
        return {token: '1234'}
    }
    return {'error': 'Usuario ou senha invalido'}
}

function Container () {
    const { t } = useTranslation();

    const [values, setValues] = useState(initialState())
    const { setToken} = useContext(StoreContext)
    const history = useHistory()

    function onChange(event) {
        const {value, name} = event.target
        setValues({
            ...values,
            [name]: value
        })
    }

    function onSubmit(event) {
        event.preventDefault()
        const { token } = login(values)

        if (token) {
            setToken(token)
            return history.push('/')
        }
        setValues(initialState())
    }

    return (
        <div className="container">
            <div className="row display-flex">
                <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="landing-content">
                        <h1>{t('landing.page.text-1')}</h1>
                        <p>{t('landing.page.text-2')}
                        </p>
                    </div>
                </div>

                <div className="col col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">

                    <div className="registration-login-form">

                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#profile" role="tab">
                                    <svg className="olymp-register-icon">
                                        <use xlinkHref="#olymp-register-icon"/>
                                    </svg>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#home" role="tab">
                                    <svg className="olymp-login-icon">
                                        <use xlinkHref="#olymp-login-icon"/>
                                    </svg>
                                </a>
                            </li>

                        </ul>

                        <div className="tab-content">
                            <div className="tab-pane active" id="profile" role="tabpanel">
                                <div className="title h6">{t('landing.profile.title')}</div>
                                <form className="content" onSubmit={onSubmit}>
                                    <div className="row">
                                        <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                            <div className="form-group label-floating">
                                                <label className="control-label">{t('landing.profile.Your_Email')}</label>
                                                <input className="form-control" placeholder="" type="email"
                                                       onChange={onChange} value={values.email}/>
                                            </div>
                                            <div className="form-group label-floating">
                                                <label className="control-label">{t('landing.profile.Your_Password')}</label>
                                                <input className="form-control" placeholder="" type="password"
                                                       onChange={onChange} value={values.password}/>
                                            </div>

                                            <div className="remember">

                                                <div className="checkbox">
                                                    <label>
                                                        <input name="optionsCheckboxes" type="checkbox"/>
                                                        {t('landing.profile.Remember_Me')}
                                                    </label>
                                                </div>
                                                <a href="#" className="forgot" data-toggle="modal"
                                                   data-target="#restore-password">{t('landing.profile.Forgot_Password')}</a>
                                            </div>

                                            <a href="#" className="btn btn-lg btn-primary full-width">{t('landing.profile.Login')}</a>



                                            <p>{t('landing.profile.account')}? <a href="#">{t('landing.profile.register')}!</a> {t('landing.profile.enjoing')}!</p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="tab-pane" id="home" role="tabpanel">
                                <div className="title h6">{t('landing.home.title')}</div>
                                <form className="content">
                                    <div className="row">
                                        <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                            <div className="form-group label-floating">
                                                <label className="control-label">First Name</label>
                                                <input className="form-control" placeholder="" type="text"/>
                                            </div>
                                        </div>
                                        <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                            <div className="form-group label-floating">
                                                <label className="control-label">Last Name</label>
                                                <input className="form-control" placeholder="" type="text"/>
                                            </div>
                                        </div>
                                        <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                            <div className="form-group label-floating">
                                                <label className="control-label">Your Email</label>
                                                <input className="form-control" placeholder="" type="email"/>
                                            </div>
                                            <div className="form-group label-floating">
                                                <label className="control-label">Your Password</label>
                                                <input className="form-control" placeholder="" type="password"/>
                                            </div>

                                            <div className="form-group date-time-picker label-floating">
                                                <label className="control-label">Your Birthday</label>
                                                <input name="datetimepicker" value="10/24/1984"/>
                                                <span className="input-group-addon">
														<svg className="olymp-calendar-icon">
                                                            <use xlinkHref="#olymp-calendar-icon"/>
														</svg>
													</span>
                                            </div>

                                            <div className="form-group label-floating is-select">
                                                <label className="control-label">Your Gender</label>
                                                <select className="selectpicker form-control">
                                                    <option value="MA">Male</option>
                                                    <option value="FE">Female</option>
                                                </select>
                                            </div>

                                            <div className="remember">
                                                <div className="checkbox">
                                                    <label>
                                                        <input name="optionsCheckboxes" type="checkbox"/>
                                                            I accept the <a href="#">Terms and Conditions</a> of the website
                                                    </label>
                                                </div>
                                            </div>

                                            <a href="#" className="btn btn-purple btn-lg full-width">Complete
                                                Registration!</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Container
